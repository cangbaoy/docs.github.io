"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3930],{105:(t,e)=>{e.A=(t,e)=>{const o=t.__vccOpts||t;for(const[t,a]of e)o[t]=a;return o}},5770:(t,e,o)=>{o.r(e),o.d(e,{comp:()=>p,data:()=>i});var a=o(6904);const n=[(0,a.Lk)("h1",{id:"自己如何实现消息队列",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#自己如何实现消息队列"},[(0,a.Lk)("span",null,"自己如何实现消息队列")])],-1),(0,a.Lk)("p",null,"大体上的设计是由一条线程 1 执行从等待列表中获取任务插入任务队列再由线程池中的线程从任务队列中取出任务去执行.",-1),(0,a.Lk)("p",null,"添加一条线程 1 主要是防止在执行耗时的任务时阻塞主线程.当执行耗时任务时,添加的任务的操作快于取出任务的操作,",-1),(0,a.Lk)("p",null,"当任务队列长度达到最大值时,线程 1 将被阻塞,等待线程 2,3... 从任务队列取出任务执行。",-1)],r={},p=(0,o(105).A)(r,[["render",function(t,e){return(0,a.uX)(),(0,a.CE)("div",null,n)}]]),i=JSON.parse('{"path":"/exambook/mq/Java-MQ5.html","title":"自己如何实现消息队列","lang":"zh-CN","frontmatter":{"description":"自己如何实现消息队列 大体上的设计是由一条线程 1 执行从等待列表中获取任务插入任务队列再由线程池中的线程从任务队列中取出任务去执行. 添加一条线程 1 主要是防止在执行耗时的任务时阻塞主线程.当执行耗时任务时,添加的任务的操作快于取出任务的操作, 当任务队列长度达到最大值时,线程 1 将被阻塞,等待线程 2,3... 从任务队列取出任务执行。","head":[["meta",{"property":"og:url","content":"https://www.sansei.top/exambook/mq/Java-MQ5.html"}],["meta",{"property":"og:site_name","content":"川上富江"}],["meta",{"property":"og:title","content":"自己如何实现消息队列"}],["meta",{"property":"og:description","content":"自己如何实现消息队列 大体上的设计是由一条线程 1 执行从等待列表中获取任务插入任务队列再由线程池中的线程从任务队列中取出任务去执行. 添加一条线程 1 主要是防止在执行耗时的任务时阻塞主线程.当执行耗时任务时,添加的任务的操作快于取出任务的操作, 当任务队列长度达到最大值时,线程 1 将被阻塞,等待线程 2,3... 从任务队列取出任务执行。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-31T15:43:24.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-31T15:43:24.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"自己如何实现消息队列\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-31T15:43:24.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1725119004000,"updatedTime":1725119004000,"contributors":[{"name":"him","email":"yph0228@163.com","commits":1}]},"readingTime":{"minutes":0.51,"words":153},"filePathRelative":"exambook/mq/Java-MQ5.md","localizedDate":"2024年8月31日","autoDesc":true}')}}]);