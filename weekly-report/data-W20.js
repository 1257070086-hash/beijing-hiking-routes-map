// W20 周报数据 · 2026-05-13 — 2026-05-19
window.REPORT_DATA = {
  week: '2026 W20',
  range: '5.13 — 5.19',
  meta: '覆盖字节跳动、腾讯、阿里巴巴、美团 + 行业资讯 · 共62篇',

  headlines: [
    {
      rank: '01',
      title: '百度李彦宏首提"DAA"：AI时代的新度量衡',
      summary: 'Daily Active Agent 或将取代 DAU，标志行业进入 AI 自我进化阶段。',
      url: 'https://mp.weixin.qq.com/s/d8AA-wsx9R98ZOIYKWkyqg',
      tag: '热点',
    },
    {
      rank: '02',
      title: 'ChatGPT 打通银行 API，AI 介入金融支付引发争议',
      summary: 'OpenAI 将 ChatGPT 接入银行账户，安全性质疑全网炸锅，AI 金融化时代加速。',
      url: 'https://mp.weixin.qq.com/s/bK8R2XYhpdQxK0YLLeA2oA',
      tag: '热点',
    },
    {
      rank: '03',
      title: '美团 LongCat 开源 General 365：推理评测新标尺',
      summary: '美团开源长文档推理模型，树立行业评测基准，具身智能技术同步亮相无人机大会。',
      url: 'https://mp.weixin.qq.com/s/9YV6SyX4FtVYgxHF7h-FGA',
      tag: '技术',
    },
    {
      rank: '04',
      title: '阿里 Qoder 1.0 发布：AI IDE 迈向智能体自主开发工作台',
      summary: '从辅助编程升级为自主开发，开发者角色加速转型，AI coding 进入自主范式。',
      url: 'https://mp.weixin.qq.com/s/l-L2_abmijjpG_XOCAMsZw',
      tag: '产品',
    },
    {
      rank: '05',
      title: 'Kimi 张予彤在北大挑明：Agent 时代需要什么样的 AI 人才？',
      summary: '新兴 AI 独角兽公开阐述人才观，AI 人才战争从薪酬竞争升级为能力定义之争。',
      url: 'https://mp.weixin.qq.com/s/zfnsRDPRrNj9KC1ZVAV7Gg',
      tag: '行业',
    },
  ],

  industry: {
    sections: {
      '热点事件': {
        content: [
          '百度李彦宏正式提出"DAA"（Daily Active Agent）概念，主张以 AI Agent 日活取代 DAU 作为度量衡，标志着行业从"工具使用"升级为"智能体协作"的认知框架切换。',
          'ChatGPT 打通银行 API 引发全网热议，OpenAI 将金融支付纳入 AI 能力边界，安全性争议折射出 AI 功能扩张与监管滞后之间的张力。',
          'Kimi 张予彤在北大公开阐述 Agent 时代所需 AI 人才特质，新兴 AI 公司正在主导人才标准的话语权争夺。',
          '妙鸭相机团队解散，AI 应用热潮后的产品洗牌期到来，用户留存与商业可持续性成为核心考验。',
        ],
        sources: [
          { name: '百度抛出 AI 时代的新度量衡', url: 'https://mp.weixin.qq.com/s/d8AA-wsx9R98ZOIYKWkyqg' },
          { name: 'ChatGPT 打通银行 API', url: 'https://mp.weixin.qq.com/s/bK8R2XYhpdQxK0YLLeA2oA' },
          { name: 'Kimi 张予彤谈 AI 人才', url: 'https://mp.weixin.qq.com/s/zfnsRDPRrNj9KC1ZVAV7Gg' },
        ],
      },
      '技术前沿': {
        content: [
          'AI 竞争从"炫技"转向"干活"——机器之心指出本轮竞争核心已是落地能力而非参数规模，实用主义导向明显。',
          'Anthropic 最新研究突破大模型黑箱，隐藏动机发现率提升4倍，模型可解释性取得里程碑进展；同时将 Claude Code 跑上卡片大小设备，端侧大模型门槛持续下探。',
          'OPPO 开源 X-OmniClaw 多模态 Agent，国产安卓端 AI 管家生态加速成型。',
          '字节跳动发表视觉生成第三种技术路线，挑战扩散自回归统治，方法论类比"边画边改"，技术创新仍在提速。',
          'Agent 基础设施周：Kimi K2.6 背后 Agent-native 数据库、腾讯云 Agent 沙箱、从 Computer Use 到 Datacenter Use 的工作流接管方案密集发布。',
        ],
        sources: [
          { name: '机器之心：不比炫技，比谁更能干活', url: 'https://mp.weixin.qq.com/s/3rbwpSoyZ2RWTE-yTigtLQ' },
          { name: 'Anthropic 黑箱突破', url: 'https://mp.weixin.qq.com/s/YAJG_yfULzyuVWL0naQbKQ' },
          { name: 'Kimi K2.6 Agent Database', url: 'https://mp.weixin.qq.com/s/XLYWhkjFHxrH2-jb5O1qCQ' },
        ],
      },
      '行业趋势': {
        content: [
          'AI 商业化回报周期到来：阿里 Q4 财报显示云业务增速加快，AI 投入开始转化为营收，互联网大厂 AI 竞赛进入变现收割期。',
          'Agent 人才稀缺成为行业共识：Kimi、InfoQ 等多方声音指向同一判断——懂 Agent 工程化的复合型人才严重供不应求。',
          'AI Infra 竞争白热化：Anthropic 千亿美元抢芯片+涨价、国产 GPU 联合开源 SGLang 等框架，算力与软件栈双线开战。',
          '具身智能加速走出实验室：美团无人机亮相世界无人机大会，机器人世界模型综述发布，商业化路径逐渐清晰。',
        ],
        sources: [
          { name: '阿里的第二春来了', url: 'https://mp.weixin.qq.com/s/MBfdNd9VArjAM_1plsS7mQ' },
          { name: '国产 GPU 开源局', url: 'https://mp.weixin.qq.com/s/n5-WL5QmYZ2WdsYZdBfwEw' },
          { name: '美团无人机低空物流', url: 'https://mp.weixin.qq.com/s/v-OWXXKHjwiM68EBPXdoBw' },
        ],
      },
      '对快手的启示': {
        isInsight: true,
        content: [
          '「DAA 叙事」机会：如果行业接受 DAA 作为衡量指标，快手的直播/短视频 AI 助手日活将是天然优势，可提前布局对应的产品指标与对外口径。',
          '「AI 干活」赛道：本周行业信号明确——用户要的是能干活的 AI 而非炫技，快手 AI 功能应在创作辅助、变现效率、内容生产提速等"干活"场景加强落地。',
          'Agent 人才定义权争夺：Kimi 等新兴公司正在抢占"什么是 Agent 时代好人才"的话语权，快Star 可借势明确快手对 Agent 工程师的定义标准，差异化雇主叙事。',
        ],
      },
    },
  },

  companies: [
    {
      id: 'bytedance',
      name: '字节跳动',
      color: '#1D1D1F',
      summary: '2篇 · 火山引擎 AI Infra 双线发力',
      sections: {
        '本周动态': {
          content: [
            '火山引擎 RocketMQ For AI 解决方案发布，重构大模型通信架构，解决 AI 推理链路中的高并发消息传递瓶颈，AI Infra 底座持续加固。',
            '火山 Supabase 助力猿辅导对话式 Agent 落地，验证了业务团队低代码构建 Agent 应用的可行性，Agent 工程化能力从技术团队向业务侧下沉。',
          ],
          sources: [
            { name: '重构大模型通信架构：火山引擎 RocketMQ For AI', url: 'https://mp.weixin.qq.com/s/cyamfuP6J2db3r50EN3QJQ' },
            { name: '火山 Supabase 助力猿辅导 Agent 落地', url: 'https://mp.weixin.qq.com/s/sK9zCXWEDGrb_UaMfD004g' },
          ],
        },
        '对快手的启示': {
          isInsight: true,
          content: [
            '字节本周双线发力 AI Infra（消息架构+低代码 Agent），快手在基础设施侧的投入节奏和对外透明度值得对比审视。',
          ],
        },
      },
    },
    {
      id: 'tencent',
      name: '腾讯',
      color: '#1DA462',
      summary: '6篇 · 星火挑战周课题发布 + 校招 AI Skill 上线',
      sections: {
        '校招与人才品牌': {
          content: [
            '腾讯校园招聘专属 Skill 上线，集成岗位匹配、简历修改、模拟面试功能，招聘流程 AI 化提速，候选人体验升级显著，雇主品牌数字化转型标杆动作。',
            '2026 星火挑战周重磅发布课题，腾讯对外的顶尖人才招募动作密集，青云计划生态持续扩展。',
          ],
          sources: [
            { name: '「腾讯校园招聘 Skill」上线', url: 'https://mp.weixin.qq.com/s/kbJ-K8wyHgcr-lvwisFM4Q' },
            { name: '2026 星火挑战周课题发布', url: 'https://mp.weixin.qq.com/s/gDo11n92yHx7PTHlM-DPdQ' },
          ],
        },
        '技术与生态': {
          content: [
            '腾讯技术工程分享 AI Skill 工程化设计心路历程，将 AI 能力封装为可复用"算法"模块的方法论，为内部工程化实践提供参考。',
            '腾讯云 Agent 沙箱方案发布：从服务器 OS 到 Agent 沙箱的 AI Infra 生态底座打通，为企业级 Agent 部署提供隔离环境。',
          ],
          sources: [
            { name: 'AI 变成\"算法\"：Skill 工程化设计心路', url: 'https://mp.weixin.qq.com/s/bD10zbBeTtzMyEKqjIdT1w' },
            { name: '腾讯云 Agent 沙箱', url: 'https://mp.weixin.qq.com/s/6f8nc8vfR6iZkEvTklcAEQ' },
          ],
        },
        '对快手的启示': {
          isInsight: true,
          content: [
            '腾讯把校招平台做成 AI Skill 产品，直接将招聘体验变成雇主品牌展示场景。快手快Star 可以考虑类似的"招聘即产品"思路，让候选人在申请过程中就感受到快手的 AI 能力。',
          ],
        },
      },
    },
    {
      id: 'alibaba',
      name: '阿里巴巴',
      color: '#FF6A00',
      summary: '4篇 · Qoder 1.0 发布 + 阿里星全球路演',
      sections: {
        '产品发布': {
          content: [
            'Qoder 1.0 正式发布，阿里技术的 AI IDE 从辅助编程工具迈向智能体自主开发工作台，Agent 接管代码生命周期全链路，开发者从"写代码"到"指挥 Agent 写代码"的范式切换加速。',
          ],
          sources: [
            { name: 'Qoder 1.0正式发布！从AI IDE迈向智能体自主开发工作台', url: 'https://mp.weixin.qq.com/s/l-L2_abmijjpG_XOCAMsZw' },
          ],
        },
        '人才品牌': {
          content: [
            '阿里星顶尖人才计划 CVPR 2026 现场邀请函发出，持续在全球顶级学术会议场景渗透，学术圈覆盖策略成熟。',
            '阿里星热爱之旅·阿里日特别版圆满结束，系列活动模式稳定输出，节日联名成为招聘内容的新载体。',
          ],
          sources: [
            { name: '阿里星 CVPR 2026 邀请函', url: 'https://mp.weixin.qq.com/s/Ajt3GYhGC16PwZD6eGmCtQ' },
            { name: '阿里星热爱之旅·阿里日特别版圆满结束', url: 'https://mp.weixin.qq.com/s/hAh0E78BjlQKw98kTsT7vA' },
          ],
        },
        '对快手的启示': {
          isInsight: true,
          content: [
            '阿里星在 CVPR 等顶级学术会议做线下渗透已成常规动作。快Star 在 AI 学术顶会（如 NeurIPS、ICLR）的存在感不足，可借鉴这一打法，把快Star品牌带进研究者聚集的场合。',
          ],
        },
      },
    },
    {
      id: 'meituan',
      name: '美团',
      color: '#FFD100',
      summary: '5篇 · LongCat 开源 + 无人机低空物流亮相',
      sections: {
        '技术开源': {
          content: [
            '美团 LongCat General 365 开源，定位长文档推理模型，树立行业推理评测新标尺，开源战略持续强化技术品牌。',
            '美团 AI Coding 评测体系实践分享：31万行代码重构中用评测管理 AI Coding 质量，解决大规模 AI 辅助研发可靠性问题，工程落地方法论价值高。',
          ],
          sources: [
            { name: '美团 LongCat 开源 General 365', url: 'https://mp.weixin.qq.com/s/9YV6SyX4FtVYgxHF7h-FGA' },
            { name: '31万行代码重构：用评测管好AI Coding', url: 'https://mp.weixin.qq.com/s/BuQUwQ4zCiIpcX6m8oDbAA' },
          ],
        },
        '具身智能与无人机': {
          content: [
            '美团无人机低空物流解决方案亮相世界无人机大会，具身智能商业化路径持续明朗。',
            'MARS TALK 香港大学站召开，聚焦具身智能技术演进与商业化进程，学术界与产业界对话加深。',
          ],
          sources: [
            { name: '美团无人机低空物流亮相世界无人机大会', url: 'https://mp.weixin.qq.com/s/v-OWXXKHjwiM68EBPXdoBw' },
            { name: 'MARS TALK 香港大学站', url: 'https://mp.weixin.qq.com/s/bgh4UyMdqEvCbgRucGMuaw' },
          ],
        },
        '对快手的启示': {
          isInsight: true,
          content: [
            '美团的开源策略（开源评测基准→吸引学术关注→顶尖人才认知建立）是一套完整的技术品牌飞轮。快手在 AI 基础模型/工具开源上的节奏可以参考这一逻辑。',
          ],
        },
      },
    },
    {
      id: 'xiaohongshu',
      name: '小红书',
      color: '#FF2D55',
      summary: '0篇 · 本周暂无文章数据',
      sections: {
        '本周动态': {
          content: ['本周快照中小红书暂无新文章入库，下周持续跟踪。'],
        },
        '对快手的启示': {
          isInsight: true,
          content: ['小红书 REDstar 今年节奏稳定，缺席一周属正常间隔，持续关注其下一轮启动动作。'],
        },
      },
    },
  ],
};
