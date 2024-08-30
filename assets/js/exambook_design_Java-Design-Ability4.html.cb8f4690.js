"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8160],{105:(e,t)=>{t.A=(e,t)=>{const p=e.__vccOpts||e;for(const[e,o]of t)p[e]=o;return p}},7408:(e,t,p)=>{p.r(t),p.d(t,{comp:()=>n,data:()=>l});var o=p(6904);const i=[(0,o.Fv)('<h1 id="你如何进行领域建模" tabindex="-1"><a class="header-anchor" href="#你如何进行领域建模"><span>你如何进行领域建模</span></a></h1><h2 id="运用四色建模法进行领域分析" tabindex="-1"><a class="header-anchor" href="#运用四色建模法进行领域分析"><span>运用四色建模法进行领域分析</span></a></h2><p>领域建模有很多种方法，对于同样的问题域使用不同的建模手段得到的模型可能也不尽相同。于是我经常听到这样一个问题：怎么才能保证建模的正确性？</p><p>这听起来是个合理的质疑，但实际上却不是那么有道理。首先我们需要明白建模的目的是什么？如果仅仅是为了描画问题，那么并没有什么对错之分——仅仅是立场和角度的差别；而如果是为了企业业务系统而进行建模，那么这个问题应该变为：如何保证模型能够支撑企业的运营？</p><p><strong>我想用下面这个例子来简要的回答一下这个问题。</strong></p><p>在开始分析和建模之前，我们需要知道企业业务系统的目的是什么；而企业业务系统的目的往往跟决策者或者管理的诉求相关。我们现在需要移情到一位管理者身上，看看他的诉求到底是什么。</p><p>现在假想你是一家在线电子书店的 COO。突然有一天，有一位顾客向你投诉，说他订购的书少了一本，并且价钱算错了，他多给了钱。在你承诺理赔之前，你需要核对一下这位顾客说的是否属实。那么这个时候你需要知道什么样的信息才能做出准确的判断呢？</p><p>简单来说，你需要知道这位顾客订购了那些书籍，付了多少钱以及书店到底为这个顾客递送了那些书籍。不幸的是，由于科技不够发达，你无法直接驾驶时间机器回到从前去亲眼看看发生了那些事。但幸运的是，你并不需要这么做，你只需要看看这位顾客的订单，和网银的支付记录以及你们书店交给EMS的快递单存根，就应该知道这些信息了。</p><p>你找到了订单和 EMS 快递存根。发现这位顾客是在三天前订购的书，而你们在前天就已经将书邮寄出去了。并在订单上看到这位顾客一共订购了7本书，但是在EMS的快递存根上，并没有任何书籍的信息，只有地址，包裹号，邮费和重量什么的信息。这时候你觉得应该去询问一下配送部门，看看他们做了什么。</p><p>在配送部门你根据包裹号查到了那个包裹的信息，果然里面只有6本书。同时你在包裹部门发现了一张延期交货单。上面说明由于缺货，这位顾客另外一本书正在等待发货。</p><p>那么剩下的问题就是支付问题了，从网银的记录上看，客户不含邮费一共支付了132.5。订单上显示的价钱也是132.5，显然这位顾客并没有多付钱。</p><p>为了保证准确，你重新从网站上选了这7本书，想看看是否也会是这个价钱。但你却意外的发现，一共只需要128.3。仔细辨认后，你发现有一本图书现在是促销。那么现在的问题是，促销到底是什么时候开始的？</p><p>你到了市场部，市场部给了你一份近期促销计划。你发现那本书是昨天才开始促销的，也就是说在那位顾客在下订单的时候，促销还没有开始。</p><p>这个时候，你觉得应该给你的顾客打一个电话致歉，商讨如何后续邮寄的问题，并向他说明促销的事情。</p><p>你是否觉得这个 COO 当得有点累呢？这当然是虚构的。但是从这故事里面我们看到什么呢？</p><p><strong>任何的业务事件都会以某种数据的形式留下足迹</strong></p><p>我们对于事件的追溯可以通过对数据的追溯来完成。正如上面这个故事里，你无法回到从前去看看到底发生了什么，但是却可以在单据的基础上，一定程度的还原当时事情发生的场景。当我们把这些数据的足迹按照时间顺序排列起来，我们几乎可以清晰的推测出这个在过往的一段时间内到底发生了那些事情。</p><p>那么为什么这些数据形成的链条能够成帮助我们追溯业务的营运呢？</p><p>因为这些数据并不是随便挑选的。如果我们回顾一下你作为COO检查这个疏漏的过程，你首先选择了订单和EMS快递存根，换句话说，如果订单出现差错，或者EMS快递存根上说明你的确邮寄了7本书，那么这个疏漏的责任并不在你。所以这两个订单实际上这个你这个企业法律责任的起点和终点。</p><p>当你确定这个疏漏的责任在你之后，你选择审查一些 <strong>流程执行的结果</strong>，比如包裹存根。从而验证一些主要的业务流程执行的结果是否正确。换句话讲，这些数据是 <strong>支撑你运营体系的关键流程的执行结果</strong>。</p><p>正是由于这些数据是流程执行的结果，它们才使我们可以在不了解流程细节的前提下，对某些突发事件进行追述和分析。</p><p>除了上面那个极端的例子（投诉），对于任何一笔正常的经济往来，我们都需要知道：</p><ol><li>如果我付出一笔资金，那么我的权益是什么？</li><li>如果我收到一笔资金，那么我的义务是什么？</li></ol><p>而这些问题都需要业务系统捕捉到相应的足迹才能够回答。所以企业的业务系统主要的目的之一，就是记录这些足迹，并将这些足迹形成一条有效的追溯链。</p><p>而作为业务分析师的你，则应该知道那些事件在运营上是需要追溯的，这些事件都留下了什么足迹。</p><p>这些足迹通常都具有一个有意思的特性，即它们都是时标性对象（moment-interval）。发现这些时标性对象就是建模的起点。对于这些时标性对象稍加整理，我们就得到了整个领域模型的骨干：</p><p>在得到骨干之后，我们需要丰富这个模型，使它可以更好的描述业务概念。这时候，我们需要补充一些实体对象。通常实体对象有三类：人，地点， 物（party/place/thing）。</p><p>在这个基础上，我们可以进一步抽象这些实体事如果参与到各种不同的流程中去的，这时候，我们就需要用到角色（role）：</p><p>最后再把一些需要描述的信息放入描述对象（description）。</p><p>我们就得了应用四色建模方法（color modeling）建立的一套领域模型。</p><p><strong>简要回顾一下上面的过程，不难发现我们建模的次序和重点：</strong></p><ol><li>首先以满足管理和运营的需要为前提，寻找需要追溯的事件。</li><li>根据这些需要追溯，寻找足迹以及相应的时标性对象。</li><li>寻找时标对象周围的人／事／物</li><li>从中抽象角色</li><li>把一些信息用描述对象补足。</li></ol><p>由于在第一步中，我们就将管理和运营目标做为建模的出发点。因此，整套模型实际上是围绕这些“如何有效地追踪这些目标”而建立的，这样的模型可以保证模型支撑企业的运营。</p><h2 id="四色建模法" tabindex="-1"><a class="header-anchor" href="#四色建模法"><span>四色建模法</span></a></h2><p>(Color UML)是由 Peter Coad 发明的一种建模方法，将抽象出来的对象分成四种原型（archetype）：</p><ol><li>moment-interval：这种对象表示那些在某个时间点存在，或者会存在一段时间的，这样的对象往往表示了一次外界的请求，比如一次询价（Quotation），一次购买（Sale），这样的对象表示的都是系统的价值所在，所以也是最重要的一类对象，一般用粉红色来表示。这样的对象一般都有一个起始时间和终止时间，以及一个唯一的标识号，用来唯一的标识这一次客户请求，比如 PolicyNo.</li><li>Role：这种对象表示的是一种角色，往往由人或者物来承担，会有相应的责任和权利，一般一个 moment-interval 对象会关联多个 Role,比如说一次询价（Quotation）涉及到两个 Role, 询价人（Quoter）和询价的产品（Product for Quotation）, 这类对象是除 moment-interval 对象外最重要的一类对象，一般用黄色来表示。这类对象一般都有一些被 moment-interval 对象请求的操作，用来完成它们的职责。</li><li>Party：Place or Thing, 这种对象往往表示的是一种客观存在的事物，例如：人，组织，产品，配件等等，这些事物往往会在一种 moment-interval 中扮演某个 Role, 比如某个人会在一次购买中扮演 Customer 的角色，也可以在询价中扮演询价人的角色。这类对象第三重要，所以一般用绿色来表示。这类对象一般都有 Name, Address 等属性。</li><li>Description：这种对象一般是分类用或者描述性的对象，一般某个 Thing, Place，Party会属于某个 Description，主要用来表示一类事物，它的属性一般都是这一类事物都有的属性，这类对象一般用蓝色来表示。这类对象一般都有 type, defaultValue 等属性。</li></ol><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2><p>通过将分析得到的领域对象分别归入这四类原型，能让我们更加深刻的理解每个对象的职责，以及对象之间的相互关系，通过四种颜色，能表达出比一般的黑白模型更加丰富的领域信息。</p><p>四色建模法和别的建模方法相比，更倾向于作为一种分析方法，而不是设计方法，它也可以看作是一种分析模式，和 Martin Fowler 的《分析模式》有异曲同工之妙。在《Java Modeling in Color with UML》这本书中，Peter Coad 给出了多个行业的通用对象模型，包括制造业，资源管理，人力资源管理，财务管理等等，当然都是用四色建模法表示的，确实有耳目一新之感。</p>',39)],a={},n=(0,p(105).A)(a,[["render",function(e,t){return(0,o.uX)(),(0,o.CE)("div",null,i)}]]),l=JSON.parse('{"path":"/exambook/design/Java-Design-Ability4.html","title":"你如何进行领域建模","lang":"zh-CN","frontmatter":{"description":"你如何进行领域建模 运用四色建模法进行领域分析 领域建模有很多种方法，对于同样的问题域使用不同的建模手段得到的模型可能也不尽相同。于是我经常听到这样一个问题：怎么才能保证建模的正确性？ 这听起来是个合理的质疑，但实际上却不是那么有道理。首先我们需要明白建模的目的是什么？如果仅仅是为了描画问题，那么并没有什么对错之分——仅仅是立场和角度的差别；而如果是为...","head":[["meta",{"property":"og:url","content":"https://www.sansei.top/exambook/design/Java-Design-Ability4.html"}],["meta",{"property":"og:site_name","content":"川上富江"}],["meta",{"property":"og:title","content":"你如何进行领域建模"}],["meta",{"property":"og:description","content":"你如何进行领域建模 运用四色建模法进行领域分析 领域建模有很多种方法，对于同样的问题域使用不同的建模手段得到的模型可能也不尽相同。于是我经常听到这样一个问题：怎么才能保证建模的正确性？ 这听起来是个合理的质疑，但实际上却不是那么有道理。首先我们需要明白建模的目的是什么？如果仅仅是为了描画问题，那么并没有什么对错之分——仅仅是立场和角度的差别；而如果是为..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-30T21:06:17.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-30T21:06:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"你如何进行领域建模\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-30T21:06:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"运用四色建模法进行领域分析","slug":"运用四色建模法进行领域分析","link":"#运用四色建模法进行领域分析","children":[]},{"level":2,"title":"四色建模法","slug":"四色建模法","link":"#四色建模法","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1725051977000,"updatedTime":1725051977000,"contributors":[{"name":"him","email":"yph0228@163.com","commits":1}]},"readingTime":{"minutes":9.17,"words":2751},"filePathRelative":"exambook/design/Java-Design-Ability4.md","localizedDate":"2024年8月30日","autoDesc":true}')}}]);