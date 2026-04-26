// 周报数据 - W17 (4.21-4.27)
window.REPORT_DATA = {
  week: '2026 W17',
  range: '4.21 — 4.27',
  meta: '共采集 130 篇文章 · 行业资讯 96 篇 + 各公司公众号 34 篇',

  headlines: [
    {
      rank: 1,
      tag: '技术',
      title: '谷歌宣告：75% 代码由 AI 生成，全面转向 Agent 工作流',
      summary: '智能体正在重塑软件开发方式，行业拐点已至。',
      url: 'https://mp.weixin.qq.com/s/TKaIPD7-Yx0P5HMrNGajOQ',
    },
    {
      rank: 2,
      tag: '技术',
      title: 'DeepSeek V4 重磅开源，首次打通华为 Ascend',
      summary: '国产大模型生态加速扩张，算力国产化提速。',
      url: 'https://mp.weixin.qq.com/s/Xlb8mzqNufy9dreC6JG6xw',
    },
    {
      rank: 3,
      tag: '技术',
      title: '全球首个医疗视频理解大模型开源，6k+ 精标测试集同步上线',
      summary: 'AI 垂直场景落地加速，医疗视频理解迎来标准基准。',
      url: 'https://mp.weixin.qq.com/s/am6FOS9N6O5AOFxgodAuHw',
    },
    {
      rank: 4,
      tag: '人才',
      title: '前 Anthropic 后训练工程师李迎超加入美团',
      summary: '顶尖 AI 人才从头部实验室流向国内大厂，竞争加剧。',
      url: 'https://mp.weixin.qq.com/s/1MWzKJdSDWzWQS8KICBN6w',
    },
    {
      rank: 5,
      tag: '产品',
      title: '字节跳动 Seed3D 2.0 发布，3D 生成精度与可用性大幅提升',
      summary: '内容生产基础设施升级，视频/电商创作门槛进一步降低。',
      url: 'https://mp.weixin.qq.com/s/_9vggNLz0ehs_g0k8q709g',
    },
  ],

  industry: {
    sections: {
      '本周热点事件': {
        content: [
          '<strong>谷歌全面转向 Agent 工作流，75% 代码由 AI 生成</strong>：谷歌披露 1850 亿美元天价资本支出，宣布组织与研发流程向智能体全面转型，传统软件开发范式正被颠覆。',
          '<strong>DeepSeek V4 重磅开源，首次打通华为 Ascend</strong>：DeepSeek 新版本不仅兼容英伟达，还首次支持华为 Ascend 芯片，百万上下文夺回行业领先，国产大模型生态加速扩张。',
          '<strong>Qwen3.6-27B 开源，27B 参数秒杀自家 397B 旗舰</strong>：阿里通义千问发布效率型新模型，智能体与编程能力全面超越前代，"小模型高效化"成为新趋势。',
          '<strong>Agent 技术债问题引发关注</strong>：10 分钟造出一个 Agent，但公司却要为它养一个平台团队——InfoQ 深度报道智能体工程的隐形成本，引发行业反思。',
          '<strong>阿里等巨头洽谈投资 DeepSeek</strong>：国内大厂加速布局大模型生态，DeepSeek 成为兵家必争之地，行业整合加速。',
        ],
        sources: [
          { name: 'InfoQ：谷歌正式宣告全面转向智能体工作流', url: 'https://mp.weixin.qq.com/s/TKaIPD7-Yx0P5HMrNGajOQ' },
          { name: 'InfoQ：DeepSeek V4 重磅开源', url: 'https://mp.weixin.qq.com/s/Xlb8mzqNufy9dreC6JG6xw' },
          { name: '量子位：Qwen3.6-27B 开源', url: 'https://mp.weixin.qq.com/s/yATQ-TUhOqn98Be9EifE5A' },
          { name: 'InfoQ：智能体工程的隐形技术债', url: 'https://mp.weixin.qq.com/s/BJMKsf8vKdAGcYFUoVuamA' },
          { name: '虎嗅：阿里等巨头洽谈投资 DeepSeek', url: 'https://mp.weixin.qq.com/s/OujHfX5se78lRGgyOvdluQ' },
        ],
      },
      '技术进展速览': {
        content: [
          '<strong>医疗视频理解</strong>：全球首个医疗视频理解大模型开源，配套 6245 组精标测试集，论文被 CVPR 2026 收录，医疗 AI 垂直应用迎来基准标尺。',
          '<strong>Skill 语言虚拟机</strong>：上交大开源 SkVM，实现 Skill 一次编写、处处高效运行，降低跨平台 AI 能力部署门槛。',
          '<strong>字节 OpenViking Agent 框架</strong>：字节跳动技术团队发布 OpenViking，让 Agent 具备复杂社会行为模拟能力（记仇、伪装等），推动 AI 智能体向更自主方向演进。',
        ],
        sources: [
          { name: '量子位：全球首个医疗视频理解大模型开源', url: 'https://mp.weixin.qq.com/s/am6FOS9N6O5AOFxgodAuHw' },
          { name: '量子位：上交大开源 SkVM', url: 'https://mp.weixin.qq.com/s/68U5hHkOirI5SFPybA_Olg' },
          { name: '字节跳动技术团队：OpenViking Agent 框架', url: 'https://mp.weixin.qq.com/s/Cdz8W05JZZ2gqyn2lAICQA' },
        ],
      },
      '行业趋势洞察': {
        content: [
          '<strong>小模型效率化成为主流叙事</strong>：Qwen3.6-27B 和国产推理 GPU 独角兽（百亿估值）的涌现，证明"更低成本、更高效率"正取代"越大越好"的旧范式，端侧 AI 部署窗口期已到。',
          '<strong>Agent 从概念走向工程化挑战</strong>：谷歌、字节、腾讯本周均有 Agent 工程化相关内容输出，行业正在从"造 Agent"向"维护 Agent 基础设施"转移，平台层价值凸显。',
          '<strong>顶尖 AI 人才加速回流国内大厂</strong>：前 Anthropic 工程师加入美团，滴滴自动驾驶 CTO 浙大宣讲，外部高端人才流入信号明显，国内大厂 AI 竞争力快速提升。',
        ],
        sources: [],
      },
      '对快手的启示': {
        content: [
          '<strong>加速 Agent 基础设施建设</strong>：谷歌、字节均已布局 Agent 工程平台，快手在直播、内容审核、电商推荐等场景有天然 Agent 应用场景，需提前建设可维护的 Agent 工程体系，而非仅仅"造 demo"。',
          '<strong>借力小模型降本提效</strong>：Qwen3.6-27B 等高效模型已可支撑大量生产场景，快手可在视频理解、标签提取、实时推荐等高频任务中优先引入小模型，降低推理成本，释放算力资源。',
        ],
        sources: [],
        isInsight: true,
      },
    },
  },

  companies: [
    {
      id: 'bytedance',
      name: '字节跳动',
      color: '#00B4D8',
      summary: 'Seed3D 2.0 发布 + OpenViking Agent 框架，技术输出密集；抖音直播架构调整，番茄小说高管空降',
      sections: {
        '招聘动态': {
          content: '本周连发 4 篇招聘内容：AI 产品经理实习（揭秘日常工作）、国际商业化 ByteIntern 多方向实习生招募（研发/产品/运营）、企业服务团队 26 届校招火热进行，招聘节奏密集、方向多元，显示字节对 AI 应用层和出海业务人才的持续投入。',
          sources: [
            { name: '字节跳动招聘：AI 产品经理实习岗位', url: 'https://mp.weixin.qq.com/s/Zu9pkyD8x6YFfYsyD7t_iQ' },
            { name: '字节跳动招聘：ByteIntern 国际商业化实习', url: 'https://mp.weixin.qq.com/s/8nG4aw29ZhiUpHT-DU7IGQ' },
            { name: '字节跳动招聘：企业服务团队校招', url: 'https://mp.weixin.qq.com/s/h1KHlq0YX8A8CxIu3y6Xjw' },
          ],
        },
        '近期战略重点': {
          content: [
            '<strong>3D 生成技术升级</strong>：Seed3D 2.0 发布，精度与可用性双提升，持续夯实多模态内容生产基础设施，为短视频和电商创作场景赋能。',
            '<strong>Agent 复杂行为研究</strong>：OpenViking 框架让 Agent 具备社会行为模拟（记仇、伪装）能力，推动 AI 智能体向更自主、更复杂的交互方向演进。',
            '<strong>运维可观测平台升级</strong>：火山引擎 TLS 日志服务升级为全景观测，助力企业服务客户告别运维盲区，强化云服务竞争力；飞书项目以"AI 友好"开放架构为卖点。',
            '<strong>抖音直播架构调整</strong>：番茄小说高管金黄龙空降抖音直播，汇报韩尚佑，显示字节正探索小说 IP 与直播业务联动的内容变现新路径。',
          ],
          sources: [
            { name: '字节跳动 Seed：Seed3D 2.0 发布', url: 'https://mp.weixin.qq.com/s/_9vggNLz0ehs_g0k8q709g' },
            { name: '字节跳动技术团队：OpenViking Agent 框架', url: 'https://mp.weixin.qq.com/s/Cdz8W05JZZ2gqyn2lAICQA' },
            { name: '字节跳动技术团队：火山引擎 TLS 全景观测', url: 'https://mp.weixin.qq.com/s/oCApjtIVQDFe1LVAGwbZ2Q' },
            { name: '大厂日爆：番茄小说高管空降抖音直播', url: 'https://mp.weixin.qq.com/s/k8gti4Z1JIvF6fk_IBYRpQ' },
          ],
        },
        '对快手的启示': {
          content: '字节"小说 IP + 直播"联动方向值得快手关注——快手在阅读/文学 IP 方面的布局是否能与直播场景形成协同？此外字节 OpenViking 的 Agent 行为模拟研究，提示快手在直播互动、AI 主播等场景也需要更复杂的 Agent 行为建模能力。',
          sources: [],
          isInsight: true,
        },
      },
    },
    {
      id: 'tencent',
      name: '腾讯',
      color: '#1A3FBF',
      summary: 'ICLR 2026 中稿 150+，浙大联合实验室落地，青云计划持续招募 AI 人才',
      sections: {
        '招聘动态': {
          content: '"青云计划"本周持续发力，专门发文回答候选人疑问，并强调"现在是加入的最好时机"；同时借助 ICLR 150+ 中稿成果和浙大联合实验室公告作背书，打造"顶尖科研平台"的雇主品牌形象，吸引硬核 AI 人才。',
          sources: [
            { name: '腾讯招聘：回答青云计划的那些问题', url: 'https://mp.weixin.qq.com/s/LDUAYqARMCDc210WfS_dFg' },
            { name: '申妈的朋友圈：为什么现在是加入腾讯青云计划最好的时间', url: 'https://mp.weixin.qq.com/s/QLLOTtAJG_497l4-ojVH5Q' },
          ],
        },
        '近期战略重点': {
          content: [
            '<strong>AI 基础研究领先</strong>：ICLR 2026 中稿 150+ 篇，覆盖强化学习、多模态等前沿方向，持续强化技术品牌的含金量。',
            '<strong>产学研深度合作</strong>：与浙江大学共建"智能图形与互动娱乐联合实验室"，培育游戏技术人才，以高校合作前置锁定顶尖应届生源。',
            '<strong>AI 工程化探索</strong>：Harness Engineering 研究 AI 在高风险生产系统中的代码编写能力，推动 AI 从"Demo 可用"走向"生产可信"。',
          ],
          sources: [
            { name: '腾讯招聘：ICLR 150+ 中稿技术亮点', url: 'https://mp.weixin.qq.com/s/lkJKAzB6qWbVDpBE6fdOcw' },
            { name: '腾讯招聘：腾讯 × 浙大联合实验室', url: 'https://mp.weixin.qq.com/s/KOd24uFhdguVLw1UtJRswQ' },
            { name: '腾讯技术工程：AI 在高风险系统中写代码', url: 'https://mp.weixin.qq.com/s/VJgVPeJ5GZhVwbRtneEk_Q' },
          ],
        },
        '对快手的启示': {
          content: '腾讯"ICLR 大规模中稿 + 高校联合实验室"的组合拳，形成了技术品牌与人才前置的闭环。快手可参考这一模式，选取短视频/直播场景的核心研究方向（如实时视频理解、多模态推荐），有针对性地与顶尖高校共建实验室，既产出论文影响力，又前置绑定优秀应届生。',
          sources: [],
          isInsight: true,
        },
      },
    },
    {
      id: 'alibaba',
      name: '阿里',
      color: '#FF6A00',
      summary: 'AI 数字人"千问小酒窝"发布，elasticpp 底层技术自研，洽谈投资 DeepSeek',
      sections: {
        '招聘动态': {
          content: '本周双线推进：阿里星热爱之旅·阿里日特别版开启报名，侧重顶尖技术人才品牌体验活动；灵犀互娱四月热招岗位上新，重点补充游戏研发与运营方向，游戏业务持续扩张。',
          sources: [
            { name: '阿里巴巴集团招聘：阿里星热爱之旅阿里日特别版', url: 'https://mp.weixin.qq.com/s/RkOqx4hJm8Z1JLs_GKtTKw' },
            { name: '阿里巴巴集团招聘：灵犀互娱四月热招岗位', url: 'https://mp.weixin.qq.com/s/tXipeNm9M9IV6UP8GczHSw' },
          ],
        },
        '近期战略重点': {
          content: [
            '<strong>AI 数字人产品化</strong>：发布千问 AI 数字人形象"千问小酒窝"，强化通义千问在社交与办事场景的落地应用，以拟人化形象提升产品粘性。',
            '<strong>底层技术深度自研</strong>：推出 C++ 内核引擎 elasticpp 重塑 Elasticsearch 查询性能，体现阿里云在基础设施层的持续技术投入与差异化竞争力。',
            '<strong>大模型生态投资布局</strong>：洽谈投资 DeepSeek，积极布局大模型生态，显示阿里正通过投资方式构建 AI 生态护城河。',
          ],
          sources: [
            { name: '申妈的朋友圈：阿里发布千问 AI 数字人"千问小酒窝"', url: 'https://mp.weixin.qq.com/s/kXMmZN_4IguVtVoJbTQpJw' },
            { name: '阿里技术：elasticpp 重塑 Elasticsearch 查询性能', url: 'https://mp.weixin.qq.com/s/d7QteVcIQoQ7ClxrHMIy4A' },
            { name: '虎嗅：阿里等巨头洽谈投资 DeepSeek', url: 'https://mp.weixin.qq.com/s/OujHfX5se78lRGgyOvdluQ' },
          ],
        },
        '对快手的启示': {
          content: '阿里 AI 数字人的产品化路径值得关注——快手在直播场景积累了大量真实主播数据，具备打造专属 AI 数字主播的天然优势；同时阿里底层技术自研（elasticpp）提示快手在视频索引、实时检索等核心链路上也需要有自研能力，避免对外部基础设施的过度依赖。',
          sources: [],
          isInsight: true,
        },
      },
    },
    {
      id: 'meituan',
      name: '美团',
      color: '#FFAA00',
      summary: '前 Anthropic 后训练工程师加入，校园 AI Hackathon + 模拟面试直播，AI 人才布局全面提速',
      sections: {
        '招聘动态': {
          content: '本周人才信号最强：前 Anthropic 后训练工程师李迎超正式加入美团，顶尖 AI 人才引入释放强烈信号；同时举办校园 AI Hackathon 大赛（面向高校生）、模拟面试直播（AI 产品经理 & 算法工程师两场）、以及核心本地商业闪购事业部社招，多线并进抢占 AI 时代人才先机。',
          sources: [
            { name: '申妈的朋友圈：前 Anthropic 后训练工程师李迎超加入美团', url: 'https://mp.weixin.qq.com/s/1MWzKJdSDWzWQS8KICBN6w' },
            { name: '美团招聘：校园 AI Hackathon 大赛', url: 'https://mp.weixin.qq.com/s/2qnhrgo68_IKj4jnyRzNtw' },
            { name: '美团招聘：模拟面试 AI 产品经理 & 算法工程师', url: 'https://mp.weixin.qq.com/s/8HkdEb_ANdP_mjSW_4lXNg' },
          ],
        },
        '近期战略重点': {
          content: [
            '<strong>顶尖 AI 人才引入</strong>：招募前 Anthropic 后训练工程师，强化大模型核心能力，显示美团已将大模型自研作为战略重点。',
            '<strong>多形式校园 AI 竞赛</strong>：通过 Hackathon + 模拟面试直播的创新形式，精准触达有 AI 潜力的应届生，提升招聘转化效率。',
            '<strong>本地商业闪购扩张</strong>：闪购事业部持续社招，即时零售业务加速扩张，技术与业务人才需求双旺。',
          ],
          sources: [
            { name: '美团招聘：闪购事业部社招', url: 'https://mp.weixin.qq.com/s/HlQF5ZhGAobjTcukvhTybQ' },
          ],
        },
        '对快手的启示': {
          content: '美团引入 Anthropic 工程师这个动作的意义不只是"挖了一个人"，而是释放出"美团大模型要认真了"的信号，有助于形成人才虹吸效应。快手在大模型和 AI 基础研究领域同样有引才需求，不妨考虑将标志性的外部顶尖人才引进以新闻形式对外传播，强化快手在 AI 人才市场的吸引力。',
          sources: [],
          isInsight: true,
        },
      },
    },
    {
      id: 'xiaohongshu',
      name: '小红书',
      color: '#FF2442',
      summary: '"AI Builder 创造营"高校定向招募，流量分配逻辑悄然调整，艺术展入驻总部强化文化氛围',
      sections: {
        '招聘动态': {
          content: '"AI Builder 创造营"正式启动报名，面向同济大学等高校定向招募 AI 方向人才，聚焦 AI 应用开发方向，以"创造营"形式吸引有实战能力的高校生。招聘动作轻量但精准，体现小红书在 AI 人才储备上的前置布局。',
          sources: [
            { name: '小红书招聘：AI Builder 创造营正式启动', url: 'https://mp.weixin.qq.com/s/B0bBawapZLyVlOHGX9ibGg' },
          ],
        },
        '近期战略重点': {
          content: [
            '<strong>流量分配逻辑升级</strong>：据虎嗅报道，小红书正在调整内容流量分配规则，从单纯内容热度转向更复杂的商业转化权重，平台商业化诉求在内容分发层面加速渗透。',
            '<strong>文化品牌建设</strong>：将艺术展搬入总部，从内部文化体验入手强化雇主品牌软实力，以"有品味的工作环境"吸引创意人才。',
            '<strong>AI 人才精准前置</strong>：以高校专项活动（创造营）的形式，提前锁定有 AI 开发潜力的应届生，与大厂大规模招募形成差异化。',
          ],
          sources: [
            { name: '虎嗅：小红书流量命门，变了', url: 'https://mp.weixin.qq.com/s/ams4-7fueYwDVtNNBDexcA' },
            { name: '是小红书人啊：小红书把艺术展搬进了总部', url: 'https://mp.weixin.qq.com/s/WXRLhmfXLqlKpHIwC-hGVw' },
          ],
        },
        '对快手的启示': {
          content: '小红书流量分配向商业转化倾斜，意味着内容创作者与品牌在小红书的生存逻辑正在改变，部分内容型品牌主可能向流量更"纯粹"的平台迁移，快手可关注这一窗口期，加大对优质 UGC 内容创作者的招募与扶持力度，承接潜在的溢出流量。',
          sources: [],
          isInsight: true,
        },
      },
    },
  ],
};
