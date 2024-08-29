"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[577],{105:(i,s)=>{s.A=(i,s)=>{const a=i.__vccOpts||i;for(const[i,e]of s)a[i]=e;return a}},2834:(i,s,a)=>{a.r(s),a.d(s,{comp:()=>h,data:()=>p});var e=a(6904);const n=(0,e.Fv)('<h1 id="idea-安装与配置" tabindex="-1"><a class="header-anchor" href="#idea-安装与配置"><span>IDEA 安装与配置</span></a></h1><h2 id="工具地址" tabindex="-1"><a class="header-anchor" href="#工具地址"><span>工具地址</span></a></h2><table><thead><tr><th>工具</th><th>下载地址</th></tr></thead><tbody><tr><td><strong>Intellij IDEA</strong></td><td><a href="https://www.jetbrains.com/idea/download" target="_blank" rel="noopener noreferrer">点我获取</a></td></tr><tr><td><strong>jetbrains-agent.jar</strong></td><td><a href="https://share.weiyun.com/5f85zUI" target="_blank" rel="noopener noreferrer">点我获取</a></td></tr></tbody></table><h2 id="安装-idea-2019-3-3" tabindex="-1"><a class="header-anchor" href="#安装-idea-2019-3-3"><span>安装 IDEA 2019.3.3</span></a></h2><p>安装 IDEA 2019.3.3 x64 版 没什么好说, 默认安装就行</p><h2 id="idea-2019-3-3-激活教程" tabindex="-1"><a class="header-anchor" href="#idea-2019-3-3-激活教程"><span>IDEA 2019.3.3 激活教程</span></a></h2><div class="hint-container warning"><p class="hint-container-title">注意</p><p><strong>如果之前有在 Hosts 文件中配置过与 JetBrains 相关的请删除，否则会报 <code>1653219</code> 错误</strong></p></div><h3 id="启动idea" tabindex="-1"><a class="header-anchor" href="#启动idea"><span>启动IDEA</span></a></h3><p>我们选择 <strong>Evaluate for free</strong> 方式启动（评估版）</p><h3 id="配置激活" tabindex="-1"><a class="header-anchor" href="#配置激活"><span>配置激活</span></a></h3><ul><li><code>Configure</code> -&gt; <code>Edit Custom VM Options</code></li></ul><figure><img src="https://pic.sansei.top/images/idea/idea_20190804161126.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>编辑窗口末行添加：<code>-javaagent:/absolute/path/to/jetbrains-agent.jar</code>，如下图所示</li></ul><figure><img src="https://pic.sansei.top/images/idea/idea_20190804161202.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>重启 <code>IDEA</code></li></ul><h3 id="激活配置" tabindex="-1"><a class="header-anchor" href="#激活配置"><span>激活配置</span></a></h3><ul><li><p><code>Configure</code> -&gt; <code>Manage License</code></p></li><li><p>激活注册码</p></li></ul><div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" data-title="text" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>A76294VQGS-eyJsaWNlbnNlSWQiOiJBNzYyOTRWUUdTIiwibGljZW5zZWVOYW1lIjoidG9wc2FsZSIsImFzc2lnbmVlTmFtZSI6IiIsImFzc2lnbmVlRW1haWwiOiIiLCJsaWNlbnNlUmVzdHJpY3Rpb24iOiIiLCJjaGVja0NvbmN1cnJlbnRVc2UiOmZhbHNlLCJwcm9kdWN0cyI6W3siY29kZSI6IklJIiwiZmFsbGJhY2tEYXRlIjoiMjA4OS0wNy0wNyIsInBhaWRVcFRvIjoiMjA4OS0wNy0wNyJ9LHsiY29kZSI6IkFDIiwiZmFsbGJhY2tEYXRlIjoiMjA4OS0wNy0wNyIsInBhaWRVcFRvIjoiMjA4OS0wNy0wNyJ9LHsiY29kZSI6IkRQTiIsImZhbGxiYWNrRGF0ZSI6IjIwODktMDctMDciLCJwYWlkVXBUbyI6IjIwODktMDctMDcifSx7ImNvZGUiOiJQUyIsImZhbGxiYWNrRGF0ZSI6IjIwODktMDctMDciLCJwYWlkVXBUbyI6IjIwODktMDctMDcifSx7ImNvZGUiOiJHTyIsImZhbGxiYWNrRGF0ZSI6IjIwODktMDctMDciLCJwYWlkVXBUbyI6IjIwODktMDctMDcifSx7ImNvZGUiOiJETSIsImZhbGxiYWNrRGF0ZSI6IjIwODktMDctMDciLCJwYWlkVXBUbyI6IjIwODktMDctMDcifSx7ImNvZGUiOiJDTCIsImZhbGxiYWNrRGF0ZSI6IjIwODktMDctMDciLCJwYWlkVXBUbyI6IjIwODktMDctMDcifSx7ImNvZGUiOiJSUzAiLCJmYWxsYmFja0RhdGUiOiIyMDg5LTA3LTA3IiwicGFpZFVwVG8iOiIyMDg5LTA3LTA3In0seyJjb2RlIjoiUkMiLCJmYWxsYmFja0RhdGUiOiIyMDg5LTA3LTA3IiwicGFpZFVwVG8iOiIyMDg5LTA3LTA3In0seyJjb2RlIjoiUkQiLCJmYWxsYmFja0RhdGUiOiIyMDg5LTA3LTA3IiwicGFpZFVwVG8iOiIyMDg5LTA3LTA3In0seyJjb2RlIjoiUEMiLCJmYWxsYmFja0RhdGUiOiIyMDg5LTA3LTA3IiwicGFpZFVwVG8iOiIyMDg5LTA3LTA3In0seyJjb2RlIjoiUk0iLCJmYWxsYmFja0RhdGUiOiIyMDg5LTA3LTA3IiwicGFpZFVwVG8iOiIyMDg5LTA3LTA3In0seyJjb2RlIjoiV1MiLCJmYWxsYmFja0RhdGUiOiIyMDg5LTA3LTA3IiwicGFpZFVwVG8iOiIyMDg5LTA3LTA3In0seyJjb2RlIjoiREIiLCJmYWxsYmFja0RhdGUiOiIyMDg5LTA3LTA3IiwicGFpZFVwVG8iOiIyMDg5LTA3LTA3In0seyJjb2RlIjoiREMiLCJmYWxsYmFja0RhdGUiOiIyMDg5LTA3LTA3IiwicGFpZFVwVG8iOiIyMDg5LTA3LTA3In0seyJjb2RlIjoiUlNVIiwiZmFsbGJhY2tEYXRlIjoiMjA4OS0wNy0wNyIsInBhaWRVcFRvIjoiMjA4OS0wNy0wNyJ9XSwiaGFzaCI6IjEyNzk2ODc3LzAiLCJncmFjZVBlcmlvZERheXMiOjcsImF1dG9Qcm9sb25nYXRlZCI6ZmFsc2UsImlzQXV0b1Byb2xvbmdhdGVkIjpmYWxzZX0=-wDmwAeNapDcGn2o7OXfBNyOI8mlef7xz1StskgVdTIYg2wUsdYYjAdJ/WITVHYqdB/mrmbwFVAMp/GWFxHIHecsPe/i0vWxTe7ZhScT2PASbZqn8zQ5f1ckP90lyzSG6mIkrUFaMUhHGDysiP8hqZbdvkBAqmJrOmFulU2x/YsZfnAl4tIlj78gMi1UYJaktpwTMj6ee25jn0/N8XSqNDcnYz/kJUciKpVDsu+wja3T6M+unt3ZEOoKmqdkIg7EsbZvIJY2+uLGdWp4Y2Kopg26graxcEQHLjgVtlnXtlpZRauDAK6EM87u+lGkReBTD4RCSysB+Vt1yNo/rRC7kMw==-MIIElTCCAn2gAwIBAgIBCTANBgkqhkiG9w0BAQsFADAYMRYwFAYDVQQDDA1KZXRQcm9maWxlIENBMB4XDTE4MTEwMTEyMjk0NloXDTIwMTEwMjEyMjk0NlowaDELMAkGA1UEBhMCQ1oxDjAMBgNVBAgMBU51c2xlMQ8wDQYDVQQHDAZQcmFndWUxGTAXBgNVBAoMEEpldEJyYWlucyBzLnIuby4xHTAbBgNVBAMMFHByb2QzeS1mcm9tLTIwMTgxMTAxMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA5ndaik1GD0nyTdqkZgURQZGW+RGxCdBITPXIwpjhhaD0SXGa4XSZBEBoiPdY6XV6pOfUJeyfi9dXsY4MmT0D+sKoST3rSw96xaf9FXPvOjn4prMTdj3Ji3CyQrGWeQU2nzYqFrp1QYNLAbaViHRKuJrYHI6GCvqCbJe0LQ8qqUiVMA9wG/PQwScpNmTF9Kp2Iej+Z5OUxF33zzm+vg/nYV31HLF7fJUAplI/1nM+ZG8K+AXWgYKChtknl3sW9PCQa3a3imPL9GVToUNxc0wcuTil8mqveWcSQCHYxsIaUajWLpFzoO2AhK4mfYBSStAqEjoXRTuj17mo8Q6M2SHOcwIDAQABo4GZMIGWMAkGA1UdEwQCMAAwHQYDVR0OBBYEFGEpG9oZGcfLMGNBkY7SgHiMGgTcMEgGA1UdIwRBMD+AFKOetkhnQhI2Qb1t4Lm0oFKLl/GzoRykGjAYMRYwFAYDVQQDDA1KZXRQcm9maWxlIENBggkA0myxg7KDeeEwEwYDVR0lBAwwCgYIKwYBBQUHAwEwCwYDVR0PBAQDAgWgMA0GCSqGSIb3DQEBCwUAA4ICAQBonMu8oa3vmNAa4RQP8gPGlX3SQaA3WCRUAj6Zrlk8AesKV1YSkh5D2l+yUk6njysgzfr1bIR5xF8eup5xXc4/G7NtVYRSMvrd6rfQcHOyK5UFJLm+8utmyMIDrZOzLQuTsT8NxFpbCVCfV5wNRu4rChrCuArYVGaKbmp9ymkw1PU6+HoO5i2wU3ikTmRv8IRjrlSStyNzXpnPTwt7bja19ousk56r40SmlmC04GdDHErr0ei2UbjUua5kw71Qn9g02tL9fERI2sSRjQrvPbn9INwRWl5+k05mlKekbtbu2ev2woJFZK4WEXAd/GaAdeZZdumv8T2idDFL7cAirJwcrbfpawPeXr52oKTPnXfi0l5+g9Gnt/wfiXCrPElX6ycTR6iL3GC2VR4jTz6YatT4Ntz59/THOT7NJQhr6AyLkhhJCdkzE2cob/KouVp4ivV7Q3Fc6HX7eepHAAF/DpxwgOrg9smX6coXLgfp0b1RU2u/tUNID04rpNxTMueTtrT8WSskqvaJd3RH8r7cnRj6Y2hltkja82HlpDURDxDTRvv+krbwMr26SB/40BjpMUrDRCeKuiBahC0DCoU/4+ze1l94wVUhdkCfL0GpJrMSCDEK+XEurU18Hb7WT+ThXbkdl6VpFdHsRvqAnhR2g4b+Qzgidmuky5NUZVfEaZqV/g==</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>支持到 <code>2089</code> 年</li></ul><figure><img src="https://pic.sansei.top/images/idea/idea_20190804162127.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="idea-的一些开发配置" tabindex="-1"><a class="header-anchor" href="#idea-的一些开发配置"><span>IDEA 的一些开发配置</span></a></h2><h3 id="配置-jdk" tabindex="-1"><a class="header-anchor" href="#配置-jdk"><span>配置 JDK</span></a></h3><p><code>Configure</code> -&gt; <code>Structure for New Projects</code></p><figure><img src="https://pic.sansei.top/images/idea/idea_20190804163129.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="配置-maven" tabindex="-1"><a class="header-anchor" href="#配置-maven"><span>配置 Maven</span></a></h3><p><code>Configure</code> -&gt; <code>Settings</code> -&gt; <code>Build, Execution, Deployment</code> -&gt; <code>Build Tools</code> -&gt; <code>Maven</code></p><figure><img src="https://pic.sansei.top/images/idea/idea_20190804163543.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="配置-包导入-问题" tabindex="-1"><a class="header-anchor" href="#配置-包导入-问题"><span>配置 包导入 <code>.*</code> 问题</span></a></h3><p><code>Configure</code> -&gt; <code>Settings</code> -&gt; <code>Editor</code> -&gt; <code>Code Style</code> -&gt; <code>Java</code> -&gt; <code>Imports</code></p><figure><img src="https://pic.sansei.top/images/idea/idea_20190910234223.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="配置-自定义注释" tabindex="-1"><a class="header-anchor" href="#配置-自定义注释"><span>配置 自定义注释</span></a></h3><p><code>Configure</code> -&gt; <code>Settings</code> -&gt; <code>Editor</code> -&gt; <code>Live Templates</code></p><h4 id="第一种注释配置" tabindex="-1"><a class="header-anchor" href="#第一种注释配置"><span>第一种注释配置</span></a></h4><ul><li>在 <code>Template text</code> 里输入如下内容</li></ul><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">/**</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> *</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> $context</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">$</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> */</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>点击 <code>Edit variables</code> 并输入如下表达式</li></ul><div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" data-title="text" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>groovyScript(&quot;D:\\\\Workspaces\\\\live_template.groovy&quot;, currentPackage(), className(), methodName(), jsMethodName(), methodParameters(), methodReturnType(), date(&quot;yyyy-MM-dd&quot;), time(&quot;HH:mm:ss&quot;), user())</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>在 <code>D</code> 盘 <code>JetBrains\\plugins</code> 目录下创建一个名为 <code>live_template.groovy</code> 的脚本，代码如下</li></ul><div class="language-groovy line-numbers-mode" data-highlighter="shiki" data-ext="groovy" data-title="groovy" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">def</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> version</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;1.0.0&quot;</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">def</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> packageName</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;"> _1;</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">def</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> className</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;"> _2;</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">def</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> methodName</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;"> _3;</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">def</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> jsMethodName</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;"> _4;</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">def</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> methodParameters</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;"> _5;</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">def</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> methodReturnType</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;"> _6;</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">def</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> date</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;"> _7;</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">def</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> time</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;"> _8;</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">def</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> author</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;him&quot;</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">def</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> result</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;&quot;</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">result </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\n</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">// 生成方法参数列表</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">def</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> outputParams</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;&quot;</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(param in methodParameters) {</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    outputParams </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot; * @param &quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> +</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> param </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\n</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">// 生成返回类型</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">def</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> outputReturnType</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;&quot;</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (methodReturnType </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">!=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;void&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    outputReturnType </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot; * @return &quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> +</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> methodReturnType;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">def</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> outputDescription</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;&quot;</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">outputDescription </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot; * &lt;p&gt;&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">outputDescription </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot; Description:</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\n</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">outputDescription </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot; * </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\n</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">def</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> outputAuthor</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot; * @author &quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> +</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;"> author </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\n</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">def</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> outputVersion</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot; * @version &quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> +</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;"> version </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\n</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">def</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> outputDatetime</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot; * @since &quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> +</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;"> date </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot; &quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> +</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;"> time </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\n</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">def</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> outputPackageName</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot; * @see &quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> +</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;"> packageName;</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">// 作用在方法上</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (methodName) {</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\tresult </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> outputParams;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\tresult </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> outputReturnType;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">// 作用在 JS 方法上</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">else</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (jsMethodName) {</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\t</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">// 其它</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">else</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\tresult </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> outputDescription;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\tresult </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> outputAuthor;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\tresult </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> outputVersion;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\tresult </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> outputDatetime;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\tresult </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> outputPackageName;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> result;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>最后在类上输入 <code>csdn</code> + <code>Enter</code> 键看看效果吧</li></ul><h4 id="第二种注释配置" tabindex="-1"><a class="header-anchor" href="#第二种注释配置"><span>第二种注释配置</span></a></h4><figure><img src="https://pic.sansei.top/images/idea/idea_20190804164248.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://pic.sansei.top/images/idea/idea_20190804164303.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">groovyScript</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;D:</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\\\</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">JetBrains</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\\\</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">plugins</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\\\</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">live_template.groovy&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">currentPackage</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(), </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">className</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(), </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">methodName</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(), </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">jsMethodName</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(), </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">methodParameters</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(), </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">methodReturnType</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(), </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">date</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;yyyy-MM-dd&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">), </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">time</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;HH:mm:ss&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">))</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>PS</strong>:其他的就看个人喜好配置了</p><h2 id="开发插件安装" tabindex="-1"><a class="header-anchor" href="#开发插件安装"><span>开发插件安装</span></a></h2><p><strong>个人常用的插件有</strong></p>',47),t=(0,e.Fv)('<h3 id="idea-在线安装即可" tabindex="-1"><a class="header-anchor" href="#idea-在线安装即可"><span>IDEA 在线安装即可</span></a></h3><ul><li><code>Configure</code> -&gt; <code>Plugins</code> -&gt; <code>Marketplace</code> 在输入框中输入插件名 点击 <code>Install</code> 即可安装</li></ul><figure><img src="https://pic.sansei.top/images/idea/idea_20190805102019.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li><code>Configure</code> -&gt; <code>Plugins</code> -&gt; <code>Installed</code> 查看安装的插件</li></ul><figure><img src="https://pic.sansei.top/images/idea/idea_20190805102104.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>PS:</strong> 插件安装方式很多，地址安装,zip安装,安装路径Plugins文件安装 ... 按个人喜好来吧</p><h2 id="jrebel-激活教程" tabindex="-1"><a class="header-anchor" href="#jrebel-激活教程"><span>JRebel 激活教程</span></a></h2><ul><li>工具下载</li></ul><table><thead><tr><th>工具</th><th>下载地址</th></tr></thead><tbody><tr><td><strong>JRebel 应用程序</strong></td><td><a href="https://share.weiyun.com/58Pencx" target="_blank" rel="noopener noreferrer">点我获取</a></td></tr><tr><td><strong>GUID 生成工具</strong></td><td><a href="http://www.ofmonkey.com/transfer/guid" target="_blank" rel="noopener noreferrer">点我获取</a></td></tr></tbody></table><ul><li><p>运行压缩包内的 <code>ReverseProxy_windows_amd64.exe</code> 应用程序</p></li><li><p>输入授权地址（后面一串 <code>GUID</code> 可以自行生成）：<code>http://127.0.0.1:8888/ae6a7dd7-fc4a-4044-8266-7d8220ae6567</code></p></li></ul><figure><img src="https://pic.sansei.top/images/idea/idea_20190805101452.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>设置为离线模式，可以 <code>180</code> 天免激活</li></ul><figure><img src="https://pic.sansei.top/images/idea/idea_20190805101550.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="generateallsetter-插件安装" tabindex="-1"><a class="header-anchor" href="#generateallsetter-插件安装"><span>GenerateAllSetter 插件安装</span></a></h2><ul><li>一键调用一个对象的所有的set方法</li></ul><figure><img src="https://pic.sansei.top/images/idea/idea_20190911014955.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://pic.sansei.top/images/idea/idea_20190911015036.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',17),l={},h=(0,a(105).A)(l,[["render",function(i,s){const a=(0,e.g2)("Badge");return(0,e.uX)(),(0,e.CE)("div",null,[n,(0,e.Lk)("blockquote",null,[(0,e.Lk)("ul",null,[(0,e.Lk)("li",null,[(0,e.bF)(a,{text:"Lombak",vertical:"middle"})]),(0,e.Lk)("li",null,[(0,e.bF)(a,{text:"Alibaba Java Code Guideline",vertical:"middle"})]),(0,e.Lk)("li",null,[(0,e.bF)(a,{text:"Arthas Idea",vertical:"middle"})]),(0,e.Lk)("li",null,[(0,e.bF)(a,{text:"Codota",vertical:"middle"})]),(0,e.Lk)("li",null,[(0,e.bF)(a,{text:"CamelCase",vertical:"middle"})]),(0,e.Lk)("li",null,[(0,e.bF)(a,{text:"CodeGlance",vertical:"middle"})]),(0,e.Lk)("li",null,[(0,e.bF)(a,{text:"GitToolBox",vertical:"middle"})]),(0,e.Lk)("li",null,[(0,e.bF)(a,{text:"Git Commit Template",vertical:"middle"})]),(0,e.Lk)("li",null,[(0,e.bF)(a,{text:"GitToolBox",vertical:"middle"})]),(0,e.Lk)("li",null,[(0,e.bF)(a,{text:"GenerateAllSetter",vertical:"middle"})]),(0,e.Lk)("li",null,[(0,e.bF)(a,{text:"GsonFormatPlus",vertical:"middle"})]),(0,e.Lk)("li",null,[(0,e.bF)(a,{text:"Maven Helper",vertical:"middle"})]),(0,e.Lk)("li",null,[(0,e.bF)(a,{text:"MyBatis Log Plugin",vertical:"middle"})]),(0,e.Lk)("li",null,[(0,e.bF)(a,{text:"MybatisCodeHelperPro",vertical:"middle"})]),(0,e.Lk)("li",null,[(0,e.bF)(a,{text:"JRebel For Intellij",vertical:"middle"})]),(0,e.Lk)("li",null,[(0,e.bF)(a,{text:"RESTfulToolkit",vertical:"middle"})]),(0,e.Lk)("li",null,[(0,e.bF)(a,{text:"RoboPOJOGenerator",vertical:"middle"})]),(0,e.Lk)("li",null,[(0,e.bF)(a,{text:"Translation",vertical:"middle"})]),(0,e.Lk)("li",null,[(0,e.bF)(a,{text:"Save Actions",vertical:"middle"})]),(0,e.Lk)("li",null,[(0,e.bF)(a,{text:"Bito Chatgpt",vertical:"middle"})])])]),t])}]]),p=JSON.parse('{"path":"/guide/base/tools/IDEA%E5%AE%89%E8%A3%85%E4%B8%8E%E9%85%8D%E7%BD%AE.html","title":"IDEA 安装与配置","lang":"zh-CN","frontmatter":{"title":"IDEA 安装与配置","icon":"wand-magic-sparkles","order":10,"category":["软件"],"tag":["软件"],"description":"IDEA 安装与配置 工具地址 安装 IDEA 2019.3.3 安装 IDEA 2019.3.3 x64 版 没什么好说, 默认安装就行 IDEA 2019.3.3 激活教程 注意 如果之前有在 Hosts 文件中配置过与 JetBrains 相关的请删除，否则会报 1653219 错误 启动IDEA 我们选择 Evaluate for free 方...","head":[["meta",{"property":"og:url","content":"https://www.sansei.top/guide/base/tools/IDEA%E5%AE%89%E8%A3%85%E4%B8%8E%E9%85%8D%E7%BD%AE.html"}],["meta",{"property":"og:site_name","content":"川上富江"}],["meta",{"property":"og:title","content":"IDEA 安装与配置"}],["meta",{"property":"og:description","content":"IDEA 安装与配置 工具地址 安装 IDEA 2019.3.3 安装 IDEA 2019.3.3 x64 版 没什么好说, 默认安装就行 IDEA 2019.3.3 激活教程 注意 如果之前有在 Hosts 文件中配置过与 JetBrains 相关的请删除，否则会报 1653219 错误 启动IDEA 我们选择 Evaluate for free 方..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://pic.sansei.top/images/idea/idea_20190804161126.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-29T05:33:18.000Z"}],["meta",{"property":"article:tag","content":"软件"}],["meta",{"property":"article:modified_time","content":"2024-08-29T05:33:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"IDEA 安装与配置\\",\\"image\\":[\\"https://pic.sansei.top/images/idea/idea_20190804161126.png\\",\\"https://pic.sansei.top/images/idea/idea_20190804161202.png\\",\\"https://pic.sansei.top/images/idea/idea_20190804162127.png\\",\\"https://pic.sansei.top/images/idea/idea_20190804163129.png\\",\\"https://pic.sansei.top/images/idea/idea_20190804163543.png\\",\\"https://pic.sansei.top/images/idea/idea_20190910234223.png\\",\\"https://pic.sansei.top/images/idea/idea_20190804164248.png\\",\\"https://pic.sansei.top/images/idea/idea_20190804164303.png\\",\\"https://pic.sansei.top/images/idea/idea_20190805102019.png\\",\\"https://pic.sansei.top/images/idea/idea_20190805102104.png\\",\\"https://pic.sansei.top/images/idea/idea_20190805101452.png\\",\\"https://pic.sansei.top/images/idea/idea_20190805101550.png\\",\\"https://pic.sansei.top/images/idea/idea_20190911014955.png\\",\\"https://pic.sansei.top/images/idea/idea_20190911015036.png\\"],\\"dateModified\\":\\"2024-08-29T05:33:18.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"工具地址","slug":"工具地址","link":"#工具地址","children":[]},{"level":2,"title":"安装 IDEA 2019.3.3","slug":"安装-idea-2019-3-3","link":"#安装-idea-2019-3-3","children":[]},{"level":2,"title":"IDEA 2019.3.3 激活教程","slug":"idea-2019-3-3-激活教程","link":"#idea-2019-3-3-激活教程","children":[{"level":3,"title":"启动IDEA","slug":"启动idea","link":"#启动idea","children":[]},{"level":3,"title":"配置激活","slug":"配置激活","link":"#配置激活","children":[]},{"level":3,"title":"激活配置","slug":"激活配置","link":"#激活配置","children":[]}]},{"level":2,"title":"IDEA 的一些开发配置","slug":"idea-的一些开发配置","link":"#idea-的一些开发配置","children":[{"level":3,"title":"配置 JDK","slug":"配置-jdk","link":"#配置-jdk","children":[]},{"level":3,"title":"配置 Maven","slug":"配置-maven","link":"#配置-maven","children":[]},{"level":3,"title":"配置 包导入 .* 问题","slug":"配置-包导入-问题","link":"#配置-包导入-问题","children":[]},{"level":3,"title":"配置 自定义注释","slug":"配置-自定义注释","link":"#配置-自定义注释","children":[]}]},{"level":2,"title":"开发插件安装","slug":"开发插件安装","link":"#开发插件安装","children":[{"level":3,"title":"IDEA 在线安装即可","slug":"idea-在线安装即可","link":"#idea-在线安装即可","children":[]}]},{"level":2,"title":"JRebel 激活教程","slug":"jrebel-激活教程","link":"#jrebel-激活教程","children":[]},{"level":2,"title":"GenerateAllSetter 插件安装","slug":"generateallsetter-插件安装","link":"#generateallsetter-插件安装","children":[]}],"git":{"createdTime":1724909598000,"updatedTime":1724909598000,"contributors":[{"name":"him","email":"yph0228@163.com","commits":1}]},"readingTime":{"minutes":2.91,"words":872},"filePathRelative":"guide/base/tools/IDEA安装与配置.md","localizedDate":"2024年8月29日","autoDesc":true}')}}]);