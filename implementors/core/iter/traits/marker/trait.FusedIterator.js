(function() {var implementors = {};
implementors["hashbrown"] = [{"text":"impl&lt;T&gt; FusedIterator for RawIter&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; FusedIterator for RawIntoIter&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T, '_&gt; FusedIterator for RawDrain&lt;'_, T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;K, V, F, '_&gt; FusedIterator for DrainFilter&lt;'_, K, V, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: FnMut(&amp;K, &amp;mut V) -&gt; bool,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;K, V, '_&gt; FusedIterator for Iter&lt;'_, K, V&gt;","synthetic":false,"types":[]},{"text":"impl&lt;K, V, '_&gt; FusedIterator for IterMut&lt;'_, K, V&gt;","synthetic":false,"types":[]},{"text":"impl&lt;K, V&gt; FusedIterator for IntoIter&lt;K, V&gt;","synthetic":false,"types":[]},{"text":"impl&lt;K, V, '_&gt; FusedIterator for Keys&lt;'_, K, V&gt;","synthetic":false,"types":[]},{"text":"impl&lt;K, V, '_&gt; FusedIterator for Values&lt;'_, K, V&gt;","synthetic":false,"types":[]},{"text":"impl&lt;K, V, '_&gt; FusedIterator for ValuesMut&lt;'_, K, V&gt;","synthetic":false,"types":[]},{"text":"impl&lt;K, V, '_&gt; FusedIterator for Drain&lt;'_, K, V&gt;","synthetic":false,"types":[]},{"text":"impl&lt;K, '_&gt; FusedIterator for Iter&lt;'_, K&gt;","synthetic":false,"types":[]},{"text":"impl&lt;K&gt; FusedIterator for IntoIter&lt;K&gt;","synthetic":false,"types":[]},{"text":"impl&lt;K, '_&gt; FusedIterator for Drain&lt;'_, K&gt;","synthetic":false,"types":[]},{"text":"impl&lt;K, F, '_&gt; FusedIterator for DrainFilter&lt;'_, K, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: FnMut(&amp;K) -&gt; bool,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T, S, '_&gt; FusedIterator for Intersection&lt;'_, T, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Eq + Hash,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: BuildHasher,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T, S, '_&gt; FusedIterator for Difference&lt;'_, T, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Eq + Hash,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: BuildHasher,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T, S, '_&gt; FusedIterator for SymmetricDifference&lt;'_, T, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Eq + Hash,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: BuildHasher,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T, S, '_&gt; FusedIterator for Union&lt;'_, T, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Eq + Hash,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: BuildHasher,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["http"] = [{"text":"impl&lt;'a, T&gt; FusedIterator for Iter&lt;'a, T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a, T&gt; FusedIterator for IterMut&lt;'a, T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a, T&gt; FusedIterator for Keys&lt;'a, T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a, T&gt; FusedIterator for Values&lt;'a, T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a, T&gt; FusedIterator for ValuesMut&lt;'a, T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a, T&gt; FusedIterator for Drain&lt;'a, T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a, T&gt; FusedIterator for ValueIter&lt;'a, T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a, T&gt; FusedIterator for ValueIterMut&lt;'a, T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; FusedIterator for IntoIter&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a, T&gt; FusedIterator for ValueDrain&lt;'a, T&gt;","synthetic":false,"types":[]}];
implementors["ipnet"] = [{"text":"impl FusedIterator for IpAddrRange","synthetic":false,"types":[]},{"text":"impl FusedIterator for Ipv4AddrRange","synthetic":false,"types":[]},{"text":"impl FusedIterator for Ipv6AddrRange","synthetic":false,"types":[]},{"text":"impl FusedIterator for IpSubnets","synthetic":false,"types":[]},{"text":"impl FusedIterator for Ipv4Subnets","synthetic":false,"types":[]},{"text":"impl FusedIterator for Ipv6Subnets","synthetic":false,"types":[]}];
implementors["mime_guess"] = [{"text":"impl FusedIterator for Iter","synthetic":false,"types":[]},{"text":"impl FusedIterator for IterRaw","synthetic":false,"types":[]}];
implementors["osproto"] = [{"text":"impl FusedIterator for IntoStableIter","synthetic":false,"types":[]}];
implementors["serde_json"] = [{"text":"impl&lt;'de, R, T&gt; FusedIterator for StreamDeserializer&lt;'de, R, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Read&lt;'de&gt; + Fused,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Deserialize&lt;'de&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; FusedIterator for Iter&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; FusedIterator for IterMut&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl FusedIterator for IntoIter","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; FusedIterator for Keys&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; FusedIterator for Values&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; FusedIterator for ValuesMut&lt;'a&gt;","synthetic":false,"types":[]}];
implementors["tinyvec"] = [{"text":"impl&lt;'p, A:&nbsp;Array&gt; FusedIterator for ArrayVecDrain&lt;'p, A&gt;","synthetic":false,"types":[]},{"text":"impl&lt;A:&nbsp;Array&gt; FusedIterator for ArrayVecIterator&lt;A&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'p, A:&nbsp;Array&gt; FusedIterator for TinyVecDrain&lt;'p, A&gt;","synthetic":false,"types":[]},{"text":"impl&lt;A:&nbsp;Array&gt; FusedIterator for TinyVecIterator&lt;A&gt;","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()