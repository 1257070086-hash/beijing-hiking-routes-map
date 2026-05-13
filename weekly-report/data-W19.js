// 周报数据 - W19 (5.6-5.12)
window.REPORT_DATA = {
  week: '2026 W19',
  range: '5.6 — 5.12',
  meta: '共采集 94 篇文章 · 行业资讯 84 篇 + 各公司公众号 10 篇',
  headlines: [
    {
      rank: 1,
      tag: 'AI',
      title: 'DeepSeek 拟募资最高 500 亿元，改写大模型估值逻辑',
      summary: 'AI 一级市场估值体系正在被重构，所有大模型公司估值参照将随之刷新。',
      url: 'https://mp.weixin.qq.com/s/CzuAJx-DIpJyZOT5k55RxQ',
    },
    {
      rank: 2,
      tag: 'AI',
      title: 'ChatGPT 正式上线广告主平台，AI 产品商业化走向分裂',
      summary: '免费用户将看到广告，AI 产品两极化：工具层商业化加速，体验层护城河显现。',
      url: 'https://mp.weixin.qq.com/s/uQqOmbxLHCZJoHlZvfnukg',
    },
    {
      rank: 3,
      tag: '组织',
      title: '快手可灵被传分拆，大厂 AI 业务独立化趋势加速',
      summary: '大厂 AI 明星产品独立拆分，既是估值独立的资本考量，也是组织灵活性的信号。',
      url: 'https://mp.weixin.qq.com/s/H9X9FbtQlozeXnmyYq7GZQ',
    },
    {
      rank: 4,
      tag: '人才',
      title: 'SHEIN 算法团队调薪超预期，快手完成组织架构调整',
      summary: '大厂薪资与组织双线调整，AI 相关岗位竞争持续加剧。',
      url: 'https://mp.weixin.qq.com/s/7AvUkZQFANlEu1oVyhBBrQ',
    },
    {
      rank: 5,
      tag: '技术',
      title: '黄仁勋：英伟达在中国业务已完全停滞',
      summary: '芯片出口管制进入新阶段，国产算力替代窗口期加速打开。',
      url: 'https://mp.weixin.qq.com/s/OSUemdjdERA8k3MwZ-ZB4w',
    },
  ],
  industry: {
    sections: {
      '本周热点事件': {
        content: [
          '<strong>DeepSeek 拟募资 500 亿，AI 估值逻辑被重写</strong>：消息称 DeepSeek 寻求最高 500 亿元融资，引发行业对大模型一级市场估值体系的全面重新审视，国内外 AI 创业公司估值参照均将受到冲击。',
          '<strong>ChatGPT 正式上线广告主平台，AI 产品商业化分裂</strong>：OpenAI 宣布向广告主开放投放平台，标志着 AI 产品正式进入"双轨制"——付费会员体验无广告，免费用户获得商业化流量，商业模式趋于成熟。',
          '<strong>快手"可灵"被传分拆独立运营</strong>：虎嗅早报报道快手可灵视频生成产品存在分拆计划，大厂 AI 子产品独立估值的趋势愈加明显，从字节豆包到快手可灵，AI 产品独立化已成行业共识。',
          '<strong>黄仁勋公开表态：英伟达中国业务完全停滞</strong>：英伟达 CEO 明确承认出口管制已使其中国业务进入停滞状态，国产算力替代（华为昇腾等）的战略窗口进一步打开。',
          '<strong>OpenAI 总裁私密日记当庭曝光，内部盈利压力一览无余</strong>：马斯克诉讼进入高潮，OpenAI 早期内部讨论中的盈利压力与创始理念分歧被公开，AI 顶层治理风险再次暴露在聚光灯下。',
        ],
        sources: [
          { name: '虎嗅APP：DeepSeek融资，改写所有人的估值', url: 'https://mp.weixin.qq.com/s/CzuAJx-DIpJyZOT5k55RxQ' },
          { name: '虎嗅APP：ChatGPT正式上线广告主平台', url: 'https://mp.weixin.qq.com/s/uQqOmbxLHCZJoHlZvfnukg' },
          { name: '虎嗅APP：早报（快手可灵被传分拆）', url: 'https://mp.weixin.qq.com/s/H9X9FbtQlozeXnmyYq7GZQ' },
          { name: '虎嗅APP：黄仁勋：我们在中国的业务现在已完全停滞', url: 'https://mp.weixin.qq.com/s/OSUemdjdERA8k3MwZ-ZB4w' },
          { name: '虎嗅APP：OpenAI总裁私密日记被当庭念出', url: 'https://mp.weixin.qq.com/s/-R7x9ursfnM9QMunXFAoSg' },
        ],
      },
      '技术进展速览': {
        content: [
          '<strong>Cloudflare 推出 Agent Memory：AI 智能体持久记忆托管</strong>：AI Agent 基础设施层竞争进入新阶段，持久记忆托管成为 Agent 规模化部署的关键能力，云厂商纷纷下场抢占生态位。',
          '<strong>美团 31 万行代码 AI 重构实践落地</strong>：美团技术团队公布用 Agent 评测思路管理 AI Coding 的工程实践，31 万行存量代码完成 AI 重构，为行业大规模 AI 工程化提供可参考路径。',
          '<strong>AI 编程生产力争议：程序员何去何从</strong>：开源社区信任危机（1 周 10 万 Star 项目）和 AI 接管编程的讨论同时发酵，技术社区对 AI 时代程序员角色的焦虑达到新高点。',
          '<strong>GPT-5 级推理能力推入语音模型，同传翻译成本骤降</strong>：量子位报道 OpenAI 将顶级推理能力融入语音模型，同传翻译成本砍穿地板价，语音 AI 商业化进入高速赛道。',
        ],
        sources: [
          { name: 'InfoQ：Cloudflare 推出 Agent Memory', url: 'https://mp.weixin.qq.com/s/KabdFhsQ6cV7zjmLQ_A4IQ' },
          { name: '美团技术团队：31万行代码AI重构实践', url: 'https://mp.weixin.qq.com/s/CTY5mdgKh6TmPrO6xsKhWQ' },
          { name: 'InfoQ：AI 把编程这件事接管之后', url: 'https://mp.weixin.qq.com/s/Qy40z5PP7NL8ky4xwKAvOA' },
          { name: '量子位：GPT-5级推理能力塞进语音模型', url: 'https://mp.weixin.qq.com/s/I5dRqYWogmgROkOusRtzTA' },
        ],
      },
      '行业趋势洞察': {
        content: [
          '<strong>AI 产品商业化进入双轨制时代</strong>：ChatGPT 引入广告主平台，标志着 AI 产品从"烧钱扩用户"转向"可持续商业化"，付费用户体验护城河与广告变现开始并行，竞争维度从用户规模转向留存与变现效率。',
          '<strong>大厂 AI 子产品独立化成趋势</strong>：从字节豆包到美团 AI 搭子再到快手可灵，大厂 AI 明星产品独立化已从个案走向趋势，独立估值、独立融资、独立品牌三条路径同时探索。',
          '<strong>企业 AI 落地从"工具引入"走向"组织重构"</strong>：阿里《AI Native 研发组织》、美团 AI 重构、字节 ADR 安全方案均指向同一结论：AI 落地已越过"工具采购"阶段，进入"组织流程再造"深水区。',
          '<strong>Token 黄牛与 AI 资源分配不均成新问题</strong>：AI API 访问权限稀缺催生灰色市场，折射出全球 AI 资源分配不均的结构性矛盾，政策与市场的博弈将在未来持续。',
        ],
        sources: [],
      },
      '对快手的启示': {
        content: [
          '<strong>可灵独立化：需要提前做好雇主品牌"分化"准备</strong>：若可灵真的拆分，快手母品牌与可灵子品牌的雇主品牌叙事需要分层设计，避免人才认知混乱，这是雇主品牌团队需要提前预判的风险。',
          '<strong>AI 工程化落地值得内部推广</strong>：美团"AI 搭子上班"和"31 万行代码重构"双线输出，用真实案例打透 AI 工具价值，快手内部 AI 应用推广可借鉴这种"真实工程案例 + 员工故事"的组合拳。',
          '<strong>校招雇主品牌：AI Hackathon 是高效抓手</strong>：美团 30 万奖金池的校园 AI Hackathon 覆盖技术型高校生，快手可灵 / KwaiCoder 等 AI 产品完全具备同样的校招活动条件，值得策划跟进。',
          '<strong>人才竞争窗口再次打开</strong>：SHEIN 算法调薪超预期 + 快手组织架构调整同步发生，说明大厂人才流动性在升高，快手应借组织调整后的稳定期强化雇主品牌信号，降低人才不确定感。',
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
      color: '#FF4757',
      summary: '本周发布 ESR 报告 + AI 安全实践 + 抖音产品优化，技术输出稳健',
      sections: {
        '本周动态': {
          content: [
            '<strong>《2025 字节跳动企业社会责任报告》发布</strong>：字节年度 ESG 报告聚焦 AI 安全、内容治理、员工发展三大维度，ESR 透明度报告已成大厂合规与品牌建设标配。',
            '<strong>飞连 ADR：桌面 Agent 全链路安全方案</strong>：随着 AI Agent 开始操控桌面环境，字节企业安全产品针对性推出全链路防护方案，企业 AI 安全攻防进入新阶段。',
            '<strong>抖音动态体验深度优化</strong>：抖音持续在 Feed 流加载速度、交互流畅度、内容质量三维度打磨体验，高频产品迭代频率是竞争壁垒之一。',
          ],
          sources: [
            { name: '字节跳动技术团队：2025企业社会责任报告', url: 'https://mp.weixin.qq.com/s/iLv_8PFQ3qLPqeRgTc3wzg' },
            { name: '字节跳动技术团队：飞连ADR全链路安全', url: 'https://mp.weixin.qq.com/s/AyW4UmOulEW-LZ7iZQQiyA' },
            { name: '字节跳动技术团队：抖音动态体验优化实践', url: 'https://mp.weixin.qq.com/s/LyfGYi2_KxYXldG3gC-NVw' },
          ],
        },
        '对快手的启示': {
          content: [
            '字节本周 ESR 报告 + AI 安全 + 产品优化三线并发，呈现"负责任科技公司"的系统性叙事。快手雇主品牌可参考这种"技术输出即品牌建设"的模式，将工程实践内容化，持续输出专业形象。',
          ],
          sources: [],
          isInsight: true,
        },
      },
    },
    {
      id: 'tencent',
      name: '腾讯',
      color: '#00B2FF',
      summary: '本周聚焦 AI Agent 实践与 Code 模型评估，AI 工具落地提速',
      sections: {
        '本周动态': {
          content: [
            '<strong>十年老技术人的 AI Agent 探索之路</strong>：腾讯内部老技术人分享从传统开发到 AI Agent 范式转变的全过程，揭示大厂工程师在 AI 时代的真实适应路径与踩坑经验，可信度高。',
            '<strong>鹅厂工程师评 Code 模型：上下文准确 + 多步骤连续是核心</strong>：腾讯内部调研为 Code 模型产品提供一线反馈，工程师最在意"能写能改能解释"的完整闭环，而非单纯代码生成速度。',
          ],
          sources: [
            { name: '腾讯技术工程：十年老技术开发的AI Agent探索之路', url: 'https://mp.weixin.qq.com/s/r__2l_u6oXwzWHyD3wu_ZQ' },
            { name: '腾讯技术工程：鹅厂员工觉得好的code模型应该具备什么能力', url: 'https://mp.weixin.qq.com/s/1hAg9mNr1g6MKx0Om8osQg' },
          ],
        },
        '对快手的启示': {
          content: [
            '腾讯两篇文章均聚焦 AI 工具实际使用体验，内容落地感强，传播效率高。快手 KwaiCoder 等内部 AI 工具也可尝试类似"内部用户真实评测"的内容形式，提升公信力的同时强化雇主品牌中的 AI 氛围感。',
          ],
          sources: [],
          isInsight: true,
        },
      },
    },
    {
      id: 'alibaba',
      name: '阿里',
      color: '#FF6A00',
      summary: '本周输出 AI Native 研发组织方法论，定位"AI 落地引领者"',
      sections: {
        '本周动态': {
          content: [
            '<strong>AI Native 时代，研发组织何去何从</strong>：阿里技术深度探讨 AI 重构研发组织的三阶段演进路径：工具引入 → 流程再造 → 组织文化变革。这是目前行业内对 AI 组织变革最系统化的公开论述之一。',
          ],
          sources: [
            { name: '阿里技术：AI Native 时代——研发组织何去何从', url: 'https://mp.weixin.qq.com/s/Xf3C60jCxR4ppMi4HuAnVA' },
          ],
        },
        '对快手的启示': {
          content: [
            '阿里本周从方法论层面输出"AI 原生组织"的完整框架，已从单纯的技术推广转向组织文化引领，体现其在 AI 落地叙事上的野心。快手可持续跟踪这一视角，作为快手内部 AI 推进的外部参照。',
          ],
          sources: [],
          isInsight: true,
        },
      },
    },
    {
      id: 'meituan',
      name: '美团',
      color: '#FFD600',
      summary: '本周 AI 工程实践（31万行重构）+ 雇主品牌（Hackathon + AI搭子）双线发力',
      sections: {
        '本周动态': {
          content: [
            '<strong>31 万行代码 AI 重构落地，Agent 评测管理 AI Coding</strong>：美团完成大规模存量代码 AI 重构，通过 Agent 评测框架保障重构质量，为行业提供可参考的 AI 工程化完整路径，技术公信力显著提升。',
            '<strong>CVPR 2026 论文精选分享会：学术品牌持续建设</strong>：美团技术团队参与 CVPR 2026 顶会，持续输出学术影响力，强化在计算机视觉领域的雇主品牌。',
            '<strong>30 万奖金池校园 AI Hackathon：高效校招抓手</strong>：美团以高额奖金吸引校园 AI 人才，校招雇主品牌与 AI 战略双线联动，技术雇主品牌建设方式值得参考。',
            '<strong>AI 搭子上班实录：趣味内容拉近距离</strong>：美团以轻松趣味内容展示员工与 AI 协作日常，雇主品牌内容化叙事策略鲜活，社交传播力强。',
          ],
          sources: [
            { name: '美团技术团队：31万行代码AI重构实践', url: 'https://mp.weixin.qq.com/s/CTY5mdgKh6TmPrO6xsKhWQ' },
            { name: '美团技术团队：CVPR 2026 美团学术论文分享会', url: 'https://mp.weixin.qq.com/s/9hTjyKCUX0eSeSWraMCVcw' },
            { name: '美团技术团队：校园AI Hackathon大赛', url: 'https://mp.weixin.qq.com/s/nB4Hmm5crgzo9seTdproFA' },
            { name: '美团招聘：听说美团人都在上班养虾？AI搭子上岗实录', url: 'https://mp.weixin.qq.com/s/LnqMt-jEj1HtfXOdPPMNOA' },
          ],
        },
        '对快手的启示': {
          content: [
            '美团本周在技术公信力（31万行重构）和雇主品牌（Hackathon + AI搭子趣味内容）两个维度同步发力，形成"硬核技术 + 人情味"的完整雇主品牌叙事。快手雇主品牌可参考这种双线组合，将 KwaiCoder 等内部工具实践和员工使用故事结合输出。',
          ],
          sources: [],
          isInsight: true,
        },
      },
    },
    {
      id: 'xiaohongshu',
      name: '小红书',
      color: '#FF2D55',
      summary: '本周官方公众号暂无更新，但产品讨论度持续处于高位',
      sections: {
        '本周动态': {
          content: [
            '<strong>本周无官方公众号文章更新</strong>：小红书技术/招聘类公众号本周静默，但外部信源中小红书产品在 AI 工具使用场景、用户内容方向等讨论中持续出现，产品热度仍高。',
            '<strong>行业提及：小红书在 AI 落地场景中频繁被对标</strong>：多篇行业分析文章将小红书作为内容 + 社区 + 商业化三维融合的标杆案例，其在用户生成内容质量管控上的经验被广泛引用。',
          ],
          sources: [],
        },
        '对快手的启示': {
          content: [
            '小红书在本周行业讨论中仍占有重要位置，即便没有主动输出。快手雇主品牌可持续关注小红书在内容策略和 AI 工具方向的新动向，尤其是其校招和员工内容方面的叙事变化。',
          ],
          sources: [],
          isInsight: true,
        },
      },
    },
  ],
};
