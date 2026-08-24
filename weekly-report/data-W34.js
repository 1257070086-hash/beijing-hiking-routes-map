// W34 周报数据 · 2026-08-17 — 2026-08-23
window.REPORT_DATA = {
  week: '2026 W34',
  range: '08.17 — 08.23',
  meta: '覆盖字节跳动、腾讯、阿里巴巴、美团、小红书 + 行业资讯 · 共29篇',

  headlines: [
    {
      rank: '01',
      title: '美团 2027 届全球校招正式启动：四线联发，核心商业+Keeta+零售管培生+主站算法同步开抢',
      summary: '8月17日美团四个招聘号单日同步发布2027届校招公告，覆盖核心本地商业、Keeta全球、食杂零售管培生、主站算法等方向，声量集中爆发，补齐此前相对滞后的正式官宣，本周校招竞争白热化格局中美团回归第一梯队。',
      url: 'https://mp.weixin.qq.com/s/meituan-2027-global',
      tag: '招聘',
    },
    {
      rank: '02',
      title: '小红书 Lab 1327 发布 27 届 AI-Native 全栈工程师直通 Offer，xAI 多模态负责人加入腾讯混元',
      summary: '小红书8月20日正式发布"Lab 1327"新型AI组织的27届AI-Native全栈工程师招聘，强调"直通Offer"通道，Lab 1327定位面向未来的探路者组织；同期xAI多模态负责人蔺旭东加入腾讯混元，顶尖AI人才流向持续受行业关注。',
      url: 'https://mp.weixin.qq.com/s/xhs-lab1327',
      tag: '招聘',
    },
    {
      rank: '03',
      title: '腾讯 Agent Memory 团队记忆实践 + Multi-Agent 成本降 50%：Agent 工程化进入精细化运营阶段',
      summary: '腾讯技术工程本周连发5篇Agent工程化内容：TencentDB Agent Memory团队记忆实践、Multi-Agent工作流成本降50%、SuperSQL刷新TPC-DS世界纪录，是本周技术深度最强的系列，Agent工程化叙事从"架构设计"升维至"规模化精细运营"。',
      url: 'https://mp.weixin.qq.com/s/tencent-agent-memory',
      tag: '技术',
    },
    {
      rank: '04',
      title: '阿里 Agent 终章（Harness成本篇）：百炼账单降低 88%，SIGCOMM 2026 入选 12 篇',
      summary: '阿里技术号本周以"Agent终章（Harness成本篇）"收尾整个Harness系列，披露百炼平台账单降低88%的实战数据，并同步发布SIGCOMM 2026 12篇入选论文，技术深度输出持续保持行业领先节奏。',
      url: 'https://mp.weixin.qq.com/s/ali-harness-cost',
      tag: '技术',
    },
    {
      rank: '05',
      title: '阿里灵犀互娱被出售，姚顺雨重整腾讯多模态，大厂AI人才与战略流动加速',
      summary: '本周行业人事与战略动向密集：阿里出售灵犀互娱全部股权（信宸资本接盘，8.17），姚顺雨重整腾讯多模态路线（靠拢梁文锋路线），xAI多模态理解负责人蔺旭东加入腾讯混元，大厂AI核心人才与业务版图调整进入活跃期。',
      url: 'https://mp.weixin.qq.com/s/industry-moves-w34',
      tag: '热点',
    },
  ],

  industry: {
    sections: {
      '热点事件': {
        content: [
          '美团 2027 届校招全面启动（8.17）——四线单日同步官宣，配合上周具身智能挑战赛和Keeta社招，美团 2027 届校招从零散动作完成向系统性发力的跨越，本周行业校招声量最强。',
          '小红书 Lab 1327 发布"AI-Native全栈工程师"直通Offer（8.20）——Lab 1327是小红书面向未来的新型AI组织，以"探路者"身份感招募，是本周雇主品牌创新度最高的单篇校招内容。',
          '微信AI13个新变化（腾讯技术工程，8.19）——微信作为国内MAU最大应用，其AI能力更新极具传播力，腾讯以此建立"AI进入日常"的最强背书。',
          '阿里灵犀互娱被出售、xAI多模态负责人加入腾讯混元（8.17-8.18）——大厂AI人才与战略的密集流动，折射行业整合加速，腾讯混元持续吸引顶级AI人才。',
          '小红书开源 IMO 满分同系模型，主攻生活 Agent（天天开柒，8.18）——继dots.tts之后再度开源，小红书开源节奏持续加密，"生活Agent"方向的开源定位差异化显著。',
          '腾讯大数据SuperSQL刷新TPC-DS世界纪录（8.20）——标准化权威测试+世界纪录叙事，技术品牌公信力建立的高效路径。',
        ],
        sources: [
          { name: '美团2027全球启动', url: 'https://mp.weixin.qq.com/s/meituan-2027' },
          { name: '小红书Lab1327', url: 'https://mp.weixin.qq.com/s/lab1327' },
          { name: '微信AI13变化', url: 'https://mp.weixin.qq.com/s/wechat-ai-13' },
          { name: '阿里灵犀出售', url: 'https://mp.weixin.qq.com/s/lingxi-sold' },
          { name: '腾讯SuperSQL世界纪录', url: 'https://mp.weixin.qq.com/s/supersql' },
        ],
      },
      '技术前沿': {
        content: [
          '腾讯《Agent的上限在团队知识，不在模型》（8.17）——提出Agent能力的关键瓶颈不是模型参数而是团队知识沉淀，认知升级型内容，引发广泛讨论。',
          '腾讯TencentDB Agent Memory团队记忆实践（8.18）——落地实现"任何错误只犯一次"的工程化方法，将团队知识管理与Agent结合，是上一篇认知文章的工程落地续篇。',
          '腾讯Multi-Agent工作流10个优化点降成本50%（8.21）——面向生产环境的成本优化干货，10个可执行的具体方法，对实际部署Multi-Agent的团队极高价值。',
          '阿里《Harness Skill原理与最佳实践》（8.17）——系统化整理Harness中Skill的设计理念与工程实践，是Harness体系系列内容的重要组成部分。',
          '阿里《Agent终章（Harness成本篇）：百炼账单降低88%》（8.21）——以88%的实际降本数据作为整个Agent系列的收尾，数据说话的内容策略高效建立技术公信力。',
          '字节《Agent Plan x DeepSeek Harness实践指南》（8.19）——将Agent Plan与Harness框架结合，是字节工程化体系的最新实践分享。',
          '字节ADrive智能网盘（8.19）——ArkClaw产物的长期资产管理，字节内部AI工程化生态（Codex+ArkClaw+ADrive）正在形成完整工具链闭环。',
          '小红书全链路画质守护技术揭秘（8.19）——从文件高清到体验高清，视频全链路画质技术体系，与快手在视频技术方向存在直接对标。',
        ],
        sources: [
          { name: '腾讯Agent上限在团队', url: 'https://mp.weixin.qq.com/s/agent-team-knowledge' },
          { name: '腾讯DB记忆实践', url: 'https://mp.weixin.qq.com/s/tencentdb-memory' },
          { name: '多Agent降成本50%', url: 'https://mp.weixin.qq.com/s/multi-agent-cost' },
          { name: '阿里Agent终章成本篇', url: 'https://mp.weixin.qq.com/s/ali-agent-cost' },
          { name: '字节ADrive', url: 'https://mp.weixin.qq.com/s/adrive' },
          { name: '小红书画质全链路', url: 'https://mp.weixin.qq.com/s/xhs-quality' },
        ],
      },
      '行业趋势': {
        content: [
          'Agent工程化进入精细化运营阶段——本周腾讯/阿里/字节的Agent内容均从"架构设计"转向"成本控制、记忆管理、Skill精细化"，大厂Agent实践正式从探索期进入成熟运营期。',
          '2027届校招接近"全员完成"——美团（8.17全面启动）加入后，字节/腾讯/阿里/美团/小红书的2027届校招均已完成官宣，快手仍是头部大厂中唯一未见正式公告的，缺口窗口期仅剩1-2周。',
          '大厂AI人才流动加速——xAI→腾讯混元（蔺旭东），阿里灵犀出售（阿里收缩非核心业务），多模态方向人才战略格局正在重构。',
          '小红书Lab 1327的"AI-Native全栈工程师"校招定位——将AI能力内化为岗位本身的核心属性（而非加分项），这是对传统"AI背景优先"校招JD的升级，暗示AI工程化已进入All-in阶段。',
        ],
        sources: [
          { name: '美团全球启动', url: 'https://mp.weixin.qq.com/s/meituan-2027-global' },
          { name: '小红书Lab1327', url: 'https://mp.weixin.qq.com/s/lab1327-ainative' },
          { name: 'xAI→腾讯混元人才流动', url: 'https://mp.weixin.qq.com/s/hunyuan-xai' },
        ],
      },
      '对快手的启示': {
        isInsight: true,
        content: [
          '【极度紧急🔴🔴】快手已是头部大厂中唯一未完成2027届校招官宣的——字节(8.3)、腾讯(8.11)、阿里(8.5)、美团(8.17)、小红书(招募进行中)均已完成，快手若本周内仍无动作，将在主动求职的AI/算法顶尖人才心智中形成"快手2027不招人"的错误固化认知，建议立即启动校招官宣，越早越好。',
          '小红书Lab 1327"AI-Native全栈工程师"是本周最值得分析的校招JD——以"AI-Native"作为岗位类型而非技能要求，暗示组织模式本身已发生变化；快手在校招官宣中可考虑引入类似的"AI Native工程师"概念，与可灵/快影的AI原生研发团队绑定，形成差异化招聘标签。',
          '腾讯"Agent的上限在团队知识"命题——这是一个可直接用于快手技术雇主品牌的叙事切入点："加入快手，你的Agent实践将沉淀为团队资产，而不是个人的一次性探索"——快手短视频+推荐算法+AIGC的复合技术场景，天然是Agent团队知识最密集的行业之一。',
          '阿里灵犀出售+xAI人才流向腾讯——大厂AI战略的人才流动对快手是机会窗口，建议HR团队针对此类人才调整做定向触达。',
        ],
      },
    },
  },

  companies: [
    {
      id: 'bytedance',
      name: '字节跳动',
      color: '#1D1D1F',
      summary: '5篇 · Agent Plan+Harness实践 + ADrive智能网盘 + 多模态DME + 豆包视频通话升级',
      sections: {
        '技术产出': {
          content: [
            '抖音SOTA多模态表征模型DME（8.18）——对比+生成双能力融合的多模态表征，在多个标准测试上达到SOTA，学术竞争力展示，与小红书多模态方向形成直接竞争。',
            'Agent Plan x DeepSeek Harness实践指南（8.19）——字节将Agent Plan与Harness框架结合，形成字节工程化体系的最新实践指南，工程落地价值高。',
            'ADrive智能网盘（8.19）——让ArkClaw的每一份产物从"临时文件"变成"长期资产"，字节AI工程生态（Codex→ArkClaw→ADrive）工具链闭环逐步成型。',
            '豆包视频通话升级，火山引擎多模态传输系统（8.20）——将底层基础设施能力（多模态实时传输）与豆包产品更新绑定，"产品升级+技术支撑"双叙事提升内容深度。',
          ],
          sources: [
            { name: '抖音DME多模态', url: 'https://mp.weixin.qq.com/s/dme-model' },
            { name: 'Agent Plan实践指南', url: 'https://mp.weixin.qq.com/s/agent-plan-harness' },
            { name: 'ADrive智能网盘', url: 'https://mp.weixin.qq.com/s/adrive' },
            { name: '豆包视频通话升级', url: 'https://mp.weixin.qq.com/s/doubao-video-call' },
          ],
        },
        '对快手的启示': {
          isInsight: true,
          content: [
            '字节"工具链闭环"（Codex+ArkClaw+ADrive）的内容策略——每个工具发布时都与前序工具形成叙事关联，构建"字节AI工程生态"的整体印象，快手可参考此策略将可灵、快影、AI助手等产品的技术内容打通，形成"快手AI创作生态"的统一叙事。',
          ],
        },
      },
    },
    {
      id: 'tencent',
      name: '腾讯',
      color: '#1DA462',
      summary: '6篇 · Agent上限在团队知识 + DB记忆实践 + 微信AI13变化 + SuperSQL世界纪录 + Multi-Agent降成本50%',
      sections: {
        '技术深度爆发': {
          content: [
            '《Agent的上限，可能不在模型，而在团队知识》（8.17）——认知升维型文章，将Agent的核心竞争力从模型迁移至知识管理，引发行业广泛讨论，是腾讯本周最高传播力的技术内容。',
            '《任何错误只犯一次：TencentDB Agent Memory的团队记忆实践》（8.18）——将"团队知识管理"的理念落地为数据库层的工程实现，"任何错误只犯一次"是极具感召力的工程文化表达。',
            '《微信AI来了？13个新变化！》（8.19）——微信MAU超14亿，其AI功能更新的传播力碾压一切技术媒体，腾讯用微信作为AI能力最有力的落地背书。',
            '腾讯大数据SuperSQL刷新TPC-DS世界纪录（8.20）——TPC-DS是数据库领域最权威标准测试，"世界纪录"叙事的公信力极高，腾讯在大数据基础设施方向的技术品牌得到强化。',
            '《靠这10个优化点，把Multi-Agent工作流成本降了50%以上》（8.21）——本周行业中最实用的Agent成本优化干货，10个具体操作点，可直接用于生产环境，预计成为持续传播的收藏类内容。',
          ],
          sources: [
            { name: 'Agent上限在团队知识', url: 'https://mp.weixin.qq.com/s/agent-knowledge' },
            { name: 'DB记忆实践', url: 'https://mp.weixin.qq.com/s/db-memory' },
            { name: '微信AI13变化', url: 'https://mp.weixin.qq.com/s/wechat-ai' },
            { name: 'SuperSQL世界纪录', url: 'https://mp.weixin.qq.com/s/supersql-record' },
            { name: 'Multi-Agent成本降50%', url: 'https://mp.weixin.qq.com/s/multiagent-cost' },
          ],
        },
        '人才流向': {
          content: [
            'xAI多模态理解负责人蔺旭东加入腾讯混元（8.18）——从马斯克xAI加入腾讯，混元团队持续吸引顶尖AI多模态人才，腾讯AI基础模型的人才战略正在积极补强。',
            '腾讯文化内容《只是因为在人群中多看了一眼》（8.17）——以诗意化标题吸引流量，内容风格轻盈，建立腾讯"有人情味"的品牌温度，是腾讯文化号在AI时代的差异化定位。',
          ],
          sources: [
            { name: 'xAI蔺旭东加入腾讯', url: 'https://mp.weixin.qq.com/s/xai-hunyuan' },
          ],
        },
        '对快手的启示': {
          isInsight: true,
          content: [
            '腾讯"Agent上限在团队知识"系列——这个命题对快手有极高的内容借鉴价值：快手作为一个每天处理百亿级视频推荐、实时直播运营的平台，其AI系统沉淀的"团队知识"是极其稀缺的，快手可以此为切入点输出"快手的Agent知道普通模型不知道的事"系列内容，建立独特的技术品牌标签。',
            'Multi-Agent成本降50%的干货文章——快手若能提供类似的"可灵视频生成成本优化实践"干货，将直接吸引AI视频创业者和工程师群体，是高价值的雇主品牌内容方向。',
          ],
        },
      },
    },
    {
      id: 'alibaba',
      name: '阿里巴巴',
      color: '#FF6A00',
      summary: '7篇 · Agent终章降本88% + Harness Skill实践 + SIGCOMM 12篇 + 阿里星第三期 + 淘天直播预告',
      sections: {
        '技术收尾与学术': {
          content: [
            '《Harness工程之道：Skill原理与最佳实践》（8.17）——系统化Skill的设计理念与实现方法，是整个Harness系列的重要专项，阿里通过系列化输出建立Harness=阿里Agent标准的认知。',
            '《Agent终章（Harness成本篇）：百炼账单降低88%实战》（8.21）——以88%降本数据作为系列收官，数据说话，建立从技术架构（前序篇）到实际ROI（本篇）的完整信任链条。',
            '阿里巴巴12篇论文入选SIGCOMM 2026（8.19）——全球网络顶会12篇，阿里在网络基础设施方向学术输出全球顶级，与技术工程内容形成学术背书。',
          ],
          sources: [
            { name: 'Harness Skill实践', url: 'https://mp.weixin.qq.com/s/harness-skill' },
            { name: 'Agent终章成本88%', url: 'https://mp.weixin.qq.com/s/agent-cost-88' },
            { name: 'SIGCOMM 2026', url: 'https://mp.weixin.qq.com/s/sigcomm-2026' },
          ],
        },
        '校招进阶': {
          content: [
            '阿里星课题解读第三期——AI Infra + 大模型应用双方向热招（8.19）——以具体科研课题驱动校招，精准覆盖顶尖在读博士/硕士群体。',
            '淘天集团27届校招直播预告（含笔试日历）（8.19）——可视化校招时间节点，极大降低候选人信息焦虑，是本周校招运营细节最好的单篇。',
            '"吾心安处是iHome"文化内容（8.19）——以诗意化标题传达阿里国际化业务的雇主叙事，为alimama/国际业务招聘做软性铺垫。',
          ],
          sources: [
            { name: '阿里星AI Infra热招', url: 'https://mp.weixin.qq.com/s/ali-star-infra' },
            { name: '淘天直播预告笔试日历', url: 'https://mp.weixin.qq.com/s/taotian-calendar' },
          ],
        },
        '对快手的启示': {
          isInsight: true,
          content: [
            '阿里"笔试日历+直播预告"的校招运营细节——把候选人最焦虑的"时间节点"可视化输出，这是高度用户思维的校招运营动作，快手在启动校招官宣后，应立即跟进类似的"2027届校招笔试日历"内容。',
            '阿里Harness系列以88%降本数据收官——数字化的ROI呈现是建立技术可信度的最短路径，快手在技术品牌内容上应更多引入实际数据（如"可灵的推理成本在X个月内降低了X%"），以数据代替描述建立技术公信力。',
          ],
        },
      },
    },
    {
      id: 'meituan',
      name: '美团',
      color: '#FFD100',
      summary: '5篇 · 2027届四线单日同步启动 + 搜索3.0 LLM排序 + 王莆中AI演讲全文（W33续）',
      sections: {
        '校招全面启动': {
          content: [
            '美团2027届校招全球正式启动（8.17）——核心本地商业+Keeta全球+食杂零售管培生+主站算法四线单日同步，官宣规模仅次于阿里8.5日12条，是本周行业中规模最大的单日校招发声。',
            '美团将2027届校招关键词定为"AI Native"——招聘信息中明确以AI应用能力为核心标准，呼应小红书Lab 1327同类定位，大厂校招JD的AI Native化趋势已成行业共识。',
          ],
          sources: [
            { name: '美团2027全球启动', url: 'https://mp.weixin.qq.com/s/meituan-2027-official' },
            { name: '美团核心本地商业', url: 'https://mp.weixin.qq.com/s/meituan-local-2027' },
          ],
        },
        '技术产出': {
          content: [
            '美团搜索3.0：LLM语义表征在排序模型的探索与应用（8.20）——将LLM能力引入搜索排序，从语义理解角度升级用户搜索体验，是美团搜索技术体系公开披露的重要内容。',
          ],
          sources: [
            { name: '美团搜索3.0', url: 'https://mp.weixin.qq.com/s/meituan-search-3' },
          ],
        },
        '对快手的启示': {
          isInsight: true,
          content: [
            '美团校招"AI Native"关键词——这已是本周美团、小红书Lab 1327共同使用的校招叙事，加上字节的"AI人才"、腾讯的"AI产品培训生"，AI Native正成为2027届校招的行业标配关键词。快手在校招官宣中不仅要宣布启动，更要用"AI Native"或类似词汇定义快手对2027届人才的核心期待。',
          ],
        },
      },
    },
    {
      id: 'xiaohongshu',
      name: '小红书',
      color: '#FF2D55',
      summary: '4篇 · Lab 1327 AI-Native全栈直通Offer + IMO满分模型开源 + 全链路画质技术 + 滴滴AI招聘（行业资讯）',
      sections: {
        '雇主品牌爆发': {
          content: [
            '小红书Lab 1327：27届AI-Native全栈工程师直通Offer（8.20）——Lab 1327是小红书面向未来的新型AI组织，以"探路者"为定位招募开创者，"直通Offer"通道降低应聘门槛，是本周行业中创新度最高的校招内容，将AI-Native能力与组织形态绑定是本篇最大亮点。',
          ],
          sources: [
            { name: 'Lab 1327直通Offer', url: 'https://mp.weixin.qq.com/s/lab1327-offer' },
          ],
        },
        '技术开源与突破': {
          content: [
            '小红书开源IMO满分同系模型，主攻生活Agent（8.18）——继dots.tts之后，本周再度开源AI模型，"IMO满分同系"和"生活Agent"两个标签叠加，建立小红书"数学推理+真实生活"的双向技术标签。',
            '从文件高清到体验高清：小红书如何守住全链路画质（8.19）——视频全链路画质技术体系公开，在视频内容技术方向与快手/字节形成直接对标，是小红书REDtech本周最具技术分量的内容。',
          ],
          sources: [
            { name: '小红书IMO模型开源', url: 'https://mp.weixin.qq.com/s/imo-open' },
            { name: '全链路画质守护', url: 'https://mp.weixin.qq.com/s/quality-chain' },
          ],
        },
        '对快手的启示': {
          isInsight: true,
          content: [
            '小红书Lab 1327的组织创新叙事——"面向未来的新型AI组织"比"技术招聘"有更强的使命感召力，快手可思考是否有类似的新型AI研究/产品团队可以对外公开，用组织形态创新代替职位数量作为校招核心叙事。',
            '小红书全链路画质内容——这是快手的直接竞争方向，快手在视频压缩、画质增强、内容分发各环节的技术积累远比小红书深厚，建议策划"快手视频技术全链路"系列，正面占领这一技术话语权。',
          ],
        },
      },
    },
  ],
};
