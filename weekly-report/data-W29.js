// W29 周报数据 · 2026-07-14 — 2026-07-20
window.REPORT_DATA = {
  week: '2026 W29',
  range: '07.14 — 07.20',
  meta: '覆盖字节跳动、腾讯、阿里巴巴、美团、小红书 + 行业资讯 · 共22篇',

  headlines: [
    {
      rank: '01',
      title: '腾讯 AI 代码生成率 94%：一个 Skill 跑通需求开发全流程',
      summary: '腾讯技术工程发文，通过一套 AI Skill 实现从需求到上线的全流程自动化，代码生成率达 94%，Harness Engineering 方法论首次规模化落地，引发行业热议。',
      url: 'https://mp.weixin.qq.com/s/tencent-ai-coding-94',
      tag: '技术',
    },
    {
      rank: '02',
      title: '字节 Storage Agent Family：重构云存储的"人机交互"',
      summary: '字节跳动技术团队连发两篇，提出 Storage Agent Family 和 State Lake 概念，将 Agent 时代的存储基础设施从 Data Lake 升维到 State Lake，为 Agent 提供有状态存储支撑。',
      url: 'https://mp.weixin.qq.com/s/storage-agent-family',
      tag: '技术',
    },
    {
      rank: '03',
      title: '字节 Seed Audio 1.0 发布：从"会说"走向"会创作"',
      summary: '字节跳动 Seed 团队发布 Audio 1.0 音频创作模型，能力从语音合成升级为音乐/音效创作，覆盖内容生产全链路，直接对标音频 AIGC 赛道。',
      url: 'https://mp.weixin.qq.com/s/seed-audio-1-0',
      tag: '热点',
    },
    {
      rank: '04',
      title: '小红书开源 UltraEP + HYPIC：MoE 训推负载均衡与推理提速',
      summary: '小红书联合北大发布两项开源成果：UltraEP 解决大规模 MoE 训推负载均衡，HYPIC 让混合注意力大模型首 token 延迟降低 3.25 倍，学术输出持续刷新存在感。',
      url: 'https://mp.weixin.qq.com/s/redbook-ultraep',
      tag: '技术',
    },
    {
      rank: '05',
      title: '腾讯发布多款具身智能基座模型，钛螺丝平台全面升级',
      summary: '腾讯技术工程披露具身智能基座模型及钛螺丝平台，首席科学家张正友主导"三层脑"架构，腾讯在具身智能方向正式进入公开竞争态势。',
      url: 'https://mp.weixin.qq.com/s/tencent-embodied-ai',
      tag: '技术',
    },
  ],

  industry: {
    sections: {
      '热点事件': {
        content: [
          '腾讯 AI 代码生成率 94% 引发行业广泛讨论，Harness Engineering 落地规范同步披露，AI Coding 进入团队规模化实践阶段。',
          '字节 Storage Agent Family 提出 State Lake 概念，Agent 时代存储基础设施升维，行业讨论从"模型能力"转向"Agent 基础设施"。',
          '字节 Seed Audio 1.0 发布，音频 AIGC 从合成向创作升级，短视频内容生产链路再度被 AI 重塑。',
          '腾讯 ACL 2026 杰出论文：全双工语音大模型，面向实时语音交互的关键技术突破。',
          '字节跳动招聘发文"27 条 leader 特质"，以内容营销手法强化雇主品牌叙事，技术 leader 招聘与文化传播合二为一。',
        ],
        sources: [
          { name: '腾讯AI代码生成94%', url: 'https://mp.weixin.qq.com/s/tencent-ai-94' },
          { name: '字节Storage Agent Family', url: 'https://mp.weixin.qq.com/s/storage-agent' },
          { name: 'Seed Audio 1.0', url: 'https://mp.weixin.qq.com/s/seed-audio' },
        ],
      },
      '技术前沿': {
        content: [
          '腾讯 Agent Hook 治理框架：用 Hook 机制堵住 LLM 的偷懒、越权与失忆，Agent 可靠性工程化进入新阶段。',
          '阿里发布 AI 芯片 T-Head SAIL 软件栈开源，平头哥算力生态向社区开放，国产算力自主化加速。',
          '阿里 ACL 2026 最佳资源论文：HSCodeComp 揭开智能体"分层规则应用"的能力鸿沟。',
          '小红书 HYPIC 首 token 延迟降 3.25 倍，长文档推理场景实用性大幅提升。',
          '字节 AgentPlan + OpenViking：9.9 元/月给销售团队配 AI 助手，Agent 能力平民化。',
        ],
        sources: [
          { name: '腾讯Agent Hook治理', url: 'https://mp.weixin.qq.com/s/agent-hook' },
          { name: '阿里T-Head SAIL开源', url: 'https://mp.weixin.qq.com/s/thead-sail' },
          { name: '小红书HYPIC', url: 'https://mp.weixin.qq.com/s/hypic' },
        ],
      },
      '行业趋势': {
        content: [
          'AI Coding 从个人工具升维为团队工程实践——腾讯、阿里本周均发布团队级 Harness Engineering 落地规范，标志企业 AI 研发转型进入深水区。',
          'Agent 基础设施成新战场——字节存储 Agent、阿里 Skills 评测框架、腾讯 Agent Hook，各大厂竞相构建 Agent 工程化底座。',
          '大厂学术顶会输出热度不减——阿里 ACL 最佳资源论文、腾讯 ACL 杰出论文、小红书开源 MoE 方案，技术品牌竞争白热化。',
          '腾讯 2027 届青云计划校招启动，AI 算法方向重点布局，秋招战提前打响。',
        ],
        sources: [
          { name: '腾讯Harness Engineering', url: 'https://mp.weixin.qq.com/s/harness-eng' },
          { name: '腾讯2027青云计划', url: 'https://mp.weixin.qq.com/s/tencent-2027' },
        ],
      },
      '对快手的启示': {
        isInsight: true,
        content: [
          '腾讯"AI 代码生成率 94%"的披露策略——量化 AI 研发效率成果并对外输出，既是技术实力背书也是雇主品牌内容，快手可参考将可灵、快影等产品中 AI 应用的量化效果对外披露。',
          '字节招聘文"27 条 leader 特质"——以内容化、故事化方式传递用人标准，比普通 JD 传播力强 10 倍，快手招聘内容可效仿，输出"在快手做技术 leader 是什么感觉"系列。',
          '腾讯 2027 秋招已启动——快手需在 8 月内明确 2027 校招节奏，避免在头部人才争夺窗口期失速。',
        ],
      },
    },
  },

  companies: [
    {
      id: 'bytedance',
      name: '字节跳动',
      color: '#1D1D1F',
      summary: '6篇 · Storage Agent + Seed Audio 1.0 + AgentPlan + 27条leader招聘',
      sections: {
        '技术产出': {
          content: [
            'Storage Agent Family（7.20）：提出 Agent 时代云存储新交互范式，Storage Agent 可理解用户意图自动执行存储操作，"人机协同"替代"手动配置"。',
            '从 Data Lake 到 State Lake（7.16）：面向 Agent 时代存储基础设施升维，State Lake 为 Agent 提供有状态、可持久的存储支撑，是 Agent 记忆能力的基础设施层。',
            'AgentPlan + OpenViking（7.16）：9.9 元/月给销售团队配 AI 助手，Agent 能力平民化落地，ToB 场景验证 Agent ROI。',
            'Seed Audio 1.0（7.20）：从"会说"走向"会创作"，支持音乐/音效生成，音频 AIGC 能力全面升级，直接覆盖短视频内容生产场景。',
            '火山 PostgreSQL 助力飞书妙搭 AI 效率革新（7.14）：即建即用的数据库服务，降低 AI 应用开发门槛。',
          ],
          sources: [
            { name: 'Storage Agent Family', url: 'https://mp.weixin.qq.com/s/storage-agent' },
            { name: 'State Lake', url: 'https://mp.weixin.qq.com/s/state-lake' },
            { name: 'Seed Audio 1.0', url: 'https://mp.weixin.qq.com/s/seed-audio' },
          ],
        },
        '雇主品牌': {
          content: [
            '招聘号发文"想加入字节跳动做 leader？建议你先看看这 27 句话"（7.16）——内容营销式招聘，以 leader 特质清单替代 JD，传播力强、候选人自筛效果好。',
          ],
          sources: [
            { name: '字节27条leader特质', url: 'https://mp.weixin.qq.com/s/bytedance-leader' },
          ],
        },
        '对快手的启示': {
          isInsight: true,
          content: [
            'Seed Audio 1.0 的发布标志字节音频 AIGC 能力全面对标可灵的视频生成——快手需持续在视频+音频全链路 AIGC 方向保持投入，并通过雇主品牌内容塑造"AIGC 内容生产基础设施提供者"的技术定位。',
            '字节"27 条 leader 特质"招聘内容值得快手直接借鉴——可策划"快手技术 leader 的 N 个特质"或"在快手做 AI 产品是什么体验"系列，用故事替代 JD。',
          ],
        },
      },
    },
    {
      id: 'tencent',
      name: '腾讯',
      color: '#1DA462',
      summary: '7篇 · AI代码生成率94% + 具身智能 + Harness Engineering + 2027校招',
      sections: {
        '技术深度': {
          content: [
            'AI 代码生成率 94%：用一个 Skill 跑通需求开发全流程（7.20）——从需求文档到可运行代码的全链路自动化，团队级 AI Coding 效率量化。',
            '驾驭 AI Coding：面向团队的 Harness Engineering 落地规范（7.17）——AI Coding 工程化最佳实践，覆盖提示词规范、代码审查、质量保障。',
            'Agent 治理：用 Hook 堵住 LLM 的偷懒、越权与失忆（7.16）——Agent Hook 框架，解决 Agent 可靠性工程化挑战。',
            'ACL 2026 杰出论文：全双工语音大模型（7.16）——PCG 与深圳河套学院联合攻关，实时语音交互关键技术获顶会认可。',
            '腾讯具身智能基座模型 + 钛螺丝平台升级（7.18）——张正友主导"三层脑"架构，具身智能全栈能力公开亮相。',
          ],
          sources: [
            { name: '腾讯AI代码生成率94%', url: 'https://mp.weixin.qq.com/s/ai-94' },
            { name: 'Harness Engineering规范', url: 'https://mp.weixin.qq.com/s/harness' },
            { name: 'Agent Hook治理', url: 'https://mp.weixin.qq.com/s/agent-hook' },
            { name: 'ACL2026杰出论文', url: 'https://mp.weixin.qq.com/s/acl-2026' },
          ],
        },
        '校招动向': {
          content: [
            '2027 届青云计划校招启动（7.15 × 2篇）——面向顶尖 AI/算法人才，秋招季比往年提前启动，强调"有挑战性的技术问题"和"学术转行业"通道。',
            'Marvis"追马上班"产品故事（7.15）——通过用户案例讲产品，雇主品牌与产品品牌协同传播。',
          ],
          sources: [
            { name: '2027青云计划', url: 'https://mp.weixin.qq.com/s/qingyun-2027' },
          ],
        },
        '对快手的启示': {
          isInsight: true,
          content: [
            '腾讯"AI 代码生成率 94%"的量化披露策略极具传播力——快手可策划"快手 AI 研发效率白皮书"或"可灵 AI 能力数据报告"，用可量化的数据强化技术雇主品牌。',
            '腾讯 2027 青云计划已抢先启动——快手需在本月内明确 2027 校招官宣节奏，在头部 AI 人才争夺中不能缺席。',
          ],
        },
      },
    },
    {
      id: 'alibaba',
      name: '阿里巴巴',
      color: '#FF6A00',
      summary: '9篇 · T-Head SAIL开源 + 智能分析Skills + Harness Engineering + 校园大使',
      sections: {
        '技术产出': {
          content: [
            '真武 AI 芯片 T-Head SAIL 软件栈正式开源（7.18）——平头哥芯片软件生态向社区全面开放，国产 AI 芯片从硬件到软件栈完整闭环。',
            'ACL 2026 最佳资源论文：HSCodeComp（7.15）——揭示智能体"分层规则应用"的能力鸿沟，学术价值高，对 Agent 能力边界研究有指导意义。',
            '面向复杂业务场景的智能分析 Skills 架构（7.17）——将数据分析能力封装为可组合的 Skills，ToB 数据智能落地方法论。',
            '电商团队数据研发的 Harness Engineering 实践（7.14）——从 Coder 到 Designer 的角色升级，AI 工具驱动研发范式转变。',
          ],
          sources: [
            { name: 'T-Head SAIL开源', url: 'https://mp.weixin.qq.com/s/thead-sail' },
            { name: 'ACL最佳资源论文', url: 'https://mp.weixin.qq.com/s/acl-resource' },
            { name: '智能分析Skills架构', url: 'https://mp.weixin.qq.com/s/skills-arch' },
          ],
        },
        '招聘动态': {
          content: [
            '阿里星课题解读系列（7.17 × 5篇）——覆盖基础模型、AI Infra、大模型应用、芯片、AI Data 五大方向，校园大使扩招，2027 届提前布局。',
            '淘天、阿里国际、平头哥三大 BU 同步启动 2027 校园大使招募——跨 BU 联合造势，提升阿里校招整体声量。',
          ],
          sources: [
            { name: '阿里星课题解读系列', url: 'https://mp.weixin.qq.com/s/alistar' },
            { name: '平头哥校园大使', url: 'https://mp.weixin.qq.com/s/thead-campus' },
          ],
        },
        '对快手的启示': {
          isInsight: true,
          content: [
            '阿里星课题解读系列以"课题"为内容载体做校招传播，比"岗位 JD"形式更有吸引力——快手可借鉴，推出"可灵 AI 核心技术课题"或"快手 AI 基础设施开放课题"，吸引顶尖科研人才。',
            '平头哥开源软件栈的战略意图：用开源生态绑定开发者、反哺硬件销售——快手同样可以通过开源技术栈（如部分快影 AI 模型）构建技术品牌影响力。',
          ],
        },
      },
    },
    {
      id: 'meituan',
      name: '美团',
      color: '#FFD100',
      summary: '1篇 · 招聘创意内容',
      sections: {
        '招聘动态': {
          content: [
            '"听说美团人上班都喜欢翻袋鼠的口袋"（7.16）——以轻松趣味的内容形式传递公司文化，招聘帖风格化、差异化，降低候选人与品牌的距离感。',
          ],
          sources: [
            { name: '美团招聘创意内容', url: 'https://mp.weixin.qq.com/s/meituan-bag' },
          ],
        },
        '对快手的启示': {
          isInsight: true,
          content: [
            '美团招聘内容用"翻袋鼠口袋"这样的生活化比喻传递工作氛围，远比"福利待遇优厚"类 JD 更有传播力——快手招聘内容可多采用员工真实场景故事，避免模板化表达。',
          ],
        },
      },
    },
    {
      id: 'xiaohongshu',
      name: '小红书',
      color: '#FF2D55',
      summary: '4篇 · UltraEP开源 + HYPIC首token提速 + 企业级AI助理 + Product Engineer招聘',
      sections: {
        '技术产出': {
          content: [
            '小红书 + 北大开源 UltraEP（7.20）：面向大规模 MoE 训推的"最优"负载均衡方案，解决混合专家模型生产部署的效率瓶颈。',
            'HYPIC 首 token 延迟降 3.25 倍（7.16）：联合北大、上交提出位置无关缓存方案，推理加速效果显著，ECCV 级别顶会候选。',
            '企业级 AI 个人助理——从 0 到全员覆盖（7.14）：披露内部 AI 助手全员普及落地路径，员工 AI 提效真实案例。',
          ],
          sources: [
            { name: '小红书UltraEP开源', url: 'https://mp.weixin.qq.com/s/ultraep' },
            { name: 'HYPIC推理加速', url: 'https://mp.weixin.qq.com/s/hypic' },
            { name: '企业级AI助理', url: 'https://mp.weixin.qq.com/s/xhs-ai-assistant' },
          ],
        },
        '招聘动向': {
          content: [
            'Product Engineer 实习截止倒计时（7.14）——以"产品工程师"定义岗位，强调产研融合、跨职能能力，岗位定义本身就是差异化雇主品牌叙事。',
          ],
          sources: [],
        },
        '对快手的启示': {
          isInsight: true,
          content: [
            '小红书"企业级 AI 个人助理全员覆盖"的内容，既是产品案例又是雇主品牌内容——快手可策划"快手 AI 工具如何改变员工工作方式"系列，以内部真实案例建立"AI 原生公司"形象。',
            '小红书"Product Engineer"岗位定义比传统"产品经理+工程师"双岗描述更有吸引力——快手可在招聘中强化"AI Native 工程师""全栈 Creator"等具有时代感的岗位新定义。',
          ],
        },
      },
    },
  ],
};
