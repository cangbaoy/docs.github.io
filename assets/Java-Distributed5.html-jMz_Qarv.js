import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as i,c as a,e as n}from"./app-BsUZOuh7.js";const s={};function p(d,e){return i(),a("div",null,e[0]||(e[0]=[n('<h1 id="集群与负载均衡的算法与实现" tabindex="-1"><a class="header-anchor" href="#集群与负载均衡的算法与实现"><span>集群与负载均衡的算法与实现</span></a></h1><h2 id="负载均衡" tabindex="-1"><a class="header-anchor" href="#负载均衡"><span>负载均衡</span></a></h2><p>什么是负载均衡呢？用户输入的流量通过负载均衡器按照某种负载均衡算法把流量均匀的分散到后端的多个服务器上，接收到请求的服务器可以独立的响应请求，达到负载分担的目的。从应用场景上来说，常见的负载均衡模型有全局负载均衡和集群内负载均衡，从产品形态角度来说，又可以分为硬件负载均衡和软件负载均衡。全局负载均衡一般通过DNS实现，通过将一个域名解析到不同VIP，来实现不同的region调度能力；硬件负载均衡器常见的有F5、A10、Array，它们的优缺点都比较明显，优点是功能强大，有专门的售后服务团队，性能比较好，缺点是缺少定制的灵活性，维护成本较高；现在的互联网更多的思路是通过软件负载均衡来实现，这样可以满足各种定制化需求，常见的软件负载均衡有 LVS、Nginx、Haproxy。</p><figure><img src="https://pic.sansei.top/images/distributed/e58ab31f70ef56e074051ed24fa4e56ec19decce.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>阿里云高性能负载均衡使用 LVS 和 Tengine，我们在一个 region 区分不同的机房,每个机房都有 LVS 集群和 Tengine 集群，对于用户配置的四层监听，LVS 后面会直接挂载用户 ECS，七层用户监听 ECS 则挂载在 Tengine 上，四层监听的流量直接由 LVS 转发到 ECS，而 7 层监听的流量会经过 LVS 到 Tenigine 再到用户 ECS。每一个 region 里都会有多个可用区，达到主备容灾目的，每一个集群里都有多台设备，第一是为了提升性能，第二也是基于容灾考虑。 <img src="https://pic.sansei.top/images/distributed/fc98cdbdb5e1c6f3f2bba08642b14aa5b95191cb.png" alt="" loading="lazy"> 图为高性能负载均衡控制管理概要图，SLB 产品也有 SDN 概念，转发和控制是分离的，用户所有配置通过控制台先到控制器，通过集中控制器转换将用户配置推送到不同设备上，每台设备上都有 Agent 接收控制器下发的需求，通过本地转换成 LVS 和 Tengine 能够识别的配置，这个过程支持热配置，不影响用户转发，不需要 reload 才能使新配置生效。</p><h2 id="lvs" tabindex="-1"><a class="header-anchor" href="#lvs"><span>LVS</span></a></h2><h3 id="lvs-支持的三种模式" tabindex="-1"><a class="header-anchor" href="#lvs-支持的三种模式"><span>LVS 支持的三种模式</span></a></h3><p>早期 LVS 支持三种模式，<strong>DR 模式</strong>、<strong>TUN 模式</strong> 和 <strong>NAT 模式</strong>。 <img src="https://pic.sansei.top/images/distributed/bc742829577c79b6040b743e07d176e8d815e512.png" alt="" loading="lazy"></p><h4 id="dr-模式" tabindex="-1"><a class="header-anchor" href="#dr-模式"><span>DR 模式</span></a></h4><p>DR 模式经过 LVS 之后，LVS 会将 MAC 地址更改、封装 MAC 头，内层 IP 报文不动，报文经过 LVS 负载均衡查找到 RS 之后，将源 MAC 头改成自己的，目的 MAC 改成 RS 地址，MAC 寻址是在二层网络里，对网络部署有一定的限定，在大规模分布式集群部署里，这种模式的灵活性没有办法满足需求；</p><h4 id="tun-模式" tabindex="-1"><a class="header-anchor" href="#tun-模式"><span>TUN 模式</span></a></h4><p>TUN 模式走在 LVS 之后，LVS 会在原有报文基础上封装 IP 头，到了后端 RS 之后，RS 需要解开 IP 报文封装，才能拿到原始报文，不管是 DR 模式还是 TUN 模式，后端 RS 都可以看到真实客户源 IP，目的 IP 是自己的 VIP，VIP 在 RS 设备上需要配置，这样可以直接绕过 LVS 返回给用户，TUN 模式问题在于需要在后端 ECS 上配置解封装模块，在 Linux 上已经支持这种模块，但是 Windows 上还没有提供支持，所以会对用户系统镜像选择有限定。</p><h4 id="nat-模式" tabindex="-1"><a class="header-anchor" href="#nat-模式"><span>NAT 模式</span></a></h4><p>NAT 模式用户访问的是 VIP，LVS 查找完后会将目的 IP 做 DNAT 转换，选择出 RS 地址，因为客户端的 IP 没变，在回包的时候直接向公网真实客户端 IP 去路由，NAT 的约束是因为 LVS 做了 DNAT 转换，所以回包需要走 LVS，把报文头转换回去，由于 ECS 看到的是客户端真实的源地址，我们需要在用户 ECS 上配置路由，将到 ECS 的默认路由指向 LVS 上，这对用户场景也做了限制。</p><h3 id="lvs-基于-netfilter-框架实现" tabindex="-1"><a class="header-anchor" href="#lvs-基于-netfilter-框架实现"><span>LVS 基于 NetFilter 框架实现</span></a></h3><figure><img src="https://pic.sansei.top/images/distributed/43e30887518af02f3c95557141b905fabeec779f.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>NetFilter 是 Linux 提供的网络开放平台，基于平台可以开发自己的业务功能模块，早期好多安全厂商都是基于 NetFilter 做一些业务模型实现，这种模型比较灵活，但通用模型里更多的是兼容性考虑，路径会非常长；而且通用模型中没办法发挥多核特性，目前 CPU 的发展更多是向横向扩展，我们经常见到多路服务器，每路上有多少核，早期通用模型对多核支持并不是特别友善，在多核设计上有些欠缺，导致我们在通用模型上做一些应用开发时的扩展性是有限的，随着核的数量越来越多，性能不增反降。</p><h3 id="lvs-的改进" tabindex="-1"><a class="header-anchor" href="#lvs-的改进"><span>LVS 的改进</span></a></h3><p><img src="https://pic.sansei.top/images/distributed/f2111dd6c11e8dd6ffb32a4a2156361d461e0ebf.png" alt="" loading="lazy"> 早期模式的各种限制制约了我们的发展，所以我们首先做了 FullNAT，相比原来的 NAT 方式，FullNAT 多了 SNAT 属性，将客户端的原 IP 地址作了转换；其次，我们在并行化上做了处理，充分利用多核实现性能线性提升；然后是快速路径，我们在做网络转发模型时很容易想到设计快速路径和慢速路径，慢速路径更多是解决首包如何通过设备问题，可能需要查ACL或路由，需要判断许多和策略相关的东西，后面所有报文都可以通过快速路径转发出去；还有指令相关优化，利用因特尔特殊指令提升性能；另外针对多核架构，NUMA 多节点内存访问，通过访问 Local 节点内存可能获得更好的延迟表现。</p><p><img src="https://pic.sansei.top/images/distributed/b8d1657ff0cfc1ff091443c345a3a7da1f602150.png" alt="" loading="lazy"> 客户端进来 IP 首先访问 LVS 的 VIP，原 IP 是客户端的，目的 IP 是 LVS 的 VIP，经过 FullNAT 转换后，原 IP 变成 LVS 的 Local 地址，目的地址是 LVS 选择出来的 RS 地址，这样在 RS 回包时比较容易，只要路由可达，报文一定会交到 LVS 上，不需要在 RS 上做特殊的配置。右面就是 DNAT + SNAT 转换，报文就可以通过 LVS 转发回客户端，这种方式主要带来应用场景部署灵活性选择。</p><p><img src="https://pic.sansei.top/images/distributed/77941914a0f64ecc7fee32dd248a2df6bac00309.png" alt="" loading="lazy"> 通过并行化实现对 LVS 性能的改善，性能没有办法得到线性提升更多的是因为每条路径都需要访问全局资源，就会不可避免引入锁的开箱，另外，同一条链接上的报文可能分散在不同的核上，大家去访问全局资源时也会导致 cache 的丢失。所以我们通过 RSS 技术把同一个五源组报文扔到同一个 CPU 上处理，保证入方向的所有相同连接上的报文都能交给相同 CPU 处理，每个核在转发出去时都用当前 CPU 上的 Local 地址，通过设置一些 fdir 规则，报文回来时后端 RS 访问的目的地址就是对应 CPU 上的 local 地址，可以交到指定的 CPU 上去处理，这样一条连接上左右方向报文都可以交给同一个 CPU 处理，将流在不同的 CPU 隔离开；另外，我们把所有配置资源包括动态缓存资源在每个 CPU 上作了拷贝，将资源局部化，这使整个流从进入 LVS 到转发出去访问的资源都是固定在一个核上的本地资源，使性能达到最大化，实现线性提升。</p><p>改进后的 LVS 表现如下：</p><ul><li>出于对容灾和性能提升的考虑，我们做了集群化部署，每个 region 有不同机房，每个机房有多个调度单元，每个单元有多台 LVS 设备；</li><li>每台 LVS 经过优化后，都能达到更高性能，大容量，单台 LVS 可以达到 4000W PPS，600W CPS、单个 group 可以到达 1亿 并发；</li><li>支持 region、IDC、集群和应用级的高可用；</li><li>实现了防攻击功能，并在原版 LVS 上提供了更丰富的功能，可以基于各个维度做管理控制，精确的统计，流量的分析等。</li></ul><h2 id="tengine" tabindex="-1"><a class="header-anchor" href="#tengine"><span>Tengine</span></a></h2><p><img src="https://pic.sansei.top/images/distributed/db1900a027c4c7f66e2560edfaa56ec69437d942.png" alt="" loading="lazy"> Tengine 在应用过程中也遇到了各种问题，最严重的就是性能问题，我们发现随着 CPU 数量越来越多，QPS 值并没有线性提升；Nginx 本身是多 worker 模型，每个 worker 是单进程模式，多 worker 架构做 CPU 亲和，内部基于事件驱动的模型，其本身已经提供了很高的性能，单核 Nginx 可以跑到 1W5～2W QPS。Nginx 往下第一层是 socket API，socket 往下有一层 VFS，再往下是 TCP、IP，socket 层比较薄，经过量化的分析和评估，性能开销最大的是 TCP 协议栈和 VFS 部分，因为同步开销大，我们发现横向扩展不行，对此，我们做了一些优化。</p><p>七层反向代理的路径更长，处理更复杂，所以它的性能比 LVS 低很多，我们比较关注单机和集群的性能，集群性能可以靠堆设备去解决，单机如果不提升，成本会一直增加，从性能角度来看，有以下的优化思路和方向：</p><ul><li>基于 Kernel 做开发，比如优化协议栈；</li><li>基于 AliSocket 的优化，AliSocket 是阿里研发的高性能 TCP 协议栈平台，底层是 DPDK，它将资源做了局部化处理，报文分发不同核处理，性能非常出色；</li><li>HTTPS 业务越来越多，流量逐步递增，我们采用硬件加速卡方式做一些加解密的性能提升，还有 HTTPS 的会话复用；</li><li>基于 Web 传输层的性能优化</li></ul>',27)]))}const c=t(s,[["render",p],["__file","Java-Distributed5.html.vue"]]),o=JSON.parse('{"path":"/audition/other/Java-Distributed5.html","title":"集群与负载均衡的算法与实现","lang":"zh-CN","frontmatter":{"description":"集群与负载均衡的算法与实现 负载均衡 什么是负载均衡呢？用户输入的流量通过负载均衡器按照某种负载均衡算法把流量均匀的分散到后端的多个服务器上，接收到请求的服务器可以独立的响应请求，达到负载分担的目的。从应用场景上来说，常见的负载均衡模型有全局负载均衡和集群内负载均衡，从产品形态角度来说，又可以分为硬件负载均衡和软件负载均衡。全局负载均衡一般通过DNS实...","head":[["meta",{"property":"og:url","content":"https://www.sansei.top/audition/other/Java-Distributed5.html"}],["meta",{"property":"og:site_name","content":"川上富江"}],["meta",{"property":"og:title","content":"集群与负载均衡的算法与实现"}],["meta",{"property":"og:description","content":"集群与负载均衡的算法与实现 负载均衡 什么是负载均衡呢？用户输入的流量通过负载均衡器按照某种负载均衡算法把流量均匀的分散到后端的多个服务器上，接收到请求的服务器可以独立的响应请求，达到负载分担的目的。从应用场景上来说，常见的负载均衡模型有全局负载均衡和集群内负载均衡，从产品形态角度来说，又可以分为硬件负载均衡和软件负载均衡。全局负载均衡一般通过DNS实..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://pic.sansei.top/images/distributed/e58ab31f70ef56e074051ed24fa4e56ec19decce.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-17T17:15:12.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-17T17:15:12.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"集群与负载均衡的算法与实现\\",\\"image\\":[\\"https://pic.sansei.top/images/distributed/e58ab31f70ef56e074051ed24fa4e56ec19decce.png\\",\\"https://pic.sansei.top/images/distributed/fc98cdbdb5e1c6f3f2bba08642b14aa5b95191cb.png\\",\\"https://pic.sansei.top/images/distributed/bc742829577c79b6040b743e07d176e8d815e512.png\\",\\"https://pic.sansei.top/images/distributed/43e30887518af02f3c95557141b905fabeec779f.png\\",\\"https://pic.sansei.top/images/distributed/f2111dd6c11e8dd6ffb32a4a2156361d461e0ebf.png\\",\\"https://pic.sansei.top/images/distributed/b8d1657ff0cfc1ff091443c345a3a7da1f602150.png\\",\\"https://pic.sansei.top/images/distributed/77941914a0f64ecc7fee32dd248a2df6bac00309.png\\",\\"https://pic.sansei.top/images/distributed/db1900a027c4c7f66e2560edfaa56ec69437d942.png\\"],\\"dateModified\\":\\"2024-11-17T17:15:12.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"负载均衡","slug":"负载均衡","link":"#负载均衡","children":[]},{"level":2,"title":"LVS","slug":"lvs","link":"#lvs","children":[{"level":3,"title":"LVS 支持的三种模式","slug":"lvs-支持的三种模式","link":"#lvs-支持的三种模式","children":[]},{"level":3,"title":"LVS 基于 NetFilter 框架实现","slug":"lvs-基于-netfilter-框架实现","link":"#lvs-基于-netfilter-框架实现","children":[]},{"level":3,"title":"LVS 的改进","slug":"lvs-的改进","link":"#lvs-的改进","children":[]}]},{"level":2,"title":"Tengine","slug":"tengine","link":"#tengine","children":[]}],"git":{"createdTime":1731863712000,"updatedTime":1731863712000,"contributors":[{"name":"cangbao","email":"yph0228@163.com","commits":1}]},"readingTime":{"minutes":8.4,"words":2521},"filePathRelative":"audition/other/Java-Distributed5.md","localizedDate":"2024年11月17日","autoDesc":true}');export{c as comp,o as data};
