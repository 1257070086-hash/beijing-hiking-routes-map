// W27 周报数据 · 2026-06-30 — 2026-07-06
window.REPORT_DATA = {
  week: '2026 W27',
  range: '06.30 — 07.06',
  meta: '覆盖字节跳动、腾讯、阿里巴巴、美团、小红书 + 行业资讯 · 共66篇',

  headlines: [
    {
      rank: '01',
      title: '近30亿美元！可灵AI创全球视频大模型融资新纪录',
      summary: '可灵AI获近30亿美元融资，创下全球视频大模型融资纪录，快手AI视频生成业务独立融资走向加速。',
      url: 'https://mp.weixin.qq.com/s/1Xhkb9jVW-GfPr5MkLxU5A',
      tag: '热点',
    },
    {
      rank: '02',
      title: '字节正式打响管理变革第一枪',
      summary: '申妈报道字节发布全员信要求leader深入一线，管理扁平化改革正式落地，从"管理层层级"到"前线人人能打"。',
      url: 'https://mp.weixin.qq.com/s/LCuv7y8vnNDGxIdzHdNbvw',
      tag: '行业',
    },
    {
      rank: '03',
      title: 'AI大厂，正在互相设防',
      summary: '虎嗅报道AI大厂互相设防——美团限用豆包大模型、Token不再随便烧、数据互防，AI行业从"共赢"转向"零和"。',
      url: 'https://mp.weixin.qq.com/s/qstehrTjxzqSyqDuUvJjgw',
      tag: '行业',
    },
    {
      rank: '04',
      title: '美团LongCat-2.0正式发布：万亿参数在国产算力上训练',
      summary: '美团LongCat-2.0在国产算力集群上完成全流程训练与推理，万亿参数模型国产化突破。',
      url: 'https://mp.weixin.qq.com/s/9XFcx3fmFcmbry5bHMJsow',
      tag: '技术',
    },
    {
      rank: '05',
      title: '让它崩：AI泡沫之后，黄金时代才会开始',
      summary: '虎嗅分析AI泡沫论——泡沫之后才是真正的黄金时代，当前AI行业估值虚高与实际产出存在巨大落差。',
      url: 'https://mp.weixin.qq.com/s/kwlodS_K83QTemTt8D-TCw',
      tag: '行业',
    },
  ],

  industry: {
    sections: {
      '热点事件': {
        content: [
          '可灵AI获近30亿美元融资，创全球视频大模型融资新纪录——快手AI视频业务资本化加速。',
          '字节正式打响管理变革第一枪：全员信要求leader深入一线，管理扁平化改革落地。',
          'AI大厂互相设防：美团限用豆包、Token不再随便烧、数据互防——从"共赢"转向"零和"。',
          'AI写了90%代码，大厂程序员的煎熬时刻——晚点LatePost深度报道AI编程对程序员身份认同的冲击。',
          'DeepSeek V4将上线，高峰时段API价格翻倍——AI模型进入"峰时定价"商业化阶段。',
        ],
        sources: [
          { name: '可灵AI融资30亿美元', url: 'https://mp.weixin.qq.com/s/1Xhkb9jVW-GfPr5MkLxU5A' },
          { name: '字节管理变革', url: 'https://mp.weixin.qq.com/s/LCuv7y8vnNDGxIdzHdNbvw' },
          { name: 'AI大厂互相设防', url: 'https://mp.weixin.qq.com/s/qstehrTjxzqSyqDuUvJjgw' },
          { name: 'AI写了90%代码', url: 'https://mp.weixin.qq.com/s/J2jqKilutYjqz-_I1UeVgA' },
          { name: 'DeepSeek V4价格翻倍', url: 'https://mp.weixin.qq.com/s/RTeRnCGl_U8pMmzn8BTsTw' },
        ],
      },
      '技术前沿': {
        content: [
          '美团LongCat-2.0在国产算力集群完成万亿参数全流程训练与推理——国产大模型自主化里程碑。',
          'Fable 5回归24小时差评如潮：跑分大降、拒答问题、偷偷骂用户——顶级模型的"翻车"事件。',
          '全球首个英伟达含量为0的万亿模型——纯国产算力训练的大模型成为海外开发者抢手货。',
          'LeCun团队让世界模型学会持续学习——世界模型从"一帧一帧"到"连续学习"。',
          'Codex一个月吃掉150GB流量写满4T硬盘——AI Coding Agent的资源消耗开始被关注。',
        ],
        sources: [
          { name: 'LongCat-2.0万亿参数', url: 'https://mp.weixin.qq.com/s/9XFcx3fmFcmbry5bHMJsow' },
          { name: 'Fable5差评如潮', url: 'https://mp.weixin.qq.com/s/C8AvQISjI4yIaapsg9z-0Q' },
          { name: '英伟达含量为0', url: 'https://mp.weixin.qq.com/s/OWCyjK_CVOJnITX_1Da4Q' },
          { name: 'Codex吃掉150GB', url: 'https://mp.weixin.qq.com/s/o8QimVvfB1gZf-5_4rIUSg' },
        ],
      },
      '行业趋势': {
        content: [
          'AI泡沫论再起：让它崩，泡沫之后才是黄金时代——估值虚高与实际产出差距扩大。',
          'AI开始等不起云了——端侧推理需求爆发，云边端协同成为AI基础设施新命题。',
          'Token不经济——虎嗅分析AI行业Token定价的经济学悖论。',
          '小红书内部启动达尔文项目——内容社区AI化的组织级动员。',
          '淘宝推荐算法负责人姜宇宁离职——大厂核心算法人才流动加速。',
        ],
        sources: [
          { name: 'AI泡沫之后黄金时代', url: 'https://mp.weixin.qq.com/s/kwlodS_K83QTemTt8D-TCw' },
          { name: 'AI等不起云', url: 'https://mp.weixin.qq.com/s/wIH2k4ArgDc-Atr3OTgGkQ' },
          { name: 'Token不经济', url: 'https://mp.weixin.qq.com/s/DbQSkoeo47_LhWAnyYKiPg' },
          { name: '小红书达尔文项目', url: 'https://mp.weixin.qq.com/s/VtGOZdazWvjFD5IJwQFFyw' },
        ],
      },
      '对快手的启示': {
        isInsight: true,
        content: [
          '可灵AI 30亿美元融资是快手雇主品牌的重大资产——"全球视频大模型融资纪录"应被系统化传播，让行业认知快手在AI视频生成赛道的领先地位。',
          '字节"管理变革"信号强烈——leader深入一线，扁平化加速。快手内部是否也需要类似的管理效能审视？',
          'AI大厂互相设防（美团限用豆包）揭示行业从"开源共赢"转向"数据保护"——快手需评估自身AI能力对竞品的依赖度，提前做好供应链备份。',
        ],
      },
    },
  },

  companies: [
    {
      id: 'bytedance',
      name: '字节跳动',
      color: '#1D1D1F',
      summary: '0篇 · 本周官方号暂无更新',
      sections: {
        '本周动态': {
          content: ['本周快照中字节官方号暂无更新，但行业大量报道字节管理变革（全员信要求leader深入一线）、豆包专业版上线、字节外包偷零食等。'],
        },
        '对快手的启示': {
          isInsight: true,
          content: ['字节"全员信要求leader深入一线"的管理变革力度大，快手也可以考虑类似的"管理者回归前线"举措。'],
        },
      },
    },
    {
      id: 'tencent',
      name: '腾讯',
      color: '#1DA462',
      summary: '0篇 · 本周官方号暂无更新',
      sections: {
        '本周动态': {
          content: ['本周快照中腾讯官方号暂无更新，但行业提及腾讯买出AI半壁江山、腾讯回应做独立支付App等。'],
        },
        '对快手的启示': {
          isInsight: true,
          content: ['腾讯投资驱动的AI战略成效显著，快手在AI领域是否也需要更积极的投资并购策略？'],
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
          content: ['本周快照中阿里暂无新文章入库，行业提及阿里推行OPT、淘宝推荐算法负责人姜宇宁离职等。'],
        },
        '对快手的启示': {
          isInsight: true,
          content: ['淘宝推荐算法负责人离职，核心算法人才流动加速——快手可以关注这类人才的市场机会。'],
        },
      },
    },
    {
      id: 'meituan',
      name: '美团',
      color: '#FFD100',
      summary: '3篇 · LongCat-2.0万亿参数发布 + 食杂管培生',
      sections: {
        '技术里程碑': {
          content: [
            'LongCat-2.0正式发布：在国产算力集群上完成万亿参数全流程训练与推理——国产大模型自主化里程碑事件。',
          ],
          sources: [
            { name: 'LongCat-2.0发布', url: 'https://mp.weixin.qq.com/s/9XFcx3fmFcmbry5bHMJsow' },
            { name: 'LongCat-2.0招聘版', url: 'https://mp.weixin.qq.com/s/1XPVxCRq8jmZab5CgV1SVA' },
          ],
        },
        '招聘动态': {
          content: [
            '美团2026届食杂零售管培生计划开放日圆满收官——零售管培生品牌持续运营。',
          ],
          sources: [
            { name: '食杂零售管培生', url: 'https://mp.weixin.qq.com/s/-vk8ybq-E6EB2R_puUO-Fg' },
          ],
        },
        '对快手的启示': {
          isInsight: true,
          content: [
            'LongCat-2.0在国产算力上的全流程训练是行业里程碑——快手可灵AI也应加速国产算力适配，以应对算力供应链风险。',
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
          content: ['本周快照中小红书暂无新文章入库，但行业提及小红书内部启动达尔文项目。'],
        },
        '对快手的启示': {
          isInsight: true,
          content: ['小红书"达尔文项目"是AI化动员信号，其内容社区+AI融合进展值得持续关注。'],
        },
      },
    },
  ],
};
