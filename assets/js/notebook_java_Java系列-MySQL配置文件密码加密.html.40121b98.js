"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3199],{105:(i,s)=>{s.A=(i,s)=>{const a=i.__vccOpts||i;for(const[i,n]of s)a[i]=n;return a}},4698:(i,s,a)=>{a.r(s),a.d(s,{comp:()=>t,data:()=>h});var n=a(6904);const l=[(0,n.Fv)('<h1 id="java系列-mysql配置文件密码加密" tabindex="-1"><a class="header-anchor" href="#java系列-mysql配置文件密码加密"><span>Java系列-MySQL配置文件密码加密</span></a></h1><h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2><p>数据库配置文件用户名，密码会暴露，又不想生产跟开发环境建来回切换，所以得加密数据库密码。</p><h2 id="正式开始" tabindex="-1"><a class="header-anchor" href="#正式开始"><span>正式开始</span></a></h2><h3 id="pom-xml" tabindex="-1"><a class="header-anchor" href="#pom-xml"><span>pom.xml</span></a></h3><div class="language-xml line-numbers-mode" data-highlighter="shiki" data-ext="xml" data-title="xml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&lt;!-- 数据库加密 --&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dependency</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">groupId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;com.github.ulisesbocchio&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">groupId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">artifactId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;jasypt-spring-boot-starter&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">artifactId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">version</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;2.1.0&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">version</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dependency</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="application-yml-properties-配置文件中加上盐值" tabindex="-1"><a class="header-anchor" href="#application-yml-properties-配置文件中加上盐值"><span>application.yml/properties 配置文件中加上盐值：</span></a></h3><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">#============================#</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">#=====   盐值  config   =====#</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">#============================#</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">jasypt</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  encryptor</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    password</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">page</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="编写测试类" tabindex="-1"><a class="header-anchor" href="#编写测试类"><span>编写测试类</span></a></h3><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B;">RunWith</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">SpringRunner</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">class</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">)</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B;">SpringBootTest</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> test_jiami</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    @</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B;">Autowired</span></span>\n<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">    StringEncryptor</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> stringEncryptor</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    @</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B;">Test</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> encryptPwd</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        String</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> result</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> stringEncryptor</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">encrypt</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;root&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">out</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(result);</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 这里面的参数是你的用户，然后返回来的是加密后的用户：EDvE8iJcFlM66AXg7H7D7g==</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">EDvE8iJcFlM66AXg7H7D7g</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">=</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="将加密后的密码复制到-application-yml-properties-配置文件中" tabindex="-1"><a class="header-anchor" href="#将加密后的密码复制到-application-yml-properties-配置文件中"><span>将加密后的密码复制到 <code>application.yml/properties</code> 配置文件中</span></a></h3><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">spring</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  datasource</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>\n<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">    ...</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    username</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">ENC(EDvE8iJcFlM66AXg7H7D7g==)</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    password</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">ENC(jj0Jn32323232323232323232443bkL57)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="额外补充" tabindex="-1"><a class="header-anchor" href="#额外补充"><span>额外补充</span></a></h2><p>如果一不小心将你的密码在测试代码中提交上去，岂不是白加密了吗，其实还有一种方法：</p><p>在你的<code>maven</code>仓库中找到：<code>D:\\Devlop\\Maven\\apache-maven-3.6.1\\repo\\org\\jasypt\\jasypt\\1.9.2</code>，这个包就是加密的包了</p><p>cmd在这个包下执行如下命令，它会返回你加密后的密码：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">java</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -cp</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> jasypt-1.9.2.jar</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> org.jasypt.intf.cli.JasyptPBEStringEncryptionCLI</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> input=&quot;root&quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> password=other</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> algorithm=PBEWithMD5AndDES</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>其中：</p><ul><li><code>input</code>:是数据库的明文密码</li><li><code>password</code>：是机密的盐</li><li><code>algorithm</code>：是加密的方式(默认)</li></ul><p>然后在配置文件中把盐加进去就ok了</p><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">#============================#</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">#=====   盐值  config   =====#</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">#============================#</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">jasypt</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  encryptor</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    password</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">page</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',22)],e={},t=(0,a(105).A)(e,[["render",function(i,s){return(0,n.uX)(),(0,n.CE)("div",null,l)}]]),h=JSON.parse('{"path":"/notebook/java/Java%E7%B3%BB%E5%88%97-MySQL%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E5%AF%86%E7%A0%81%E5%8A%A0%E5%AF%86.html","title":"Java系列-MySQL配置文件密码加密","lang":"zh-CN","frontmatter":{"description":"Java系列-MySQL配置文件密码加密 概述 数据库配置文件用户名，密码会暴露，又不想生产跟开发环境建来回切换，所以得加密数据库密码。 正式开始 pom.xml application.yml/properties 配置文件中加上盐值： 编写测试类 将加密后的密码复制到 application.yml/properties 配置文件中 额外补充 如果...","head":[["meta",{"property":"og:url","content":"https://www.sansei.top/notebook/java/Java%E7%B3%BB%E5%88%97-MySQL%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E5%AF%86%E7%A0%81%E5%8A%A0%E5%AF%86.html"}],["meta",{"property":"og:site_name","content":"川上富江"}],["meta",{"property":"og:title","content":"Java系列-MySQL配置文件密码加密"}],["meta",{"property":"og:description","content":"Java系列-MySQL配置文件密码加密 概述 数据库配置文件用户名，密码会暴露，又不想生产跟开发环境建来回切换，所以得加密数据库密码。 正式开始 pom.xml application.yml/properties 配置文件中加上盐值： 编写测试类 将加密后的密码复制到 application.yml/properties 配置文件中 额外补充 如果..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-30T21:06:17.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-30T21:06:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java系列-MySQL配置文件密码加密\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-30T21:06:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"正式开始","slug":"正式开始","link":"#正式开始","children":[{"level":3,"title":"pom.xml","slug":"pom-xml","link":"#pom-xml","children":[]},{"level":3,"title":"application.yml/properties 配置文件中加上盐值：","slug":"application-yml-properties-配置文件中加上盐值","link":"#application-yml-properties-配置文件中加上盐值","children":[]},{"level":3,"title":"编写测试类","slug":"编写测试类","link":"#编写测试类","children":[]},{"level":3,"title":"将加密后的密码复制到 application.yml/properties 配置文件中","slug":"将加密后的密码复制到-application-yml-properties-配置文件中","link":"#将加密后的密码复制到-application-yml-properties-配置文件中","children":[]}]},{"level":2,"title":"额外补充","slug":"额外补充","link":"#额外补充","children":[]}],"git":{"createdTime":1725051977000,"updatedTime":1725051977000,"contributors":[{"name":"him","email":"yph0228@163.com","commits":1}]},"readingTime":{"minutes":1.11,"words":332},"filePathRelative":"notebook/java/Java系列-MySQL配置文件密码加密.md","localizedDate":"2024年8月30日","autoDesc":true}')}}]);