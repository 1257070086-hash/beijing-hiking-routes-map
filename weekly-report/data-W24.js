// W24 周报数据 · 2026-06-09 — 2026-06-15
window.REPORT_DATA = {
  week: '2026 W24',
  range: '06.09 — 06.15',
  meta: '覆盖字节跳动、腾讯、阿里巴巴、美团、小红书 + 行业资讯 · 共70篇',

  headlines: [
    {
      rank: '01',
      title: '钉钉换帅：92年技术极客陈宇森接任CEO',
      summary: '92年出生的陈宇森接掌钉钉CEO，成为阿里最年轻CEO，大厂核心业务一号位年轻化趋势加速。',
      url: 'https://mp.weixin.qq.com/s/zt2Qn4FtXOK-gNAMyun0NA',
      tag: '热点',
    },
    {
      rank: '02',
      title: 'Anthropic祭出双旗舰模型Fable、Mythos，屠榜所有基测！',
      summary: 'Anthropic 双旗舰发布引发行业震动，Fable 5 自带反蒸馏机制，AI 模型竞争进入"防御性竞争"阶段。',
      url: 'https://mp.weixin.qq.com/s/EXu-aIpWeEirGTwJyIpcfg',
      tag: '技术',
    },
    {
      rank: '03',
      title: '美团成立AI新部门，前大众点评总经理牧遥担任负责人',
      summary: '美团正式成立AI新部门，从组织层面加码AI战略，与百度大商业事业部形成"传统业务AI化"共振。',
      url: 'https://mp.weixin.qq.com/s/gEWL6BwPNdPjgQWe5MOhPg',
      tag: '行业',
    },
    {
      rank: '04',
      title: 'AI写了60%的代码，为什么企业研发效率还是没飞起来？',
      summary: 'InfoQ 深度分析 AI Coding 的效率悖论——代码生成量不等于生产力提升，工程瓶颈在流程而非代码。',
      url: 'https://mp.weixin.qq.com/s/pOe7JK9o2Og3Wv8y5AAElg',
      tag: '技术',
    },
    {
      rank: '05',
      title: 'WWDC 2026，硅谷历史上最昂贵的认输：1.2万亿参数Siri来自Gemini',
      summary: '苹果在 WWDC 上让 Siri 底层切换为 Gemini，1.2万亿参数但手机跑不了——苹果AI自主能力被质疑。',
      url: 'https://mp.weixin.qq.com/s/hXgB0RlUcWiZajh9QszItQ',
      tag: '热点',
    },
  ],

  industry: {
    sections: {
      '热点事件': {
        content: [
          '92年陈宇森接掌钉钉CEO，成为阿里最年轻CEO，大厂核心业务一号位年轻化趋势确认。',
          '美团正式成立AI新部门，前大众点评总经理牧遥担任负责人，传统业务AI化进入组织架构层面。',
          '苹果WWDC让Siri底层切换为Gemini，1.2万亿参数但手机跑不了——苹果AI自主能力被质疑。',
          '阿里合伙人委员会批评钉钉管理方式，直言"AI时代人最宝贵"——组织效率与人才尊重的张力。',
          '618全是AI——这届618除了AI没有任何新鲜事，电商大促叙事彻底AI化。',
        ],
        sources: [
          { name: '钉钉换帅陈宇森', url: 'https://mp.weixin.qq.com/s/zt2Qn4FtXOK-gNAMyun0NA' },
          { name: '美团成立AI新部门', url: 'https://mp.weixin.qq.com/s/gEWL6BwPNdPjgQWe5MOhPg' },
          { name: '阿里批评钉钉管理方式', url: 'https://mp.weixin.qq.com/s/9LftxACX1wNWjzJnshHXVQ' },
          { name: '这届618全是AI', url: 'https://mp.weixin.qq.com/s/tbXzcGAhWIaZWv94JoGPJw' },
        ],
      },
      '技术前沿': {
        content: [
          'Anthropic双旗舰Fable+Mythos屠榜，Fable 5自带反蒸馏机制但误触率高，模型安全与可用性博弈。',
          '人形机器人价格大跳水，比iPhone还便宜——生产力而非形态的产业竞速。',
          '抖音征召"AI视频英才"——字节主动向创作者开放AI视频工具，平台级AI创作生态加速。',
          '快手推荐系统池化探索与实践亮相AICon上海——内部技术对外输出节奏加快。',
          'Next.js 16.2深度适配AI智能体开发工具，前端框架AI化趋势加速。',
        ],
        sources: [
          { name: 'Fable反蒸馏机制', url: 'https://mp.weixin.qq.com/s/P2yw-_1jun1qMWA-MmbehQ' },
          { name: '人形机器人价格跳水', url: 'https://mp.weixin.qq.com/s/irlacmJIHL42nBkxQlQ2Sg' },
          { name: '抖音AI视频英才', url: 'https://mp.weixin.qq.com/s/WezdfCnzHmCiy6XXi4FlCQ' },
          { name: '快手推荐池化', url: 'https://mp.weixin.qq.com/s/DD44Xm00_E1IZnH8IjKXUw' },
        ],
      },
      '行业趋势': {
        content: [
          '字节3B小模型Lance开源即冲上HuggingFace第一——小模型+垂直场景路线开始产生行业影响力。',
          '"无招"没变，但AI改变了公司和人才的权力关系——晚点深度分析人才议价权上移。',
          'AI写了60%代码但企业效率没飞起来——代码生成量不等于生产力，瓶颈在流程改造。',
          '3D创作迎来ChatGPT时刻：Meshy发布全球首个3D AI Agent——垂直领域Agent应用加速落地。',
        ],
        sources: [
          { name: '字节Lance开源', url: 'https://mp.weixin.qq.com/s/aTME96Ju0jOCiluAsM2LOA' },
          { name: 'AI改变人才权力关系', url: 'https://mp.weixin.qq.com/s/fyFIlJRsdT37hPro0IfHvQ' },
          { name: 'AI写了60%代码', url: 'https://mp.weixin.qq.com/s/pOe7JK9o2Og3Wv8y5AAElg' },
          { name: '3D AI Agent', url: 'https://mp.weixin.qq.com/s/lk9WIL0AFCHW1yv2yekIbg' },
        ],
      },
      '对快手的启示': {
        isInsight: true,
        content: [
          '快手推荐系统池化亮相AICon是好事，但需要更多类似输出——建议系统化将内部技术实践包装为行业影响力内容，与美团/字节的节奏对齐。',
          '"AI写了60%代码但效率没飞"的矛盾提示快手内部AI工具推广需要配套的流程改造，而非单纯部署工具。',
          '字节"AI视频英才征召"对快手是直接信号——AI视频创作人才是两家共同的目标人群，快手需要更明确的AI创作者吸引计划。',
        ],
      },
    },
  },

  companies: [
    {
      id: 'bytedance',
      name: '字节跳动',
      color: '#1D1D1F',
      summary: '1篇 · 前沿技术校招成果公开',
      sections: {
        '技术品牌': {
          content: [
            '开源万星项目、登顶评测榜首……字节前沿技术领域人才校招课题成果大公开——用"成果"而非"岗位"吸引人才。',
          ],
          sources: [
            { name: '校招课题成果公开', url: 'https://mp.weixin.qq.com/s/nJiW1bzfvjynFDrkW1lXTA' },
          ],
        },
        '对快手的启示': {
          isInsight: true,
          content: [
            '字节用"校招课题成果"替代传统JD宣传，把招聘做成"成就展示"。快手快Star也可以做类似的"我们的校招生做了什么"系列。',
          ],
        },
      },
    },
    {
      id: 'tencent',
      name: '腾讯',
      color: '#1DA462',
      summary: '4篇 · 青云ICML奖学金 + 芯片团队夺冠',
      sections: {
        '招聘与人才品牌': {
          content: [
            '腾讯青云2026「Student Travel Grant」ICML开放申请——学术基金覆盖更多顶会场景。',
            '夺冠的腾讯芯片团队正在热招——用"冠军"标签吸引芯片设计人才，标签化招聘策略高效。',
          ],
          sources: [
            { name: 'ICML奖学金', url: 'https://mp.weixin.qq.com/s/VMMcUxVXKAL5ulQWp096Sw' },
            { name: '芯片团队夺冠热招', url: 'https://mp.weixin.qq.com/s/4geHuHlgygQp9d_SLnDqOg' },
          ],
        },
        '技术实践': {
          content: [
            '广告形态从发版驱动到配置驱动，千人千面的技术实践——腾讯广告技术团队工程方法论分享。',
          ],
          sources: [
            { name: '从发版到配置驱动', url: 'https://mp.weixin.qq.com/s/Y2AG9Zd-85fzNfyjMPzowQ' },
          ],
        },
        '对快手的启示': {
          isInsight: true,
          content: [
            '腾讯"芯片团队夺冠"标签化招聘值得学——快手在AI视频生成/推荐等领域的竞赛成绩也可以做类似标签，如"KDD冠军团队热招"。',
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
          content: ['本周快照中阿里暂无新文章入库，但行业大量报道钉钉换帅（陈宇森接任CEO）和阿里合伙人批评钉钉管理方式。'],
        },
        '对快手的启示': {
          isInsight: true,
          content: ['92年CEO执掌核心业务，大厂年轻化趋势明确。快手的管理层年轻化程度如何？'],
        },
      },
    },
    {
      id: 'meituan',
      name: '美团',
      color: '#FFD100',
      summary: '5篇 · 北斗+LongCat双品牌持续运营 + WBench',
      sections: {
        '招聘与人才品牌': {
          content: [
            '美团业务研发平台2027届北斗计划全球热招——校招品牌跨年度运营已成体系。',
            '社招快驴进货+Keemart出海沙特，国际化业务线社招发力。',
          ],
          sources: [
            { name: '北斗计划热招', url: 'https://mp.weixin.qq.com/s/g0GG1qT7FI-qvjOD7WXH0g' },
            { name: 'Keemart出海沙特', url: 'https://mp.weixin.qq.com/s/KWGpQSTK4YIchzt3nFq0YA' },
          ],
        },
        '技术品牌': {
          content: [
            'WBench：从月球漫步到赛博都市，测出了世界模型的边界——评测基准持续输出。',
            'ACL\'26 美团履约团队前沿技术专场——技术分享与学术产出双线推进。',
          ],
          sources: [
            { name: 'WBench世界模型评测', url: 'https://mp.weixin.qq.com/s/tQFM4yay6wmIMnQ_dpDaoQ' },
            { name: 'ACL履约专场', url: 'https://mp.weixin.qq.com/s/rJNhqTVD6v0fTr9m7mBBNA' },
          ],
        },
        '对快手的启示': {
          isInsight: true,
          content: [
            '美团Keemart出海沙特——国际化社招释放信号，快手国际化业务人才也可以做类似的定向招聘内容。',
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
          content: ['本周快照中小红书暂无新文章入库，但世界杯相关热度持续。'],
        },
        '对快手的启示': {
          isInsight: true,
          content: ['小红书世界杯战略已进入内部战前状态，快手体育内容策略需同步评估。'],
        },
      },
    },
  ],
};
