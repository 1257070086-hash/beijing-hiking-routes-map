// W23 周报数据 · 2026-06-02 — 2026-06-08
window.REPORT_DATA = {
  week: '2026 W23',
  range: '06.02 — 06.08',
  meta: '覆盖字节跳动、腾讯、阿里巴巴、美团、小红书 + 行业资讯 · 共64篇',

  headlines: [
    {
      rank: '01',
      title: '快手15周年：一家互联网公司，如何用AI重构"自己"',
      summary: '申妈朋友圈报道快手 15 周年，AI 重构全业务链成为核心叙事，快手从"短视频公司"向"AI 公司"的身份转型公开化。',
      url: 'https://mp.weixin.qq.com/s/fkUn8VwAxnReAF5RzIaFUw',
      tag: '热点',
    },
    {
      rank: '02',
      title: '黄仁勋宣布Rubin全面投产，4万名工程师参与构建！',
      summary: '英伟达 Rubin 架构全面投产，GPU 算力军备竞赛进入新阶段，AI 基础设施迭代速度继续加快。',
      url: 'https://mp.weixin.qq.com/s/xppSXzQ5kMpReKD-R-2oBg',
      tag: '技术',
    },
    {
      rank: '03',
      title: 'Anthropic祭出双旗舰模型Fable、Mythos，屠榜所有基测！',
      summary: 'Anthropic 双旗舰模型 Fable+Mythos 发布，所有基准测试屠榜，AI 模型竞赛从"追赶"变为"轮替领先"格局。',
      url: 'https://mp.weixin.qq.com/s/EXu-aIpWeEirGTwJyIpcfg',
      tag: '技术',
    },
    {
      rank: '04',
      title: '互联网变天：机器人流量首次反超人类，Agent时代拉开大幕',
      summary: 'InfoQ 报道互联网机器人流量首次超过人类流量，Agent 从"工具"变成互联网的"主体用户"，行业范式切换。',
      url: 'https://mp.weixin.qq.com/s/0ZYyYVl-uf9yrsJlECSeXQ',
      tag: '行业',
    },
    {
      rank: '05',
      title: 'Anthropic被曝雇1000名人类工程师"培训"Claude Code，时薪280美元',
      summary: 'AI 编程越进化越离不开真人兜底——Anthropic 雇佣 1000 名工程师训练 Claude Code，揭示 AI 自进化背后的人类劳动隐层。',
      url: 'https://mp.weixin.qq.com/s/OSAcd8U7c5T1MKXlgJpYMQ',
      tag: '行业',
    },
  ],

  industry: {
    sections: {
      '热点事件': {
        content: [
          '快手 15 周年：AI 重构"自己"成为核心叙事，从短视频平台到 AI 公司的身份转型公开化。',
          'Anthropic 双旗舰模型 Fable+Mythos 屠榜所有基准测试，AI 模型竞赛格局从"追赶"变为"轮替领先"。',
          '互联网机器人流量首次反超人类，Agent 从"工具"变"主体用户"，行业范式根本性切换。',
          '百度成立大商业事业部，数字人业务升级为独立部门，传统广告业务 AI 化加速。',
          '字节Seed辟谣顾全全不是LLM预训练负责人，内部人事博弈进入公众视野。',
        ],
        sources: [
          { name: '快手15周年AI重构', url: 'https://mp.weixin.qq.com/s/fkUn8VwAxnReAF5RzIaFUw' },
          { name: 'Anthropic双旗舰', url: 'https://mp.weixin.qq.com/s/EXu-aIpWeEirGTwJyIpcfg' },
          { name: '机器人流量反超人类', url: 'https://mp.weixin.qq.com/s/0ZYyYVl-uf9yrsJlECSeXQ' },
          { name: '百度大商业事业部', url: 'https://mp.weixin.qq.com/s/lmv5V4e8-mXonWe0pO63dg' },
        ],
      },
      '技术前沿': {
        content: [
          '黄仁勋宣布 Rubin 全面投产，4 万名工程师参与构建，GPU 算力军备竞赛进入新一代架构周期。',
          'Anthropic 被 Conject 训练 Claude Code 雇 1000 名人类工程师时薪 280 美元，AI 自进化背后的人类劳动隐层被揭露。',
          '英伟达 Cosmos 3 全模态物理 AI 模型开源，Agent Toolkit 补齐工具短板，物理 AI 赛道加速。',
          'Coding Agent 技术全景图：Context Engineering、Subagents 与 Harness，一年范式转移全解析。',
          'Next.js 16.2 发布：开发提速 4 倍，新增深度适配 AI 智能体的开发工具。',
        ],
        sources: [
          { name: 'Rubin全面投产', url: 'https://mp.weixin.qq.com/s/xppSXzQ5kMpReKD-R-2oBg' },
          { name: '人类工程师训练Claude Code', url: 'https://mp.weixin.qq.com/s/OSAcd8U7c5T1MKXlgJpYMQ' },
          { name: 'Cosmos 3开源', url: 'https://mp.weixin.qq.com/s/HGVx7gyqwkkORDqn3TWyBg' },
          { name: 'Coding Agent全景图', url: 'https://mp.weixin.qq.com/s/ENERagN834L5CXGkAGmXtg' },
        ],
      },
      '行业趋势': {
        content: [
          '腾讯内部宣布调整 AI token 额度：投入提升几十倍，"看产出不看消耗"——大厂从"省钱用 AI"转向"砸钱用 AI"。',
          '抖音集团副总裁张羽转任公司顾问，专注慈善公益事务，大厂高管职业路径多元化。',
          '百度内部启动"青木、风雷"两大计划推年轻人挑大梁，人才年轻化战略加速。',
          'AI 导致裁员现实化——OpenAI 报告称知识工作者增速是程序员 3 倍，从 Vibe Coding 转向 Vibe Working。',
        ],
        sources: [
          { name: '腾讯AI token额度调整', url: 'https://mp.weixin.qq.com/s/bbNrnwZVdB1fJuZkDi2_ZQ' },
          { name: '抖音副总裁转顾问', url: 'https://mp.weixin.qq.com/s/iiu0naNI4a4DpOaqZBjgjQ' },
          { name: '百度青木风雷计划', url: 'https://mp.weixin.qq.com/s/byMA7p1Ovmq3u2yMdbQW4Q' },
          { name: '快手15周年发钱888', url: 'https://mp.weixin.qq.com/s/ijiB5j4j4MoBSRDedyVHPQ' },
        ],
      },
      '对快手的启示': {
        isInsight: true,
        content: [
          '快手 15 周年"AI 重构自己"叙事是重大雇主品牌资产——应将此叙事系统化输出（视频/图文/演讲），让外部认知到快手不再只是短视频公司，而是 AI 公司。',
          '腾讯"看产出不看消耗"的 AI token 策略值得对标——快手 AI 工具内部推广是否也需要类似的"先放量再优化"策略？',
          '百度"推年轻人挑大梁"是反向操作亮点——当其他大厂在优化成本，百度在用年轻人打破组织惰性。快手也可以考虑类似的"青木计划"。',
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
          content: ['本周快照中字节跳动官方号暂无新文章入库。但行业资讯提及字节Seed辟谣、豆包股价格调整等动态，下周持续跟踪。'],
        },
        '对快手的启示': {
          isInsight: true,
          content: ['字节本周缺席属正常间隔，其奖学金+豆包股的组合拳在 W21/W22 已释放信号，持续关注后续动作。'],
        },
      },
    },
    {
      id: 'tencent',
      name: '腾讯',
      color: '#1DA462',
      summary: '3篇 · CVPR 50+中稿 + 青云博士生激励计划',
      sections: {
        '学术成果': {
          content: [
            '腾讯 CVPR 50+ 论文中稿，技术亮点集中展示——学术成果成为招聘最有力的"广告"。',
            '2026 年度"中国电子学会-腾讯博士生科研激励计划（混元大模型专项）"申报征集——用学术基金绑定博士生资源。',
          ],
          sources: [
            { name: 'CVPR 50+中稿', url: 'https://mp.weixin.qq.com/s/G0JIVvBbRNt0dwe691RMmA' },
            { name: '博士生激励计划', url: 'https://mp.weixin.qq.com/s/BHFCbyGpcPmgLsFMYf2aoQ' },
          ],
        },
        '文化内容': {
          content: [
            '今天，腾讯人带薪领菜——将日常福利内容化传播，雇主品牌从宏大叙事转向微观生活切片。',
          ],
          sources: [
            { name: '带薪领菜', url: 'https://mp.weixin.qq.com/s/JoBzKOsofu3FlW6tjVbMiA' },
          ],
        },
        '对快手的启示': {
          isInsight: true,
          content: [
            '腾讯用"学术基金+博士生激励计划"绑定人才上游——快手也可以设立类似的"可灵/快影 AI 创新基金"，在博士生阶段就建立联系。',
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
          content: ['本周快照中阿里暂无新文章入库，但行业资讯提及阿里CTO范禹进入合伙人委员会、盒马CEO严筱磊转向蒋凡汇报等动态。'],
        },
        '对快手的启示': {
          isInsight: true,
          content: ['阿里连续两周缺席公众号更新，关注其下一轮内容是否集中在618/技术发布。'],
        },
      },
    },
    {
      id: 'meituan',
      name: '美团',
      color: '#FFD100',
      summary: '6篇 · 北斗+LongCat校招全球启动 + ACL论文',
      sections: {
        '招聘与人才品牌': {
          content: [
            '美团 LongCat 大模型人才校招全球启动，配合 ACL 论文分享专场——学术+招聘组合拳模式成熟运营。',
            '美团 2027 届北斗计划全球启动，校招前置到本科低年级阶段。',
            '美团顶会论文分享报名：5大专场 32 篇论文解读，用学术内容吸引技术人才。',
          ],
          sources: [
            { name: 'LongCat大模型校招', url: 'https://mp.weixin.qq.com/s/hjtIYAtZGUTutX5mQHxgdQ' },
            { name: '北斗计划全球启动', url: 'https://mp.weixin.qq.com/s/g-8j7uMH3FSWdrVLiJ5fXQ' },
            { name: '顶会论文5大专场', url: 'https://mp.weixin.qq.com/s/-RT7Q1fFpBnAnJHpQBzCfA' },
          ],
        },
        '技术品牌': {
          content: [
            'ACL\'26 美团中稿精选：从能力评测到推理优化，构建生成新范式——持续输出学术影响力。',
          ],
          sources: [
            { name: 'ACL论文专场', url: 'https://mp.weixin.qq.com/s/qgq5fstJNeNmfSigedFOeQ' },
          ],
        },
        '对快手的启示': {
          isInsight: true,
          content: [
            '美团"学术+招聘"组合拳模式成熟——用论文分享会吸引技术人才，用北斗/LongCat品牌承接。快手在 AI 视频生成领域有大量学术输出，可以借鉴类似模式做"可灵论文分享会+快Star校招"。',
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
          content: ['本周快照中小红书官方号暂无新文章入库，但行业资讯大量报道其世界杯独家权益动态，品牌热度极高。'],
        },
        '对快手的启示': {
          isInsight: true,
          content: ['小红书世界杯热度持续走高，快手需关注其在体育内容领域的DAU冲击。'],
        },
      },
    },
  ],
};
