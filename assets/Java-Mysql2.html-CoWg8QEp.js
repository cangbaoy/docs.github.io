import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as t,c,e as a}from"./app-BCS17alH.js";const d={};function l(i,e){return t(),c("div",null,e[0]||(e[0]=[a('<h1 id="数据库索引的原理与使用事项" tabindex="-1"><a class="header-anchor" href="#数据库索引的原理与使用事项"><span>数据库索引的原理与使用事项</span></a></h1><h2 id="数据库索引的原理" tabindex="-1"><a class="header-anchor" href="#数据库索引的原理"><span>数据库索引的原理</span></a></h2><p>数据库索引，是数据库管理系统中一个排序的数据结构，以协助快速查询、更新数据库表中数据。索引的实现通常使用 BTree 及其变种 B+Tree。</p><h2 id="mysql-索引使用的注意事项" tabindex="-1"><a class="header-anchor" href="#mysql-索引使用的注意事项"><span>MySQL 索引使用的注意事项</span></a></h2><ul><li><p>索引不会包含有 <code>NULL</code> 的列 只要列中包含有 <code>NULL</code> 值，都将不会被包含在索引中，复合索引中只要有一列含有 <code>NULL</code> 值，那么这一列对于此符合索引就是无效的。</p></li><li><p>使用短索引 对串列进行索引，如果可以就应该指定一个前缀长度。例如，如果有一个 <code>char（255）</code> 的列，如果在前 <code>10</code> 个或 <code>20</code> 个字符内，多数值是唯一的，那么就不要对整个列进行索引。短索引不仅可以提高查询速度而且可以节省磁盘空间和 <code>I/O</code> 操作。</p></li><li><p>索引列排序 MySql 查询只使用一个索引，因此如果 <code>where</code> 子句中已经使用了索引的话，那么 <code>order by</code> 中的列是不会使用索引的。因此数据库默认排序可以符合要求的情况下不要使用排序操作，尽量不要包含多个列的排序，如果需要最好给这些列建复合索引。</p></li><li><p><code>like</code> 语句操作 一般情况下不鼓励使用 like 操作，如果非使用不可，注意正确的使用方式。<code>like ‘%aaa%’</code> 不会使用索引，而 <code>like ‘aaa%’</code> 可以使用索引。</p></li><li><p>不要在列上进行运算</p></li><li><p>不使用 <code>NOT IN</code> 、<code>&lt;&gt;</code>、<code>！=</code>操作，但 <code>&lt;</code> , <code>&lt;=</code> ，<code>=</code> ，<code>&gt;</code> , <code>&gt;=</code> , <code>BETWEEN</code> , <code>IN</code> 是可以用到索引的</p></li><li><p>索引要建立在经常进行select操作的字段上 这是因为，如果这些列很少用到，那么有无索引并不能明显改变查询速度。相反，由于增加了索引，反而降低了系统的维护速度和增大了空间需求。</p></li><li><p>索引要建立在值比较唯一的字段上</p></li><li><p>对于那些定义为 <code>text</code>、<code>image</code> 和 <code>bit</code> 数据类型的列不应该增加索引。因为这些列的数据量要么相当大，要么取值很少</p></li><li><p>在 <code>where</code> 和 <code>join</code> 中出现的列需要建立索引</p></li><li><p><code>where</code> 的查询条件里有不等号 (<code>where column != …</code>) , MySql 将无法使用索引</p></li><li><p>如果 <code>where</code> 字句的查询条件里使用了函数(如：<code>where DAY(column)=…</code>), MySql 将无法使用索引</p></li><li><p>在 <code>join</code> 操作中(需要从多个数据表提取数据时)，MySql 只有在主键和外键的数据类型相同时才能使用索引，否则及时建立了索引也不会使用</p></li></ul><h2 id="为什么要用-b-tree" tabindex="-1"><a class="header-anchor" href="#为什么要用-b-tree"><span>为什么要用 B-Tree</span></a></h2><p>一般来说，索引本身也很大，不可能全部存储在内存中，因此索引往往以索引文件的形式存储的磁盘上。这样的话，索引查找过程中就要产生磁盘 I/O 消耗，相对于内存存取，I/O 存取的消耗要高几个数量级，所以评价一个数据结构作为索引的优劣最重要的指标就是在查找过程中磁盘 I/O 操作次数的渐进复杂度。换句话说，索引的结构组织要尽量减少查找过程中磁盘 I/O 的存取次数。</p>',7)]))}const n=o(d,[["render",l],["__file","Java-Mysql2.html.vue"]]),s=JSON.parse('{"path":"/audition/database/Java-Mysql2.html","title":"数据库索引的原理与使用事项","lang":"zh-CN","frontmatter":{"description":"数据库索引的原理与使用事项 数据库索引的原理 数据库索引，是数据库管理系统中一个排序的数据结构，以协助快速查询、更新数据库表中数据。索引的实现通常使用 BTree 及其变种 B+Tree。 MySQL 索引使用的注意事项 索引不会包含有 NULL 的列 只要列中包含有 NULL 值，都将不会被包含在索引中，复合索引中只要有一列含有 NULL 值，那么这...","head":[["meta",{"property":"og:url","content":"https://www.sansei.top/audition/database/Java-Mysql2.html"}],["meta",{"property":"og:site_name","content":"川上富江"}],["meta",{"property":"og:title","content":"数据库索引的原理与使用事项"}],["meta",{"property":"og:description","content":"数据库索引的原理与使用事项 数据库索引的原理 数据库索引，是数据库管理系统中一个排序的数据结构，以协助快速查询、更新数据库表中数据。索引的实现通常使用 BTree 及其变种 B+Tree。 MySQL 索引使用的注意事项 索引不会包含有 NULL 的列 只要列中包含有 NULL 值，都将不会被包含在索引中，复合索引中只要有一列含有 NULL 值，那么这..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-17T03:11:44.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-17T03:11:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"数据库索引的原理与使用事项\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-17T03:11:44.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"数据库索引的原理","slug":"数据库索引的原理","link":"#数据库索引的原理","children":[]},{"level":2,"title":"MySQL 索引使用的注意事项","slug":"mysql-索引使用的注意事项","link":"#mysql-索引使用的注意事项","children":[]},{"level":2,"title":"为什么要用 B-Tree","slug":"为什么要用-b-tree","link":"#为什么要用-b-tree","children":[]}],"git":{"createdTime":1731813104000,"updatedTime":1731813104000,"contributors":[{"name":"cangbao","email":"yph0228@163.com","commits":1}]},"readingTime":{"minutes":2.8,"words":839},"filePathRelative":"audition/database/Java-Mysql2.md","localizedDate":"2024年11月17日","autoDesc":true}');export{n as comp,s as data};