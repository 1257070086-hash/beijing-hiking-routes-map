// W22 周报数据 · 2026-05-26 — 2026-06-01
window.REPORT_DATA = {
  week: '2026 W22',
  range: '05.26 — 06.01',
  meta: '覆盖字节跳动、腾讯、阿里巴巴、美团、小红书 + 行业资讯 · 共62篇',

  headlines: [
    {
      rank: '01',
      title: '晚点独家丨小红书获得世界杯独家转播权益，将冲击 DAU 新高',
      summary: '小红书拿下世界杯独家权益，从内容社区跃迁为体育赛事平台，DAU 冲新高战略信号强烈，对手抖音/快手格局将受冲击。',
      url: 'https://mp.weixin.qq.com/s/yUwqyBnKyXWhoR3CsVpZIg',
      tag: '热点',
    },
    {
      rank: '02',
      title: '阿里薪酬迎来大变革，13薪回归年奖',
      summary: '阿里将 13 薪并入年终奖体系，薪酬结构从固定保障转向绩效激励，反映大厂对"活人感"的持续追求和组织效率焦虑。',
      url: 'https://mp.weixin.qq.com/s/orVLAXvDf8mRC_DpVan3vg',
      tag: '行业',
    },
    {
      rank: '03',
      title: '字节豆包股无"认购"一说，Seed员工可选择年终奖以豆包股形式发放',
      summary: '字节跳动"豆包股"机制落地，员工可选择年终奖以豆包股替代现金，AI 公司用自身生态代币绑定人才的新模式走向实操。',
      url: 'https://mp.weixin.qq.com/s/ChN8kLSpziuifkN63vkVmA',
      tag: '热点',
    },
    {
      rank: '04',
      title: 'AI 导致裁员的现实与前景丨晚点小数据',
      summary: '晚点数据证实 AI 裁员已从预测变为现实，部分岗位替代率超过 30%，但新岗位创造速度不及替代速度。',
      url: 'https://mp.weixin.qq.com/s/Hs-kuaZsPLJxUHT8Eh8S5Q',
      tag: '行业',
    },
    {
      rank: '05',
      title: '编程 Agent 可能是软件开发史上最昂贵的错误之一',
      summary: 'InfoQ 深度质疑 AI Coding Agent 的实际产出效率，"AI 写了 60% 代码但企业效率没飞起来"的矛盾凸显。',
      url: 'https://mp.weixin.qq.com/s/jrx62vYAWfbJ42CO8mQveg',
      tag: '技术',
    },
  ],

  industry: {
    sections: {
      '热点事件': {
        content: [
          '小红书拿下世界杯独家转播权益，将冲击 DAU 新高，从种草社区到体育内容平台的跃迁，行业格局生变。',
          '阿里薪酬体系大变革：13薪回归年奖，薪酬从"保底"转向"激励"，大厂集体调整薪酬结构以对冲效率焦虑。',
          '字节"豆包股"机制落地，Seed 员工可选择年终奖以豆包股形式发放——AI 公司用"生态代币"绑定核心人才。',
          'AI 裁员已成现实，晚点小数据揭示部分岗位替代率超 30%，新岗位创造速度却不及替代速度。',
          '京东刘强东"保饭碗"背后：大厂组织变革潮已经来了，从裁员到调薪到换帅，互联网进入深度调整期。',
        ],
        sources: [
          { name: '小红书世界杯独家权益', url: 'https://mp.weixin.qq.com/s/yUwqyBnKyXWhoR3CsVpZIg' },
          { name: '阿里薪酬大变革', url: 'https://mp.weixin.qq.com/s/orVLAXvDf8mRC_DpVan3vg' },
          { name: '豆包股发放机制', url: 'https://mp.weixin.qq.com/s/ChN8kLSpziuifkN63vkVmA' },
          { name: 'AI导致裁员', url: 'https://mp.weixin.qq.com/s/Hs-kuaZsPLJxUHT8Eh8S5Q' },
          { name: '京东刘强东保饭碗', url: 'https://mp.weixin.qq.com/s/1RIVFHC0UyNvB0QVc7-cvw' },
        ],
      },
      '技术前沿': {
        content: [
          '编程 Agent 可能是软件开发史上最昂贵的错误之一——InfoQ 深度分析 AI Coding 的实际效率悖论。',
          '上下文窗口限制被打破：Subquadratic 推出 1200 万 Token 窗口，大模型长文本能力迎来数量级突破。',
          'Anthropic 推出托管式智能体与主动式工作流，发布能力曲线——Agent 产品从"工具"走向"自主工作者"。',
          'Google 想为 AI Agent 打造下一个 Kubernetes，Agent 编排基础设施成为新战场。',
        ],
        sources: [
          { name: '编程Agent最昂贵的错误', url: 'https://mp.weixin.qq.com/s/jrx62vYAWfbJ42CO8mQveg' },
          { name: '1200万Token窗口', url: 'https://mp.weixin.qq.com/s/Z-X6OLHKsT1TDoIJJClJ-w' },
          { name: 'Anthropic托管式智能体', url: 'https://mp.weixin.qq.com/s/56JDja7dvxJKO_gMDE6jdQ' },
          { name: 'Google为Agent打造K8s', url: 'https://mp.weixin.qq.com/s/JbbDyM0UpJOjZqGZf2oqEg' },
        ],
      },
      '行业趋势': {
        content: [
          'AI 人才从"被抢"到"自主选择"：申妈分析"对青年 AI 人才来说天时大于能力"，选择平台比个人努力更重要。',
          'AI 产品经理涌向字节跳动——产品型人才的大厂偏好正在被 AI 重塑，字节因豆包生态成为 PM 首选。',
          '大厂职级和管理体系集体调整，从固定层级到灵活项目制，组织扁平化与 AI 赋能相互驱动。',
          '三星史上最长罢工揭开 AI 时代贫富差距遮羞布，科技行业劳资矛盾激化。',
        ],
        sources: [
          { name: 'AI人才天时大于能力', url: 'https://mp.weixin.qq.com/s/loLbfG67tUXCx1eiZ5qucg' },
          { name: 'AI产品经理涌向字节', url: 'https://mp.weixin.qq.com/s/VkLwYvpzD11XaahGijQLHA' },
          { name: '大厂职级体系调整', url: 'https://mp.weixin.qq.com/s/osYX5_O_uG9G8lunRrH_oQ' },
        ],
      },
      '对快手的启示': {
        isInsight: true,
        content: [
          '小红书拿下世界杯对快手是直接竞争信号——体育内容/赛事是短视频DAU增长的关键变量，快手需评估自身赛事版权策略是否需要调整。',
          '阿里/字节薪酬变革趋势：大厂从"保底"转向"激励"，快手也应审视自身薪酬结构是否具备足够的绩效激励导向。',
          '"AI 产品经理涌向字节"提示快手——AI 时代雇主品牌不只是吸引工程师，产品经理/运营等"AI 应用型人才"同样在选择平台。',
        ],
      },
    },
  },

  companies: [
    {
      id: 'bytedance',
      name: '字节跳动',
      color: '#1D1D1F',
      summary: '2篇 · 豆包股落地 + 文化内容输出',
      sections: {
        '人才激励': {
          content: [
            '豆包股机制正式落地：Seed 员工可选择年终奖以豆包股形式发放，字节用"生态代币"绑定核心 AI 人才。',
          ],
          sources: [
            { name: '豆包股价格升至14.85美元', url: 'https://mp.weixin.qq.com/s/2qQ75FYllPtGFkcsGi4t5w' },
          ],
        },
        '文化内容': {
          content: [
            '"妈妈在字节跳动放烟花！"——家庭日活动内容化传播，雇主品牌从招聘号延伸到员工家庭场景。',
            '"曝光一些字节跳动不鼓励的行为"——反向文化输出，用"不做什么"定义"做什么"，价值观传播思路独特。',
          ],
          sources: [
            { name: '妈妈在字节放烟花', url: 'https://mp.weixin.qq.com/s/w5XGnTr0AedsqZzFc5Oq5g' },
            { name: '字节不鼓励的行为', url: 'https://mp.weixin.qq.com/s/5yF5wNLhLpc-yT_kSSuOZg' },
          ],
        },
        '对快手的启示': {
          isInsight: true,
          content: [
            '字节"豆包股"模式值得关注——用 AI 生态代币替代部分现金激励，让人才与公司 AI 业务成长深度绑定。快手可以探索类似的"可灵/快影 Token"激励方案。',
          ],
        },
      },
    },
    {
      id: 'tencent',
      name: '腾讯',
      color: '#1DA462',
      summary: '4篇 · Agent协作实践 + 微信团队热招',
      sections: {
        '技术实践': {
          content: [
            '腾讯广告技术团队分享：工程师如何和 Agent 协作？——从实际业务场景展示 Agent 在广告系统中的落地路径。',
            '微信团队拿下 ICASSP 最佳工业论文奖，"从一个助人的想法开始"——学术成果与业务场景深度耦合。',
          ],
          sources: [
            { name: '工程师如何和Agent协作', url: 'https://mp.weixin.qq.com/s/BBu1cMsDnXhNZ6oIiPdyOA' },
            { name: '微信ICASSP最佳论文', url: 'https://mp.weixin.qq.com/s/iKquHaBqi3uaW6ly6kDUdQ' },
          ],
        },
        '招聘动态': {
          content: [
            '鹅厂实习生火热招聘中，"会用 AI 的人赢在哪一步"——将 AI 能力作为核心卖点吸引年轻人才。',
          ],
          sources: [
            { name: '会用AI的人赢在哪一步', url: 'https://mp.weixin.qq.com/s/6zohYA4BPfHWI_i4yVCjMQ' },
          ],
        },
        '对快手的启示': {
          isInsight: true,
          content: [
            '腾讯"工程师如何和Agent协作"这类实践分享是极好的雇主品牌内容——既有技术深度又有人文温度。快手也有大量 Agent 实践场景（内容审核、推荐、创作辅助），值得类似输出。',
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
          content: ['本周快照中阿里暂无新文章入库，但行业资讯提及阿里薪酬体系大变革（13薪回归年奖），下周持续跟踪官方发布。'],
        },
        '对快手的启示': {
          isInsight: true,
          content: ['阿里薪酬改革信号值得跟进——13薪并入年奖体系意味着更激进的绩效导向，可能引发人才流动。'],
        },
      },
    },
    {
      id: 'meituan',
      name: '美团',
      color: '#FFD100',
      summary: '4篇 · 无人机低空航网投入运营 + 北斗大赛',
      sections: {
        '技术与产品': {
          content: [
            '美团无人机低空航网正式投入运营，M-Drone 4L 索降版发布——从技术验证到商业运营，低空物流商业化里程碑。',
            '美团&顶会论文分享：5大专场 32 篇论文解读，持续用学术成果巩固技术品牌。',
          ],
          sources: [
            { name: '无人机低空航网投入运营', url: 'https://mp.weixin.qq.com/s/EJdt0fbb2qcUtgdxGZ0Rog' },
            { name: '顶会论文5大专场', url: 'https://mp.weixin.qq.com/s/ZUT9GjnN3Qa86RrV9jXATg' },
          ],
        },
        '招聘动态': {
          content: [
            '美团"美好生活设计大赛"火热报名中 + 第6届商业分析精英大赛决赛名单发布，竞赛招聘模式持续运营。',
          ],
          sources: [
            { name: '美好生活设计大赛', url: 'https://mp.weixin.qq.com/s/LcCTHePwR-DAYs_OG5c-OA' },
            { name: '商业分析精英大赛', url: 'https://mp.weixin.qq.com/s/VbskyhrLsK5TxgRXHb_2vA' },
          ],
        },
        '对快手的启示': {
          isInsight: true,
          content: [
            '美团无人机从验证到正式运营，商业化闭环速度是亮点。快手在 AI 视频生成领域的商业化进程也需类似的"从 demo 到运营"加速。',
          ],
        },
      },
    },
    {
      id: 'xiaohongshu',
      name: '小红书',
      color: '#FF2D55',
      summary: '1篇 · 多媒体任务调度技术分享',
      sections: {
        '技术品牌': {
          content: [
            '小红书多媒体任务调度系统的演进优化——技术团队公开分享底层架构能力，从"只会种草"到"也能讲技术"。',
          ],
          sources: [
            { name: '多媒体任务调度系统演进', url: 'https://mp.weixin.qq.com/s/WEiagYBdk-h-tDFSsOuBzQ' },
          ],
        },
        '对快手的启示': {
          isInsight: true,
          content: [
            '小红书拿下世界杯独家权益对快手是重大信号——体育内容是短视频DAU增长的关键变量，快手需评估赛事版权策略。此外小红书技术号开始讲底层架构，技术雇主品牌意识在觉醒。',
          ],
        },
      },
    },
  ],
};
