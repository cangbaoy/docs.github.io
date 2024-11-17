import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as l,c as p,e as a,d as s,f as e,a as r,h as o,r as h}from"./app-BP00LZRS.js";const d={};function k(c,i){const t=h("RouteLink");return l(),p("div",null,[i[5]||(i[5]=a('<h2 id="使用开源脚手架快速开发" tabindex="-1"><a class="header-anchor" href="#使用开源脚手架快速开发"><span>使用开源脚手架快速开发</span></a></h2><ul><li><a href="https://repository.apache.org/content/repositories/releases/archetype-catalog.xml" target="_blank" rel="noopener noreferrer">脚手架地址</a>：下载到本地，引入到 <code>idea</code>-&gt;<code>Manage Catalogs</code> 配置中</li></ul><figure><img src="https://pic.sansei.top/images/custom/202411171532580.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://pic.sansei.top/images/custom/202411171532123.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="使用自定义maven脚手架快捷生成" tabindex="-1"><a class="header-anchor" href="#使用自定义maven脚手架快捷生成"><span>使用自定义Maven脚手架快捷生成</span></a></h2>',5)),s("ul",null,[s("li",null,[i[1]||(i[1]=e("自定义脚手架 ")),i[2]||(i[2]=s("code",null,"op-service-archetype",-1)),i[3]||(i[3]=e(" 需要云效制品仓库配置， 参考")),r(t,{to:"/develop-env/"},{default:o(()=>i[0]||(i[0]=[e("💖【前言】环境搭建")])),_:1})]),i[4]||(i[4]=s("li",null,[e("使用下面脚本命令时"),s("code",null,"PowerShell"),e("需要加"),s("code",null,'""'),e("，"),s("code",null,"CMD"),e("则不需要")],-1))]),i[6]||(i[6]=a(`<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mvn</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> archetype:generate</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">-DgroupId</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;com.open4play&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">-DartifactId</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;demo&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">-Dversion</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;1.0.0-SNAPSHOT&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">-Dpackage</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;com.open4play.demo&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">-DarchetypeArtifactId</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;op-service-archetype&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">-DarchetypeGroupId</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;com.open4play&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">-DarchetypeVersion</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;1.0.0-SNAPSHOT&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">-DappName</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;demo&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>替换为自己项目名称即可快速生成脚手架</p>`,2))])}const u=n(d,[["render",k],["__file","开发技巧.html.vue"]]),y=JSON.parse('{"path":"/develop-env/%E5%BC%80%E5%8F%91%E6%8A%80%E5%B7%A7.html","title":"1️⃣【开发】开发技巧","lang":"zh-CN","frontmatter":{"title":"1️⃣【开发】开发技巧","order":1,"description":"使用开源脚手架快速开发 脚手架地址：下载到本地，引入到 idea->Manage Catalogs 配置中 使用自定义Maven脚手架快捷生成 自定义脚手架 op-service-archetype 需要云效制品仓库配置， 参考 使用下面脚本命令时PowerShell需要加\\"\\"，CMD则不需要 替换为自己项目名称即可快速生成脚手架","head":[["meta",{"property":"og:url","content":"https://www.sansei.top/develop-env/%E5%BC%80%E5%8F%91%E6%8A%80%E5%B7%A7.html"}],["meta",{"property":"og:site_name","content":"川上富江"}],["meta",{"property":"og:title","content":"1️⃣【开发】开发技巧"}],["meta",{"property":"og:description","content":"使用开源脚手架快速开发 脚手架地址：下载到本地，引入到 idea->Manage Catalogs 配置中 使用自定义Maven脚手架快捷生成 自定义脚手架 op-service-archetype 需要云效制品仓库配置， 参考 使用下面脚本命令时PowerShell需要加\\"\\"，CMD则不需要 替换为自己项目名称即可快速生成脚手架"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://pic.sansei.top/images/custom/202411171532580.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-17T09:15:25.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-17T09:15:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"1️⃣【开发】开发技巧\\",\\"image\\":[\\"https://pic.sansei.top/images/custom/202411171532580.png\\",\\"https://pic.sansei.top/images/custom/202411171532123.png\\"],\\"dateModified\\":\\"2024-11-17T09:15:25.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"使用开源脚手架快速开发","slug":"使用开源脚手架快速开发","link":"#使用开源脚手架快速开发","children":[]},{"level":2,"title":"使用自定义Maven脚手架快捷生成","slug":"使用自定义maven脚手架快捷生成","link":"#使用自定义maven脚手架快捷生成","children":[]}],"git":{"createdTime":1731834925000,"updatedTime":1731834925000,"contributors":[{"name":"cangbao","email":"yph0228@163.com","commits":1}]},"readingTime":{"minutes":0.49,"words":148},"filePathRelative":"develop-env/开发技巧.md","localizedDate":"2024年11月17日","autoDesc":true}');export{u as comp,y as data};
