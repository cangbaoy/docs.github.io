import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as t,c as a,e as r}from"./app-BsUZOuh7.js";const p={};function c(n,e){return t(),a("div",null,e[0]||(e[0]=[r('<h1 id="如何拆分服务" tabindex="-1"><a class="header-anchor" href="#如何拆分服务"><span>如何拆分服务</span></a></h1><p>如今，市场环境纷繁复杂，瞬息万变，现代企业为了更好地生存，需要有极强的适应能力。快速而轻松地迎接改变，成为了一个优质企业的特征之一，同时企业还要求技术团队构建更科学的架构，搭建成本更低的平台，这就使得这些团队越来越倾向于使用微服务架构来应对以上要求。</p><p>微服务的做法有利于软件组件和数据的分散化，将一个整体分解成更小、更容易改变的部分，分散仅帮助团队加快工程进度，而不会牺牲系统的安全性。要想让这种架构工作得很好，需要改变工作方式。</p><p>微服务架构的设计，其实是为了使团队能够在执行工作的人之间分配决策权力，向更多成员直接推行决策权，允许他们以更自由的方式生产。微服务架构使用正确的话，将产生更好和更快的变化。但是如果你的架构错误，那么一系列坏的决定可能会降低转化率，甚至会损害你的业务。</p><figure><img src="https://pic.sansei.top/images/service/service_d8a0f183c602fd4e0411771d6f325cfd.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>我们讲决策权分配，即是说微服务架构的拆分实际上就是在寻求正确的权力下放战略。这是一个进化过程，需要不断地进行分析和调整。而如何正确的拆分微服务架构，我认为可以重点从以下三个方面考虑：</p><h2 id="_1-我们应该做哪些决定" tabindex="-1"><a class="header-anchor" href="#_1-我们应该做哪些决定"><span>1. 我们应该做哪些决定？</span></a></h2><p>设计微服务系统不仅仅是改变组件大小，架构中涉及创建和更改服务的所有领域都有一定的作用。在这里总结了以下九个方面，作为拆分微服务架构时所做决定的参考：</p><ul><li>生命周期：什么时候创建或停止服务？我们什么时候需要将它们分开？</li><li>服务实现：我们应该在每个服务中使用哪些工具、语言和架构？</li><li>系统架构：服务如何引导他人？开发人员如何了解？</li><li>数据架构：服务之间如何共享数据？</li><li>变更过程：什么时候可以改变服务？部署和 QA 的工具和过程？</li><li>团队管理：谁在哪个团队服务？每个团队负责什么？团队成员做了什么？</li><li>人事管理：人员如何被雇用和解雇？员工如何激励和奖励？</li><li>安全管理：我们如何降低安全事故的风险？需要做些什么来改善整个系统的安全性？</li><li>采购过程：可以购买什么软件？使用开源软件需要哪些保护？</li></ul><h2 id="_2-涉及到哪些人" tabindex="-1"><a class="header-anchor" href="#_2-涉及到哪些人"><span>2. 涉及到哪些人？</span></a></h2><p>不得不承认，一个员工做出的一些决定对他们的公司来说可能是非常有影响力的。一个很典型的现象是，公司试图对内部的决策者增加控制，以便将风险降至最低，从而导致决策权集中化。例如，在过去的几年中，苹果以拥有一个高度集中的设计团队而闻名，少数的人做出产品设计的大部分决策。</p><p>集中发生是因为正确的人需要做出最重要的决定。通常，<strong>“正确的人”是具有天赋，专业知识和经验的组合</strong>，使我们能够相信他们做出最好的决定，我们可以称这些人为我们的“明星决策者”。但实际上，公司的“明星决策者”数量有限，大多数团队只有几颗“明星”。</p><p>微服务改变了这种少数人行使决策权的现象，同时更容易应对错误的决策。如果一个团队在微服务工作时作出错误的决定，其错误的波及范围会很小，容错率变高。当系统的更改变得便宜和容易时，团队可以快速改进先前的决策，使他们能够更快地获得最佳决策。</p><figure><img src="https://pic.sansei.top/images/service/service_28ac7af07ba332c29e9a0d91030b0af1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_3-谁拥有哪一部分" tabindex="-1"><a class="header-anchor" href="#_3-谁拥有哪一部分"><span>3. 谁拥有哪一部分？</span></a></h2><p>决策基于选择，而选择又基于领域知识。决策不应该立即执行，它需要一个过程，需要高度专业的技能或知识来实现。</p><p>管理专家亨利•明茨伯格（Henry Mintzberg）为我们提供了一个很好的模式，其中概述了决策过程的步骤：</p><ul><li>研究与信息采集</li><li>生成选择</li><li>做出选择</li><li>授权的选择</li><li>执行和实施 所有这一切的关键，是在采用决策分权化时，不需要绝对。每个步骤都可以独立集中或分散化，在平衡效率和安全性时，可以获得更大的灵活性。如今，集中选择与非集中选择相结合，也是现在很多大公司常见的模式。</li></ul><p>当人们谈论微服务架构时，权力下放过程的选择、授权和执行部分相互协作、快速、规模化地移动，这些都降低了变化来临时对整体系统产生的负面影响。它是提高变革速度的有效途径，但不要忘记，你的成员特点、团队协调，以及所有的系统、工具和工作环境同样重要。</p><p>你必须了解如何做出决策，如何改进流程，这才是迎接变化的好方法。</p>',20)]))}const o=i(p,[["render",c],["__file","Java-Service11.html.vue"]]),d=JSON.parse('{"path":"/audition/microservices/Java-Service11.html","title":"如何拆分服务","lang":"zh-CN","frontmatter":{"description":"如何拆分服务 如今，市场环境纷繁复杂，瞬息万变，现代企业为了更好地生存，需要有极强的适应能力。快速而轻松地迎接改变，成为了一个优质企业的特征之一，同时企业还要求技术团队构建更科学的架构，搭建成本更低的平台，这就使得这些团队越来越倾向于使用微服务架构来应对以上要求。 微服务的做法有利于软件组件和数据的分散化，将一个整体分解成更小、更容易改变的部分，分散仅...","head":[["meta",{"property":"og:url","content":"https://www.sansei.top/audition/microservices/Java-Service11.html"}],["meta",{"property":"og:site_name","content":"川上富江"}],["meta",{"property":"og:title","content":"如何拆分服务"}],["meta",{"property":"og:description","content":"如何拆分服务 如今，市场环境纷繁复杂，瞬息万变，现代企业为了更好地生存，需要有极强的适应能力。快速而轻松地迎接改变，成为了一个优质企业的特征之一，同时企业还要求技术团队构建更科学的架构，搭建成本更低的平台，这就使得这些团队越来越倾向于使用微服务架构来应对以上要求。 微服务的做法有利于软件组件和数据的分散化，将一个整体分解成更小、更容易改变的部分，分散仅..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://pic.sansei.top/images/service/service_d8a0f183c602fd4e0411771d6f325cfd.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-17T17:15:12.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-17T17:15:12.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"如何拆分服务\\",\\"image\\":[\\"https://pic.sansei.top/images/service/service_d8a0f183c602fd4e0411771d6f325cfd.jpg\\",\\"https://pic.sansei.top/images/service/service_28ac7af07ba332c29e9a0d91030b0af1.png\\"],\\"dateModified\\":\\"2024-11-17T17:15:12.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"1. 我们应该做哪些决定？","slug":"_1-我们应该做哪些决定","link":"#_1-我们应该做哪些决定","children":[]},{"level":2,"title":"2. 涉及到哪些人？","slug":"_2-涉及到哪些人","link":"#_2-涉及到哪些人","children":[]},{"level":2,"title":"3. 谁拥有哪一部分？","slug":"_3-谁拥有哪一部分","link":"#_3-谁拥有哪一部分","children":[]}],"git":{"createdTime":1731863712000,"updatedTime":1731863712000,"contributors":[{"name":"cangbao","email":"yph0228@163.com","commits":1}]},"readingTime":{"minutes":4.62,"words":1386},"filePathRelative":"audition/microservices/Java-Service11.md","localizedDate":"2024年11月17日","autoDesc":true}');export{o as comp,d as data};
