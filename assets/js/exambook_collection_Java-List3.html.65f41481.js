"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7292],{105:(t,e)=>{e.A=(t,e)=>{const i=t.__vccOpts||t;for(const[t,r]of e)i[t]=r;return i}},9452:(t,e,i)=>{i.r(e),i.d(e,{comp:()=>s,data:()=>o});var r=i(6904);const a=[(0,r.Lk)("h1",{id:"arraylist-与-linkedlist-区别",tabindex:"-1"},[(0,r.Lk)("a",{class:"header-anchor",href:"#arraylist-与-linkedlist-区别"},[(0,r.Lk)("span",null,"ArrayList 与 LinkedList 区别")])],-1),(0,r.Lk)("ul",null,[(0,r.Lk)("li",null,"因为 Array 是基于索引(index)的数据结构，它使用索引在数组中搜索和读取数据是很快的。Array 获取数据的时间复杂度是 O(1),但是要删除数据却是开销很大的，因为这需要重排数组中的所有数据。"),(0,r.Lk)("li",null,"相对于 ArrayList，LinkedList 插入是更快的。因为 LinkedList 不像 ArrayList 一样，不需要改变数组的大小，也不需要在数组装满的时候要将所有的数据重新装入一个新的数组，这是 ArrayList 最坏的一种情况，时间复杂度是 O(n)，而 LinkedList 中插入或删除的时间复杂度仅为 O(1)。ArrayList 在插入数据时还需要更新索引（除了插入数组的尾部）。"),(0,r.Lk)("li",null,"类似于插入数据，删除数据时，LinkedList 也优于 ArrayList。"),(0,r.Lk)("li",null,"LinkedList 需要更多的内存，因为 ArrayList 的每个索引的位置是实际的数据，而 LinkedList 中的每个节点中存储的是实际的数据和前后节点的位置。"),(0,r.Lk)("li",null,"你的应用不会随机访问数据。因为如果你需要 LinkedList 中的第 n 个元素的时候，你需要从第一个元素顺序数到第 n 个数据，然后读取数据。"),(0,r.Lk)("li",null,"你的应用更多的插入和删除元素，更少的读取数据。因为插入和删除元素不涉及重排数据，所以它要比 ArrayList 要快。")],-1)],n={},s=(0,i(105).A)(n,[["render",function(t,e){return(0,r.uX)(),(0,r.CE)("div",null,a)}]]),o=JSON.parse('{"path":"/exambook/collection/Java-List3.html","title":"ArrayList 与 LinkedList 区别","lang":"zh-CN","frontmatter":{"description":"ArrayList 与 LinkedList 区别 因为 Array 是基于索引(index)的数据结构，它使用索引在数组中搜索和读取数据是很快的。Array 获取数据的时间复杂度是 O(1),但是要删除数据却是开销很大的，因为这需要重排数组中的所有数据。 相对于 ArrayList，LinkedList 插入是更快的。因为 LinkedList 不像...","head":[["meta",{"property":"og:url","content":"https://www.sansei.top/exambook/collection/Java-List3.html"}],["meta",{"property":"og:site_name","content":"川上富江"}],["meta",{"property":"og:title","content":"ArrayList 与 LinkedList 区别"}],["meta",{"property":"og:description","content":"ArrayList 与 LinkedList 区别 因为 Array 是基于索引(index)的数据结构，它使用索引在数组中搜索和读取数据是很快的。Array 获取数据的时间复杂度是 O(1),但是要删除数据却是开销很大的，因为这需要重排数组中的所有数据。 相对于 ArrayList，LinkedList 插入是更快的。因为 LinkedList 不像..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-30T21:06:17.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-30T21:06:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ArrayList 与 LinkedList 区别\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-30T21:06:17.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1725051977000,"updatedTime":1725051977000,"contributors":[{"name":"him","email":"yph0228@163.com","commits":1}]},"readingTime":{"minutes":1.22,"words":366},"filePathRelative":"exambook/collection/Java-List3.md","localizedDate":"2024年8月30日","autoDesc":true}')}}]);