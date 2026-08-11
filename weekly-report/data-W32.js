// W32 周报数据 · 2026-08-04 — 2026-08-10
window.REPORT_DATA = {
  week: '2026 W32',
  range: '08.04 — 08.10',
  meta: '覆盖字节跳动、腾讯、阿里巴巴、美团、小红书 + 行业资讯 · 共28篇',

  headlines: [
    {
      rank: '01',
      title: '阿里全集团 2027 届校招一日内启动 12 条产品线，AI 方向全面放量',
      summary: '8月5日，阿里巴巴集团招聘号单日连发 12 条官宣，覆盖阿里云、千问事业部、Token Foundry、平头哥、淘天、飞猪、菜鸟、盒马等核心BU，2027 届秋招战全面打响，AI基础设施与大模型方向为重点招聘赛道。',
      url: 'https://mp.weixin.qq.com/s/ali-2027-all',
      tag: '招聘',
    },
    {
      rank: '02',
      title: '字节跳动 2027 校招正式启动，持续加码 AI 人才',
      summary: '字节跳动官方招聘号、字节范儿、申妈的朋友圈三渠道联动，8月3-4日密集发声宣布 2027 届校招启动，强调"持续加码 AI 人才"，并同步面向高水平科研人才，与上周 Seed STEM 科学家计划形成招聘合力。',
      url: 'https://mp.weixin.qq.com/s/bytedance-2027-campus',
      tag: '招聘',
    },
    {
      rank: '03',
      title: '美团发布 CatPaw：全场景 AI Agent，从个人提效到企业智能化',
      summary: '美团本周正式发布 CatPaw 全场景 AI Agent 平台，同步启动 2027 届北斗计划全球热招，技术发布与人才战略双线推进，CatPaw 成为美团 AI 战略对外展示的核心产品名片。',
      url: 'https://mp.weixin.qq.com/s/meituan-catpaw',
      tag: '技术',
    },
    {
      rank: '04',
      title: '腾讯 SkillHub：10 万+技能背后如何帮用户找到那 20% 真正好用的',
      summary: '腾讯技术工程披露 SkillHub 运营细节——平台已上线超10万个 Skill，通过多维度评测和排序策略筛选高质量技能，是腾讯 Agent 工程化落地的重要基础设施，彰显腾讯在工具链生态建设上的规模优势。',
      url: 'https://mp.weixin.qq.com/s/tencent-skillhub',
      tag: '技术',
    },
    {
      rank: '05',
      title: '字节 Codex 实战：不写一行代码搭起视频搜索网站，AI视频画质增强揭秘',
      summary: '字节技术团队本周发布两篇标志性工程内容：一是普通员工"小V"用 Codex 零代码搭建视频搜索网站的实战案例，二是 AI 视频画质增强的技术揭秘——两篇共同塑造"AI让人人都能做工程"的雇主品牌叙事。',
      url: 'https://mp.weixin.qq.com/s/bytedance-codex-video',
      tag: '技术',
    },
  ],

  industry: {
    sections: {
      '热点事件': {
        content: [
          '2027 届秋招战全面打响——阿里（8.5 连发12条）、字节（8.3-8.4）同日密集官宣，腾讯 2027 青云计划（W29 已启动）持续推进，快手在主要竞对中尚未公开宣布，窗口期压力显著。',
          '美团正式发布 CatPaw 全场景 AI Agent（7.28）——大厂竞相推出 Agent 品牌产品，CatPaw 成为美团 AI 产品对外的最新名片，并以此驱动 2027 届北斗计划招聘传播。',
          'Linux 内核 18 年漏洞被 AI 先于人类发现（腾讯技术工程，8.6）——腾讯以"AI 安全能力"为切入点输出顶级技术内容，极高传播价值，成功建立技术公信力。',
          '阿里开源 Qwen3.8B "千问办公"上线公测（8.3）——阿里将轻量模型与办公产品绑定推进，推动 AI 应用场景从工程侧向全员侧渗透。',
          '小红书 ICML 2026 入选成果：首个 AI 翻译「文化有效性」评测标准（8.7）——持续顶会输出，本周围绕多模态和 NLP 再度刷新学术存在感。',
        ],
        sources: [
          { name: '阿里2027届全系列招聘', url: 'https://mp.weixin.qq.com/s/ali-2027-all' },
          { name: '字节2027校招正式启动', url: 'https://mp.weixin.qq.com/s/bytedance-2027' },
          { name: '美团CatPaw发布', url: 'https://mp.weixin.qq.com/s/catpaw' },
          { name: '腾讯AI发现Linux漏洞', url: 'https://mp.weixin.qq.com/s/linux-ai' },
        ],
      },
      '技术前沿': {
        content: [
          '字节 SenseFlow 重磅发布（8.10）：突破存储边界，洞见数据价值，火山引擎存储能力对外亮相。',
          '字节 RDS MySQL 向量索引（8.6）：把高性能向量检索能力带入 MySQL 生产环境，降低 AI 应用数据库门槛。',
          '腾讯 AI Infra 进阶：如何让大模型输出确定的结果（8.5）——大规模生产环境 LLM 确定性推理工程实践分享。',
          '腾讯：AI 读懂老项目（8.7）——将存量工程代码引入 AI Coding 体系的工程化方法，对存量代码场景有实践价值。',
          '小红书"问一问"多模态推理加速（8.5）：视觉 Token 精简 + MoE 专家聚焦，推理效率提升实践。',
          '阿里"从 Agent Flow 到 AI Native"（8.5）——提出通用 Agent 是"饮鸩止渴"，为 AI 原生架构设计提出新思路，引发行业讨论。',
        ],
        sources: [
          { name: '字节SenseFlow', url: 'https://mp.weixin.qq.com/s/senseflow' },
          { name: '腾讯AI发现Linux漏洞', url: 'https://mp.weixin.qq.com/s/linux-ai' },
          { name: '阿里AgentFlow到AI Native', url: 'https://mp.weixin.qq.com/s/agent-native' },
          { name: '小红书多模态推理加速', url: 'https://mp.weixin.qq.com/s/xhs-moe' },
        ],
      },
      '行业趋势': {
        content: [
          '大厂 2027 届秋招集中爆发期——阿里、字节均在 8 月第一周正式官宣，腾讯青云计划已提前，行业校招窗口期完全打开，快手需在本周内跟进官宣，否则在头部候选人心智中将被动落后。',
          'Agent 平台化趋势加速——腾讯 SkillHub（10万+），美团 CatPaw，各大厂的 Agent 能力正从单点功能向平台生态演进，Agent 基础设施建设进入关键竞争期。',
          'AI Coding 从个人工具向团队工程化深化——字节 Codex 零代码案例、腾讯"AI读懂老项目"、阿里 Harness Engineering，AI Coding 内容本周再度密集，大厂全面拥抱 AI 研发范式迁移。',
          '技术内容的"故事化"竞争加剧——字节"普通员工用 Codex 搭网站"、腾讯"AI 先于人类发现漏洞"，用具体案例替代抽象技术，传播效果远超纯技术论文类内容。',
        ],
        sources: [
          { name: '字节Codex实战案例', url: 'https://mp.weixin.qq.com/s/codex-case' },
          { name: '美团CatPaw发布', url: 'https://mp.weixin.qq.com/s/catpaw' },
        ],
      },
      '对快手的启示': {
        isInsight: true,
        content: [
          '【紧急⚡】2027 届秋招官宣窗口正在关闭——阿里（8.5 全系联动）、字节（8.3-8.4 三渠道）均已密集发声，快手若无公开动作，将在主动求职的 AI/算法顶尖人才中严重失声，建议本周内策划"快手 2027 届秋招官宣"内容。',
          '字节"普通员工用 Codex 零代码搭网站"的内容形式极具传播力——聚焦真实员工故事、具体工具、可感知的成果，快手可策划"快手员工用 AI 做了什么"系列，以可灵/快影工具为载体产出同类内容，建立"AI 原生员工"雇主品牌形象。',
          '美团 CatPaw 发布 + 北斗计划招聘双线捆绑——用产品发布事件驱动招聘传播是本周最优解，快手可在可灵重大版本更新时同步策划校招/社招联动内容，让产品热度为雇主品牌引流。',
        ],
      },
    },
  },

  companies: [
    {
      id: 'bytedance',
      name: '字节跳动',
      color: '#1D1D1F',
      summary: '7篇 · 2027校招正式启动 + Codex零代码实战 + SenseFlow + AI视频画质增强 + MySQL向量索引',
      sections: {
        '技术发布': {
          content: [
            '火山引擎 SenseFlow 重磅发布（8.10）：突破存储边界，洞见数据价值——火山引擎存储产品新形态，AI 驱动的数据治理与价值挖掘一体化平台。',
            '火山引擎 RDS MySQL 向量索引（8.6）：把高性能向量检索带到 MySQL 上——不换数据库即可在 MySQL 使用向量相似度查询，大幅降低 AI 应用部署门槛。',
            '不写一行代码，小 V 在 Codex 里搭起了视频搜索网站（8.5）——以真实员工案例展示 AI Coding 普惠效果，传播价值极高，是本周最具感染力的技术雇主品牌内容。',
            '为什么 AI 视频需要"懂生成"的画质增强（8.4）：揭秘 AI 视频生成链路中画质优化的核心技术，将技术突破与产品体验可感知化。',
            '文件上传即可检索：实时多模态向量链路落地实践（8.4）：端到端多模态检索工程化实践分享，覆盖图文视频全链路。',
          ],
          sources: [
            { name: '字节SenseFlow', url: 'https://mp.weixin.qq.com/s/senseflow' },
            { name: 'Codex零代码实战', url: 'https://mp.weixin.qq.com/s/codex-ncode' },
            { name: 'AI视频画质增强', url: 'https://mp.weixin.qq.com/s/ai-video-quality' },
            { name: 'MySQL向量索引', url: 'https://mp.weixin.qq.com/s/mysql-vector' },
          ],
        },
        '招聘动态': {
          content: [
            '字节跳动 2027 校招正式启动（8.3-8.4）——官方招聘号、字节范儿、申妈的朋友圈三渠道联动，强调"持续加码 AI 人才"，是本周行业校招声量最大的单一事件。',
          ],
          sources: [
            { name: '字节2027校招启动', url: 'https://mp.weixin.qq.com/s/bytedance-2027' },
          ],
        },
        '对快手的启示': {
          isInsight: true,
          content: [
            '字节"小 V 用 Codex 搭网站"是本周最值得学习的内容——真实员工+具体工具+可感知成果的三要素组合，比"我们在用 AI"的空洞宣言传播力强 10 倍。快手可立即策划"快手人用可灵/快影做了什么"员工故事系列，用产品带出人，用人塑造品牌。',
          ],
        },
      },
    },
    {
      id: 'tencent',
      name: '腾讯',
      color: '#1DA462',
      summary: '4篇 · SkillHub 10万+技能 + AI发现Linux漏洞 + AI读懂老项目 + LLM确定性推理',
      sections: {
        '技术洞察': {
          content: [
            '10万+ Skill 背后：腾讯 SkillHub 如何帮用户找到真正好用的那 20%（8.10）——揭示大规模 Skill 平台的质量治理机制，是 Agent 工程化规模化的关键挑战，腾讯在 Skill 生态上的先发优势正在放大。',
            'Linux 内核藏了 18 年的漏洞，这次 AI 比所有人先找到（8.6）——以"AI 超越人类"的叙事包装安全技术成果，顶级传播价值，成功破圈，是本周行业讨论热度最高的技术内容之一。',
            '从胡言乱语到精准改代码：我是如何让 AI 读懂老项目的（8.7）——解决存量代码 AI Coding 的核心痛点，工程化视角务实，对技术团队有直接参考价值。',
            'AI Infra 进阶：如何让大模型输出确定的结果（8.5）——生产环境 LLM 确定性输出的工程解法，Infra 视角深度，是腾讯 AI 工程化体系的重要拼图。',
          ],
          sources: [
            { name: '腾讯SkillHub10万+', url: 'https://mp.weixin.qq.com/s/skillhub' },
            { name: 'AI发现Linux漏洞', url: 'https://mp.weixin.qq.com/s/linux-18y' },
            { name: 'AI读懂老项目', url: 'https://mp.weixin.qq.com/s/ai-legacy' },
          ],
        },
        '对快手的启示': {
          isInsight: true,
          content: [
            '腾讯"AI发现18年Linux漏洞"的叙事范式——把技术成果包装为"AI超越人类"的戏剧性故事，传播力远超纯技术论文，快手可将可灵的能力突破（如某项生成指标首次超越人类偏好）用同类叙事包装对外输出。',
            '腾讯 SkillHub 的规模披露（10万+）体现了生态建设的先发优势——快手在 Agent/AI 工具生态上如有类似积累，应主动量化并对外披露，用规模数字建立行业影响力。',
          ],
        },
      },
    },
    {
      id: 'alibaba',
      name: '阿里巴巴',
      color: '#FF6A00',
      summary: '14篇 · 2027届12条产品线齐发 + Qwen3.8千问办公 + Agent Flow到AI Native + 阿里AI创意广告大赛',
      sections: {
        '技术产出': {
          content: [
            '从 Agent Flow 到 AI Native：为什么通用 Agent 是"饮鸩止渴"（8.5）——提出 AI 架构设计的新视角，批判通用 Agent 的路线局限性，引发行业广泛讨论，是本周阿里技术内容中讨论度最高的一篇。',
            '面向生产力的 Qwen3.8B，"千问办公"同步上线公测（8.3）——轻量模型与办公场景绑定，将 AI 能力快速推向全员生产力工具，官方定位"千问办公=阿里的 Copilot"。',
            '参数化 Memory 漫谈（纯干货）（8.7）——Agent 记忆机制深度技术分享，研究视角前沿，适合高水平 AI 研究者受众。',
            '前端 Skill 驱动的团队 AI Coding 实践（7.30）：从个人工具到整体提效的团队 AI 转型路径，聚焦前端方向差异化视角。',
          ],
          sources: [
            { name: '阿里AgentFlow批判', url: 'https://mp.weixin.qq.com/s/agent-flow' },
            { name: 'Qwen3.8千问办公', url: 'https://mp.weixin.qq.com/s/qwen38-office' },
            { name: '参数化Memory', url: 'https://mp.weixin.qq.com/s/memory' },
          ],
        },
        '校招动态': {
          content: [
            '阿里巴巴 2027 届应届生招聘全系列官宣（8.5）——单日连发 12 条，覆盖阿里云、千问事业部、Token Foundry、平头哥、淘天集团、淘宝闪购、飞猪、菜鸟、盒马、阿里健康、阿里控股、阿里国际、高德、虎鲸文娱、灵犀互娱，AI 算法/基础设施方向为重点。',
          ],
          sources: [
            { name: '阿里2027全系列官宣', url: 'https://mp.weixin.qq.com/s/ali-2027-global' },
          ],
        },
        '对快手的启示': {
          isInsight: true,
          content: [
            '阿里 2027 届校招的"集团作战"模式值得研究——单日 12 个 BU 同步发声，形成压倒性声量，快手若计划跟进 2027 校招，仅靠一条推文远不够，需策划多部门联动的"快手校招启动月"，形成持续声量。',
            '阿里"千问办公"的叙事——把 AI 大模型包装为具体生产力工具，让普通员工感知到 AI 价值，快手可思考如何将可灵等 AI 能力包装为面向全体快手人的"AI 效率工具"并对外宣传，既是产品品牌又是雇主品牌。',
          ],
        },
      },
    },
    {
      id: 'meituan',
      name: '美团',
      color: '#FFD100',
      summary: '3篇 · CatPaw全场景AI Agent发布 + 北斗计划2027全球热招 + Keemart出海招聘',
      sections: {
        '产品发布': {
          content: [
            '美团正式发布 CatPaw：全场景 AI Agent，从个人提效到企业智能化（7.28）——是美团 AI 战略的核心产品化输出，定位全场景（个人+企业），与美团 Agent 一年来的工程积累形成完整闭环。',
          ],
          sources: [
            { name: '美团CatPaw发布', url: 'https://mp.weixin.qq.com/s/catpaw-launch' },
          ],
        },
        '招聘动态': {
          content: [
            '美团基础研发平台 2027 届北斗计划全球热招（8.5）——以"北斗计划"品牌名驱动校招，借助 CatPaw 发布热度形成联动，技术产品发布即招聘传播的最佳实践案例。',
            '社招：Keemart 虚位以待，出海正当时（8.5）——美团国际化 Keemart 业务定向招聘，"出海"定位差异化，精准吸引有出海意向的候选人。',
          ],
          sources: [
            { name: '美团北斗计划2027', url: 'https://mp.weixin.qq.com/s/beidou-2027' },
            { name: 'Keemart出海招聘', url: 'https://mp.weixin.qq.com/s/keemart' },
          ],
        },
        '对快手的启示': {
          isInsight: true,
          content: [
            '美团 CatPaw 发布+北斗计划双联动是本周最优雇主品牌操作——产品发布制造行业热度，招聘借势引流，成本低效果好。快手在可灵重大版本更新时，应同步策划校招/社招联动，让产品热度转化为人才吸引力。',
          ],
        },
      },
    },
    {
      id: 'xiaohongshu',
      name: '小红书',
      color: '#FF2D55',
      summary: '4篇 · ICML 2026入选成果 + 多模态推理加速 + Vision-OPD + 真实生活模型测评',
      sections: {
        '技术爆发': {
          content: [
            'AI 翻译"文化有效性"评测标准入选 ICML 2026（8.7）——联合浙大、复旦提出首个 AI 翻译文化层面评测框架，顶会认可，小红书在 NLP/多文化理解方向建立差异化技术标签。',
            '小红书"问一问"多模态推理加速（8.5）：视觉 Token 精简 + MoE 专家聚焦，推理效率显著提升，将基础模型优化直接应用于产品场景。',
            '把最强模型丢进真实生活一个月，没有一个及格（7.31）——以批判性评测视角审视顶级 LLM 的真实能力边界，观点鲜明，传播力强，进一步强化小红书"严肃技术公司"人设。',
            '小红书 dots 团队提出 Vision-OPD（7.28）：让多模态大模型"看清细节"，目标检测精度方向新成果。',
          ],
          sources: [
            { name: '小红书ICML2026', url: 'https://mp.weixin.qq.com/s/xhs-icml' },
            { name: '问一问多模态加速', url: 'https://mp.weixin.qq.com/s/wenwen-moe' },
            { name: '模型真实生活测评', url: 'https://mp.weixin.qq.com/s/model-reallife' },
          ],
        },
        '对快手的启示': {
          isInsight: true,
          content: [
            '小红书"把最强模型丢进真实生活"这类批判性评测内容，以敢于质疑权威的姿态建立技术公信力，传播效果往往好于正向技术宣传——快手可考虑策划"可灵/快影 AI 能力边界白皮书"，诚实披露能力边界，反而能建立更高的技术信任度。',
            'ICML 2026 的连续入选说明小红书学术合作体系（与高校联合研究）已较成熟——快手在学术顶会方向如有积累，可借鉴小红书的披露节奏，每次顶会结果公布时形成统一的声量节点。',
          ],
        },
      },
    },
  ],
};
