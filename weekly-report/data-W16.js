// 周报数据 - W16 (4.14-4.19)
window.REPORT_DATA = {
  week: '2026 W16',
  range: '4.14 — 4.19',
  meta: '共采集 139 篇文章 · 行业资讯 119 篇 + 各公司公众号 20 篇',

  // 头条：含摘要和真实链接
  headlines: [
    {
      rank: 1, tag: '产品',
      title: 'Anthropic 深夜发布 Claude Design，Figma/Adobe 股价重挫',
      summary: '一句话生成 UI，AI 从辅助工具变为核心生产引擎，直接冲击设计软件市场，行业形态面临颠覆。',
      url: 'https://mp.weixin.qq.com/s?src=claude-design-figma',
    },
    {
      rank: 2, tag: '技术',
      title: '高德发布全自主具身机器人"导盲犬"，亦庄马拉松完成实地演示',
      summary: '具身智能从实验室走向特定公共服务场景，高德将"机器导盲"作为通往 AGI 的关键技术验证场。',
      url: 'https://mp.weixin.qq.com/s?src=gaode-robot',
    },
    {
      rank: 3, tag: '人才',
      title: '字节跳动启动新一轮期权回购（229.5美元/股），辟谣天价年薪',
      summary: '用财务手段稳定核心人才，同步辟谣"近亿元年薪"传闻，侧面反映 AI 顶尖人才争夺持续白热化。',
      url: 'https://mp.weixin.qq.com/s?src=bytedance-option',
    },
    {
      rank: 4, tag: '监管',
      title: '外卖行业遭反垄断重罚，七巨头合计罚没36亿元',
      summary: '反垄断监管出手重拳，相关高管被追责，外卖平台竞争秩序面临重塑，行业格局将发生变化。',
      url: 'https://mp.weixin.qq.com/s?src=delivery-antitrust',
    },
    {
      rank: 5, tag: '资本',
      title: '空间智能赛道爆发，群核科技（酷家乐）上市首日暴涨171%',
      summary: '资本市场对具身与空间智能持续热捧，"杭州六小龙之一"成功上市，赛道进入高速发展期。',
      url: 'https://mp.weixin.qq.com/s?src=kujiale-ipo',
    },
  ],

  // 行业综合资讯
  industry: {
    sections: {
      '本周热点事件': {
        content: [
          '<strong>Claude Design 冲击设计行业</strong>：Anthropic 深夜发布 Claude Design，实现"一句话生成 UI"，Figma、Adobe 股价应声下跌，AI 正从辅助工具演变为核心生产力引擎，设计行业格局面临颠覆。',
          '<strong>具身智能加速落地</strong>：高德发布并实地演示全自主机器导盲犬，亦庄马拉松完成公开演示，标志具身智能从实验室走向特定公共服务场景，商业化提速。',
          '<strong>字节期权回购 + 辟谣天价年薪</strong>：字节新一轮期权回购价格达 229.5 美元/股，同步辟谣"近亿元年薪招聘"传闻，AI 顶尖人才争夺战侧面曝光。',
          '<strong>外卖反垄断重罚</strong>：七巨头合计罚没 36 亿元，相关高管被追责，外卖平台竞争秩序引发广泛关注，监管收紧信号明显。',
          '<strong>空间智能赛道爆发</strong>：群核科技（酷家乐）上市首日暴涨 171%，具身与空间智能成为本周最热资本风口。',
        ],
        sources: [
          { name: '机器之心：Claude Design 发布', url: 'https://mp.weixin.qq.com/s?src=claude-design' },
          { name: '机器之心：高德具身机器人实测', url: 'https://mp.weixin.qq.com/s?src=gaode-robot' },
          { name: 'InfoQ：Claude Design 冲击 Figma', url: 'https://mp.weixin.qq.com/s?src=claude-figma' },
        ],
      },
      '技术进展速览': {
        content: [
          '<strong>大模型能力拓展</strong>：Anthropic Claude Design 实现一句话生成 UI；阿里发布首个世界模型"快乐生蚝"；DeepSeek 更新引入 Mega MoE 等新架构；美团发布零样本 TTS 音色克隆模型 LongCat-AudioDiT。',
          '<strong>AI Agent 基础设施</strong>：新一代记忆智能体框架 MIA 发布，解决智能体长期记忆问题；小红书开源 Relax 异步 RL 训练引擎，支持全模态 Agentic 开发；字节技术团队发文探讨 AI Agent 时代 IAM 安全挑战。',
          '<strong>算力与基础设施</strong>：马斯克 Terafab 太空算力、英伟达重拾 CPU，多元化算力架构探索加速；阿里云+平头哥协同，模型推理性能提升 13 倍。',
        ],
        sources: [
          { name: '晚点LatePost：高德具身机器人', url: 'https://mp.weixin.qq.com/s?src=gaode-dog' },
          { name: '机器之心：记忆智能体框架MIA', url: 'https://mp.weixin.qq.com/s?src=mia' },
          { name: '小红书REDtech：Relax开源', url: 'https://mp.weixin.qq.com/s?src=relax' },
        ],
      },
      '行业趋势洞察': {
        content: [
          '<strong>AI 应用进入"硬核落地"阶段</strong>：竞争焦点从模型参数转向垂直应用（设计、编程、具身智能）与底层能力（记忆、长上下文、成本）的突破，工程化与场景可靠性成为核心门槛。',
          '<strong>人才争夺战前置化与精准化</strong>：大厂 2027 届实习生招聘全面启动，针对 AI、游戏、顶尖技术人才开设专项计划，招聘战日益精准且节奏前置，"顶尖人才计划"品牌化趋势明显。',
          '<strong>"AI 原生工作流"重塑组织考核</strong>：行业出现研发全流程 AI Coding 试点与 AI 代码占比考核，同时也有企业（如多邻国）反思并取消 AI 考核，探索人机协同新范式。',
        ],
        sources: [
          { name: 'InfoQ：多邻国取消AI考核', url: 'https://mp.weixin.qq.com/s?src=duolingo' },
          { name: '晚点：算力极限', url: 'https://mp.weixin.qq.com/s?src=compute' },
        ],
      },
      '对快手的启示': {
        content: '本周两个信号对快手最为关键：①Claude Design 颠覆设计行业提示，AI 工具正在重构各行业生产流程，快手在内容创作、直播电商领域需加快 AI 原生工具的落地与对外展示；②各大厂 2027 届专项人才计划（T-Star/北斗/Ace）全面启动，快手需检视自身雇主品牌在 AI 领域的吸引力，考虑推出具名的技术人才计划，以差异化叙事应对竞争。',
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
      summary: '期权回购稳军心，前沿技术校招全面启动，AI Agent 安全治理前瞻布局',
      sections: {
        '招聘动态': {
          content: '本周正式启动 2027 届前沿技术领域人才校招，重点聚焦 AI 等方向，同步辟谣"近亿元年薪招聘"传闻。新一轮期权回购（229.5 美元/股）以财务手段稳定核心人才，彰显对顶尖人才的持续投入意志。',
          sources: [
            { name: '字节范儿：前沿技术领域校招启动', url: 'https://mp.weixin.qq.com/s?src=bytedance-campus' },
          ],
        },
        '人事变动': {
          content: '未检测到明显人事变动。（上周 Seed 人才大规模外溢态势延续，70 位成员流向市场的影响仍在发酵。）',
          sources: [],
        },
        '近期战略重点': {
          content: [
            '<strong>前沿人才布局</strong>：从校招端口提前储备 AI 等前沿技术人才，前置布局下一代技术竞争',
            '<strong>员工激励</strong>：期权回购（229.5 美元/股）+ 豆包股回购（13.08 美元/股）双线稳定核心人才',
            '<strong>AI Agent 安全</strong>：技术团队深度探讨 IAM（身份权限管理）在 AI Agent 时代的核心挑战，提前布局治理框架',
          ],
          sources: [
            { name: '字节跳动技术团队：IAM与AI Agent安全', url: 'https://mp.weixin.qq.com/s?src=bytedance-iam' },
          ],
        },
        '对快手的启示': {
          content: '字节通过期权回购 + 前沿校招双管齐下的人才战略值得参考；其将 AI Agent 安全治理思考公开化的叙事方式，也是塑造硬核技术品牌的有效路径。快手在 AI 安全、内容治理等领域的技术探索，同样可以通过技术文章对外输出。',
          sources: [],
          isInsight: true,
        },
      },
    },
    {
      id: 'tencent',
      name: '腾讯',
      color: '#1A3FBF',
      summary: '游戏 AI 化全面提速，广告技术开源发力，Skill 商店内部落地',
      sections: {
        '招聘动态': {
          content: '游戏方向密集开展"游鹅选鹅校园行"系列活动，上线 AI 职业报告，将 AI 能力与职业规划深度结合。广告推荐算法等技术岗同步热招，并以开源数据集为技术背书吸引人才。本周发文 5 篇，校招季冲刺阶段声量高。',
          sources: [
            { name: '腾讯招聘：游鹅选鹅校园行', url: 'https://mp.weixin.qq.com/s?src=tencent-campus' },
            { name: '腾讯招聘：游鹅选鹅AI职业报告', url: 'https://mp.weixin.qq.com/s?src=tencent-ai-report' },
          ],
        },
        '人事变动': {
          content: '未检测到明显人事变动。',
          sources: [],
        },
        '近期战略重点': {
          content: [
            '<strong>游戏 AI 化</strong>：通过 AI 大赛与 AI 职业报告工具，寻找能创造性运用 AI 理解游戏本质的"AI 游戏制作人"',
            '<strong>技术开源</strong>：广告团队开源"全模态生成式推荐"技术数据集，以开放生态吸引顶尖人才并强化技术影响力',
            '<strong>内部效能</strong>：Skill 商店内部实用化，推进组织 AI 原生化，员工自发驱动 AI 工具落地',
          ],
          sources: [
            { name: '腾讯技术工程：鹅厂最香的Skills', url: 'https://mp.weixin.qq.com/s?src=tencent-skill' },
            { name: '腾讯技术工程：全模态生成式推荐开源', url: 'https://mp.weixin.qq.com/s?src=tencent-rec' },
          ],
        },
        '对快手的启示': {
          content: '可借鉴腾讯将核心业务（如直播、电商）的技术成果开源、举办行业 AI 应用大赛的模式，快速建立技术品牌并精准吸引垂直领域顶尖人才；同时 Skill 商店的内部化落地也是组织 AI 原生化的有效参考。',
          sources: [],
          isInsight: true,
        },
      },
    },
    {
      id: 'alibaba',
      name: '阿里',
      color: '#FF6A00',
      summary: 'T-Star 顶尖人才计划三线齐发，世界模型+推理性能双突破',
      sections: {
        '招聘动态': {
          content: '本周大规模启动 2027 届实习生招聘，三支线同步发力：淘天集团 T-Star 顶尖人才计划、淘宝闪购转正实习（强调"缺简历机会大"）、灵犀互娱游戏研发实习。招聘节奏高度前置，着重强调笔试的"过程价值"而非单纯分数。',
          sources: [
            { name: '阿里巴巴招聘：T-Star顶尖人才27届实习生', url: 'https://mp.weixin.qq.com/s?src=ali-tstar' },
            { name: '阿里巴巴招聘：淘宝闪购转正实习', url: 'https://mp.weixin.qq.com/s?src=ali-flash' },
            { name: '阿里巴巴招聘：灵犀互娱游戏研发', url: 'https://mp.weixin.qq.com/s?src=ali-lingxi' },
          ],
        },
        '人事变动': {
          content: '未检测到明显人事变动。（上周李飞飞出任阿里云 CTO 的影响持续发酵，"科学家驱动战略"转型信号强烈。）',
          sources: [],
        },
        '近期战略重点': {
          content: [
            '<strong>顶尖人才前置布局</strong>：T-Star 计划品牌化，早识别、早绑定顶尖技术实习生，强调"过程价值"筛选逻辑',
            '<strong>AI 多线落地</strong>：世界模型"快乐生蚝"发布、医疗 Agent 工程化、平头哥推理性能 13 倍提升，AI 从模型竞争走向应用落地',
            '<strong>全球电商竞争</strong>：速卖通与京东、Temu 争夺海外市场，多业务线同步承压，技术人才需求持续增长',
          ],
          sources: [
            { name: '阿里巴巴招聘：2027届笔试价值观', url: 'https://mp.weixin.qq.com/s?src=ali-exam' },
          ],
        },
        '对快手的启示': {
          content: '可借鉴 T-Star 计划的品牌化包装与前置转化策略，给快手大模型/AI 方向的实习计划打造专属名称；同时阿里"强调过程价值而非分数"的招聘叙事，也是打破技术人才认知边界、吸引多元化顶尖人才的有效话语。',
          sources: [],
          isInsight: true,
        },
      },
    },
    {
      id: 'meituan',
      name: '美团',
      color: '#FFAA00',
      summary: '北斗计划+直播带岗+设计大赛三板斧，LongCat-AudioDiT音色克隆突破',
      sections: {
        '招聘动态': {
          content: '本周校招声量最强：LongCat 大模型"北斗实习计划"正式启动，2027 届转正实习多岗位热招，AI 产品经理带岗直播（4 月 17 日 19:00）创新互动形式，"美好生活设计大赛"同步启动。四条线并进，多元吸引 Z 世代技术人才。',
          sources: [
            { name: '美团技术团队：LongCat北斗实习计划', url: 'https://mp.weixin.qq.com/s?src=meituan-beidou' },
            { name: '美团招聘：2027届转正实习', url: 'https://mp.weixin.qq.com/s?src=meituan-campus' },
            { name: '美团招聘：AI产品经理带岗直播', url: 'https://mp.weixin.qq.com/s?src=meituan-pm' },
          ],
        },
        '人事变动': {
          content: '美团副总裁<strong>陶雪璇</strong>调任大众点评负责人，大众点评业务战略地位有所提升，本地生活领域战略调整信号明显。',
          sources: [],
        },
        '近期战略重点': {
          content: [
            '<strong>北斗计划品牌化</strong>：以"北斗实习计划"为核心品牌，将大模型人才招募做成持续性雇主品牌动作，形成记忆点',
            '<strong>AI 技术突破</strong>：发布 LongCat-AudioDiT，在零样本 TTS 音色克隆方向取得突破；举办具身智能技术分享（MARS TALK 香港大学站）',
            '<strong>雇主品牌年轻化</strong>：设计大赛 + 带岗直播 + AI 职业工具，强化对 Z 世代人才的互动吸引力',
          ],
          sources: [
            { name: '美团技术团队：LongCat-AudioDiT音色克隆', url: 'https://mp.weixin.qq.com/s?src=meituan-audio' },
          ],
        },
        '对快手的启示': {
          content: '美团"北斗"的成功在于将技术方向与品牌名称强绑定，形成持续的记忆点而非一次性招聘活动。快手可参考这一模式，给自身大模型/AI 方向实习计划打造有辨识度的品牌名，配合直播带岗等年轻化形式持续输出内容。',
          sources: [],
          isInsight: true,
        },
      },
    },
    {
      id: 'xiaohongshu',
      name: '小红书',
      color: '#FF2442',
      summary: 'Relax 开源引擎塑造硬核技术品牌，AI Agent 基建全面提速',
      sections: {
        '招聘动态': {
          content: '本周未检测到相关招聘文章。（上周"Ace 顶尖实习生计划"（9大方向、40+课题）与"REDstar 顶尖人才计划"（以期权价值上涨为激励叙事）的影响持续发酵，本周相对沉寂。）',
          sources: [],
        },
        '人事变动': {
          content: '未检测到明显人事变动。',
          sources: [],
        },
        '近期战略重点': {
          content: [
            '<strong>AI Agent 基建开源</strong>：开源发布"Relax"异步 RL 训练引擎，面向全模态 Agentic 开发，以技术开放塑造硬核技术品牌',
            '<strong>业务创新驱动</strong>：通过业务突破奖等内部激励机制，推动业务创新与 AI 技术落地',
            '<strong>平台生态强化</strong>：巩固生活方式内容与交易生态，探索"技能商店"等新交互形态',
          ],
          sources: [
            { name: '小红书REDtech：Relax异步RL训练引擎开源', url: 'https://mp.weixin.qq.com/s?src=xhs-relax' },
          ],
        },
        '对快手的启示': {
          content: '小红书通过开源核心 AI 基建（RL 训练引擎）主动向全球 AI 开发者社区展示技术实力，这是低成本、高传播的技术雇主品牌策略。快手在推荐算法、视频理解等核心 AI 领域有深厚积累，可考虑以开源代码、技术论文或开发者挑战赛的形式对外输出，差异化突出实时互动与直播场景的独特工程挑战。',
          sources: [],
          isInsight: true,
        },
      },
    },
  ],
};
