(function() {var type_impls = {
"numpy":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Element-for-f64\" class=\"impl\"><a class=\"src rightside\" href=\"src/numpy/dtype.rs.html#851\">source</a><a href=\"#impl-Element-for-f64\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"numpy/trait.Element.html\" title=\"trait numpy::Element\">Element</a> for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.f64.html\">f64</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedconstant.IS_COPY\" class=\"associatedconstant trait-impl\"><a class=\"src rightside\" href=\"src/numpy/dtype.rs.html#851\">source</a><a href=\"#associatedconstant.IS_COPY\" class=\"anchor\">§</a><h4 class=\"code-header\">const <a href=\"numpy/trait.Element.html#associatedconstant.IS_COPY\" class=\"constant\">IS_COPY</a>: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.bool.html\">bool</a> = true</h4></section></summary><div class='docblock'>Flag that indicates whether this type is trivially copyable. <a href=\"numpy/trait.Element.html#associatedconstant.IS_COPY\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_dtype_bound\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/numpy/dtype.rs.html#851\">source</a><a href=\"#method.get_dtype_bound\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"numpy/trait.Element.html#tymethod.get_dtype_bound\" class=\"fn\">get_dtype_bound</a>(py: Python&lt;'_&gt;) -&gt; Bound&lt;'_, <a class=\"struct\" href=\"numpy/struct.PyArrayDescr.html\" title=\"struct numpy::PyArrayDescr\">PyArrayDescr</a>&gt;</h4></section></summary><div class='docblock'>Returns the associated type descriptor (“dtype”) for the given element type.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_ref\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/numpy/dtype.rs.html#851\">source</a><a href=\"#method.clone_ref\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"numpy/trait.Element.html#tymethod.clone_ref\" class=\"fn\">clone_ref</a>(&amp;self, _py: Python&lt;'_&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.f64.html\">f64</a></h4></section></summary><div class='docblock'>Create a clone of the value while the GIL is guaranteed to be held.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.vec_from_slice\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/numpy/dtype.rs.html#851\">source</a><a href=\"#method.vec_from_slice\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"numpy/trait.Element.html#method.vec_from_slice\" class=\"fn\">vec_from_slice</a>(_py: Python&lt;'_&gt;, slc: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.f64.html\">f64</a>]) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.f64.html\">f64</a>&gt;</h4></section></summary><div class='docblock'>Create an owned copy of the slice while the GIL is guaranteed to be held. <a href=\"numpy/trait.Element.html#method.vec_from_slice\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.array_from_view\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/numpy/dtype.rs.html#851\">source</a><a href=\"#method.array_from_view\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"numpy/trait.Element.html#method.array_from_view\" class=\"fn\">array_from_view</a>&lt;D&gt;(\n    _py: Python&lt;'_&gt;,\n    view: <a class=\"type\" href=\"https://docs.rs/ndarray/0.15/ndarray/type.ArrayView.html\" title=\"type ndarray::ArrayView\">ArrayView</a>&lt;'_, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.f64.html\">f64</a>, D&gt;,\n) -&gt; <a class=\"type\" href=\"https://docs.rs/ndarray/0.15/ndarray/type.Array.html\" title=\"type ndarray::Array\">Array</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.f64.html\">f64</a>, D&gt;<div class=\"where\">where\n    D: <a class=\"trait\" href=\"https://docs.rs/ndarray/0.15/ndarray/dimension/dimension_trait/trait.Dimension.html\" title=\"trait ndarray::dimension::dimension_trait::Dimension\">Dimension</a>,</div></h4></section></summary><div class='docblock'>Create an owned copy of the array while the GIL is guaranteed to be held. <a href=\"numpy/trait.Element.html#method.array_from_view\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_dtype\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/numpy/dtype.rs.html#716-718\">source</a><a href=\"#method.get_dtype\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"numpy/trait.Element.html#method.get_dtype\" class=\"fn\">get_dtype</a>&lt;'py&gt;(py: Python&lt;'py&gt;) -&gt; &amp;'py <a class=\"struct\" href=\"numpy/struct.PyArrayDescr.html\" title=\"struct numpy::PyArrayDescr\">PyArrayDescr</a></h4></section></summary><span class=\"item-info\"><div class=\"stab deprecated\"><span class=\"emoji\">👎</span><span>Deprecated since 0.21.0: This will be replaced by <code>get_dtype_bound</code> in the future.</span></div></span><div class='docblock'>Returns the associated type descriptor (“dtype”) for the given element type.</div></details></div></details>","Element","numpy::npyffi::types::npy_longdouble","numpy::npyffi::types::npy_double","numpy::npyffi::types::npy_float64"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()