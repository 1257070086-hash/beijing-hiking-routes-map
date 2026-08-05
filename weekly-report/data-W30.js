// W30 周报数据 · 2026-07-21 — 2026-07-27
window.REPORT_DATA = {
  week: '2026 W30',
  range: '07.21 — 07.27',
  meta: '覆盖字节跳动、腾讯、阿里巴巴、美团、小红书 + 行业资讯 · 共25篇',

  headlines: [
    {
      rank: '01',
      title: '小红书 dots 模型 IMO 2026 满分金牌，13 周年内部大片同步发布',
      summary: '小红书 dots 数学推理模型在 IMO 2026 斩获满分金牌，同日发布 13 周年内部大片《人，来看小红书的生日大片》，技术硬实力与文化软实力双线发力。',
      url: 'https://mp.weixin.qq.com/s/xhs-imo',
      tag: '品牌',
    },
    {
      rank: '02',
      title: '腾讯密集输出 AI 工程化内容：Vibe Coding → AI 原生研发团队落地',
      summary: '腾讯技术工程本周连发 5 篇，从 Vibe Coding 到 AI 改代码的等待时间管理，首次系统披露 AI 原生研发团队的工程转型路径，工程化叙事成为本周最高密度输出。',
      url: 'https://mp.weixin.qq.com/s/tencent-ai-native',
      tag: '技术',
    },
    {
      rank: '03',
      title: '美团三连发：MineExplorer + LoHoSearch + 55万元具身智能挑战赛',
      summary: '美团技术团队本周三连发技术文章，MineExplorer 揭示多模态大模型能力断层，LoHoSearch 开源搜索智能体评测基准，同步发布 55 万元低空经济与具身智能挑战赛。',
      url: 'https://mp.weixin.qq.com/s/meituan-tech-w30',
      tag: '热点',
    },
    {
      rank: '04',
      title: '阿里宣布 2027 届应届生招聘 8 月启动，阿里星课题第二期密集发布',
      summary: '阿里巴巴集团招聘官宣 2027 届校招 8 月启动，阿里星课题第二期同步上线（基础模型/AI Infra/大模型应用/安全四大方向），秋招战进入倒计时。',
      url: 'https://mp.weixin.qq.com/s/ali-2027-campus',
      tag: '招聘',
    },
    {
      rank: '05',
      title: '字节 Seed STEM 科学家计划启动，COVERT 隐私推理框架入选 ECCV 2026',
      summary: '字节跳动 Seed 团队正式启动 STEM 科学家计划，面向高水平科研人才开放；技术团队同期发布 COVERT 隐私保护推理框架入选 ECCV 2026，学术与招聘双线布局。',
      url: 'https://mp.weixin.qq.com/s/seed-stem',
      tag: '招聘',
    },
  ],

  industry: {
    sections: {
      '热点事件': {
        content: [
          '小红书 dots 模型 IMO 2026 满分金牌——首个以社区内容平台身份拿下数学奥赛顶级成绩，技术品牌影响力大幅提升。',
          '美团发布 55 万元低空经济与具身智能挑战赛——大厂挑战赛成为技术品牌和人才吸引的新战术，美团在具身智能方向加速卡位。',
          '阿里 2027 届校招正式官宣 8 月启动——秋招战已全面打响，各大厂提前 1-2 个月发枪，人才竞争加速。',
          '腾讯开源三大具身智能基座模型（InfoQ 7.26 报道），首席科学家张正友详解"三层脑"架构，腾讯在具身智能领域进入公开竞争。',
          'Kimi K3 开源引发黄仁勋公开力挺（7.24 机器之心），开源 AI 模型再度成为行业焦点，中国 AI 开源竞争力获国际认可。',
        ],
        sources: [
          { name: '小红书dots IMO满分', url: 'https://mp.weixin.qq.com/s/dots-imo' },
          { name: '美团低空智能挑战赛', url: 'https://mp.weixin.qq.com/s/meituan-challenge' },
          { name: '阿里2027校招官宣', url: 'https://mp.weixin.qq.com/s/ali-2027' },
          { name: '腾讯具身智能开源', url: 'https://mp.weixin.qq.com/s/tencent-embodied' },
        ],
      },
      '技术前沿': {
        content: [
          '小红书开源 BigMac：突破多模态大模型训练帕累托前沿（7.22），大规模混合专家训练基础设施进入开源生态。',
          '小红书 HELMSMAN 重塑大规模向量检索基础设施（7.23），OSDI 2026 新成果，万亿级向量检索效率大幅提升。',
          '腾讯 WorkBuddy：如何把 Agent 做成可用产品（7.24），从原型到生产级 Agent 的工程化实践分享。',
          '腾讯 E-GRM 让模型"自我怀疑"（量子位 7.24）：拿不准才多想，拿得准直接答，推理效率与质量兼顾。',
          '阿里开源 skill-up：让 Agent Skill 可评测可回归（7.23），Agent 能力标准化评测工具。',
        ],
        sources: [
          { name: '小红书BigMac开源', url: 'https://mp.weixin.qq.com/s/bigmac' },
          { name: '小红书HELMSMAN', url: 'https://mp.weixin.qq.com/s/helmsman' },
          { name: '腾讯WorkBuddy', url: 'https://mp.weixin.qq.com/s/workbuddy' },
          { name: '阿里skill-up', url: 'https://mp.weixin.qq.com/s/skill-up' },
        ],
      },
      '行业趋势': {
        content: [
          '技术内容营销竞争进入白热化——小红书连发 4 篇开源技术成果+世界杯幕后纪实，腾讯 5 篇 AI 工程化，各大厂内容输出频次创近期新高。',
          '大厂挑战赛成新型人才吸引手段——美团 55 万元具身智能挑战赛、腾讯 KDD 学术活动，以"挑战+奖金"模式精准触达顶尖技术人才。',
          '秋招战 2027 届全面提前——阿里官宣 8 月启动，字节 Seed STEM 计划同步，头部大厂均在 7 月底完成 2027 届布局，快手需尽快跟进。',
          '开源生态竞争格局——小红书 BigMac+UltraEP，阿里 skill-up，开源成为 AI 公司技术影响力建设的核心战术。',
        ],
        sources: [
          { name: '字节Seed STEM计划', url: 'https://mp.weixin.qq.com/s/seed-stem' },
          { name: '阿里2027秋招', url: 'https://mp.weixin.qq.com/s/ali-autumn' },
        ],
      },
      '对快手的启示': {
        isInsight: true,
        content: [
          '小红书 IMO 满分+13 周年大片双线爆发——快手在重大技术里程碑（如可灵能力升级、IMO/竞赛等）节点，需同步策划雇主品牌内容搭车传播，技术成果即招聘素材。',
          '阿里已官宣 2027 届 8 月启动、字节 Seed STEM 计划已发——快手 2027 届校招官宣材料需在本周内准备就绪，争取在 8 月第一周对外发布，避免在关键窗口期失声。',
          '美团挑战赛"55 万元"噱头极强——快手如有技术竞赛计划，应在校招窗口期集中发声，用具体数字（奖金金额/参赛规模）强化传播力。',
        ],
      },
    },
  },

  companies: [
    {
      id: 'bytedance',
      name: '字节跳动',
      color: '#1D1D1F',
      summary: '4篇 · Seed STEM科学家计划 + COVERT ECCV2026 + 音视频Agent + Viking AI搜索',
      sections: {
        '技术与学术': {
          content: [
            'COVERT 入选 ECCV 2026（7.27）：面向视觉语言模型的隐私保护推理框架，顶会 ECCV 认可，VLM 安全与隐私方向新突破。',
            '音视频 Agent 生产级开发套件（7.21）：从生成到交付的完整 Agent 工程化框架，覆盖字幕、剪辑、审核全链路，将 AI 能力封装为可复用的生产工具。',
            'Viking AI 搜索（7.21）：30 分钟搭建个人情报站，AI 搜索让前沿资讯实时推送，内部工具能力对外展示。',
          ],
          sources: [
            { name: 'COVERT ECCV2026', url: 'https://mp.weixin.qq.com/s/covert' },
            { name: '音视频Agent套件', url: 'https://mp.weixin.qq.com/s/av-agent' },
            { name: 'Viking AI搜索', url: 'https://mp.weixin.qq.com/s/viking-search' },
          ],
        },
        '招聘动态': {
          content: [
            'Seed STEM 科学家计划正式启动（7.23）——面向数学/物理/CS 顶尖科研人才，以"科学家计划"命名强化学术吸引力，是字节在尖端科研人才争夺中的差异化布局。',
          ],
          sources: [
            { name: 'Seed STEM科学家计划', url: 'https://mp.weixin.qq.com/s/seed-stem' },
          ],
        },
        '对快手的启示': {
          isInsight: true,
          content: [
            'Seed STEM 科学家计划的命名策略值得借鉴——以"科学家/研究员计划"命名专属招聘项目，比普通 JD 更能吸引顶尖科研人才，快手可考虑围绕可灵/AIGC 发布类似的"快手 AIGC 科学家计划"。',
          ],
        },
      },
    },
    {
      id: 'tencent',
      name: '腾讯',
      color: '#1DA462',
      summary: '5篇 · Vibe Coding→AI原生研发 + WorkBuddy + Token刺客 + Agent自我进化',
      sections: {
        '技术洞察': {
          content: [
            '从 Vibe Coding 到 AI 原生研发团队（7.21）：完整的研发团队 AI 转型路径，从个人工具使用到团队工程实践，是本周最系统的 AI 工程化方法论输出。',
            'AI 改代码的那几分钟，你在做什么（7.22）：以轻松视角探讨 AI Coding 等待时间的价值，兼顾工程文化与传播性。',
            '鹅厂员工都碰到过哪些 Token 刺客（7.23）：用具体场景讲 LLM Token 使用陷阱，技术内容娱乐化，传播效果好。',
            'WorkBuddy：如何把 Agent 做成可用产品（7.24）：从 0 到生产级 Agent 的完整工程化实践，产品化视角罕见。',
            'Agent 开始"自我进化"（7.27）：会出题、会反思、自己长出新技能，Agent 自主进化能力前瞻探讨。',
          ],
          sources: [
            { name: 'Vibe Coding到AI原生团队', url: 'https://mp.weixin.qq.com/s/vibe-coding' },
            { name: 'WorkBuddy', url: 'https://mp.weixin.qq.com/s/workbuddy' },
            { name: 'Agent自我进化', url: 'https://mp.weixin.qq.com/s/agent-evolve' },
          ],
        },
        '对快手的启示': {
          isInsight: true,
          content: [
            '腾讯"Token 刺客"这类把技术问题娱乐化的内容形式，兼顾专业性和传播性——快手技术内容可在严肃技术文章之外，穿插"快手工程师遇到的那些 AI 奇葩 Bug"等轻量趣味内容，扩大受众。',
            '腾讯 WorkBuddy 将 Agent 产品化实践完整披露，这类"从原型到生产"的工程故事是顶尖技术人才最感兴趣的内容——快手可策划可灵 AI 产品工程化故事系列。',
          ],
        },
      },
    },
    {
      id: 'alibaba',
      name: '阿里巴巴',
      color: '#FF6A00',
      summary: '7篇 · 2027届官宣8月启动 + 阿里星课题第二期 + skill-up开源 + AI知识库',
      sections: {
        '技术产出': {
          content: [
            '阿里开源 skill-up：让 Agent Skill 可评测可回归（7.23）——Agent 技能标准化评测框架，对 Agent 能力质量保障体系有实践指导价值。',
            '分解一座冰山：后端系统 AI 知识库体系建设实践（7.24）——大规模 RAG 知识库工程化经验，覆盖索引、检索、更新全链路。',
            'NL2SQL 在超大规模数仓场景的架构突破（7.21）——自然语言驱动数据查询，超大规模生产环境工程实践。',
          ],
          sources: [
            { name: '阿里skill-up开源', url: 'https://mp.weixin.qq.com/s/skill-up' },
            { name: 'AI知识库建设实践', url: 'https://mp.weixin.qq.com/s/ai-kb' },
          ],
        },
        '校招动态': {
          content: [
            '阿里巴巴 2027 届应届生招聘 8 月启动官宣（7.22）——正式打响 2027 届秋招第一枪，强调 AI 方向重点布局。',
            '阿里星课题第二期（7.24 × 4篇）：基础模型/AI Infra/大模型应用/安全方向密集发布，以课题驱动校招内容传播。',
          ],
          sources: [
            { name: '阿里2027届官宣', url: 'https://mp.weixin.qq.com/s/ali-2027-announce' },
            { name: '阿里星课题第二期', url: 'https://mp.weixin.qq.com/s/alistar-2' },
          ],
        },
        '对快手的启示': {
          isInsight: true,
          content: [
            '阿里已官宣 2027 届 8 月启动，快手若计划 2027 秋招，本周即需对外官宣，否则在 TOP 求职者心智中将被动落后。',
            '阿里星课题系列是将技术招聘内容化的最佳实践——快手可参考，针对可灵/AIGC 核心技术推出"开放技术课题"形式，以内容吸引对的候选人主动投递。',
          ],
        },
      },
    },
    {
      id: 'meituan',
      name: '美团',
      color: '#FFD100',
      summary: '5篇 · MineExplorer + LoHoSearch + 55万元具身智能挑战赛 + Keeta巴西招聘',
      sections: {
        '技术发布': {
          content: [
            'MineExplorer：揭示顶级多模态大模型被忽视的能力断层（7.23）——让 AI 离开温室，走向动态世界，暴露现有 MLLM 在复杂动态场景中的真实能力差距。',
            '下一代搜索智能体评测基准 LoHoSearch（7.23）：用知识图谱校准 AI 能力认知，为搜索 Agent 提供标准化评测基础。',
          ],
          sources: [
            { name: 'MineExplorer', url: 'https://mp.weixin.qq.com/s/mine-explorer' },
            { name: 'LoHoSearch', url: 'https://mp.weixin.qq.com/s/lohosearch' },
          ],
        },
        '活动与招聘': {
          content: [
            '2026 美团低空经济与具身智能挑战赛（7.23）：55 万元奖金，覆盖低空经济+具身智能两大方向，以高额奖金精准吸引该领域顶尖研究团队。',
            'Keeta 巴西招聘（7.23）：美团国际化业务向外招聘，"一起做最懂用户的人"，全球化雇主形象建设。',
          ],
          sources: [
            { name: '55万元具身智能挑战赛', url: 'https://mp.weixin.qq.com/s/meituan-challenge' },
            { name: 'Keeta巴西招聘', url: 'https://mp.weixin.qq.com/s/keeta-brazil' },
          ],
        },
        '对快手的启示': {
          isInsight: true,
          content: [
            '美团 55 万元挑战赛是典型的"以赛代招"——通过高额奖金的技术挑战赛，精准触达顶尖具身智能研究者，快手可针对视频生成/AIGC 方向举办类似挑战赛，挑战赛本身即是强雇主品牌素材。',
            '美团 MineExplorer 的批评性研究（暴露现有 MLLM 能力断层）获得了大量行业关注——独立批判性技术视角反而提升了公信力，快手技术内容可适度引入"我们发现了 XXX 的真实局限"类叙事。',
          ],
        },
      },
    },
    {
      id: 'xiaohongshu',
      name: '小红书',
      color: '#FF2D55',
      summary: '7篇 · dots IMO满分 + BigMac开源 + HELMSMAN OSDI + UniNote + 13周年',
      sections: {
        '技术爆发': {
          content: [
            'dots 模型 IMO 2026 满分金牌（7.21）——数学推理能力达到全球顶级竞赛满分水准，是本周最具传播力的技术成就，社交媒体引发广泛讨论。',
            'dots infra 开源 BigMac（7.22）：突破多模态大模型训练帕累托前沿，训练效率与模型质量双优化，向开源社区贡献 MoE 训练基础设施。',
            'HELMSMAN 重塑向量检索基础设施（7.23）：OSDI 2026 新成果，大规模向量检索性能跃升，支撑小红书千亿级内容搜索。',
            'UniNote 多模态检索（7.24）：让内容表征与排序"合二为一"，端到端多模态搜索排序新范式。',
          ],
          sources: [
            { name: 'dots IMO满分', url: 'https://mp.weixin.qq.com/s/dots-imo' },
            { name: 'BigMac开源', url: 'https://mp.weixin.qq.com/s/bigmac' },
            { name: 'HELMSMAN OSDI2026', url: 'https://mp.weixin.qq.com/s/helmsman' },
          ],
        },
        '文化品牌': {
          content: [
            '13 周年内部大片《人，来看小红书的生日大片》（7.23）——高质感视觉内容，对内传递归属感，对外建立有温度的雇主品牌。',
            '世界杯幕后纪实《"不可能"的 40 天》（7.21）——世界杯期间产品幕后故事，用真实案例建立"快速响应+创造力"团队形象。',
          ],
          sources: [
            { name: '小红书13周年大片', url: 'https://mp.weixin.qq.com/s/xhs-birthday' },
            { name: '世界杯幕后40天', url: 'https://mp.weixin.qq.com/s/xhs-worldcup' },
          ],
        },
        '对快手的启示': {
          isInsight: true,
          content: [
            '小红书 13 周年大片 + IMO 满分的组合，是本周整个行业最成功的雇主品牌事件——情感向内容（周年大片）与技术向内容（IMO 金牌）互相加持，共同塑造"有灵魂的技术公司"形象，值得快手在快手创立纪念日或重大技术成就节点复刻。',
            '世界杯幕后 40 天纪实的叙事方式——以重大外部事件为背景讲内部团队故事，叙事张力强，快手可针对春晚、世界杯、重大产品发布等节点，策划同类幕后故事内容。',
          ],
        },
      },
    },
  ],
};
