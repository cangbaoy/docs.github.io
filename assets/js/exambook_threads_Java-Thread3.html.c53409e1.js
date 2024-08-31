"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9623],{105:(t,o)=>{o.A=(t,o)=>{const e=t.__vccOpts||t;for(const[t,n]of o)e[t]=n;return e}},7819:(t,o,e)=>{e.r(o),e.d(o,{comp:()=>d,data:()=>r});var n=e(6904);const a=[(0,n.Fv)('<h1 id="说说-countdownlatch-原理" tabindex="-1"><a class="header-anchor" href="#说说-countdownlatch-原理"><span>说说 CountDownLatch 原理</span></a></h1><p><code>CountDownLatch</code> 内部维护了一个整数 <code>n</code>，n（要大于等于0）在 当前线程 初始化 <code>CountDownLatch</code> 方法指定。当前线程调用 <code>CountDownLatch</code> 的 <code>await()</code> 方法阻塞当前线程，等待其他调用 <code>CountDownLatch</code> 对象的 <code>CountDown()</code> 方法的线程执行完毕。 其他线程调用该 <code>CountDownLatch</code> 的 <code>CountDown()</code> 方法，该方法会把 n-1，直到所有线程执行完成，<code>n </code>等于<code> 0</code>，当前线程 就恢复执行。</p>',2)],c={},d=(0,e(105).A)(c,[["render",function(t,o){return(0,n.uX)(),(0,n.CE)("div",null,a)}]]),r=JSON.parse('{"path":"/exambook/threads/Java-Thread3.html","title":"说说 CountDownLatch 原理","lang":"zh-CN","frontmatter":{"description":"说说 CountDownLatch 原理 CountDownLatch 内部维护了一个整数 n，n（要大于等于0）在 当前线程 初始化 CountDownLatch 方法指定。当前线程调用 CountDownLatch 的 await() 方法阻塞当前线程，等待其他调用 CountDownLatch 对象的 CountDown() 方法的线程执行完毕。...","head":[["meta",{"property":"og:url","content":"https://www.sansei.top/exambook/threads/Java-Thread3.html"}],["meta",{"property":"og:site_name","content":"川上富江"}],["meta",{"property":"og:title","content":"说说 CountDownLatch 原理"}],["meta",{"property":"og:description","content":"说说 CountDownLatch 原理 CountDownLatch 内部维护了一个整数 n，n（要大于等于0）在 当前线程 初始化 CountDownLatch 方法指定。当前线程调用 CountDownLatch 的 await() 方法阻塞当前线程，等待其他调用 CountDownLatch 对象的 CountDown() 方法的线程执行完毕。..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-31T15:43:24.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-31T15:43:24.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"说说 CountDownLatch 原理\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-31T15:43:24.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1725119004000,"updatedTime":1725119004000,"contributors":[{"name":"him","email":"yph0228@163.com","commits":1}]},"readingTime":{"minutes":0.38,"words":115},"filePathRelative":"exambook/threads/Java-Thread3.md","localizedDate":"2024年8月31日","autoDesc":true}')}}]);