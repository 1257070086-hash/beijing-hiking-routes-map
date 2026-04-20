// 周报数据 - W15 (4.6-4.13)
window.REPORT_DATA = {
  week: '2026 W15',
  range: '4.6 — 4.13',
  meta: '共采集 82 篇文章 · 行业资讯 63 篇 + 各公司公众号 19 篇',

  // 头条：含摘要和真实链接
  headlines: [
    {
      rank: 1, tag: '人事',
      title: '李飞飞出任阿里云CTO，通义实验室升级为事业部',
      summary: '阿里组织架构大调整，AI之母李飞飞正式入局，通义实验室升级为事业部，大模型战略全面提速。',
      url: 'https://mp.weixin.qq.com/s/37_9KwiY6z40foymIu-SQA',
    },
    {
      rank: 2, tag: '产品',
      title: '「欢乐马」碾压 Seedance 2.0，AI 视频赛道变天',
      summary: '神秘模型空降AI视频榜首，断层碾压字节，疑为阿里强势切入视频生成赛道的秘密武器。',
      url: 'https://mp.weixin.qq.com/s/a5lojLW_fbvGPQ86pfYQFg',
    },
    {
      rank: 3, tag: '人才',
      title: '70位字节Seed成员外流，30家AI创业公司崛起',
      summary: '过去一年字节Seed大规模人才外溢，已孵化30家AI创业公司，成为中国AI创业核心人才供给方。',
      url: 'https://mp.weixin.qq.com/s/37_9KwiY6z40foymIu-SQA',
    },
    {
      rank: 4, tag: '技术',
      title: '宇树R1现身阿里西溪，具身智能持续升温',
      summary: '宇树机器人R1进驻阿里园区，晚点发布26Q1具身季报，英伟达世界模型等密集披露，商业化提速。',
      url: 'https://mp.weixin.qq.com/s/QPoq9hE0Ly8Mhqdese8rIQ',
    },
    {
      rank: 5, tag: '人事',
      title: '快手王毅/抖音官歆/腾讯信服线，多线人事震动',
      summary: '一周内多条大厂人事线同步波动：快手搜索VP离职、抖音电商换帅、腾讯信服线换帅、抖音反舞弊抓50余人。',
      url: 'https://mp.weixin.qq.com/s/rOV7QlHQAMi6lCQCqrVH1w',
    },
  ],

  // 行业综合资讯
  industry: {
    sections: {
      '本周热点事件': {
        content: [
          '<strong>阿里李飞飞加盟 + 架构调整</strong>：李飞飞出任阿里云CTO，通义实验室升级为事业部，大模型成为阿里AI最核心战略，一周内完成高层人事+组织双重变阵。',
          '<strong>AI视频赛道变天</strong>：神秘模型「欢乐马」空降榜首，断层碾压字节Seedance 2.0，疑似阿里强势切入AI视频生成赛道，引发行业广泛关注。',
          '<strong>字节Seed人才大外溢</strong>：过去一年70位Seed成员流向市场，已孵化约30家AI创业公司，字节系人才正成为中国AI创业的核心供给。',
          '<strong>具身智能持续升温</strong>：宇树机器人R1现身阿里西溪园区，晚点发布26Q1具身季报，英伟达世界模型、宇树招股书等密集披露。',
          '<strong>大厂人事震动</strong>：快手搜索VP王毅将离职、抖音电商官歆离职、腾讯信服线换帅、抖音反舞弊抓50余人，一周内多条人事线同步波动。',
        ],
        sources: [
          { name: '大厂日爆：4.9 大厂人事汇总', url: 'https://mp.weixin.qq.com/s/MsdIwOglWRZkmIKqFMiu_g' },
          { name: '晚点LatePost：具身季报26Q1', url: 'https://mp.weixin.qq.com/s/QPoq9hE0Ly8Mhqdese8rIQ' },
          { name: '申妈的朋友圈：字节Seed外溢', url: 'https://mp.weixin.qq.com/s/37_9KwiY6z40foymIu-SQA' },
        ],
      },
      '技术进展速览': {
        content: [
          '<strong>字节</strong>：Scale-SWE 发布，10万级真实SWE数据集+火山引擎沙箱，代码智能体训练基础设施升级；Seed全双工语音大模型主打自然语音交互。',
          '<strong>腾讯</strong>：MoT架构（Mixture of Tokens）发布，2B具身模型22项评测16项最佳；HiVG 3B开源，SVG生成性能比肩GPT/Claude。',
          '<strong>阿里</strong>：平头哥「真武」芯片推理性能提升13倍；「欢乐马」AI视频模型疑似登榜。',
          '<strong>开源生态</strong>：Gemma 4 开源，Llama支持龙虾连接，头部开源生态持续扩张压缩商业模型空间。',
        ],
        sources: [
          { name: '机器之心：欢乐马空降榜首', url: 'https://mp.weixin.qq.com/s/a5lojLW_fbvGPQ86pfYQFg' },
          { name: '量子位：腾讯MoT架构', url: 'https://mp.weixin.qq.com/s/i_yvYKe-vdCXWb2qOGMuKg' },
          { name: '量子位：HiVG 3B开源', url: 'https://mp.weixin.qq.com/s/siGHXTw_oAWFllfkmHugWg' },
          { name: 'InfoQ：真武芯片推理跃迁13倍', url: 'https://mp.weixin.qq.com/s/xgoBC99PVAzBP0tUDDTMnA' },
        ],
      },
      '行业趋势洞察': {
        content: [
          '<strong>AI Infra下半场</strong>：算力基础设施之争从购买硬件转向系统级优化，「龙虾」连接生态正在重塑AI Infra竞争格局。',
          '<strong>Agent平台化</strong>：从单模型能力展示走向多Agent协作平台，扣子2.5「Agent World」是典型信号。',
          '<strong>具身智能商业化提速</strong>：宇树招股书、阿里西溪落地，机器人商业化路径正在跑通。',
          '<strong>人才流动加速</strong>：AI领域人才外流+创业潮同步出现，头部大厂既是培养地，也成为供应商。',
        ],
        sources: [
          { name: '晚点LatePost：具身季报26Q1', url: 'https://mp.weixin.qq.com/s/QPoq9hE0Ly8Mhqdese8rIQ' },
          { name: '虎嗅：OKR死于2026', url: 'https://mp.weixin.qq.com/s/cOUvevBubqTrKbHj1piRiw' },
        ],
      },
      '对快手的启示': {
        content: '快手本周处于人事敏感期（王毅离职），但也是主动出击的窗口——字节AI人才持续外溢、小红书安全/社区线高管离职，市场上正有大量顶尖人才在流动。AI视频赛道「欢乐马」的崛起提示可灵需要保持持续的技术发布节奏，不能让外部形成「快手AI视频已被追上」的认知。',
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
      summary: 'AI基础能力三线齐发，但Seed人才外流是隐患',
      sections: {
        '招聘动态': {
          content: 'Seed 团队面向 2027 届启动大模型人才校招（含实习），Data 团队 ByteIntern 持续热招，研发类岗位方向覆盖广泛。整体扩张重心在 AI/大模型方向的年轻储备。',
          sources: [],
        },
        '人事变动': {
          content: '过去一年 70 位 Seed 成员流向市场，30 家字节系 AI 创业公司已成体系，人才外流规模较大。字节 Seed 正成为中国 AI 创业的主要人才来源，内部人才保留压力显著。',
          sources: [
            { name: '申妈的朋友圈：70位Seed成员流向市场', url: 'https://mp.weixin.qq.com/s/37_9KwiY6z40foymIu-SQA' },
            { name: '晚点：Seed大模型人才外溢', url: 'https://mp.weixin.qq.com/s/QPoq9hE0Ly8Mhqdese8rIQ' },
          ],
        },
        '近期战略重点': {
          content: [
            '<strong>AI 基础设施</strong>：发布 Scale-SWE 构造 10 万级真实 SWE 数据集，火山引擎沙箱重塑代码智能体训练',
            '<strong>Agent 产品</strong>：扣子 2.5 发布「Agent World」，多 Agent 协作进入新阶段',
            '<strong>语音交互</strong>：Seed 全双工语音大模型发布，主打「懂倾听、抗干扰」',
          ],
          sources: [
            { name: '字节跳动技术团队：Scale-SWE发布', url: 'https://mp.weixin.qq.com/s/iT_knZwCtF5LseIClSyaSA' },
          ],
        },
        '对快手的启示': {
          content: '字节 Seed 人才加速外溢，AI 领域优秀人才流动性极高，快手可在此窗口期主动出击。扣子 Agent World 意味着 AI 应用竞争从单模型走向多 Agent 协作，快手需关注 Agent 平台化趋势对自身产品矩阵的冲击。',
          sources: [],
          isInsight: true,
        },
      },
    },
    {
      id: 'tencent',
      name: '腾讯',
      color: '#1A3FBF',
      summary: '技术产出质量高，MoT+HiVG双线开花；人才流失率改善至15.9%',
      sections: {
        '招聘动态': {
          content: '2026 校招补录进行中，密集开展校园宣讲（北大合作、留学生专项「鹅媒派」），招聘声量较高，校招季冲刺阶段积极抢人。',
          sources: [
            { name: '腾讯招聘：2026校招补录岗位', url: 'https://mp.weixin.qq.com/s/qbwhb9P2c-IzMb9X6G5XJw' },
          ],
        },
        '人事变动': {
          content: '腾讯信服线换帅；2025 年员工流失率下降至 15.9%，人才保留有所改善，组织稳定性较去年提升。',
          sources: [
            { name: '互联网坊间八卦：腾讯流失率15.9%', url: 'https://mp.weixin.qq.com/s/u1abEsn36yCYRPDfudl4RA' },
          ],
        },
        '近期战略重点': {
          content: [
            '<strong>具身智能</strong>：发布 MoT（Mixture of Tokens）架构，2B 具身模型 22 项评测 16 项最佳',
            '<strong>开源模型</strong>：开源 HiVG 3B 模型，SVG 生成性能比肩 GPT/Claude',
            '<strong>工程文化</strong>：腾讯技术工程持续输出高质量硬核内容，雇主品牌技术叙事强劲',
          ],
          sources: [
            { name: '量子位：腾讯MoT架构发布', url: 'https://mp.weixin.qq.com/s/i_yvYKe-vdCXWb2qOGMuKg' },
            { name: '量子位：HiVG开源', url: 'https://mp.weixin.qq.com/s/siGHXTw_oAWFllfkmHugWg' },
          ],
        },
        '对快手的启示': {
          content: '腾讯通过持续高质量的技术内容输出，构建了强势的技术雇主品牌形象。快手可借鉴「技术内容 + 校园宣讲」双线联动方式，以高深度内容吸引顶尖技术人才。',
          sources: [],
          isInsight: true,
        },
      },
    },
    {
      id: 'alibaba',
      name: '阿里',
      color: '#FF6A00',
      summary: '本周最大赢家：李飞飞入局+大模型战略升级+欢乐马AI视频发力',
      sections: {
        '招聘动态': {
          content: '春招正在进行，招聘声量以校园方向为主，面向应届生持续开放投递通道，整体招聘节奏稳健。',
          sources: [
            { name: '阿里巴巴集团招聘：春招公告', url: 'https://mp.weixin.qq.com/s/cAPMpW2R8p2Q44RHAOfAHg' },
          ],
        },
        '人事变动': {
          content: '<strong>李飞飞出任阿里云 CTO</strong>，雷雁群出任淘宝闪购 CEO，通义实验室升级为独立事业部，组织架构大幅调整。引入李飞飞级别的科学家，是阿里云向「科学家驱动战略」转型的强烈信号。',
          sources: [
            { name: '申妈的朋友圈：通义升级为事业部', url: 'https://mp.weixin.qq.com/s/37_9KwiY6z40foymIu-SQA' },
          ],
        },
        '近期战略重点': {
          content: [
            '<strong>大模型战略升级</strong>：通义实验室升级为事业部，大模型成为阿里 AI 最重要战略',
            '<strong>AI 视频赛道</strong>：疑似推出「欢乐马」模型空降 AI 视频榜首，碾压字节 Seedance 2.0',
            '<strong>芯片自研</strong>：平头哥「真武」推理性能提升 13 倍；宇树 R1 现身西溪园区',
          ],
          sources: [
            { name: '机器之心：欢乐马空降榜首', url: 'https://mp.weixin.qq.com/s/a5lojLW_fbvGPQ86pfYQFg' },
            { name: 'InfoQ：真武芯片推理跃迁13倍', url: 'https://mp.weixin.qq.com/s/xgoBC99PVAzBP0tUDDTMnA' },
          ],
        },
        '对快手的启示': {
          content: '阿里引入李飞飞的叙事方式值得借鉴——用顶级科学家强化技术可信度和雇主品牌高度。快手在可灵、大模型方向同样有顶级研究，可以更主动地将科学家/技术 Leader 的个人 IP 与公司技术品牌绑定。',
          sources: [],
          isInsight: true,
        },
      },
    },
    {
      id: 'meituan',
      name: '美团',
      color: '#FFAA00',
      summary: '低调蓄力，北斗实习计划+科研合作体系持续深化',
      sections: {
        '招聘动态': {
          content: '2026 LongCat 大模型「北斗实习计划」正式启动，持续在大模型方向高强度争夺优秀实习生。科研合作课题公开征集，学研联动节奏稳定。',
          sources: [
            { name: '美团技术团队：北斗实习计划', url: 'https://mp.weixin.qq.com/s/bxJJoBu37qUp_41ph2g7nw' },
          ],
        },
        '人事变动': {
          content: '本周行业资讯中无明显美团高管人事变动信息，组织相对稳定。',
          sources: [],
        },
        '近期战略重点': {
          content: [
            '<strong>大模型人才储备</strong>：以「北斗实习计划」为核心品牌，专项招募大模型方向顶尖实习生',
            '<strong>学研合作</strong>：公布 2025-2026 科研合作优秀课题获奖名单，产学研合作体系持续深化',
            '<strong>低调蓄力</strong>：相比字节/阿里，美团本周对外声量偏低，处于内部积累阶段',
          ],
          sources: [],
        },
        '对快手的启示': {
          content: '美团用「实习生计划 + 具名品牌」将技术招聘做成了持续性雇主品牌动作，而非一次性突击。快手可给自己的大模型/AI方向实习计划起一个有辨识度的名字，持续输出。',
          sources: [],
          isInsight: true,
        },
      },
    },
    {
      id: 'xiaohongshu',
      name: '小红书',
      color: '#FF2442',
      summary: '人才战略高举高打，但安全/社区高管密集离职，组织处于变动期',
      sections: {
        '招聘动态': {
          content: '「Ace 顶尖实习生计划」重磅发布，9 大方向、40+ 全新课题，AI 创新赛道是最大亮点。「REDstar 顶尖人才计划」持续推进，以期权价值上涨为激励叙事，全球争夺顶尖技术和产品人才。',
          sources: [
            { name: '小红书招聘：Ace顶尖实习生计划', url: 'https://mp.weixin.qq.com/s/rOV7QlHQAMi6lCQCqrVH1w' },
          ],
        },
        '人事变动': {
          content: '<strong>安全大佬离职</strong>、<strong>「瑞格」离职</strong>、<strong>社区负责人变更</strong>，安全、社区等核心业务线存在高管波动。同时公司处于「组织架构调整」和「成立 RedNote」的重要变动期，整体组织在加速演进。',
          sources: [
            { name: '互联网坊间八卦：4.6大厂人事', url: 'https://mp.weixin.qq.com/s/rOV7QlHQAMi6lCQCqrVH1w' },
          ],
        },
        '近期战略重点': {
          content: [
            '<strong>人才战略高举高打</strong>：以「顶尖人才计划」和「期权价值上涨」为双引擎，全球争夺最优秀年轻技术人才',
            '<strong>AI 与商业化并重</strong>：大量招募 AI/大模型岗位，同时强力扩张电商和商业培训生体系',
            '<strong>雇主品牌系统化建设</strong>：频繁举办线下沙龙、推进校企合作（如与复旦哲学学院签约）',
          ],
          sources: [],
        },
        '对快手的启示': {
          content: '快手可借鉴小红书以「顶尖计划」包装和期权价值叙事吸引顶尖人才的做法，但需差异化突出自身在直播电商、短剧、老铁文化等独特业务场景。小红书安全/社区高管密集离职，这些人才可能正在流动，是竞争窗口。',
          sources: [],
          isInsight: true,
        },
      },
    },
  ],
};
