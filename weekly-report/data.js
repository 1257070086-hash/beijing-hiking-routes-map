// 周报数据 - W18 (4.28-5.5)
window.REPORT_DATA = {
  week: '2026 W18',
  range: '4.28 — 5.5',
  meta: '共采集 88 篇文章 · 行业资讯 79 篇 + 各公司公众号 9 篇',

  headlines: [
    {
      rank: 1,
      tag: '组织',
      title: '百度宣布职级体系大调整，TP序列全部取消',
      summary: '大厂组织扁平化提速，传统技术序列面临重构。',
      url: 'https://mp.weixin.qq.com/s/G2nMeycVak4o9lkVQW6DCQ',
    },
    {
      rank: 2,
      tag: '人才',
      title: '小红书柯南升任总裁，夏侯接管算法',
      summary: '高层洗牌背后是商业化与算法能力的双重提速。',
      url: 'https://mp.weixin.qq.com/s/6-NzIGV0i5P_uPa22IPjxA',
    },
    {
      rank: 3,
      tag: '技术',
      title: 'DeepSeek 多模态 AI 开测，国产大模型再扩疆域',
      summary: '文生图/视频理解能力补齐，国产多模态竞争白热化。',
      url: 'https://mp.weixin.qq.com/s/S65DyDmxovfH4bEuoHmVxg',
    },
    {
      rank: 4,
      tag: '产学研',
      title: '腾讯 × 中国人民大学联合重点实验室正式成立',
      summary: '产学合作加速，人才前置锁定持续深化。',
      url: 'https://mp.weixin.qq.com/s/Xu48EdWyF4YGUVd4xB0GSg',
    },
    {
      rank: 5,
      tag: '商业',
      title: '谷歌净利润暴涨 81%，AI 没有杀死搜索反而喂大了它',
      summary: 'AI 加持下搜索广告逆势增长，传统商业模式展现韧性。',
      url: 'https://mp.weixin.qq.com/s/5Qsf9xAzQjE-DrSLhvI1OQ',
    },
  ],

  industry: {
    sections: {
      '本周热点事件': {
        content: [
          '<strong>百度职级体系大调整，TP 序列全部取消</strong>：百度宣布原 TP 序列改为统一的 5-12 级体系，同步强调培育"复合人才"、构建"敏捷组织"。这是大厂在 AI 时代主动推进组织扁平化的典型动作，传统按岗位序列晋升的路径正在让位于能力与贡献导向。',
          '<strong>小红书高层大换血，柯南升总裁、夏侯主导算法</strong>：小红书迎来近年来最大规模高层调整。柯南（COO）升任总裁，算法负责人夏侯全面接管推荐系统，叠加此前流量分配向商业转化倾斜的报道，小红书正在从"内容社区"向"商业平台"加速跃迁。',
          '<strong>DeepSeek 多模态 AI 开测确认</strong>：量子位报道 DeepSeek 多模态模型已进入内测，国产大模型在文本领域建立优势后，开始向图文/视频理解能力延伸，与字节、阿里、腾讯在多模态领域的正面竞争升级。',
          '<strong>OpenAI × 亚马逊云史上最大联合发布</strong>：OpenAI 与 AWS 达成深度合作，算力绑定叠加 API 生态，标志着 AI 基础设施竞争从单一公司走向生态联盟，国内厂商的"算力自主"压力进一步加大。',
          '<strong>图灵奖得主炮轰 AI Agent：本质是数据库问题</strong>：InfoQ 报道，图灵奖得主在技术大会上直言"AI Agent 最后全是数据库问题"，并直言"可能不再建议学计算机"，引发行业对 Agent 工程化路径的深度反思。',
        ],
        sources: [
          { name: '大厂日爆：百度职级体系大调整', url: 'https://mp.weixin.qq.com/s/G2nMeycVak4o9lkVQW6DCQ' },
          { name: '大厂日爆：小红书高层迎来大变动', url: 'https://mp.weixin.qq.com/s/6-NzIGV0i5P_uPa22IPjxA' },
          { name: '量子位：DeepSeek 多模态 AI 已开测', url: 'https://mp.weixin.qq.com/s/S65DyDmxovfH4bEuoHmVxg' },
          { name: 'InfoQ：OpenAI × 亚马逊云最大联合发布', url: 'https://mp.weixin.qq.com/s/I-l6nUY9N4xdrZUBjPZRDg' },
          { name: 'InfoQ：图灵奖得主炮轰 AI Agent', url: 'https://mp.weixin.qq.com/s/sR7X6domCisQ-fsrQkD4rA' },
        ],
      },
      '技术进展速览': {
        content: [
          '<strong>具身智能新范式</strong>：机器之心报道机器人领域 LWD 框架发布，推动具身智能从单一任务向通用训练范式演进；网页智能体框架 Avenir-Web 开源后即达 SOTA，多智能体视觉幻觉"雪球效应"也获得新解法。',
          '<strong>AI 广告与推荐工程化落地</strong>：京东物流用 Agentic Workflow 实现营销降本 50%；京东 GRAM 架构在 50ms 内完成生成式广告推荐——AI 在 B 端的工程化落地已从 Demo 走向规模化生产。',
          '<strong>C++ 26 重大更新</strong>：InfoQ 报道近十年最重要的 C++ 版本更新，反射、契约、并发模型全面进化，将影响全球数亿行底层基础设施代码，AI 基础设施开发者需要关注。',
        ],
        sources: [
          { name: '机器之心：LWD 具身智能训练范式', url: 'https://mp.weixin.qq.com/s/Z9-QfTvW-3kRAzZT2o0-zw' },
          { name: 'InfoQ：京东物流 Agentic Workflow 降本 50%', url: 'https://mp.weixin.qq.com/s/sXTPqyQCkQD7e9vnqNmklA' },
          { name: 'InfoQ：C++ 26 最重要版本更新', url: 'https://mp.weixin.qq.com/s/FWRCJqTUONODgMaei4IPGQ' },
        ],
      },
      '行业趋势洞察': {
        content: [
          '<strong>大厂组织向"AI 原生"重构</strong>：百度取消 TP 序列、阿里各 BG 独立招聘、小红书算法主导权强化，都在说明同一件事：AI 时代的大厂组织，正在从"职能分工"转向"能力+贡献"双轮驱动，快手的岗位序列与晋升体系值得同步审视。',
          '<strong>AI 商业化"反杀"质疑者</strong>：谷歌净利润暴涨 81%，Meta 与微软广告收入同样超预期——AI 不是杀手，而是现有商业模式的放大器。这对快手的商业化路径有直接启示：AI 提升广告效率与内容质量，才是主战场。',
          '<strong>多模态竞争进入下半场</strong>：DeepSeek、字节 Seed、阿里通义均在多模态发力，竞争正在从"谁的文本最强"转向"谁的视频/图文理解最准"，视频理解能力将成为接下来六个月的核心战场。',
        ],
        sources: [],
      },
      '对快手的启示': {
        content: [
          '<strong>组织：考虑弱化序列壁垒，引入贡献积分制</strong>：百度取消 TP 序列背后是组织对 AI 时代"复合人才"的渴求。快手企业文化中心等职能部门，可借力 AI 工具重新定义岗位价值，让人才发展路径与 AI 能力挂钩，而非依赖传统岗位序列积分。',
          '<strong>业务：视频理解是快手的天然优势，应加速投入</strong>：多模态竞争的核心是视频理解，而快手拥有国内最丰富的短视频与直播语料，这是其他大厂难以复制的数据护城河。现在投入视频多模态研究，比任何时候都值得。',
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
      summary: '火山引擎 AI 安全亮相 Black Hat Asia，本周技术输出低调但稳健',
      sections: {
        '招聘动态': {
          content: '本周字节跳动公众号更新量较少，仅有技术团队一篇 AI 安全研究文章发出，招聘动态相对平静，与五一假期节奏有关。',
          sources: [],
        },
        '近期战略重点': {
          content: [
            '<strong>AI 安全能力对外输出</strong>：火山引擎 AI 安全研究两大成果入选 Black Hat Asia 2026，这是全球顶级安全会议，意味着字节在 AI 安全（对抗性攻击、模型安全）领域具备国际水准的研究能力，有助于强化企业客户对火山引擎的信任度。',
          ],
          sources: [
            { name: '字节跳动技术团队：AI 安全研究亮相 Black Hat Asia 2026', url: 'https://mp.weixin.qq.com/s/e1q5UxyguWCj3sDcM2t-3w' },
          ],
        },
        '对快手的启示': {
          content: '字节将 AI 安全研究成果送上国际舞台，是"技术品牌国际化"的典型动作。快手在直播安全、内容安全领域同样有深厚积累，可考虑将相关研究成果推向国际学术会议，提升技术品牌在全球市场的知名度。',
          sources: [],
          isInsight: true,
        },
      },
    },
    {
      id: 'tencent',
      name: '腾讯',
      color: '#1A3FBF',
      summary: '×人大联合实验室成立、CCPC 八年情怀牌、混元年轻人故事——人才品牌全面开花',
      sections: {
        '招聘动态': {
          content: '本周腾讯招聘号连发多篇：混元大模型年轻人故事（情感共鸣牌）、广告技术团队持续热招、游戏美术冬令营收官回顾、以及腾讯 × 人民大学联合实验室成立公告——大量内容指向"顶尖技术平台"的雇主品牌定位。此外，CCPC 八年回顾文章将竞赛文化与企业文化深度绑定，针对竞赛生的圈层营销精准高效。',
          sources: [
            { name: '腾讯招聘：腾讯混元年轻人故事', url: 'https://mp.weixin.qq.com/s/c859ceJi65Aesyg6w2sCFw' },
            { name: '腾讯招聘：腾讯 × 人民大学联合实验室成立', url: 'https://mp.weixin.qq.com/s/Xu48EdWyF4YGUVd4xB0GSg' },
            { name: '腾讯招聘：腾讯和 CCPC 的八年', url: 'https://mp.weixin.qq.com/s/_aArEF5WDPUaCacq-q5x7g' },
          ],
        },
        '近期战略重点': {
          content: [
            '<strong>产学合作深化</strong>：与中国人民大学共建"未来智能技术联合重点实验室"，专注 NLP、知识图谱、AI 伦理等前沿方向，在顶级高校建立前哨站，既产出学术影响力，又前置锁定优质应届生源。',
            '<strong>DeepSeek v4 技术深度解析</strong>：腾讯技术工程发布 DeepSeek v4 深度解读长文，显示腾讯技术团队对竞品技术保持持续跟踪与对标，以"懂行"姿态强化技术品牌可信度。',
            '<strong>生活方式内容拉近距离</strong>：腾讯员工公寓曝光文章（非技术内容）意外走红，展示了腾讯在展示企业文化方面的多元化尝试——生活方式内容比纯招聘内容更易触达潜在候选人。',
          ],
          sources: [
            { name: '腾讯技术工程：读完这篇搞懂 DeepSeek v4', url: 'https://mp.weixin.qq.com/s/MamimcCQj_Hd12T8iFVmKg' },
            { name: '腾讯技术工程：腾讯员工公寓曝光', url: 'https://mp.weixin.qq.com/s/0tOs8D31gMUc6C6pSFctNg' },
          ],
        },
        '对快手的启示': {
          content: '腾讯把员工公寓生活场景做成了传播素材——真实、有温度，比宣讲会更能打动候选人。快手7层工区、食堂文化、夜间直播氛围都是天然的内容素材，可以在招聘号做"快手人的一天"系列，用生活感弥补纯技术内容的疏离感。',
          sources: [],
          isInsight: true,
        },
      },
    },
    {
      id: 'alibaba',
      name: '阿里',
      color: '#FF6A00',
      summary: '本周快照暂无阿里官方公众号更新（五一假期），请关注下周动态',
      sections: {
        '招聘动态': {
          content: '本周快照采集期间阿里官方公众号暂无新文章推送，五一假期期间各公司更新节奏普遍放缓。',
          sources: [],
        },
        '近期战略重点': {
          content: ['本周暂无数据，请关注下周动态。'],
          sources: [],
        },
        '对快手的启示': {
          content: '节假日期间竞对沉默，正是快手主动发声、占领心智的好时机。可考虑在五一、国庆等长假期间提前备稿，在竞对静默时做差异化曝光。',
          sources: [],
          isInsight: true,
        },
      },
    },
    {
      id: 'meituan',
      name: '美团',
      color: '#FFAA00',
      summary: '本周快照暂无美团官方公众号更新（五一假期），请关注下周动态',
      sections: {
        '招聘动态': {
          content: '本周快照采集期间美团官方公众号暂无新文章推送，五一假期期间各公司更新节奏普遍放缓。',
          sources: [],
        },
        '近期战略重点': {
          content: ['本周暂无数据，请关注下周动态。'],
          sources: [],
        },
        '对快手的启示': {
          content: '美团上周引入前 Anthropic 工程师的动作持续发酵，人才信号的传播生命周期可以很长。快手若有类似引才动作，应该有意识地做节奏管理，在假期后第一周放出，获得更多关注度。',
          sources: [],
          isInsight: true,
        },
      },
    },
    {
      id: 'xiaohongshu',
      name: '小红书',
      color: '#FF2442',
      summary: '高层大换血后首周，官方号以人文内容收尾五一，算法与商业化整合蓄势待发',
      sections: {
        '招聘动态': {
          content: '本周小红书官方号发布了一篇人文视角的深度思考文章（从人类学视角理解数字时代的孤独与焦虑），无直接招聘内容。结合高层换血的背景，当前处于内部梳理期，招聘节奏将在下周恢复。',
          sources: [
            { name: '是小红书人啊：人类学视角理解数字时代的孤独', url: 'https://mp.weixin.qq.com/s/7rJycOFcDClGxrRcOzgZgQ' },
          ],
        },
        '近期战略重点': {
          content: [
            '<strong>高层换血信号明确</strong>：柯南升任总裁、夏侯接管算法，叠加此前流量分配向商业转化倾斜的报道，意味着小红书从"内容社区"向"商业平台"的战略转型进入执行期，算法将更直接地为商业目标服务。',
            '<strong>人文内容持续强化品牌软实力</strong>：在组织动荡期选择发布人文思考类文章，是小红书稳定外部感知的一种方式——传递"我们仍然是有温度的品牌"信号，防止高层变动引发候选人对文化断裂的担忧。',
          ],
          sources: [
            { name: '大厂日爆：小红书柯南升总裁、夏侯主导算法', url: 'https://mp.weixin.qq.com/s/6-NzIGV0i5P_uPa22IPjxA' },
          ],
        },
        '对快手的启示': {
          content: '小红书高层换血后第一篇文章选择了"人文视角理解孤独"，而不是招聘或技术内容——这是一种品牌稳定剂。快手在重大组织调整后，也可以考虑通过员工故事、文化内容做情绪托底，维护雇主品牌的连续性感知。',
          sources: [],
          isInsight: true,
        },
      },
    },
  ],
};
