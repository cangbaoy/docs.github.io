import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as l,c as t,e as a}from"./app-BCS17alH.js";const n={};function o(r,e){return l(),t("div",null,e[0]||(e[0]=[a('<h1 id="数据库的分库分表" tabindex="-1"><a class="header-anchor" href="#数据库的分库分表"><span>数据库的分库分表</span></a></h1><h2 id="数据库的性能瓶颈" tabindex="-1"><a class="header-anchor" href="#数据库的性能瓶颈"><span>数据库的性能瓶颈</span></a></h2><ul><li>连接数</li><li>处理能力</li><li>存储容量</li></ul><h2 id="数据库优化方案" tabindex="-1"><a class="header-anchor" href="#数据库优化方案"><span>数据库优化方案</span></a></h2><ul><li>SQL 优化</li><li>索引</li><li>分区</li><li>主从复制，读写分离： 通过数据的冗余做到从的数据库上去，主要是一个高可用的作用</li><li>集群: 通过负载均衡的方式实现数据的容错性，和高性能</li><li>向上扩展：扩展硬件</li><li>分库分表：</li><li>大数据： 当以上的方案都不能满足业务时，就要抛弃关系型数据库，改用大数据方案</li></ul><h2 id="什么时候考虑切分" tabindex="-1"><a class="header-anchor" href="#什么时候考虑切分"><span>什么时候考虑切分</span></a></h2><div class="hint-container warning"><p class="hint-container-title">注意事项</p><p>能不切分尽量不切分</p></div><ol><li>数据量过大 500w~1000w(阿里规范建议单表是500w，容量不要超过2G)</li><li>数据增长过快（比如电商做商品促销活动，每天以500w+ 的数据量增长）</li><li>对某些字段进行切分（看业务需求，不同的业务数据放到不同的业务表里）</li><li>处于安全性和可用性来考虑</li></ol><h2 id="切分类型" tabindex="-1"><a class="header-anchor" href="#切分类型"><span>切分类型</span></a></h2><ul><li>垂直分库</li><li>垂直分表</li><li>水平分表</li><li>水平分库分表</li></ul><h2 id="数据切分以后的问题和解决方案" tabindex="-1"><a class="header-anchor" href="#数据切分以后的问题和解决方案"><span>数据切分以后的问题和解决方案</span></a></h2><ol><li>事物一致性的问题 XA 规范（两阶段和三阶段）</li><li>跨节点的关联查询问题 （join） <ul><li>全局表</li><li>字段的冗余</li><li>ER 分片</li><li>数据组装（比较耗时）</li></ul></li><li>跨节点的排序，分页，函数问题，结果汇总做二次计算</li><li>全局主键的问题 （UUID，数据表来维护，开源的全局ID生产系统）</li><li>数据的迁移，扩容问题</li></ol>',12)]))}const d=i(n,[["render",o],["__file","knowledge5.html.vue"]]),h=JSON.parse('{"path":"/audition/other/knowledge5.html","title":"数据库的分库分表","lang":"zh-CN","frontmatter":{"description":"数据库的分库分表 数据库的性能瓶颈 连接数 处理能力 存储容量 数据库优化方案 SQL 优化 索引 分区 主从复制，读写分离： 通过数据的冗余做到从的数据库上去，主要是一个高可用的作用 集群: 通过负载均衡的方式实现数据的容错性，和高性能 向上扩展：扩展硬件 分库分表： 大数据： 当以上的方案都不能满足业务时，就要抛弃关系型数据库，改用大数据方案 什么...","head":[["meta",{"property":"og:url","content":"https://www.sansei.top/audition/other/knowledge5.html"}],["meta",{"property":"og:site_name","content":"川上富江"}],["meta",{"property":"og:title","content":"数据库的分库分表"}],["meta",{"property":"og:description","content":"数据库的分库分表 数据库的性能瓶颈 连接数 处理能力 存储容量 数据库优化方案 SQL 优化 索引 分区 主从复制，读写分离： 通过数据的冗余做到从的数据库上去，主要是一个高可用的作用 集群: 通过负载均衡的方式实现数据的容错性，和高性能 向上扩展：扩展硬件 分库分表： 大数据： 当以上的方案都不能满足业务时，就要抛弃关系型数据库，改用大数据方案 什么..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-17T03:11:44.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-17T03:11:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"数据库的分库分表\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-17T03:11:44.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"数据库的性能瓶颈","slug":"数据库的性能瓶颈","link":"#数据库的性能瓶颈","children":[]},{"level":2,"title":"数据库优化方案","slug":"数据库优化方案","link":"#数据库优化方案","children":[]},{"level":2,"title":"什么时候考虑切分","slug":"什么时候考虑切分","link":"#什么时候考虑切分","children":[]},{"level":2,"title":"切分类型","slug":"切分类型","link":"#切分类型","children":[]},{"level":2,"title":"数据切分以后的问题和解决方案","slug":"数据切分以后的问题和解决方案","link":"#数据切分以后的问题和解决方案","children":[]}],"git":{"createdTime":1731813104000,"updatedTime":1731813104000,"contributors":[{"name":"cangbao","email":"yph0228@163.com","commits":1}]},"readingTime":{"minutes":1.36,"words":407},"filePathRelative":"audition/other/knowledge5.md","localizedDate":"2024年11月17日","autoDesc":true}');export{d as comp,h as data};