"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9842],{105:(e,t)=>{t.A=(e,t)=>{const l=e.__vccOpts||e;for(const[e,a]of t)l[e]=a;return l}},1111:(e,t,l)=>{l.r(t),l.d(t,{comp:()=>i,data:()=>n});var a=l(6904);const o=[(0,a.Fv)('<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2><p>Thymeleaf 是一个跟 Velocity、FreeMarker 类似的模板引擎，它可以完全替代 JSP 。相较与其他的模板引擎，它有如下三个极吸引人的特点</p><ul><li>Thymeleaf 在有网络和无网络的环境下皆可运行，即它可以让美工在浏览器查看页面的静态效果，也可以让程序员在服务器查看带数据的动态页面效果。这是由于它支持 html 原型，然后在 html 标签里增加额外的属性来达到模板 + 数据的展示方式。浏览器解释 html 时会忽略未定义的标签属性，所以 thymeleaf 的模板可以静态地运行；当有数据返回到页面时，Thymeleaf 标签会动态地替换掉静态内容，使页面动态显示。</li><li>Thymeleaf 开箱即用的特性。它提供标准和 Spring 标准两种方言，可以直接套用模板实现 JSTL、 OGNL 表达式效果，避免每天套模板、改 JSTL、改标签的困扰。同时开发人员也可以扩展和创建自定义的方言。</li><li>Thymeleaf 提供 Spring 标准方言和一个与 SpringMVC 完美集成的可选模块，可以快速的实现表单绑定、属性编辑器、国际化等功能。</li></ul><h2 id="为什么使用-thymeleaf" tabindex="-1"><a class="header-anchor" href="#为什么使用-thymeleaf"><span>为什么使用 Thymeleaf</span></a></h2><p>如果希望以 Jar 形式发布模块则尽量不要使用 JSP 相关知识，这是<strong>因为 JSP 在内嵌的 Servlet 容器上运行有一些问题 (内嵌 Tomcat、 Jetty 不支持 Jar 形式运行 JSP</strong>，Undertow 不支持 JSP)。</p><p>Spring Boot 中推荐使用 Thymeleaf 作为模板引擎，因为 Thymeleaf 提供了完美的 Spring MVC 支持</p><p>Spring Boot 提供了大量模板引擎，包括：</p><ul><li>FreeMarker</li><li>Groovy</li><li>Mustache</li><li><strong>Thymeleaf</strong></li><li>Velocity</li><li><strong>Beetl</strong></li></ul>',8)],r={},i=(0,l(105).A)(r,[["render",function(e,t){return(0,a.uX)(),(0,a.CE)("div",null,o)}]]),n=JSON.parse('{"path":"/knowledge/springboot/SpringBoot-%E6%95%B4%E5%90%88Thymeleaf.html","title":"Thymeleaf 简介","lang":"zh-CN","frontmatter":{"title":"Thymeleaf 简介","icon":"puzzle-piece","order":1,"category":["SpringBoot"],"tag":["SpringBoot"],"description":"概述 Thymeleaf 是一个跟 Velocity、FreeMarker 类似的模板引擎，它可以完全替代 JSP 。相较与其他的模板引擎，它有如下三个极吸引人的特点 Thymeleaf 在有网络和无网络的环境下皆可运行，即它可以让美工在浏览器查看页面的静态效果，也可以让程序员在服务器查看带数据的动态页面效果。这是由于它支持 html 原型，然后在 h...","head":[["meta",{"property":"og:url","content":"https://www.sansei.top/knowledge/springboot/SpringBoot-%E6%95%B4%E5%90%88Thymeleaf.html"}],["meta",{"property":"og:site_name","content":"川上富江"}],["meta",{"property":"og:title","content":"Thymeleaf 简介"}],["meta",{"property":"og:description","content":"概述 Thymeleaf 是一个跟 Velocity、FreeMarker 类似的模板引擎，它可以完全替代 JSP 。相较与其他的模板引擎，它有如下三个极吸引人的特点 Thymeleaf 在有网络和无网络的环境下皆可运行，即它可以让美工在浏览器查看页面的静态效果，也可以让程序员在服务器查看带数据的动态页面效果。这是由于它支持 html 原型，然后在 h..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-30T14:18:24.000Z"}],["meta",{"property":"article:tag","content":"SpringBoot"}],["meta",{"property":"article:modified_time","content":"2024-08-30T14:18:24.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Thymeleaf 简介\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-30T14:18:24.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"为什么使用 Thymeleaf","slug":"为什么使用-thymeleaf","link":"#为什么使用-thymeleaf","children":[]}],"git":{"createdTime":1725027504000,"updatedTime":1725027504000,"contributors":[{"name":"him","email":"yph0228@163.com","commits":1}]},"readingTime":{"minutes":1.5,"words":449},"filePathRelative":"knowledge/springboot/SpringBoot-整合Thymeleaf.md","localizedDate":"2024年8月30日","autoDesc":true}')}}]);