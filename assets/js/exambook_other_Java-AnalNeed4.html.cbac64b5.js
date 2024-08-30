"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9097],{105:(e,a)=>{a.A=(e,a)=>{const i=e.__vccOpts||e;for(const[e,t]of a)i[e]=t;return i}},5871:(e,a,i)=>{i.r(a),i.d(a,{comp:()=>g,data:()=>d});var t=i(6904);const p=[(0,t.Fv)('<h1 id="你针对产品提出哪些交互和改进意见" tabindex="-1"><a class="header-anchor" href="#你针对产品提出哪些交互和改进意见"><span>你针对产品提出哪些交互和改进意见</span></a></h1><blockquote><p>过度设计，一般是说过度满足用户需求的设计。用户想要 A，你给了他 ABCDE，结果 BCDE 全部用不上。既让用户选择困难，又浪费了团队开发时间。</p></blockquote><p>即使是有经验的设计师，有时也容易陷入自己的「小循环」中难以自拔，过度追求一些体验的完美，或者需求的满足，而导致最终的实际使用体验下降，或者偏离产品设计初衷的悲剧结果。</p><h2 id="过度追求精准" tabindex="-1"><a class="header-anchor" href="#过度追求精准"><span>过度追求精准</span></a></h2><h3 id="例1-我们都知道载入内容时需要-loading-状态-如下图" tabindex="-1"><a class="header-anchor" href="#例1-我们都知道载入内容时需要-loading-状态-如下图"><span>例1：我们都知道载入内容时需要 loading 状态，如下图：</span></a></h3><figure><img src="http://114.116.184.67:81/images/needs/f0fcd6e5-874f-4894-9e0c-39fb1574c6de.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>现实的业务场景中，需要加载的内容往往不只一个。如下图：虽然图表比较多，但排列整齐有序，所以看上去还是比较舒适的。</p><figure><img src="http://114.116.184.67:81/images/needs/6759f77b-6cfb-4b29-9eb7-66252f5e8d27.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>再来看第三张：这样的 loading，是你想要的吗？</p><figure><img src="http://114.116.184.67:81/images/needs/780646e1-86ff-4479-999a-01268f83213c.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>这是一个曾真实存在过的业务场景图，仪表盘中的图表排版是用户自行构建的。大部分仪表盘中的图表都不少于 5 张，且大小不一。每张图表中的数据来源于不同的数据模型，模型大小会影响加载速度，所以加载速度有快有慢，再加上网速等一些客观原因，有时就是会出现参差不齐一片 loading 的场景，而且出现的频率还不低。</p><p>这时，就不应该过于追求每张图表与其 loading 状态一一对应。用户需要的是反馈，虽然精准提示了反馈来自于哪张图表，但如果界面展示反而让用户烦躁和混乱，那就得不偿失了。</p><p>比较合理的做法是，把局部 loading 设计成全局 loading，起到反馈作用就可以了。如图：虽然牺牲了一点精确性，但在体验上用户会更容易接受。</p><figure><img src="http://114.116.184.67:81/images/needs/88cfa64c-41be-4911-9309-09f5050f63f3.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="例2-这是一个筛选器控件的样式设置页面-有两种样式-纵向、横向" tabindex="-1"><a class="header-anchor" href="#例2-这是一个筛选器控件的样式设置页面-有两种样式-纵向、横向"><span>例2：这是一个筛选器控件的样式设置页面，有两种样式：纵向、横向</span></a></h3><figure><img src="http://114.116.184.67:81/images/needs/a1344109-2ef8-46e7-94b7-c5f619189506.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>纵向的列表筛选器，相信大部分人都能理解。如下图：当你勾选了需要筛选的内容时，相对应的内容就会被展示。</p><figure><img src="http://114.116.184.67:81/images/needs/8f0a71ee-44cc-4996-be6b-b36e109d4122.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>好了，现在来想象一下，横向是什么？是这样的：</p><figure><img src="http://114.116.184.67:81/images/needs/1c320f4a-e8eb-4f75-9986-4223227b0caf.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>会发现，横向的列表筛选器比较难理解，甚至之前根本没有看到过，仅仅从文案很难联想到最终的展示形式。横向和纵向，从文案上来说是一个精准的表达，同样的功能，只是方向发生了改变，所以你不能说他错。但用户理解不了，就得换个设计思维。</p><p>重新从用户的使用场景着手，大部分用户习惯将横向列表筛选器和图表搭配在一起这么使用：</p><figure><img src="http://114.116.184.67:81/images/needs/7f4136e0-c0b3-4672-926f-90a64dc4bb9c.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>这非常像一个导航，切换导航就是筛选的过程。最终，我们把设置面板改成了下图：「列表」和「导航」。虽然从含义上不如前者精准，但对用户来说，看到文案能够直观地联想到最终展现形式，体验上会更友好。</p><figure><img src="http://114.116.184.67:81/images/needs/d597677f-fdcd-45f8-9241-ef37a443b8df.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="死板遵循设计法则" tabindex="-1"><a class="header-anchor" href="#死板遵循设计法则"><span>死板遵循设计法则</span></a></h2><p>几乎所有的设计师，在入门时都会接触设计法则，设计法则为我们提供设计规范和评判标准，运用这些法则，能让我们在设计时更得心应手，在阐述自己的方案时也会更有底气。但所有的法则都不能盲目的遵守，得根据不同的场景灵活运用。</p><p>尼而森可用性原则中有一条叫做，一致性原则。同一用语、功能、操作需要保持一致。 这可以帮助我们的产品看起来更加统一和规范，但一些设计师会机械的执行这条原则。如下图：这是一个数据格式的设定弹窗，通过点击 btn，能够激活该面板。</p><figure><img src="http://114.116.184.67:81/images/needs/d1a5ebb5-c5d0-4dac-ae00-9d90fa3210eb.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>在另一个界面，也有数据格式的设置，为了遵循操作方式一致，设计成了这样，如图：</p><figure><img src="http://114.116.184.67:81/images/needs/dc2d1135-86cf-4315-9d8c-34a5060cd7d0.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>细看后是否觉得有些地方比较违和？虽然都是通过点击操作激活设置弹窗，但表单中的链接一般不会孤零零的出现在某一个条目中。其次，在弹窗中应该尽量避免再出现一层弹窗，所以设置入口放在这里，是不合适的。</p><figure><img src="http://114.116.184.67:81/images/needs/065f380e-5446-471c-abda-735d11c53662.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>修改一下，这样看上去是不是顺眼多了？</p><p>虽然操作方式没有完全统一，但弹窗和下拉菜单面板中的内容布局是一致的。除此之外，下拉框和上一个表单条目也保持了形式统一，整体更和谐。灵活而不机械的运用设计法则，才能将其作用发挥到最大。</p><h2 id="过度假设用户行为" tabindex="-1"><a class="header-anchor" href="#过度假设用户行为"><span>过度假设用户行为</span></a></h2><p>在设计的过程中，经常会走着走着就进入了一个误区。「用户可能会如何操作，所以我们应该….」这样的想法经常会伴随着大量的竞品参考愈演愈烈，竞品如果有的，而自己没有就会觉得似乎少了什么。</p><p>举个例子：渐变色的设置面板。有的色板是如下图这样的，类型、方向、角度、透明度、亮度等等，一眼看过去十分专业。</p><figure><img src="http://114.116.184.67:81/images/needs/56e64473-aa07-42ae-b10d-d17bb6abb6a4.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>并不是每一个颜色设置场景都需要使用到渐变色板，相对于一般的纯色色板，它的使用门槛更高。对于这类设置较多的模块，有时我们并不能确定是所有内容全部提供还是只提供其中最常用的一部分，毕竟每一个功能似乎都有需求，难以舍弃。再加上设计迭代周期短，没有足够的时间做一次完整的可用性测试，来研究和验证用户到底想要哪些功能，所以就会陷入纠结。</p><p>可以试着先将所有的内容归类，同类组合，视觉上精简内容，内容一旦形成区块就比较容易区分出优先级，优先级低的内容暂时先不放出来。如图：</p><figure><img src="http://114.116.184.67:81/images/needs/d55ba135-b8b6-4478-af61-c154cc3e7a57.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>建议刚开始选择较为简单的方案，同时留出可扩展的空间。如果简单的设计方案已经能满足用户了，就不用盲目做加法。如果根据后期的可用性测试验证用户还有新的需求，再逐步添加。不要一下子就把用户行为想得太复杂，设计太多，吃力还不讨好。</p><h2 id="过多展示内在业务逻辑" tabindex="-1"><a class="header-anchor" href="#过多展示内在业务逻辑"><span>过多展示内在业务逻辑</span></a></h2><p>To b 产品往往业务属性较强，内部逻辑比较复杂，概念定义也多。如图：</p><figure><img src="http://114.116.184.67:81/images/needs/4e2160f2-0fca-4c40-b402-8912376ccbcd.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>报告设置针对的是全局的内容，页面设置针对的是当前页的内容。由于技术是按照两个入口实现该功能的，逻辑上也清晰，所以设计时两个入口都暴露给了用户。但经过可用性测试，这两者的概念区别对用户来说都需要一定的理解时间，首次选择时也容易疑惑。其实这些定义产品内部分清就足够了，不需要额外暴露给用户。</p><figure><img src="http://114.116.184.67:81/images/needs/84531c2b-f7a2-4b0f-8310-540fcac304b4.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>把两个概念合二为一，直接进入当前页面设置，如果有需要，再勾选应用到全局，用户不需要在不同的入口之间犹豫选择，体验上会好很多。</p><h2 id="过于把用户当「小白」" tabindex="-1"><a class="header-anchor" href="#过于把用户当「小白」"><span>过于把用户当「小白」</span></a></h2><p>产品设计中经常会强调，把「用户当小白」，但这更多适合 to c 类产品，to c 产品的操作流程更有规律性，做好引导或者在操作过程中自然的提示，的确能够帮助用户更快上手。</p><p>而 to b 类产品，尤其是工具类产品，使用者本身是有一定的专业基础的，再加上操作频繁，形式多样，想要预判用户的下一步操作并不容易。如果老抱着一种我要去教用户使用的想法，每一步都去提示、引导，只会不停打断操作流程，降低用户体验。</p><p>对于工具类的 to b 产品，与其不断提醒，造成大量提示文案，不如在一些复杂概念或者复杂操作旁提供帮助，供用户自己查阅学习。</p><p>例如：提供搜索入口帮助用户快速定位到问题。</p><figure><img src="http://114.116.184.67:81/images/needs/28155d54-6ff7-4abf-8ead-a209b6b7fab1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>如果注释框难以解释清楚复杂问题，可以直接提供帮助手册的链接，点击跳转到新页面查看详细说明。</p><figure><img src="http://114.116.184.67:81/images/needs/ba2f83ec-27f7-4121-b58f-13be143353a2.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>对于有一定专业基础的用户来说，提供工具书，当他遇到问题时自行查阅，比强制性的手把手教往往作用更大。</p><h2 id="盲目满足用户需求" tabindex="-1"><a class="header-anchor" href="#盲目满足用户需求"><span>盲目满足用户需求</span></a></h2><p>参与过用户访谈和可用性测试的设计师可能会有一个体会，经常会出现「希望马上把这个用户提出的问题解决掉」的心理，「这个用户提出的问题很有价值，一定要记录下来」，「那个用户提出的抱怨确实忽略了，马上去改」。</p><p>这其实是对用户的声音缺乏筛选，很多用户并不是产品人员，对于一些设计的考虑是缺乏理性的，只是片面的在抱怨一些主观意见，夹杂了很多个人的喜好。「我不喜欢这个设计，感觉怪怪的」，「这个icon我看不懂，不知道什么意思」。如果不加筛选的就听取意见，很容易就被上面的问题牵着鼻子走，造成不必要的过度设计。不仅会增加开发成本，还会丧失自己最初的设计原则。</p><p>在听取用户的声音时，一定要保持冷静和理智的头脑，推演一遍真实的使用场景，判断出哪些问题是普遍存在的，哪些问题只是个人主观偏好，哪些问题改动成本小、见效快，哪些改动牵一发而动全身。不要过度满足用户需求。</p><h2 id="结语" tabindex="-1"><a class="header-anchor" href="#结语"><span>结语</span></a></h2><p>设计不足，显得粗糙，设计过度，显得花哨。刚刚好的精妙设计与这两者的差别往往就在一念之间。对于度的把握，是需要设计师不断积累和总结才能有所提升的，注意尽量不要用自己的标准来衡量大部份用户。当一个方案考虑过多时，需要暂时重新思考，检查思维有没有陷入死胡同或者越跑越偏。想出一个解决方案时，尽量不要直接下定论，可以多与他人讨论，观察别人是否能直观、迅速地理解设计。如果没有，不要第一时间去争论和捍卫自己的方案，应该询问别人哪里觉得违和，然后不断调整和完善，慢慢找到最恰到好处的设计。</p>',64)],n={},g=(0,i(105).A)(n,[["render",function(e,a){return(0,t.uX)(),(0,t.CE)("div",null,p)}]]),d=JSON.parse('{"path":"/exambook/other/Java-AnalNeed4.html","title":"你针对产品提出哪些交互和改进意见","lang":"zh-CN","frontmatter":{"description":"你针对产品提出哪些交互和改进意见 过度设计，一般是说过度满足用户需求的设计。用户想要 A，你给了他 ABCDE，结果 BCDE 全部用不上。既让用户选择困难，又浪费了团队开发时间。 即使是有经验的设计师，有时也容易陷入自己的「小循环」中难以自拔，过度追求一些体验的完美，或者需求的满足，而导致最终的实际使用体验下降，或者偏离产品设计初衷的悲剧结果。 过度...","head":[["meta",{"property":"og:url","content":"https://www.sansei.top/exambook/other/Java-AnalNeed4.html"}],["meta",{"property":"og:site_name","content":"川上富江"}],["meta",{"property":"og:title","content":"你针对产品提出哪些交互和改进意见"}],["meta",{"property":"og:description","content":"你针对产品提出哪些交互和改进意见 过度设计，一般是说过度满足用户需求的设计。用户想要 A，你给了他 ABCDE，结果 BCDE 全部用不上。既让用户选择困难，又浪费了团队开发时间。 即使是有经验的设计师，有时也容易陷入自己的「小循环」中难以自拔，过度追求一些体验的完美，或者需求的满足，而导致最终的实际使用体验下降，或者偏离产品设计初衷的悲剧结果。 过度..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"http://114.116.184.67:81/images/needs/f0fcd6e5-874f-4894-9e0c-39fb1574c6de.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-30T21:06:17.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-30T21:06:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"你针对产品提出哪些交互和改进意见\\",\\"image\\":[\\"http://114.116.184.67:81/images/needs/f0fcd6e5-874f-4894-9e0c-39fb1574c6de.jpg\\",\\"http://114.116.184.67:81/images/needs/6759f77b-6cfb-4b29-9eb7-66252f5e8d27.jpg\\",\\"http://114.116.184.67:81/images/needs/780646e1-86ff-4479-999a-01268f83213c.jpg\\",\\"http://114.116.184.67:81/images/needs/88cfa64c-41be-4911-9309-09f5050f63f3.jpg\\",\\"http://114.116.184.67:81/images/needs/a1344109-2ef8-46e7-94b7-c5f619189506.jpg\\",\\"http://114.116.184.67:81/images/needs/8f0a71ee-44cc-4996-be6b-b36e109d4122.jpg\\",\\"http://114.116.184.67:81/images/needs/1c320f4a-e8eb-4f75-9986-4223227b0caf.jpg\\",\\"http://114.116.184.67:81/images/needs/7f4136e0-c0b3-4672-926f-90a64dc4bb9c.jpg\\",\\"http://114.116.184.67:81/images/needs/d597677f-fdcd-45f8-9241-ef37a443b8df.jpg\\",\\"http://114.116.184.67:81/images/needs/d1a5ebb5-c5d0-4dac-ae00-9d90fa3210eb.jpg\\",\\"http://114.116.184.67:81/images/needs/dc2d1135-86cf-4315-9d8c-34a5060cd7d0.jpg\\",\\"http://114.116.184.67:81/images/needs/065f380e-5446-471c-abda-735d11c53662.jpg\\",\\"http://114.116.184.67:81/images/needs/56e64473-aa07-42ae-b10d-d17bb6abb6a4.jpg\\",\\"http://114.116.184.67:81/images/needs/d55ba135-b8b6-4478-af61-c154cc3e7a57.jpg\\",\\"http://114.116.184.67:81/images/needs/4e2160f2-0fca-4c40-b402-8912376ccbcd.jpg\\",\\"http://114.116.184.67:81/images/needs/84531c2b-f7a2-4b0f-8310-540fcac304b4.jpg\\",\\"http://114.116.184.67:81/images/needs/28155d54-6ff7-4abf-8ead-a209b6b7fab1.jpg\\",\\"http://114.116.184.67:81/images/needs/ba2f83ec-27f7-4121-b58f-13be143353a2.jpg\\"],\\"dateModified\\":\\"2024-08-30T21:06:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"过度追求精准","slug":"过度追求精准","link":"#过度追求精准","children":[{"level":3,"title":"例1：我们都知道载入内容时需要 loading 状态，如下图：","slug":"例1-我们都知道载入内容时需要-loading-状态-如下图","link":"#例1-我们都知道载入内容时需要-loading-状态-如下图","children":[]},{"level":3,"title":"例2：这是一个筛选器控件的样式设置页面，有两种样式：纵向、横向","slug":"例2-这是一个筛选器控件的样式设置页面-有两种样式-纵向、横向","link":"#例2-这是一个筛选器控件的样式设置页面-有两种样式-纵向、横向","children":[]}]},{"level":2,"title":"死板遵循设计法则","slug":"死板遵循设计法则","link":"#死板遵循设计法则","children":[]},{"level":2,"title":"过度假设用户行为","slug":"过度假设用户行为","link":"#过度假设用户行为","children":[]},{"level":2,"title":"过多展示内在业务逻辑","slug":"过多展示内在业务逻辑","link":"#过多展示内在业务逻辑","children":[]},{"level":2,"title":"过于把用户当「小白」","slug":"过于把用户当「小白」","link":"#过于把用户当「小白」","children":[]},{"level":2,"title":"盲目满足用户需求","slug":"盲目满足用户需求","link":"#盲目满足用户需求","children":[]},{"level":2,"title":"结语","slug":"结语","link":"#结语","children":[]}],"git":{"createdTime":1725051977000,"updatedTime":1725051977000,"contributors":[{"name":"him","email":"yph0228@163.com","commits":1}]},"readingTime":{"minutes":9.74,"words":2921},"filePathRelative":"exambook/other/Java-AnalNeed4.md","localizedDate":"2024年8月30日","autoDesc":true}')}}]);