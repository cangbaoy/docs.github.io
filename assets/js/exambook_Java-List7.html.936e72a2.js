"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5925],{105:(a,e)=>{e.A=(a,e)=>{const t=a.__vccOpts||a;for(const[a,n]of e)t[a]=n;return t}},6331:(a,e,t)=>{t.r(e),t.d(e,{comp:()=>s,data:()=>p});var n=t(6904);const o=[(0,n.Lk)("h1",{id:"hashmap-和-concurrenthashmap-的区别",tabindex:"-1"},[(0,n.Lk)("a",{class:"header-anchor",href:"#hashmap-和-concurrenthashmap-的区别"},[(0,n.Lk)("span",null,"HashMap 和 ConcurrentHashMap 的区别")])],-1),(0,n.Lk)("ul",null,[(0,n.Lk)("li",null,"放入 HashMap 的元素是 key-value 对。"),(0,n.Lk)("li",null,"底层说白了就是散列结构。"),(0,n.Lk)("li",null,"要将元素放入到 HashMap 中，那么 key 的类型必须要实现 hashcode 方法，默认这个方法是根据对象的地址来计算的，接着还必须覆盖对象的 equals() 方法。"),(0,n.Lk)("li",null,"ConcurrentHashMap 对整个桶数组进行了分段，而 HashMap 则没有"),(0,n.Lk)("li",null,"ConcurrentHashMap 在每一个分段上都用锁进行保护，从而让锁的粒度更精细一些，并发性能更好，而 HashMap 没有锁机制，不是线程安全的")],-1)],r={},s=(0,t(105).A)(r,[["render",function(a,e){return(0,n.uX)(),(0,n.CE)("div",null,o)}]]),p=JSON.parse('{"path":"/exambook/Java-List7.html","title":"HashMap 和 ConcurrentHashMap 的区别","lang":"zh-CN","frontmatter":{"description":"HashMap 和 ConcurrentHashMap 的区别 放入 HashMap 的元素是 key-value 对。 底层说白了就是散列结构。 要将元素放入到 HashMap 中，那么 key 的类型必须要实现 hashcode 方法，默认这个方法是根据对象的地址来计算的，接着还必须覆盖对象的 equals() 方法。 ConcurrentHash...","head":[["meta",{"property":"og:url","content":"https://www.sansei.top/exambook/Java-List7.html"}],["meta",{"property":"og:site_name","content":"川上富江"}],["meta",{"property":"og:title","content":"HashMap 和 ConcurrentHashMap 的区别"}],["meta",{"property":"og:description","content":"HashMap 和 ConcurrentHashMap 的区别 放入 HashMap 的元素是 key-value 对。 底层说白了就是散列结构。 要将元素放入到 HashMap 中，那么 key 的类型必须要实现 hashcode 方法，默认这个方法是根据对象的地址来计算的，接着还必须覆盖对象的 equals() 方法。 ConcurrentHash..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-30T14:18:24.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-30T14:18:24.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"HashMap 和 ConcurrentHashMap 的区别\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-30T14:18:24.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1725027504000,"updatedTime":1725027504000,"contributors":[{"name":"him","email":"yph0228@163.com","commits":1}]},"readingTime":{"minutes":0.48,"words":145},"filePathRelative":"exambook/Java-List7.md","localizedDate":"2024年8月30日","autoDesc":true}')}}]);