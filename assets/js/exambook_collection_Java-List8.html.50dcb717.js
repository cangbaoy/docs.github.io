"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4889],{105:(t,e)=>{e.A=(t,e)=>{const a=t.__vccOpts||t;for(const[t,o]of e)a[t]=o;return a}},7469:(t,e,a)=>{a.r(e),a.d(e,{comp:()=>h,data:()=>n});var o=a(6904);const s=[(0,o.Lk)("h1",{id:"hashmap-的工作原理及代码实现",tabindex:"-1"},[(0,o.Lk)("a",{class:"header-anchor",href:"#hashmap-的工作原理及代码实现"},[(0,o.Lk)("span",null,"HashMap 的工作原理及代码实现")])],-1),(0,o.Lk)("p",null,"HashMap 基于 hashing 原理，我们通过 put() 和 get() 方法储存和获取对象。当我们将键值对传递给 put() 方法时，它调用键对象的 hashCode() 方法来计算 hashcode，让后找到 bucket 位置来储存值对象。当获取对象时，通过键对象的 equals() 方法找到正确的键值对，然后返回值对象。HashMap 使用链表来解决碰撞问题，当发生碰撞了，对象将会储存在链表的下一个节点中。 HashMap 在每个链表节点中储存键值对对象。",-1)],p={},h=(0,a(105).A)(p,[["render",function(t,e){return(0,o.uX)(),(0,o.CE)("div",null,s)}]]),n=JSON.parse('{"path":"/exambook/collection/Java-List8.html","title":"HashMap 的工作原理及代码实现","lang":"zh-CN","frontmatter":{"description":"HashMap 的工作原理及代码实现 HashMap 基于 hashing 原理，我们通过 put() 和 get() 方法储存和获取对象。当我们将键值对传递给 put() 方法时，它调用键对象的 hashCode() 方法来计算 hashcode，让后找到 bucket 位置来储存值对象。当获取对象时，通过键对象的 equals() 方法找到正确的键...","head":[["meta",{"property":"og:url","content":"https://www.sansei.top/exambook/collection/Java-List8.html"}],["meta",{"property":"og:site_name","content":"川上富江"}],["meta",{"property":"og:title","content":"HashMap 的工作原理及代码实现"}],["meta",{"property":"og:description","content":"HashMap 的工作原理及代码实现 HashMap 基于 hashing 原理，我们通过 put() 和 get() 方法储存和获取对象。当我们将键值对传递给 put() 方法时，它调用键对象的 hashCode() 方法来计算 hashcode，让后找到 bucket 位置来储存值对象。当获取对象时，通过键对象的 equals() 方法找到正确的键..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-30T21:06:17.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-30T21:06:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"HashMap 的工作原理及代码实现\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-30T21:06:17.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1725051977000,"updatedTime":1725051977000,"contributors":[{"name":"him","email":"yph0228@163.com","commits":1}]},"readingTime":{"minutes":0.51,"words":154},"filePathRelative":"exambook/collection/Java-List8.md","localizedDate":"2024年8月30日","autoDesc":true}')}}]);