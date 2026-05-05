// 周报数据 - W18 (4.28-5.5)
window.REPORT_DATA = {
  week: '2026 W18',
  range: '4.28 — 5.5',
  meta: '共采集 88 篇文章 · 行业资讯 79 篇 + 各公司公众号 9 篇',

  headlines: [
    {
      rank: 1,
      tag: '技术/人才/产品/商业',
      title: '百度职级体系大调整，TP序列取消',
      summary: '百度组织变革，影响数万员工晋升路径',
      url: 'https://mp.weixin.qq.com/s/G2nMeycVak4o9lkVQW6DCQ',
    },
    {
      rank: 2,
      tag: '技术/人才/产品/商业',
      title: '金山办公发布全球第二多维表格',
      summary: '对标谷歌，国产办公软件再获突破',
      url: 'https://mp.weixin.qq.com/s/wkE3e8jkascNDofyH1Lg1g',
    },
    {
      rank: 3,
      tag: '技术/人才/产品/商业',
      title: '小米MiMo-V2.5-Pro双模型开源',
      summary: '54个应用全开，浏览器真能冲浪',
      url: 'https://mp.weixin.qq.com/s/TX5_KfchdvfWGd0iltwcdw',
    },
    {
      rank: 4,
      tag: '技术/人才/产品/商业',
      title: 'Manus收购被叫停的启示',
      summary: '外资收购AI项目受阻，监管信号明确',
      url: 'https://mp.weixin.qq.com/s/UAtl-bz27eq-blTctD-u4Q',
    },
    {
      rank: 5,
      tag: '技术/人才/产品/商业',
      title: '零跑计划2027年推出第二品牌',
      summary: '新势力车企加速多品牌布局',
      url: 'https://mp.weixin.qq.com/s/bPhO5RntF6zprzn8CEmcqg',
    }
  ],

  industry: {
    sections: {
      '本周热点事件': {
        content: [
          '<strong>百度职级体系大调整</strong>：取消TP序列，统一为5级至12级，组织升级培育复合人才。',
          '<strong>小红书高层变动</strong>：柯南升任总裁，夏侯升任算法总负责人，组织架构调整。',
          '<strong>阿里年终开奖加码</strong>：高绩效员工年终奖上浮1-2个月，新员工长期激励首年归属近1/3。',
          '<strong>DeepSeek多模态AI开测</strong>：确认多模态AI已开始测试，token价格大幅下降。',
          '<strong>Manus收购被叫停</strong>：外资收购Manus项目被监管部门叫停，引发行业关注。'
        ],
        sources: [
          { name: '大厂日爆｜《大厂日爆》刚刚，百度迎来职级体系大调整，原TP序列全部取消，替换为5级-12级', url: 'https://mp.weixin.qq.com/s/G2nMeycVak4o9lkVQW6DCQ' },
          { name: '大厂日爆｜刚刚，小红书高层迎来大变动：柯南升任总裁，夏侯升任算法总负责人', url: 'https://mp.weixin.qq.com/s/6-NzIGV0i5P_uPa22IPjxA' },
          { name: '申妈的朋友圈｜阿里高绩效员工年终奖上浮1-2个月，新员工长期激励首年归属近1/3', url: 'https://mp.weixin.qq.com/s/c0MT-kZHlVbus5x25yOxlg' },
          { name: '虎嗅APP｜20万字不到1分钱，梁文锋把token价格打骨折了', url: 'https://mp.weixin.qq.com/s/7zIcuCHLPWy1f5drpr0uLA' },
          { name: '虎嗅APP｜Manus收购被叫停的启示', url: 'https://mp.weixin.qq.com/s/UAtl-bz27eq-blTctD4-uQ' }
        ],
        
      },
      '技术进展速览': {
        content: [
          '<strong>多模态与Agent</strong>：小米MiMo-V2.5-Pro开源，支持54个应用并发；生数科技发布工业级AI视频Demo。',
          '<strong>具身智能与推理</strong>：华为泰勒实验室提出SHAPE框架，降低LLM推理成本；南洋理工发布模糊指令测试，暴露具身智能落地软肋。',
          '<strong>Agent协作与Coordination Engineering</strong>：openJiuwen社区首发Team Skills，定义智能体从单兵到团队的新范式。'
        ],
        sources: [
          { name: '量子位｜小米双模型正式开源！MiMo-V2.5-Pro无中断肝出“macOS”：54个应用全开、浏览器真能冲浪', url: 'https://mp.weixin.qq.com/s/TX5_KfchdvfWGd0iltwcdw' },
          { name: '量子位｜生数科技认领神秘登顶模型：AI视频公司拿出工业级Demo，跨本体跑通复杂长程任务', url: 'https://mp.weixin.qq.com/s/F9mT5ENCeICWgHLasD7_Iw' },
          { name: '机器之心｜ACL 2026｜答得更准还写得更短？华为泰勒实验室提出SHAPE，给LLM推理装了个「推理税」', url: 'https://mp.weixin.qq.com/s/GuRb2wbxf002NNQ9Pymk0Q' },
          { name: '量子位｜成功率最高暴跌36.9%！南洋理工首个“模糊指令”测试，直击具身智能落地软肋', url: 'https://mp.weixin.qq.com/s/ajMzISIy00p_Hicy-oUEsA' },
          { name: 'InfoQ｜openJiuwen社区首发Team Skills，定义Coordination Engineering新范式', url: 'https://mp.weixin.qq.com/s/P-Uml_V5lXrhnYcGfQDBOw' }
        ],
        
      },
      '行业趋势洞察': {
        content: [
          '<strong>AI Agent加速落地</strong>：从京东物流Agentic Workflow降本50%到OpenAI与亚马逊联合发布，Agent正从概念走向规模化应用。',
          '<strong>AI搜索与多模态竞争白热化</strong>：谷歌净利润狂涨81%，DeepSeek多模态开测，token价格战加剧，行业格局重塑。',
          '<strong>大厂组织架构敏捷化</strong>：百度取消职级字母、小红书高层调整、阿里激励前置，大厂通过组织变革应对不确定性。'
        ],
        sources: [],
        
      },
      '对快手的启示': {
        content: [
          '<strong>AI Agent与内容生态</strong>：探索Agent在直播带货、内容审核等场景的规模化应用，降低运营成本，提升用户体验。',
          '<strong>组织敏捷化与人才激励</strong>：借鉴百度、阿里经验，优化职级体系与激励前置，吸引和留住AI与算法核心人才。'
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
      summary: '字节跳动火山引擎AI安全成果入选Black Hat Asia 2026。',
      sections: {
        '招聘动态': {
          content: '本周未直接发布招聘信息，但技术团队在AI安全领域取得国际认可，暗示对高端安全人才的需求。',
          sources: [
          { name: '字节跳动技术团队｜两大成果入选 | 火山引擎AI安全研究亮相Black Hat Asia 2026', url: 'https://mp.weixin.qq.com/s/e1q5UxyguWCj3sDcM2t-3w' }
        ],
        },
        '近期战略重点': {
          content: [
          '<strong>AI安全</strong>：火山引擎AI安全研究成果入选国际顶级安全会议Black Hat Asia，强化技术领先性与行业影响力。'
        ],
          sources: [
          { name: '字节跳动技术团队｜两大成果入选 | 火山引擎AI安全研究亮相Black Hat Asia 2026', url: 'https://mp.weixin.qq.com/s/e1q5UxyguWCj3sDcM2t-3w' }
        ],
        },
        '对快手的启示': {
          content: '快手应加大AI安全投入，通过参与国际顶会提升技术品牌，并吸引高端安全人才。',
          sources: [],
          isInsight: true,
        },
      },
    },
    {
      id: 'tencent',
      name: '腾讯',
      color: '#1A3FBF',
      summary: '腾讯本周聚焦大模型人才、广告技术、游戏美术、校企合作及技术分享，并展示员工福利。',
      sections: {
        '招聘动态': {
          content: '重点招聘大模型、广告技术及游戏美术人才，通过团队故事和冬令营成果展示吸引优秀人才，同时与人大合作培养AI人才。',
          sources: [
          { name: '腾讯招聘｜介绍一下，在腾讯混元做大模型的年轻人', url: 'https://mp.weixin.qq.com/s/c859ceJi65Aesyg6w2sCFw' },
          { name: '腾讯招聘｜腾讯广告技术团队揭秘，岗位持续热招中！', url: 'https://mp.weixin.qq.com/s/7D6zVzB8M28oDGRn2zurkQ' },
          { name: '腾讯招聘｜腾讯游戏 | 美术冬令营首站结营回顾（含作品集展示🧐）', url: 'https://mp.weixin.qq.com/s/bDrZP89furJAKVr3rf_GtA' }
        ],
        },
        '近期战略重点': {
          content: [
          '<strong>AI与大模型</strong>：腾讯混元大模型团队持续壮大，通过技术文章解读DeepSeek v4，强化技术影响力。',
          '<strong>校企合作</strong>：与中国人民大学成立未来智能技术联合重点实验室，深化产学研协同。',
          '<strong>技术生态与竞赛</strong>：连续八年支持CCPC（中国大学生程序设计竞赛），培养技术人才。',
          '<strong>员工关怀</strong>：曝光员工公寓，提升雇主品牌吸引力。'
        ],
          sources: [
          { name: '腾讯招聘｜腾讯与中国人民大学达成战略合作，未来智能技术联合重点实验室正式成立！', url: 'https://mp.weixin.qq.com/s/Xu48EdWyF4YGUVd4xB0GSg' },
          { name: '腾讯招聘｜2018→2026，腾讯和CCPC的八年', url: 'https://mp.weixin.qq.com/s/_aArEF5WDPUaCacq-q5x7g' },
          { name: '腾讯技术工程｜读完这篇，你就搞懂 DeepSeek v4 了', url: 'https://mp.weixin.qq.com/s/MamimcCQj_Hd12T8iFVmKg' },
          { name: '腾讯技术工程｜腾讯员工公寓曝光，竟是这样的布置！', url: 'https://mp.weixin.qq.com/s/0tOs8D31gMUc6C6pSFctNg' }
        ],
        },
        '对快手的启示': {
          content: '可借鉴腾讯通过技术故事和校企合作吸引人才，同时强化员工福利宣传以提升雇主品牌吸引力。',
          sources: [],
          isInsight: true,
        },
      },
    },
    {
      id: 'alibaba',
      name: '阿里',
      color: '#FF6A00',
      summary: '本周暂无公众号更新',
      sections: {
        '招聘动态': {
          content: '本周暂无招聘动态。',
          sources: [],
        },
        '近期战略重点': {
          content: ['本周暂无内容更新。'],
          sources: [],
        },
        '对快手的启示': {
          content: '暂无数据，请关注下周动态。',
          sources: [],
          isInsight: true,
        },
      },
    },
    {
      id: 'meituan',
      name: '美团',
      color: '#FFAA00',
      summary: '本周暂无公众号更新',
      sections: {
        '招聘动态': {
          content: '本周暂无招聘动态。',
          sources: [],
        },
        '近期战略重点': {
          content: ['本周暂无内容更新。'],
          sources: [],
        },
        '对快手的启示': {
          content: '暂无数据，请关注下周动态。',
          sources: [],
          isInsight: true,
        },
      },
    },
    {
      id: 'xiaohongshu',
      name: '小红书',
      color: '#FF2442',
      summary: '小红书从人类学视角探讨数字时代孤独与焦虑，深化品牌人文洞察。',
      sections: {
        '招聘动态': {
          content: '本周未发布直接招聘信息，但通过人类学视角文章强化品牌人文价值观，间接吸引相关领域人才。',
          sources: [
          { name: '小红书官方公众号｜《是小红书人啊》如何从人类学视角，理解数字时代的孤独与焦虑？', url: 'https://mp.weixin.qq.com/s/7rJycOFcDClGxrRcOzgZgQ' }
        ],
        },
        '近期战略重点': {
          content: [
          '<strong>人文洞察深化</strong>：借助人类学视角解读用户心理，强化内容社区的情感连接与价值认同。'
        ],
          sources: [
          { name: '小红书官方公众号｜《是小红书人啊》如何从人类学视角，理解数字时代的孤独与焦虑？', url: 'https://mp.weixin.qq.com/s/7rJycOFcDClGxrRcOzgZgQ' }
        ],
        },
        '对快手的启示': {
          content: '快手可借鉴人类学方法，深入理解用户孤独与焦虑，增强社区情感共鸣与归属感。',
          sources: [],
          isInsight: true,
        },
      },
    }
  ],
};
