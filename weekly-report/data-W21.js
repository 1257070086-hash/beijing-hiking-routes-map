// W21 周报数据 · 2026-05-19 — 2026-05-25
window.REPORT_DATA = {
  week: '2026 W21',
  range: '05.19 — 05.25',
  meta: '覆盖字节跳动、腾讯、阿里巴巴、美团、小红书 + 行业资讯 · 共58篇',

  headlines: [
    {
      rank: '01',
      title: '马斯克要当"太空版黄仁勋"：Anthropic一年上交150亿美元，Cursor百亿分手费锁死',
      summary: 'SpaceX 跻身算力新庄家，Anthropic 高额上交凸显大模型公司算力依赖困境，AI 基础设施权力版图加速重组。',
      url: 'https://mp.weixin.qq.com/s/-GdMAX1ZB305kwK1r_Gxgw',
      tag: '热点',
    },
    {
      rank: '02',
      title: 'GitHub面临生存之战！多位员工曝内部乱象：独立文化要没了',
      summary: 'GitHub 内部文化冲突爆发，微软 AI 战略收紧对独立开发者生态的挤压，全球最大代码托管平台的独立性问题引发行业反思。',
      url: 'https://mp.weixin.qq.com/s/5dP_KNS5fRoZdD1FabuuQA',
      tag: '行业',
    },
    {
      rank: '03',
      title: 'Altman拿Token换股权只够烧45天：Token真成"钱"了，谁更赚？',
      summary: 'OpenAI 用 Token 替代股权激励，揭示 AI 时代新型人才绑定的金融逻辑，Token 经济体系开始从概念走向实操。',
      url: 'https://mp.weixin.qq.com/s/opFBXnyFnNrmHeUQUk9qeg',
      tag: '热点',
    },
    {
      rank: '04',
      title: '字节奖学金首次全球开放，五年67位得主去向追踪',
      summary: '字节跳动奖学金首次向全球开放申请，顶尖人才争夺从校招前置到学术培养阶段，雇主品牌渗透到科研共同体。',
      url: 'https://mp.weixin.qq.com/s/SvhBJXWovNJncCyPh6laDw',
      tag: '招聘',
    },
    {
      rank: '05',
      title: 'AI 抢人大战，批量制造这个时代的流量明星',
      summary: '晚点 LatePost 深度报道 AI 人才争夺战，大厂以天文薪酬+股权竞逐稀缺研究员，人才溢价远超传统互联网周期。',
      url: 'https://mp.weixin.qq.com/s/fbpWu1674pwB260FBrIsWw',
      tag: '行业',
    },
  ],

  industry: {
    sections: {
      '热点事件': {
        content: [
          '马斯克将 SpaceX 变成 AI 算力新庄家，Anthropic 年上交 150 亿美元算力租金，算力从成本项变成战略杠杆，AI 公司对算力基础设施的依赖加深。',
          'GitHub 内部文化危机：员工曝出"独立文化要没了"，封杀 Claude Code 才能"活"，全球最大开发者平台在微软 AI 战略下迷失自我。',
          'OpenAI 用 Token 替代传统股权激励，45天就烧完——Token 经济从概念走向实操，人才绑定的金融逻辑正在被 AI 公司重新定义。',
          '追觅核心事业部换挡调整，HR 招聘暂缓、offer 提报延迟，高速扩张后的组织消化期到来。',
          '大厂 HR 集体发声"AI 时代招什么人"，招聘标准从经验导向转向能力定义导向，传统人才评估框架失效。',
        ],
        sources: [
          { name: '马斯克要当"太空版黄仁勋"', url: 'https://mp.weixin.qq.com/s/-GdMAX1ZB305kwK1r_Gxgw' },
          { name: 'GitHub面临生存之战', url: 'https://mp.weixin.qq.com/s/5dP_KNS5fRoZdD1FabuuQA' },
          { name: 'Altman拿Token换股权', url: 'https://mp.weixin.qq.com/s/opFBXnyFnNrmHeUQUk9qeg' },
          { name: '大厂HR：AI时代招什么人', url: 'https://mp.weixin.qq.com/s/gy2_HAhJZgPLAnxb4N0-Og' },
        ],
      },
      '技术前沿': {
        content: [
          '微软将弃用 Claude 改用更便宜方案，"太贵了还是薅明白了？"折射大厂对 AI 模型成本效益的精算时代到来。',
          'Anthropic 推出 MCP 隧道，让私有 Agent 安全访问内部系统，企业级 Agent 生态从"能用"迈向"敢用"。',
          '硅谷深陷算力荒：H200 一夜涨价 30%，H100 抢到缺货，算力资源正成为比模型更稀缺的战略资产。',
          'OpenAI 开源 Symphony：面向自主编码智能体编排的 SPEC 规范文档，AI Coding Agent 的协作标准雏形出现。',
          'C++ 之父开撕 AI Coding：资深开发者宁愿退休也不愿伺候 AI 生成的代码，技术社区对 AI 编程的抵抗情绪上升。',
        ],
        sources: [
          { name: '微软将弃用Claude', url: 'https://mp.weixin.qq.com/s/MhOxF84CUvQXuF1fHJa2DQ' },
          { name: 'Anthropic推出MCP隧道', url: 'https://mp.weixin.qq.com/s/aSAIGXETqIUtxC3VIEZQuQ' },
          { name: '硅谷深陷算力荒', url: 'https://mp.weixin.qq.com/s/MDiEt2PfdPTu5GBqiAT4Ig' },
          { name: 'OpenAI开源Symphony', url: 'https://mp.weixin.qq.com/s/_0dsCc9G2HBjBxrKchabQA' },
        ],
      },
      '行业趋势': {
        content: [
          'AI 人才争夺战白热化：晚点报道"批量制造流量明星"，大厂以超常规薪酬竞逐极少数顶尖研究员，人才溢价远超传统互联网周期。',
          '京东零售高层大调整、百度销售体系调整、360 内部龙虾动员会——大厂组织变革密集，行业进入"换挡期"。',
          'Agent"记忆断片"成为新瓶颈：Memory 正成为 AI 新战场，大模型能力提升的关键路径从参数规模转向记忆架构。',
          '驾驭 AI 的人才是穿越周期的核心竞争力——极客时间 DTDS 大会核心共识：技术能力在贬值，AI 驾驭能力在升值。',
        ],
        sources: [
          { name: 'AI抢人大战', url: 'https://mp.weixin.qq.com/s/fbpWu1674pwB260FBrIsWw' },
          { name: '近期大厂事儿', url: 'https://mp.weixin.qq.com/s/aZEobYDHjtxQofm6Gnnj0Q' },
          { name: 'Agent记忆断片', url: 'https://mp.weixin.qq.com/s/dKrA7mPvKOgjZrdWgThadA' },
          { name: '驾驭AI的人', url: 'https://mp.weixin.qq.com/s/eCKt3_htXTZ4D6qqonySAw' },
        ],
      },
      '对快手的启示': {
        isInsight: true,
        content: [
          '「算力焦虑」窗口：Anthropic 年交 150 亿美元算力费、H200 涨价 30%——快手需重新审视自建 vs 采购算力的战略成本，提前布局国产算力替代方案。',
          '「人才定义权」争夺：大厂 HR 集体发声重新定义"AI 时代好人才"，快手快Star 应抢先用实际案例定义"什么是快手需要的 AI 人才"，而非被动跟随。',
          '「Token 经济」先行：OpenAI 用 Token 替代股权，这是 AI 公司独有的人才绑定工具。快手可以探索用 AI 算力/Token 资源作为新型激励工具。',
        ],
      },
    },
  },

  companies: [
    {
      id: 'bytedance',
      name: '字节跳动',
      color: '#1D1D1F',
      summary: '4篇 · 奖学金全球开放 + 推荐技术出书',
      sections: {
        '招聘与人才品牌': {
          content: [
            '2026 字节跳动奖学金首次开放全球申请，增加奖励名额，人才争夺从国内校招扩展到全球学术共同体，雇主品牌国际化加速。',
            '字节跳动 x 清华大学 ICPC 训练营报名启动，持续深耕顶级编程竞赛圈层，将竞赛生态转化为招聘渠道。',
          ],
          sources: [
            { name: '字节奖学金全球开放', url: 'https://mp.weixin.qq.com/s/hkH8UK2rnQfSMNXs9Z5bIg' },
            { name: '字节x清华ICPC训练营', url: 'https://mp.weixin.qq.com/s/nHLAPy9PYTQxOu7Ujw8z8g' },
          ],
        },
        '技术品牌': {
          content: [
            '字节推荐技术团队出书：《一条视频为什么会被推荐》，将核心推荐算法方法论公开出版，技术透明化用于雇主品牌建设。',
          ],
          sources: [
            { name: '推荐技术出书', url: 'https://mp.weixin.qq.com/s/jjjSigBOq2G-NkDK4kPTmw' },
          ],
        },
        '对快手的启示': {
          isInsight: true,
          content: [
            '字节"技术出书"策略值得借鉴——用出版将内部技术能力转化为行业认知影响力，同时自然吸引认同该方法论的人才。快手的推荐/AI 技术也可通过类似"知识产品化"方式扩大雇主品牌辐射面。',
          ],
        },
      },
    },
    {
      id: 'tencent',
      name: '腾讯',
      color: '#1DA462',
      summary: '3篇 · 青云计划持续渗透学术顶会',
      sections: {
        '招聘与人才品牌': {
          content: [
            '腾讯青云招聘速报发布六大热招课题推荐，持续以学术课题为入口吸引顶尖人才，"课题驱动招聘"模式成熟运作。',
            'CVPR 2026 丹佛站青云计划"旷野精酿派对"邀请——将学术顶会社交活动化，在严肃学术场景中注入品牌温度。',
          ],
          sources: [
            { name: '青云招聘速报', url: 'https://mp.weixin.qq.com/s/8BOkM8l-4soQj8gYr6R8lQ' },
            { name: 'CVPR青云旷野精酿', url: 'https://mp.weixin.qq.com/s/wMMC0ap0rI9H6U6rdU22OA' },
          ],
        },
        '技术招募': {
          content: [
            '腾讯混元多模态顶尖团队热招，大模型领域人才争夺升级到具体方向层面。',
          ],
          sources: [
            { name: '混元多模态团队热招', url: 'https://mp.weixin.qq.com/s/BYqHzvoI1lzZ5-iePtrE9g' },
          ],
        },
        '对快手的启示': {
          isInsight: true,
          content: [
            '腾讯把学术顶会变成品牌社交场（"旷野精酿派对"），让候选人在轻松场景中感知腾讯文化。快Star 可以在 CVPR/ICML 等顶会做类似的"非正式但高质感"活动，用氛围感而非硬广吸引人。',
          ],
        },
      },
    },
    {
      id: 'alibaba',
      name: '阿里巴巴',
      color: '#FF6A00',
      summary: '0篇 · 本周暂无文章数据',
      sections: {
        '本周动态': {
          content: ['本周快照中阿里暂无新文章入库，下周持续跟踪。'],
        },
        '对快手的启示': {
          isInsight: true,
          content: ['阿里本周缺席，属正常发布间隔，持续关注其下一轮招聘/技术发布动作。'],
        },
      },
    },
    {
      id: 'meituan',
      name: '美团',
      color: '#FFD100',
      summary: '7篇 · LongCat开源迭代 + CVPR北斗活动 + 春招收官',
      sections: {
        '技术开源': {
          content: [
            'LongCat-Video-Avatar 1.5 正式开源，从高拟真到真可用，视频数字人技术栈持续迭代，开源策略强化技术品牌。',
            '美团跑腿 Skill 发布："一句话，骑手来帮忙"——将 AI 能力封装为 Skill 产品，Agent 产品化思路从技术团队渗透到业务端。',
          ],
          sources: [
            { name: 'LongCat-Video-Avatar 1.5', url: 'https://mp.weixin.qq.com/s/oeAG_FpAbSoin3dJeS-jww' },
            { name: '美团跑腿Skill', url: 'https://mp.weixin.qq.com/s/9CGKzPtVQXNHhCTuiLz6PQ' },
          ],
        },
        '招聘与人才品牌': {
          content: [
            '2026年春招网申倒计时10天，春招进入收官阶段。',
            'CVPR 2026 美团北斗计划主题活动发出邀请，学术顶会渗透力度持续加大。',
            'NoCode 创新挑战赛作品展：校园创意涌动，AI 落地生花——用竞赛连接高校人才与业务场景。',
          ],
          sources: [
            { name: '春招网申倒计时', url: 'https://mp.weixin.qq.com/s/zcv9GsALTG9J6BspY9pd2w' },
            { name: 'CVPR北斗活动', url: 'https://mp.weixin.qq.com/s/v2lGqr-c6jqUTpo5JKEScQ' },
            { name: 'NoCode创新挑战赛', url: 'https://mp.weixin.qq.com/s/Cg9uPpVoyolbXBIR_sXLYA' },
          ],
        },
        '对快手的启示': {
          isInsight: true,
          content: [
            '美团"跑腿 Skill"思路值得关注——将 AI 能力封装为业务侧可直接调用的"技能模块"，实现技术到产品的快速闭环。快手可以借鉴这一思路，将 AI 能力产品化为创作者/运营可直接使用的 Skill。',
          ],
        },
      },
    },
    {
      id: 'xiaohongshu',
      name: '小红书',
      color: '#FF2D55',
      summary: '2篇 · 技术专场亮相QECon + 文化内容',
      sections: {
        '技术品牌': {
          content: [
            'QECon 深圳 2026 小红书技术专场：Agent 驱动的研发效率工程探索与实践，首次在行业质量工程大会上设置专场，技术品牌向工程实践领域延伸。',
          ],
          sources: [
            { name: 'QECon小红书技术专场', url: 'https://mp.weixin.qq.com/s/_TMLx4sD9LiFzsOTEs-3dw' },
          ],
        },
        '文化内容': {
          content: [
            '「足够好的人生」2小时对谈精华，雇主品牌从招聘号延伸到生活方式内容，用价值观共鸣吸引候选人。',
          ],
          sources: [
            { name: '足够好的人生', url: 'https://mp.weixin.qq.com/s/IPTnmrKk1q_3J_2syZRrlw' },
          ],
        },
        '对快手的启示': {
          isInsight: true,
          content: [
            '小红书把雇主品牌做成"生活方式内容"而非硬广招聘帖，用价值观共鸣筛选认同者。快手也可以输出更多关于"快手人的真实工作/生活方式"的内容，用故事替代JD。',
          ],
        },
      },
    },
  ],
};
