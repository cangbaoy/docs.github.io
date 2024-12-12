import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,e as n,o as t}from"./app-Dz15Gn1A.js";const i={};function o(r,e){return t(),s("div",null,e[0]||(e[0]=[n(`<h1 id="如何应对微服务的链式调用异常" tabindex="-1"><a class="header-anchor" href="#如何应对微服务的链式调用异常"><span>如何应对微服务的链式调用异常</span></a></h1><p>一般情况下，每个微服务之间是独立的，如果某个服务宕机，只会影响到当前服务，而不会对整个业务系统产生影响。但是，服务端可能会在多个微服务之间产生一条链式调用，并把整合后的信息返回给客户端。在调用过程中，如果某个服务宕机或者网络不稳定可能造成整个请求失败。因此，为了应对微服务的链式调用异常，我们需要在设计微服务调用链时不宜过长，以免客户端长时间等待，以及中间环节出现错误造成整个请求失败。此外，可以考虑使用消息队列进行业务解耦，并且使用缓存避免微服务的链式调用从而提高该接口的可用性。</p><h2 id="对于快速追踪与定位问题" tabindex="-1"><a class="header-anchor" href="#对于快速追踪与定位问题"><span>对于快速追踪与定位问题</span></a></h2><p>在微服务复杂的链式调用中，我们会比单体架构更难以追踪与定位问题。因此，在设计的时候，需要特别注意。一种比较好的方案是，当 RESTful API 接口出现非 2xx 的 HTTP 错误码响应时，采用全局的异常结构响应信息。其中，code 字段用来表示某类错误的错误码，在微服务中应该加上“{biz_name}/”前缀以便于定位错误发生在哪个业务系统上。我们来看一个案例，假设“用户中心”某个接口没有权限获取资源而出现错误，我们的业务系统可以响应“UC/AUTH_DENIED”，并且通过自动生成的 UUID 值的 request_id 字段，在日志系统中获得错误的详细信息。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>HTTP/1.1 400 Bad Request</span></span>
<span class="line"><span>Content-Type: application/json</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    &quot;code&quot;: &quot;INVALID_ARGUMENT&quot;,</span></span>
<span class="line"><span>    &quot;message&quot;: &quot;{error message}&quot;,</span></span>
<span class="line"><span>    &quot;cause&quot;: &quot;{cause message}&quot;,</span></span>
<span class="line"><span>    &quot;request_id&quot;: &quot;01234567-89ab-cdef-0123-456789abcdef&quot;,</span></span>
<span class="line"><span>    &quot;host_id&quot;: &quot;{server identity}&quot;,</span></span>
<span class="line"><span>    &quot;server_time&quot;: &quot;2014-01-01T12:00:00Z&quot;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此外，我们需要在记录日志时，标记出错误来源以及错误详情便于更好地分析与定位问题。</p>`,6)]))}const c=a(i,[["render",o],["__file","Java-Service13.html.vue"]]),d=JSON.parse('{"path":"/audition/microservices/Java-Service13.html","title":"如何应对微服务的链式调用异常","lang":"zh-CN","frontmatter":{"description":"如何应对微服务的链式调用异常 一般情况下，每个微服务之间是独立的，如果某个服务宕机，只会影响到当前服务，而不会对整个业务系统产生影响。但是，服务端可能会在多个微服务之间产生一条链式调用，并把整合后的信息返回给客户端。在调用过程中，如果某个服务宕机或者网络不稳定可能造成整个请求失败。因此，为了应对微服务的链式调用异常，我们需要在设计微服务调用链时不宜过长...","head":[["meta",{"property":"og:url","content":"https://www.sansei.top/audition/microservices/Java-Service13.html"}],["meta",{"property":"og:site_name","content":"川上富江"}],["meta",{"property":"og:title","content":"如何应对微服务的链式调用异常"}],["meta",{"property":"og:description","content":"如何应对微服务的链式调用异常 一般情况下，每个微服务之间是独立的，如果某个服务宕机，只会影响到当前服务，而不会对整个业务系统产生影响。但是，服务端可能会在多个微服务之间产生一条链式调用，并把整合后的信息返回给客户端。在调用过程中，如果某个服务宕机或者网络不稳定可能造成整个请求失败。因此，为了应对微服务的链式调用异常，我们需要在设计微服务调用链时不宜过长..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-12T12:21:02.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-12T12:21:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"如何应对微服务的链式调用异常\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-12T12:21:02.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"对于快速追踪与定位问题","slug":"对于快速追踪与定位问题","link":"#对于快速追踪与定位问题","children":[]}],"git":{"createdTime":1734006062000,"updatedTime":1734006062000,"contributors":[{"name":"cangbao","email":"yph0228@163.com","commits":1}]},"readingTime":{"minutes":1.73,"words":518},"filePathRelative":"audition/microservices/Java-Service13.md","localizedDate":"2024年12月12日","autoDesc":true}');export{c as comp,d as data};