import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as r,c as a,e as o}from"./app-BsUZOuh7.js";const n={};function i(s,e){return r(),a("div",null,e[0]||(e[0]=[o('<h1 id="性能指标有哪些" tabindex="-1"><a class="header-anchor" href="#性能指标有哪些"><span>性能指标有哪些</span></a></h1><h2 id="响应时间-response-time" tabindex="-1"><a class="header-anchor" href="#响应时间-response-time"><span>响应时间（Response time）</span></a></h2><p>响应时间就是用户感受软件系统为其服务所耗费的时间，对于网站系统来说，响应时间就是从点击了一个页面计时开始，到这个页面完全在浏览器里展现计时结束的这一段时间间隔，看起来很简单，但其实在这段响应时间内，软件系统在幕后经过了一系列的处理工作，贯穿了整个系统节点。根据“管辖区域”不同，响应时间可以细分为：</p><ol><li>服务器端响应时间，这个时间指的是服务器完成交易请求执行的时间，不包括客户端到服务器端的反应（请求和耗费在网络上的通信时间），这个服务器端响应时间可以度量服务器的处理能力。</li><li>网络响应时间，这是网络硬件传输交易请求和交易结果所耗费的时间。</li><li>客户端响应时间，这是客户端在构建请求和展现交易结果时所耗费的时间，对于普通的瘦客户端 Web 应用来说，这个时间很短，通常可以忽略不计；但是对于胖客户端 Web 应用来说，比如 Java applet、AJAX，由于客户端内嵌了大量的逻辑处理，耗费的时间有可能很长，从而成为系统的瓶颈，这是要注意的一个地方。 那么客户感受的响应时间其实是等于 <code>客户端响应时间</code> + <code>服务器端响应时间</code> + <code>网络响应时间</code>。细分的目的是为了方便定位性能瓶颈出现在哪个节点上。</li></ol><h2 id="吞吐量-throughput" tabindex="-1"><a class="header-anchor" href="#吞吐量-throughput"><span>吞吐量（Throughput）</span></a></h2><p>吞吐量是我们常见的一个软件性能指标，对于软件系统来说，“吞”进去的是请求，“吐”出来的是结果，而吞吐量反映的就是软件系统的“饭量”，也就是系统的处理能力，具体说来，就是指软件系统在每单位时间内能处理多少个事务/请求/单位数据等。但它的定义比较灵活，在不同的场景下有不同的诠释，比如数据库的吞吐量指的是单位时间内，不同 SQL 语句的执行数量；而网络的吞吐量指的是单位时间内在网络上传输的数据流量。吞吐量的大小由负载（如用户的数量）或行为方式来决定。举个例子，下载文件比浏览网页需要更高的网络吞吐量。</p><h2 id="资源使用率-resource-utilization" tabindex="-1"><a class="header-anchor" href="#资源使用率-resource-utilization"><span>资源使用率（Resource utilization）</span></a></h2><p>常见的资源有：CPU占用率、内存使用率、磁盘I/O、网络I/O。</p><h2 id="点击数-hits-per-second" tabindex="-1"><a class="header-anchor" href="#点击数-hits-per-second"><span>点击数（Hits per second）</span></a></h2><p>点击数是衡量 Web Server 处理能力的一个很有用的指标。需要明确的是：点击数不是我们通常理解的用户鼠标点击次数，而是按照客户端向 Web Server 发起了多少次 http 请求计算的，一次鼠标可能触发多个 http 请求，这需要结合具体的 Web 系统实现来计算。</p><h2 id="并发用户数-concurrent-users" tabindex="-1"><a class="header-anchor" href="#并发用户数-concurrent-users"><span>并发用户数（Concurrent users）</span></a></h2><p>并发用户数用来度量服务器并发容量和同步协调能力。在客户端指一批用户同时执行一个操作。并发数反映了软件系统的并发处理能力，和吞吐量不同的是，它大多是占用套接字、句柄等操作系统资源。</p><p>另外，度量软件系统的性能指标还有系统恢复时间等，其实凡是用户有关资源和时间的要求都可以被视作性能指标，都可以作为软件系统的度量，而性能测试就是为了验证这些性能指标是否被满足。</p>',13)]))}const l=t(n,[["render",i],["__file","Java-Performance1.html.vue"]]),h=JSON.parse('{"path":"/audition/other/Java-Performance1.html","title":"性能指标有哪些","lang":"zh-CN","frontmatter":{"description":"性能指标有哪些 响应时间（Response time） 响应时间就是用户感受软件系统为其服务所耗费的时间，对于网站系统来说，响应时间就是从点击了一个页面计时开始，到这个页面完全在浏览器里展现计时结束的这一段时间间隔，看起来很简单，但其实在这段响应时间内，软件系统在幕后经过了一系列的处理工作，贯穿了整个系统节点。根据“管辖区域”不同，响应时间可以细分为：...","head":[["meta",{"property":"og:url","content":"https://www.sansei.top/audition/other/Java-Performance1.html"}],["meta",{"property":"og:site_name","content":"川上富江"}],["meta",{"property":"og:title","content":"性能指标有哪些"}],["meta",{"property":"og:description","content":"性能指标有哪些 响应时间（Response time） 响应时间就是用户感受软件系统为其服务所耗费的时间，对于网站系统来说，响应时间就是从点击了一个页面计时开始，到这个页面完全在浏览器里展现计时结束的这一段时间间隔，看起来很简单，但其实在这段响应时间内，软件系统在幕后经过了一系列的处理工作，贯穿了整个系统节点。根据“管辖区域”不同，响应时间可以细分为：..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-17T17:15:12.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-17T17:15:12.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"性能指标有哪些\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-17T17:15:12.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"响应时间（Response time）","slug":"响应时间-response-time","link":"#响应时间-response-time","children":[]},{"level":2,"title":"吞吐量（Throughput）","slug":"吞吐量-throughput","link":"#吞吐量-throughput","children":[]},{"level":2,"title":"资源使用率（Resource utilization）","slug":"资源使用率-resource-utilization","link":"#资源使用率-resource-utilization","children":[]},{"level":2,"title":"点击数（Hits per second）","slug":"点击数-hits-per-second","link":"#点击数-hits-per-second","children":[]},{"level":2,"title":"并发用户数（Concurrent users）","slug":"并发用户数-concurrent-users","link":"#并发用户数-concurrent-users","children":[]}],"git":{"createdTime":1731863712000,"updatedTime":1731863712000,"contributors":[{"name":"cangbao","email":"yph0228@163.com","commits":1}]},"readingTime":{"minutes":3.24,"words":972},"filePathRelative":"audition/other/Java-Performance1.md","localizedDate":"2024年11月17日","autoDesc":true}');export{l as comp,h as data};
