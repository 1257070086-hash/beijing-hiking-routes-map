// W33 周报数据 · 2026-08-10 — 2026-08-16
window.REPORT_DATA = {
  week: '2026 W33',
  range: '08.10 — 08.16',
  meta: '覆盖字节跳动、腾讯、阿里巴巴、美团、小红书 + 行业资讯 · 共26篇',

  headlines: [
    {
      rank: '01',
      title: '腾讯 2027 校招全球启动，多 BU 联动：AI 产品经理培训生专项开放',
      summary: '8月11日腾讯发布"有鹅选鹅"全球校招公告，随后混元LLM、游戏美术、投资、AI产品经理培训生等多BU专项相继跟进，形成本周校招声量最大的单一事件，腾讯青云计划朋友局同步启动线下交流。',
      url: 'https://mp.weixin.qq.com/s/tencent-2027',
      tag: '招聘',
    },
    {
      rank: '02',
      title: '字节跳动 2027 多产品线同日宣战：抖音AI产品、中国广告、番茄小说同步开抢',
      summary: '8月12日字节招聘号密集发声，抖音AI产品人才、中国交易与广告（200+Offer）、中国广告产品（AI产品/运营/设计）、番茄团队四条线同日宣传，形成字节2027届第二波校招高峰，巩固本周AI人才声量。',
      url: 'https://mp.weixin.qq.com/s/bytedance-2027-wave2',
      tag: '招聘',
    },
    {
      rank: '03',
      title: '小红书开源 dots.tts + dots3-note Preview：向"服务真实生活"的长程 Agent 迈出第一步',
      summary: '小红书REDtech本周双发：一是开源连续自回归语音合成模型dots.tts，打造可持续扩展TTS基座；二是发布dots3-note Preview——面向真实生活长程智能体的第一步，在行业内率先将Agent锚定于"真实生活"而非泛化能力。',
      url: 'https://mp.weixin.qq.com/s/dots-tts-note',
      tag: '技术',
    },
    {
      rank: '04',
      title: '腾讯 DeepSeek Harness 深度拆解：可组装的 Agent 架构，成本可控的落地路径',
      summary: '腾讯技术工程连发两篇深度文章——《DeepSeek Harness拆解：一套能拼装的Agent架构》+《DeepSeek Harness实测：模型之外的那一半》，是本周AI工程化内容中系统性最强的系列，引发行业热议，对智能体架构标准化有引领意义。',
      url: 'https://mp.weixin.qq.com/s/harness-deep',
      tag: '技术',
    },
    {
      rank: '05',
      title: '阿里 Qwen3.8 正式开源 + GitHub Trending 5 天首位：大模型开源生态竞争升级',
      summary: '阿里技术号披露Qwen3.8周到GitHub Trending首页连续5天的幕后复盘，8月14日Qwen3.8正式宣布开源；同期Qoder CLI实测发布，阿里以开源+工具链+社区热度三联动，在本周大模型开源竞争中占据强势位置。',
      url: 'https://mp.weixin.qq.com/s/qwen38-open',
      tag: '技术',
    },
  ],

  industry: {
    sections: {
      '热点事件': {
        content: [
          '2027届校招全面进入"多BU联动"阶段——腾讯（8.11-8.14 连续5天多BU专项官宣）、字节（8.12单日4条产品线）同步发力，2027届秋招竞争白热化；快手在本周主要竞对中仍无可见公开动作。',
          '小红书dots3-note Preview发布（8.14）——定位"服务真实生活的长程智能体"，是行业中最明确的"AI for Real Life"产品叙事，与学术派的大模型竞赛形成差异化。',
          '阿里Qwen3.8正式开源（8.14）+ GitHub Trending 5天连续首位——开源生态热度持续放大，大模型开源竞争从单次发布演变为持续运营。',
          '腾讯DeepSeek Harness双篇拆解（8.14-8.15）——Agent架构工程化内容达到行业顶级水准，腾讯正在通过技术内容建立Agent标准化领域的话语权。',
          '字节"12个故事"雇主品牌内容刷屏（8.12）——以真实员工故事替代硬广，字节范儿+招聘号双渠道联动，本周雇主品牌传播效率最高的单篇内容。',
          '快手用户增长负责人换帅（大厂日爆8.10）——内部人事动向被外部媒体率先披露，对快手雇主品牌存在一定舆论影响，需关注。',
        ],
        sources: [
          { name: '腾讯2027全球启动', url: 'https://mp.weixin.qq.com/s/tencent-2027-global' },
          { name: '小红书dots3-note', url: 'https://mp.weixin.qq.com/s/dots3-note' },
          { name: 'Qwen3.8开源', url: 'https://mp.weixin.qq.com/s/qwen38-os' },
          { name: '字节12个故事', url: 'https://mp.weixin.qq.com/s/bytedance-12stories' },
        ],
      },
      '技术前沿': {
        content: [
          '腾讯 WorkBuddy 3万字入门精通（8.12）——将 AI Coding 工具体系化，以超长文档的形式建立技术品牌权威感，是腾讯"AI Coding内容战"的代表作。',
          '阿里"Agent越改越乱之后"实践经验分享（8.13）——提出用评测+轨迹找回Agent可控性，是最贴近工程师实际痛点的一篇Agent内容。',
          '阿里 Qoder CLI + Qwen3.8-Max 5个硬核任务实测（8.12）——将开源模型与CLI工具绑定推介，开源落地+工具配套成为阿里的完整打法。',
          '美团 KDD\'26 学术论文精选 + KDD Cup\'26冠军思路（8.13）——将学术成果与大赛冠军包装为一篇内容，传播效率高，美团的学术品牌建设持续稳定输出。',
          '小红书开源dots.tts语音合成模型（8.13）——继视觉/多模态后，小红书将开源范围延伸至语音领域，开源生态布局全面提速。',
        ],
        sources: [
          { name: '腾讯WorkBuddy指南', url: 'https://mp.weixin.qq.com/s/workbuddy' },
          { name: '阿里Agent可控性实践', url: 'https://mp.weixin.qq.com/s/agent-control' },
          { name: '美团KDD26', url: 'https://mp.weixin.qq.com/s/meituan-kdd26' },
          { name: '小红书dots.tts', url: 'https://mp.weixin.qq.com/s/dots-tts' },
        ],
      },
      '行业趋势': {
        content: [
          '2027届校招提速——腾讯、字节本周完成第二波声量爆发，美团、小红书跟进，校招窗口期进入关键两周，快手需立即行动。',
          'Agent架构工程化内容成为新战场——腾讯Harness双篇、阿里Agent实践、字节Agent Plan，大厂正在用"架构方法论"替代"参数数量"作为技术品牌核心叙事。',
          'AI Native人才成为校招关键词——字节"抖音AI产品人才"、腾讯"AI产品经理培训生"，顶尖大厂校招已明确将AI能力作为核心筛选标准，并在JD中主动标注。',
          '字节"12个故事"=雇主品牌范本——真实员工+叙事化内容+双渠道联动，本周传播效率最高的非技术类雇主品牌内容，值得快手直接对标参考。',
        ],
        sources: [
          { name: '字节12个故事', url: 'https://mp.weixin.qq.com/s/12stories' },
          { name: '腾讯AI产品培训生招聘', url: 'https://mp.weixin.qq.com/s/tencent-aipm' },
        ],
      },
      '对快手的启示': {
        isInsight: true,
        content: [
          '【紧急🔴】2027届校招窗口正在快速关闭——腾讯（8.11起）、字节（8.12）均已完成第二波密集官宣，美团预计下周跟进。快手在本轮竞对全面发声中持续缺席，建议本周内立即启动官宣，否则将在AI/算法方向主动求职群体中形成"快手不招人"的错误认知。',
          '字节"12个故事"雇主品牌内容是本周最值得快手复制的模板——以12个真实员工故事串联"为什么加入字节"，形式轻、传播广，快手可立即策划"12个快手人的故事"或"可灵是怎么做出来的"系列，以真人叙事代替功能性招聘广告。',
          '小红书"服务真实生活"的Agent定位是一个可借鉴的叙事框架——把产品叙事锚定在"让普通人的真实生活更好"，而非"超越GPT-4"，这种叙事对非AI专业候选人更具感染力，快手在可灵/快影的雇主品牌叙事中可参考此框架。',
          '快手用增负责人换帅被外部媒体先于官方披露——建议关注此类人事变动对雇主品牌的潜在影响，主动掌控叙事权，避免被动应对。',
        ],
      },
    },
  },

  companies: [
    {
      id: 'bytedance',
      name: '字节跳动',
      color: '#1D1D1F',
      summary: '5篇 · 2027多产品线校招 + 12个故事雇主品牌 + AI视频降本技术',
      sections: {
        '招聘动态': {
          content: [
            '2027届校招第二波集中爆发（8.12）——抖音AI产品人才、中国交易与广告（200+Offer）、中国广告产品（AI产品/运营/设计多方向）、番茄团队四条产品线单日官宣，继8月初第一波之后形成校招声量叠加效应。',
            '字节"加入字节之前，建议你一定要看看这12个故事"（8.12）——字节范儿+招聘号双渠道同步推送，以真实员工故事为主体，传播力显著强于常规招聘帖，是本周行业雇主品牌内容TOP1。',
            '"地球Online · 字节服" 员工文化内容（8.10）——以游戏化视角表达快节奏工作文化，强化字节"有意思、有挑战"的雇主人设，受众精准（游戏圈AI圈交集）。',
          ],
          sources: [
            { name: '字节12个故事', url: 'https://mp.weixin.qq.com/s/bytedance-stories' },
            { name: '抖音AI产品人才校招', url: 'https://mp.weixin.qq.com/s/douyin-ai-campus' },
            { name: '中国广告产品2027', url: 'https://mp.weixin.qq.com/s/ads-2027' },
          ],
        },
        '技术内容': {
          content: [
            '《AI视频降本的三种做法，只有一种不牺牲画质》（8.11）——以"画质vs成本"的对立叙事切入AI视频降本赛道，观点鲜明，符合工程师的判断口味。',
            '《把AI视频的钱花在刀刃上，不是每一刀上》（8.12）——与前篇形成系列，从"哪些钱不能省"的角度强化字节在AI视频工程化上的深度积累与技术自信。',
          ],
          sources: [
            { name: 'AI视频降本分析', url: 'https://mp.weixin.qq.com/s/ai-video-cost' },
            { name: 'AI视频刀刃投入', url: 'https://mp.weixin.qq.com/s/ai-video-roi' },
          ],
        },
        '对快手的启示': {
          isInsight: true,
          content: [
            '字节"12个故事"的模式直接可复制——快手用类似格式策划"12个快手人的选择"：为什么在可灵最难的时候留下来？为什么从大厂来快手做AI？每篇1000字以内，配合招聘号+快手技术公众号双发，成本极低、传播力极强。',
            '字节AI视频系列揭示快手的内容盲区——字节以"画质vs成本"的专业视角输出AI视频技术内容，快手在可灵、快影的AI视频方向有更深的实践积累，但技术内容输出明显不足，建议策划"快手视频生成工程化"系列文章。',
          ],
        },
      },
    },
    {
      id: 'tencent',
      name: '腾讯',
      color: '#1DA462',
      summary: '7篇 · 2027校招全球多BU联动 + DeepSeek Harness双篇拆解 + WorkBuddy 3万字指南',
      sections: {
        '招聘高峰': {
          content: [
            '"有鹅选鹅！腾讯2027校园招聘全球启动"（8.11）——旗舰式全球校招宣告，奠定本周腾讯校招声量基础。',
            '腾讯混元LLM热招（8.12）——将大模型团队单独公开招聘，以"探索模型智能上限"为叙事，吸引顶尖AI研究人才。',
            '腾讯游戏美术2027全球启动（8.12）、腾讯投资2027启动（8.12）、腾讯AI产品经理培训生（8.13）——多BU接力官宣，校招声量持续延伸至不同专业方向，精准覆盖算法/产品/商业/艺术各圈层候选人。',
            '腾讯青云计划朋友局开启报名（8.14）——以线下聚会形式圈定高潜顶尖学术人才，社交化招聘策略精准高效。',
          ],
          sources: [
            { name: '有鹅选鹅全球启动', url: 'https://mp.weixin.qq.com/s/tencent-global-2027' },
            { name: '混元LLM热招', url: 'https://mp.weixin.qq.com/s/hunyuan-recruit' },
            { name: 'AI产品经理培训生', url: 'https://mp.weixin.qq.com/s/tencent-aipm-trainee' },
            { name: '青云计划朋友局', url: 'https://mp.weixin.qq.com/s/tsingcloud-party' },
          ],
        },
        '技术深度': {
          content: [
            '《WorkBuddy从入门到精通》3万字长文（8.12）——系统化整理腾讯AI Coding工具使用方法，以"内部实践沉淀"为叙事，建立WorkBuddy=腾讯AI Coding标配工具的认知。',
            '《DeepSeek Harness拆解：一套能拼装的Agent架构》（8.14）——将Harness的模块化设计拆解为可复用积木，是行业中Agent架构可组装性论述最清晰的文章之一。',
            '《DeepSeek Harness实测：模型之外的那一半》（8.15）——验证Harness工程价值，提供实测数据，完成"拆解→验证"双篇闭环，腾讯Agent内容系列化运营能力出色。',
          ],
          sources: [
            { name: '腾讯WorkBuddy指南', url: 'https://mp.weixin.qq.com/s/workbuddy-guide' },
            { name: 'Harness架构拆解', url: 'https://mp.weixin.qq.com/s/harness-arch' },
            { name: 'Harness实测', url: 'https://mp.weixin.qq.com/s/harness-test' },
          ],
        },
        '对快手的启示': {
          isInsight: true,
          content: [
            '腾讯校招的"多BU接力"策略值得快手研究——5天内6个不同BU相继发声，覆盖算法/产品/商业/艺术各方向候选人，总声量远超单篇全公司公告，快手可规划类似的"快手2027校招月"，按BU/方向依次官宣。',
            '腾讯Harness"拆解+实测"双篇系列模式——先讲理论架构（为什么），后出实测数据（效果如何），形成完整说服链条，快手在快影AI/可灵技术内容上可采用同类"原理+实践"双篇运营模式。',
          ],
        },
      },
    },
    {
      id: 'alibaba',
      name: '阿里巴巴',
      color: '#FF6A00',
      summary: '4篇 · Qwen3.8正式开源 + GitHub Trending 5天首位 + Agent可控性实践 + Qoder CLI实测',
      sections: {
        '大模型开源攻势': {
          content: [
            '连续5天登上GitHub Trending首页的复盘（8.11）——首次详细披露Qwen系列模型开源运营策略，社区运营+开发者生态建设的全链路方法论，对AI产品出海和社区运营有参考价值。',
            'Qoder CLI + Qwen3.8-Max 5个硬核任务实测（8.12）——将开源模型与配套CLI工具绑定推介，"工具+模型"的捆绑传播策略，降低开发者上手门槛。',
            'Qwen3.8正式开源（8.14）——配合前两篇社区热度铺垫后正式宣布开源，节奏感强，整个周期构成"预热→社区→开源"三步曲。',
          ],
          sources: [
            { name: 'GitHub Trending 5天复盘', url: 'https://mp.weixin.qq.com/s/qwen-trending' },
            { name: 'Qoder CLI实测', url: 'https://mp.weixin.qq.com/s/qoder-test' },
            { name: 'Qwen3.8开源', url: 'https://mp.weixin.qq.com/s/qwen38-open' },
          ],
        },
        'Agent工程化': {
          content: [
            '《Agent越改越乱之后，我用评测和轨迹把它拉回来了》（8.13）——直面Agent开发中最普遍的"越改越差"困境，以"评测驱动"为解法，极高的工程师共鸣度，是本周阿里技术内容中讨论度最高的一篇。',
          ],
          sources: [
            { name: 'Agent可控性实践', url: 'https://mp.weixin.qq.com/s/agent-recover' },
          ],
        },
        '对快手的启示': {
          isInsight: true,
          content: [
            '阿里"GitHub Trending 5天首位"的传播复盘揭示了开源运营的核心方法——预热社区→大V转发→媒体跟进→官方复盘，形成信息放大飞轮。快手若考虑将可灵相关算法开源，可参考此策略提前规划社区运营节奏。',
            '阿里"Agent越改越乱"命中工程师最真实的痛点——快手在技术内容策划上，建议多从"真实问题"出发选题，而非从"我们做到了什么"出发，前者共鸣度和传播力远高于后者。',
          ],
        },
      },
    },
    {
      id: 'meituan',
      name: '美团',
      color: '#FFD100',
      summary: '4篇 · 具身智能挑战赛55万奖金 + KDD\'26学术成果 + Keeta全球招聘 + 无人机北斗计划',
      sections: {
        '赛事与学术': {
          content: [
            '美团具身智能挑战赛开启报名（8.12）：55万元奖金池，是本周行业中奖金规模最大的单次AI赛事发布，对具身智能圈的高校顶尖人才吸引力极强，也直接带动了美团具身智能团队的雇主曝光。',
            'KDD\'26学术论文精选+KDD Cup\'26 DataAgents赛道冠军思路（8.13）——将会议论文与大赛冠军捆绑输出，学术品牌与赛事品牌双向强化，是美团学术内容的标准操作。',
          ],
          sources: [
            { name: '具身智能挑战赛55万', url: 'https://mp.weixin.qq.com/s/meituan-embodied' },
            { name: 'KDD26美团成果', url: 'https://mp.weixin.qq.com/s/kdd26-meituan' },
          ],
        },
        '招聘布局': {
          content: [
            'Keeta（美团出海）全球增长社招（8.12）——持续强化出海叙事，"把下一站定在你想去的城市"的文案对有出海意向的候选人极具吸引力。',
            '美团无人机2027届北斗计划热招（8.12）——无人机业务单独招聘，是美团硬科技方向的雇主品牌差异化标签，吸引机器人/无人机方向顶尖人才。',
          ],
          sources: [
            { name: 'Keeta出海招聘', url: 'https://mp.weixin.qq.com/s/keeta-global' },
            { name: '无人机北斗计划', url: 'https://mp.weixin.qq.com/s/drone-campus' },
          ],
        },
        '对快手的启示': {
          isInsight: true,
          content: [
            '美团具身智能挑战赛55万奖金——用高奖金赛事直接触达细分领域顶尖人才，效率远高于常规招聘广告。快手AI挑战赛目前已有类似布局（高校AI Native挑战赛），建议持续强化"赛事→实习/校招直通"的漏斗，加大奖金和资源配置的对外披露力度。',
          ],
        },
      },
    },
    {
      id: 'xiaohongshu',
      name: '小红书',
      color: '#FF2D55',
      summary: '5篇 · dots3-note长程Agent + dots.tts开源 + 高校大使招募 + REDacademy文化',
      sections: {
        '技术突破': {
          content: [
            'dots.tts开源：连续自回归语音合成模型（8.13）——小红书将开源延伸至语音领域，继视觉/多模态后全面布局开源生态，TTS方向差异化明显，是本周小红书最重要的技术动作。',
            'dots3-note Preview：迈向服务真实生活的长程智能体（8.14）——将Agent的核心价值主张定位为"服务真实生活"，而非技术指标竞赛，是行业中最清晰的"AI for Real Life"产品叙事，与小红书平台属性高度契合。',
          ],
          sources: [
            { name: '小红书dots.tts开源', url: 'https://mp.weixin.qq.com/s/dots-tts-open' },
            { name: 'dots3-note Preview', url: 'https://mp.weixin.qq.com/s/dots3-note-preview' },
          ],
        },
        '雇主品牌': {
          content: [
            '小红书全球校园大使招募启动（8.10）——以"大使"身份感替代标准招聘语言，面向在校学生，是提前布局品牌渗透的轻量化策略。',
            '戴锦华独家分享+杜素娟×小鹿（8.11/8.14）——REDacademy系列持续输出人文/文化内容，强化小红书"有深度、有温度"的雇主人设，与竞对的纯技术/纯商业叙事形成差异化。',
          ],
          sources: [
            { name: '小红书全球校园大使', url: 'https://mp.weixin.qq.com/s/xhs-ambassador' },
            { name: 'REDacademy戴锦华', url: 'https://mp.weixin.qq.com/s/red-academy' },
          ],
        },
        '对快手的启示': {
          isInsight: true,
          content: [
            'dots3-note的"服务真实生活"叙事框架——快手可灵/快影的核心用户是创作者和普通人，而非工程师，建议将快手AI产品的雇主品牌叙事从"技术领先"转向"让普通人的创作更自由"，与小红书的"真实生活"构成同类但差异化的叙事。',
            '小红书REDacademy输出人文内容建立雇主品牌层次感——快手在技术品牌方面有一定积累，但人文/文化维度明显薄弱，建议探索"快手人读什么书/看什么电影"等文化类内容，与技术内容形成组合，提升雇主品牌的情感温度。',
          ],
        },
      },
    },
  ],
};
