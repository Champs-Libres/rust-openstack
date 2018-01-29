// Copyright 2017 Dmitry Tantsur <divius.inside@gmail.com>
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

//! Various utilities.

#![allow(dead_code)] // various things are unused with --no-default-features

use std::cell::{Ref, RefCell};
use std::collections::HashMap;
use std::fmt::Display;
use std::hash::Hash;
use std::str::FromStr;

use serde::{Deserialize, Deserializer};
use serde::de::Error as DeserError;

use super::Result;


/// Type of query parameters.
#[derive(Clone, Debug)]
pub struct Query(pub Vec<(String, String)>);

/// Cached clone-able value.
#[derive(Debug, Clone)]
pub struct ValueCache<T: Clone>(RefCell<Option<T>>);

/// Cached map of values.
#[derive(Debug, Clone)]
pub struct MapCache<K: Hash + Eq, V: Clone>(RefCell<HashMap<K, V>>);


impl Query {
    /// Empty query.
    pub fn new() -> Query {
        Query(Vec::new())
    }

    /// Add an item to the query.
    pub fn push<K, V>(&mut self, param: K, value: V)
            where K: Into<String>, V: ToString {
        self.0.push((param.into(), value.to_string()))
    }

    /// Add a strng item to the query.
    pub fn push_str<K, V>(&mut self, param: K, value: V)
            where K: Into<String>, V: Into<String> {
        self.0.push((param.into(), value.into()))
    }
}

impl<T: Clone> ValueCache<T> {
    /// Create a cache.
    pub fn new(value: Option<T>) -> ValueCache<T> {
        ValueCache(RefCell::new(value))
    }

    /// Ensure the value is cached.
    pub fn ensure_value<F>(&self, default: F) -> Result<()>
            where F: FnOnce() -> Result<T> {
        if self.0.borrow().is_some() {
            return Ok(());
        };

        *self.0.borrow_mut() = Some(default()?);
        Ok(())
    }

    /// Get the cached value.
    #[inline]
    pub fn get(&self) -> Option<T> {
        self.0.borrow().clone()
    }
}

impl<K: Hash + Eq, V: Clone> MapCache<K, V> {
    /// Create a cache.
    pub fn new() -> MapCache<K, V> {
        MapCache(RefCell::new(HashMap::new()))
    }

    /// Ensure the value is present in the cache.
    pub fn ensure_value<F>(&self, key: K, default: F) -> Result<()>
            where F: FnOnce(&K) -> Result<V> {
        if self.0.borrow().contains_key(&key) {
            return Ok(());
        }

        let new = default(&key)?;
        let _ = self.0.borrow_mut().insert(key, new);
        Ok(())
    }

    /// Get a reference to the value.
    ///
    /// Borrows the inner RefCell.
    pub fn get_ref(&self, key: &K) -> Option<Ref<V>> {
        let map = self.0.borrow();
        if map.contains_key(key) {
            Some(Ref::map(map, |m| m.get(&key).unwrap()))
        } else {
            None
        }
    }
}

/// Deserialize value where empty string equals None.
pub fn empty_as_none<'de, D, T>(des: D) -> ::std::result::Result<Option<T>, D::Error>
        where D: Deserializer<'de>, T: FromStr, T::Err: Display {
    let s = String::deserialize(des)?;
    if s.is_empty() {
        Ok(None)
    } else {
        T::from_str(&s).map(Some).map_err(DeserError::custom)
    }
}


pub mod url {
    //! Handy primitives for working with URLs.

    use reqwest::Url;

    #[inline]
    #[allow(unused_results)]
    pub fn is_root(url: &Url) -> bool {
        url.path_segments().unwrap().filter(|x| !x.is_empty()).next().is_none()
    }

    #[inline]
    #[allow(unused_results)]
    pub fn join(mut url: Url, other: &str) -> Url {
        url.path_segments_mut().unwrap().pop_if_empty().push(other);
        url
    }

    #[inline]
    #[allow(unused_results)]
    pub fn extend<I>(mut url: Url, segments: I) -> Url
            where I: IntoIterator, I::Item: AsRef<str> {
        url.path_segments_mut().unwrap().pop_if_empty().extend(segments);
        url
    }

    #[inline]
    #[allow(unused_results)]
    pub fn pop(mut url: Url, keep_slash: bool) -> Url {
        url.path_segments_mut().unwrap().pop_if_empty().pop();
        if keep_slash {
            url.path_segments_mut().unwrap().pop_if_empty().push("");
        }
        url
    }
}


#[cfg(test)]
pub mod test {
    //! Common primitives for testing.

    use reqwest::{IntoUrl, Url};
    use reqwest::header::Headers;

    use super::super::{Error, Result, ApiVersion};
    use super::super::auth::{AuthMethod, NoAuth};
    use super::super::service::{ServiceInfo, ServiceType};
    use super::super::session::Session;

    /// Create a session with fake authentication.
    pub fn new_session<U: IntoUrl>(endpoint: U) -> Session {
        let auth = NoAuth::new(endpoint).expect("Invalid URL in tests");
        Session::new(auth)
    }

    /// Fake service type.
    pub struct FakeServiceType;

    pub const URL: &'static str = "https://127.0.0.1:5000/";

    impl ServiceType for FakeServiceType {
        fn catalog_type() -> &'static str { "fake" }

        fn service_info(endpoint: Url, _auth: &AuthMethod) -> Result<ServiceInfo> {
            if endpoint.port() == Some(5000) {
                Ok(ServiceInfo {
                    root_url: Url::parse(URL).unwrap(),
                    current_version: Some(ApiVersion(1, 42)),
                    minimum_version: Some(ApiVersion(1, 1)),
                })
            } else {
                Err(Error::EndpointNotFound(String::new()))
            }
        }

        fn api_version_headers(version: ApiVersion) -> Option<Headers> {
            if version >= ApiVersion(1, 1) && version <= ApiVersion(1, 42) {
                Some(Headers::new())
            } else {
                None
            }
        }
    }
}
