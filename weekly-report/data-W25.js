// W25 周报数据 · 2026-06-16 — 2026-06-22
window.REPORT_DATA = {
  week: '2026 W25',
  range: '06.16 — 06.22',
  meta: '覆盖字节跳动、腾讯、阿里巴巴、美团、小红书 + 行业资讯 · 共42篇',

  headlines: [
    {
      rank: '01',
      title: '字节的AI账本：豆包每天不足百万收入、Seedance毛利70%',
      summary: '晚点LatePost揭秘字节AI商业化账本：豆包收入低于预期但Seedance毛利高，AI变现从烧钱到算账阶段。',
      url: 'https://mp.weixin.qq.com/s/Bp6k_ZzYA04ic87AhtsuYw',
      tag: '热点',
    },
    {
      rank: '02',
      title: 'DeepSeek缺Agent人才缺疯了！负责人各种贴广告',
      summary: '量子位报道DeepSeek Agent人才极度紧缺，负责人亲自在社区贴广告招人，人才荒蔓延到AI独角兽。',
      url: 'https://mp.weixin.qq.com/s/Gh3n4nH6XZt_CAbNXJxi6g',
      tag: '招聘',
    },
    {
      rank: '03',
      title: '阿里年报：自持1870万平物业，8亿美元投资Kimi占股36%',
      summary: '阿里年报揭示投资版图：8亿美元投Kimi占36%股份，AI投资逻辑从"自己做"到"投生态"。',
      url: 'https://mp.weixin.qq.com/s/1HvxDhlCDZjqnO85nSUBwA',
      tag: '行业',
    },
    {
      rank: '04',
      title: '携程宣布给所有男员工20天假期',
      summary: '大厂福利竞争进入新阶段：携程给男员工20天假期，福利叙事从"免费食堂"升级为"真正的生活"。',
      url: 'https://mp.weixin.qq.com/s/JHMj6F7b-B0bYc9SBQN9gg',
      tag: '行业',
    },
    {
      rank: '05',
      title: '百度IDG首席架构师陈竞凯（T11）离职',
      summary: '百度自动驾驶核心架构师陈竞凯离职，大厂技术骨干流失信号持续，自动驾驶人才竞争白热化。',
      url: 'https://mp.weixin.qq.com/s/XsmmfszT5Cvu_zWvRB9JFw',
      tag: '行业',
    },
  ],

  industry: {
    sections: {
      '热点事件': {
        content: [
          '字节AI账本曝光：豆包日收入不足百万但Seedance毛利70%，AI商业化从"烧钱做模型"到"算账做生意"。',
          'DeepSeek Agent人才极度紧缺，负责人亲自在社区贴广告招人，AI公司人才荒从大厂蔓延到独角兽。',
          '阿里年报揭示AI投资版图：8亿美元投Kimi占36%，从"自己做AI"到"投AI生态"。',
          '携程给男员工20天假期——大厂福利叙事升级，从物质激励到生活尊重。',
          '百度IDG首席架构师陈竞凯离职，自动驾驶人才争夺加剧。',
        ],
        sources: [
          { name: '字节AI账本', url: 'https://mp.weixin.qq.com/s/Bp6k_ZzYA04ic87AhtsuYw' },
          { name: 'DeepSeek缺Agent人才', url: 'https://mp.weixin.qq.com/s/Gh3n4nH6XZt_CAbNXJxi6g' },
          { name: '阿里8亿美元投Kimi', url: 'https://mp.weixin.qq.com/s/1HvxDhlCDZjqnO85nSUBwA' },
          { name: '携程男员工20天假', url: 'https://mp.weixin.qq.com/s/JHMj6F7b-B0bYc9SBQN9gg' },
          { name: '百度陈竞凯离职', url: 'https://mp.weixin.qq.com/s/XsmmfszT5Cvu_zWvRB9JFw' },
        ],
      },
      '技术前沿': {
        content: [
          '中国AI应用首现3亿ARR独角兽，腾讯顺为红杉继续加码——AI应用商业化突破验证。',
          '腾讯混元开源RL框架打通多模态——开源策略持续加码技术影响力。',
          '清华团队把Session重新做成多智能体系统核心——Agent架构基础理论突破。',
          '北京建了一座AI工厂：目标10万P算力，日产10万亿Token——算力基建化加速。',
        ],
        sources: [
          { name: '3亿ARR独角兽', url: 'https://mp.weixin.qq.com/s/lUONFSLA6VDk9ZKBkVOaNA' },
          { name: '混元开源RL框架', url: 'https://mp.weixin.qq.com/s/s6e1581bqs4Dmz4WA-H2vg' },
          { name: '清华多智能体Session', url: 'https://mp.weixin.qq.com/s/OL_i_ozTipjUc0cYSYMrPQ' },
          { name: '北京AI工厂', url: 'https://mp.weixin.qq.com/s/uVkc_wpou8U8vWoH4mpIUw' },
        ],
      },
      '行业趋势': {
        content: [
          '美团成立Agent平台部——Agent从"工具"升级为"部门"，组织架构级别的AI化信号。',
          '豆包股价格升至14.85美元，字节AI经济体系持续增值。',
          'AI转型最大的门槛不是技术而是人——行业共识从"缺模型"转向"缺会用模型的人"。',
          '百度青木风雷计划推年轻人挑大梁，+陈竞凯离职，一进一出揭示人才代际更替。',
        ],
        sources: [
          { name: '美团Agent平台部', url: 'https://mp.weixin.qq.com/s/7AXIHmKbnYXG4P-rdGCkFg' },
          { name: '豆包股价格调整', url: 'https://mp.weixin.qq.com/s/4dsHK7Mns6cX7N2VWnfkSw' },
          { name: 'AI转型门槛是人', url: 'https://mp.weixin.qq.com/s/uvM2SetDH9hrtS40QKFO9g' },
        ],
      },
      '对快手的启示': {
        isInsight: true,
        content: [
          '字节AI账本揭示"Seedance毛利70%"——快手可灵AI在视频生成赛道的商业化进度和毛利率需要对标审视，找对变现路径。',
          'DeepSeek缺Agent人才是全行业信号——快手应趁此机会加大Agent工程人才招募力度。',
          '携程"20天男员工假期"式福利叙事对快手有启发——福利内容化传播（而非"我们有食堂"式的老叙事），是新一代雇主品牌做法。',
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
          content: ['本周快照中字节官方号暂无更新，但行业大量报道字节AI账本（豆包日收入、Seedance毛利、豆包股价格）等动态。'],
        },
        '对快手的启示': {
          isInsight: true,
          content: ['字节AI商业化数据被行业深度分析，快手也需要做好"被算账"的准备，可灵AI的商业化指标应提前规划。'],
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
          content: ['本周快照中腾讯官方号暂无更新，但行业资讯提及混元开源RL框架、腾讯AI token额度调整等。'],
        },
        '对快手的启示': {
          isInsight: true,
          content: ['腾讯混元持续开源是技术品牌标杆，快手可灵/快影技术是否也可以更积极地开源？'],
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
          content: ['本周快照中阿里暂无新文章入库，行业资讯提及阿里年报（8亿美元投Kimi）、阿里还需不需要周靖人等讨论。'],
        },
        '对快手的启示': {
          isInsight: true,
          content: ['阿里从"自己做AI"到"投AI生态"的策略转变值得关注——8亿美元占Kimi 36%股份意味着AI投资逻辑变了。'],
        },
      },
    },
    {
      id: 'meituan',
      name: '美团',
      color: '#FFD100',
      summary: '4篇 · AI Hackathon + AIGC海报技术 + 北斗计划',
      sections: {
        '技术品牌': {
          content: [
            '美团海报生成AIGC技术创新与实践——将AI内容生成能力落地到营销物料生产场景。',
            '美团&顶会论文分享：搜索推荐ASX专场——持续输出学术影响力。',
          ],
          sources: [
            { name: 'AIGC海报生成', url: 'https://mp.weixin.qq.com/s/4ytSFiJa2q8inb5U-Au9Nw' },
            { name: '搜索推荐ASX专场', url: 'https://mp.weixin.qq.com/s/-zVRQe4ISf_Sbanc_tVtzg' },
          ],
        },
        '招聘与人才品牌': {
          content: [
            '美团AI Hackathon大赛决赛名单公示——竞赛招聘模式继续。',
            '为什么选择「美团北斗计划」？4位同学给出了答案——用"过来人"故事替代JD，口碑式招聘。',
          ],
          sources: [
            { name: 'AI Hackathon决赛', url: 'https://mp.weixin.qq.com/s/nXv28JkjzAQRIugFTBECGA' },
            { name: '北斗计划4位同学故事', url: 'https://mp.weixin.qq.com/s/m8abLF3fH8lgo_gvXt_YQw' },
          ],
        },
        '对快手的启示': {
          isInsight: true,
          content: [
            '美团AIGC海报生成实践是快手可借鉴的案例——快手有大量创作者营销场景，AI生成营销物料是可以做产品化的方向。',
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
          content: ['本周快照中小红书暂无新文章入库。'],
        },
        '对快手的启示': {
          isInsight: true,
          content: ['小红书连续两周缺席技术内容，世界杯战略可能正在消耗内部内容资源。'],
        },
      },
    },
  ],
};
