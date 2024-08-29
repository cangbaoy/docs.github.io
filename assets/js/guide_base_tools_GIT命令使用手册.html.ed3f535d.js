"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[218],{105:(i,s)=>{s.A=(i,s)=>{const a=i.__vccOpts||i;for(const[i,n]of s)a[i]=n;return a}},9326:(i,s,a)=>{a.r(s),a.d(s,{comp:()=>e,data:()=>h});var n=a(6904);const l=[(0,n.Fv)('<h2 id="工具地址" tabindex="-1"><a class="header-anchor" href="#工具地址"><span>工具地址</span></a></h2><table><thead><tr><th>工具</th><th>下载地址</th></tr></thead><tbody><tr><td><strong>Git For Windows</strong></td><td><a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">点我获取</a></td></tr><tr><td><strong>TortoiseGit For 64-bit Windows</strong></td><td><a href="https://tortoisegit.org/download/" target="_blank" rel="noopener noreferrer">点我获取</a></td></tr><tr><td><strong>TortoiseGit Language Packss</strong></td><td><a href="https://tortoisegit.org/download/" target="_blank" rel="noopener noreferrer">点我获取</a></td></tr></tbody></table><h2 id="版本库命令详解" tabindex="-1"><a class="header-anchor" href="#版本库命令详解"><span>版本库命令详解</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 初始化当前工作区</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> init</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 查了当前工作区的状态</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> status</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 添加文件到暂存</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> add</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">filenam</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">e&gt; </span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 提交所有变化到暂存</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> add</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -A</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 提交被修改(modified)和被删除(deleted)文件，不包括新文件(new)到暂存</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> add</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -u</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 提交新文件(new)和被修改(modified)文件，不包括被删除(deleted)文件到暂存，Ps：在Git 2.x版本中 `git add .` === `git add -A`</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> add</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> .</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 将存入暂存区修改内容提交至本地仓库中</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> commit</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -m</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">本地提交的描</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">述&gt; </span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 提交所有修改到暂存，并提交到本地仓库</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> commit</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -am</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">本地提交的描</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">述&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="分支命令详解" tabindex="-1"><a class="header-anchor" href="#分支命令详解"><span>分支命令详解</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 列出所有分支，当前分支前面会标一个*号</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> branch</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 创建新分支</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> branch</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">branch</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> nam</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">e&gt; </span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 切换到指定分支</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> checkout</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">branch</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> nam</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">e&gt; </span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 创建新分支，并切换到新分支，例如：git checkout -b dev === git branch dev &amp;&amp; git checkout dev</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> checkout</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -b</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">branch</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> nam</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">e&gt; </span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 拉去远端的指定分支到本地</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> checkout</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -b</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">local</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> branch</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> nam</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">e&gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">origin/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">origin</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> branch</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> nam</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">e&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="合并分支命令详解" tabindex="-1"><a class="header-anchor" href="#合并分支命令详解"><span>合并分支命令详解</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 当前分支合并指定分支</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> merge</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">branch</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> nam</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">e&gt; </span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 删除指定分支</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> branch</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -d</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">branch</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> nam</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">e&gt; </span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 删除远端分支，分支前的冒号代表删除</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> push</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> origin</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> :</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">branch</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> nam</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">e&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="添加远端地址命令详解" tabindex="-1"><a class="header-anchor" href="#添加远端地址命令详解"><span>添加远端地址命令详解</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 添加远端仓库地址</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> remote</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> add</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> origin</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">远端地</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">址&gt;  </span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 提交到远端分支</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> push</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -u</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> origin</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">branch</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> nam</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">e&gt; </span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 查看有哪些远端分支</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> branch</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 删除指定远端分支</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> push</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> origin</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --delete</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">远端分支名</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">称&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="版本回退命令详解" tabindex="-1"><a class="header-anchor" href="#版本回退命令详解"><span>版本回退命令详解</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 显示提交日志，展示不那么漂亮</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 查看提交日志，在一行展示，更漂亮</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> log</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --pretty=oneline</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 通过git log 查看提交历史以确定要回到的位置，并拿到想回到的commit id 执行之</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> reset</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --hard</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [commit </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">id]</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 查看所有执行的git命令 可以用来查找回滚之前的 commit id 在使用git reset --hard 回滚过去</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> reflog</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="标签" tabindex="-1"><a class="header-anchor" href="#标签"><span>标签</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 切换到需要打标签的分支 </span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> checkout</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">branch</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> nam</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">e&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> tag</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">tag</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> nam</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">e&gt; [commit </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">id]</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 给当前commit创建一个新标签</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> tag</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> v0.0.1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 给指定commit创建一个新标签</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> tag</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> v0.9.0</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> f52c633</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 查看所有标签命令详解</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> tag</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 给指定标签指定信息</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> tag</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">tagnam</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">e&gt; </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">-m</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;标签信息&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="远端标签" tabindex="-1"><a class="header-anchor" href="#远端标签"><span>远端标签</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 推送指定标签到远端</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> push</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> origin</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">tag</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> nam</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">e&gt; </span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 推送全部未推送的标签到远端</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> push</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> origin</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --tags</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="删除指定标签" tabindex="-1"><a class="header-anchor" href="#删除指定标签"><span>删除指定标签</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 删除本地指定标签</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> tag</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -d</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">tag</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> nam</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">e&gt; </span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 删除远端指定标签</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> push</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> origin</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> :refs/tags/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">tag</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> nam</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">e&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="忽略已入库文件的修改" tabindex="-1"><a class="header-anchor" href="#忽略已入库文件的修改"><span>忽略已入库文件的修改</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 忽略已入库的filename文件的修改</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> update-index</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --assume-unchanged</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [filename] </span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 反操作</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> update-index</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --no-assume-unchanged</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [filename]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',20)],t={},e=(0,a(105).A)(t,[["render",function(i,s){return(0,n.uX)(),(0,n.CE)("div",null,l)}]]),h=JSON.parse('{"path":"/guide/base/tools/GIT%E5%91%BD%E4%BB%A4%E4%BD%BF%E7%94%A8%E6%89%8B%E5%86%8C.html","title":"GIT 命令使用手册","lang":"zh-CN","frontmatter":{"title":"GIT 命令使用手册","icon":"wand-magic-sparkles","order":1,"category":["软件"],"tag":["软件"],"description":"工具地址 版本库命令详解 分支命令详解 合并分支命令详解 添加远端地址命令详解 版本回退命令详解 标签 远端标签 删除指定标签 忽略已入库文件的修改","head":[["meta",{"property":"og:url","content":"https://www.sansei.top/guide/base/tools/GIT%E5%91%BD%E4%BB%A4%E4%BD%BF%E7%94%A8%E6%89%8B%E5%86%8C.html"}],["meta",{"property":"og:site_name","content":"川上富江"}],["meta",{"property":"og:title","content":"GIT 命令使用手册"}],["meta",{"property":"og:description","content":"工具地址 版本库命令详解 分支命令详解 合并分支命令详解 添加远端地址命令详解 版本回退命令详解 标签 远端标签 删除指定标签 忽略已入库文件的修改"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-29T05:33:18.000Z"}],["meta",{"property":"article:tag","content":"软件"}],["meta",{"property":"article:modified_time","content":"2024-08-29T05:33:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"GIT 命令使用手册\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-29T05:33:18.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"工具地址","slug":"工具地址","link":"#工具地址","children":[]},{"level":2,"title":"版本库命令详解","slug":"版本库命令详解","link":"#版本库命令详解","children":[]},{"level":2,"title":"分支命令详解","slug":"分支命令详解","link":"#分支命令详解","children":[]},{"level":2,"title":"合并分支命令详解","slug":"合并分支命令详解","link":"#合并分支命令详解","children":[]},{"level":2,"title":"添加远端地址命令详解","slug":"添加远端地址命令详解","link":"#添加远端地址命令详解","children":[]},{"level":2,"title":"版本回退命令详解","slug":"版本回退命令详解","link":"#版本回退命令详解","children":[]},{"level":2,"title":"标签","slug":"标签","link":"#标签","children":[]},{"level":2,"title":"远端标签","slug":"远端标签","link":"#远端标签","children":[]},{"level":2,"title":"删除指定标签","slug":"删除指定标签","link":"#删除指定标签","children":[]},{"level":2,"title":"忽略已入库文件的修改","slug":"忽略已入库文件的修改","link":"#忽略已入库文件的修改","children":[]}],"git":{"createdTime":1724909598000,"updatedTime":1724909598000,"contributors":[{"name":"him","email":"yph0228@163.com","commits":1}]},"readingTime":{"minutes":2.54,"words":761},"filePathRelative":"guide/base/tools/GIT命令使用手册.md","localizedDate":"2024年8月29日","autoDesc":true}')}}]);