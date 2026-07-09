// W28 周报数据 · 2026-07-07 — 2026-07-13
window.REPORT_DATA = {
  week: '2026 W28',
  range: '07.07 — 07.13',
  meta: '覆盖字节跳动、腾讯、阿里巴巴、美团、小红书 + 行业资讯 · 共11篇（更新中）',

  headlines: [
    {
      rank: '01',
      title: '字节绩效迎来大调整：将加大激励力度，加强字节范与领导力考核',
      summary: '字节跳动绩效体系大调整，激励力度加大+字节范考核加码，从"OKR驱动"到"价值观+结果双轨"。',
      url: 'https://mp.weixin.qq.com/s/JAjsdXcokoEGFxSJWYIMGw',
      tag: '热点',
    },
    {
      rank: '02',
      title: 'Seedream 5.0 Pro 发布：不止"生成"，更懂"设计"',
      summary: '字节Seed发布Seedream 5.0 Pro，AI图像生成从"能画"到"懂设计"跃迁，理解布局/风格/品牌约束。',
      url: 'https://mp.weixin.qq.com/s/OWCyjK_CVOJn8ITX_1Da4Q',
      tag: '技术',
    },
    {
      rank: '03',
      title: '火山Milvus向量检索3倍于VectorDBBench榜首',
      summary: '字节火山引擎Milvus向量检索性能达到VectorDBBench榜首3倍，AI基础设施性能标杆刷新。',
      url: 'https://mp.weixin.qq.com/s/Del4I0ZB_hTKAmJTPoznuw',
      tag: '技术',
    },
    {
      rank: '04',
      title: '阿里技术回归：从Vibe Coding到Harness大仓AI工程化实战',
      summary: '阿里技术公众号沉寂多周后密集发文，Harness AI工程化实践成为焦点，大仓Agent协作体系成型。',
      url: 'https://mp.weixin.qq.com/s/LCuv7y8vnNDGxIdzHdNbvw',
      tag: '行业',
    },
    {
      rank: '05',
      title: '腾讯混元Hy3发布：Agent能力和产品体验跃升',
      summary: '腾讯混元Hy3模型发布，Agent能力与产品体验双跃升，Agent赛道模型层竞争白热化。',
      url: 'https://mp.weixin.qq.com/s/qstehrTjxzqSyqDuUvJjgw',
      tag: '技术',
    },
  ],

  industry: {
    sections: {
      '热点事件': {
        content: [
          '字节绩效体系大调整：加大激励力度、加强字节范与领导力考核，从"OKR驱动"到"价值观+结果双轨"。',
          '大厂人事动态密集：京东抹平leader数量、美团服体王磊将离职、阿里QoderWork并入钉钉、字节钱景离职、百度token新规发布后撤回。',
        ],
        sources: [
          { name: '字节绩效大调整', url: 'https://mp.weixin.qq.com/s/JAjsdXcokoEGFxSJWYIMGw' },
          { name: '大厂员工事', url: 'https://mp.weixin.qq.com/s/VtGOZdazWvjFD5IJwQFFyw' },
        ],
      },
      '技术前沿': {
        content: [
          '字节Seed发布Seedream 5.0 Pro——AI图像生成从"能画"到"懂设计"，理解布局、风格与品牌约束。',
          '火山Milvus向量检索3倍于VectorDBBench榜首，AI基础设施性能标杆再刷新。',
          '腾讯混元Hy3发布：Agent能力与产品体验跃升，Agent赛道模型层竞争白热化。',
          '字节Seed发布EdgeBench：衡量真实世界环境学习，发现新Scaling Law。',
        ],
        sources: [
          { name: 'Seedream 5.0 Pro', url: 'https://mp.weixin.qq.com/s/OWCyjK_CVOJn8ITX_1Da4Q' },
          { name: '火山Milvus 3倍榜首', url: 'https://mp.weixin.qq.com/s/Del4I0ZB_hTKAmJTPoznuw' },
          { name: '混元Hy3发布', url: 'https://mp.weixin.qq.com/s/qstehrTjxzqSyqDuUvJjgw' },
          { name: 'EdgeBench新Scaling Law', url: 'https://mp.weixin.qq.com/s/gGlB-Dgj3GbSDwHedoPPMA' },
        ],
      },
      '行业趋势': {
        content: [
          'Harness成为大厂AI工程化共识——阿里/腾讯/字节本周都围绕Harness发文，AI Coding Agent工程化从"尝鲜"进入"实战"阶段。',
          '阿里QoderWork并入钉钉——AI编程工具从独立产品回归平台生态，渠道整合加速。',
        ],
        sources: [
          { name: '阿里Harness工程实践', url: 'https://mp.weixin.qq.com/s/9NZ5xB3Q_hiR5RmZxcPb0A' },
          { name: '腾讯Harness大仓实战', url: 'https://mp.weixin.qq.com/s/HzyktaWgXkDaURHg1fJjew' },
        ],
      },
      '对快手的启示': {
        isInsight: true,
        content: [
          'Harness成为行业AI工程化标准——快手内部AI工具是否也需要向Harness方向靠拢？工程化实战案例输出是极好的雇主品牌素材。',
          '字节绩效"加大激励+字节范考核"模式值得关注——快手绩效体系是否需要类似的调整以适配AI时代人才激励？',
          'Seedream 5.0 Pro"更懂设计"对可灵AI是直接竞争信号——快手AI视频/图像生成需要思考差异化方向。',
        ],
      },
    },
  },

  companies: [
    {
      id: 'bytedance',
      name: '字节跳动',
      color: '#1D1D1F',
      summary: '3篇 · Seedream 5.0 Pro + Milvus性能标杆 + EdgeBench',
      sections: {
        'AI产品发布': {
          content: [
            'Seedream 5.0 Pro发布——从"生成"到"设计"，AI图像理解布局/风格/品牌约束，产品能力从工具到创作伙伴。',
          ],
          sources: [
            { name: 'Seedream 5.0 Pro', url: 'https://mp.weixin.qq.com/s/OWCyjK_CVOJn8ITX_1Da4Q' },
          ],
        },
        '技术突破': {
          content: [
            '火山Milvus向量检索3倍于VectorDBBench榜首——AI基础设施性能标杆刷新。',
            'EdgeBench：衡量真实世界环境学习，发现新Scaling Law——评测基准创新。',
          ],
          sources: [
            { name: '火山Milvus 3倍榜首', url: 'https://mp.weixin.qq.com/s/Del4I0ZB_hTKAmJTPoznuw' },
            { name: 'EdgeBench', url: 'https://mp.weixin.qq.com/s/gGlB-Dgj3GbSDwHedoPPMA' },
          ],
        },
        '对快手的启示': {
          isInsight: true,
          content: [
            '字节本周三条线齐发（产品+基础设施+评测基准），技术品牌输出密度极高。快手在可灵AI等方向需要类似的"产品发布+技术突破+评测标准"三线并进策略。',
          ],
        },
      },
    },
    {
      id: 'tencent',
      name: '腾讯',
      color: '#1DA462',
      summary: '2篇 · 混元Hy3发布 + Harness实战',
      sections: {
        '模型发布': {
          content: [
            '腾讯混元Hy3发布：Agent能力和产品体验跃升——模型层Agent竞争白热化。',
          ],
          sources: [
            { name: '混元Hy3发布', url: 'https://mp.weixin.qq.com/s/qstehrTjxzqSyqDuUvJjgw' },
          ],
        },
        '工程实践': {
          content: [
            '从Vibe Coding到Harness——一套大仓AI工程化实战：腾讯技术工程团队分享AI编程工程化落地经验。',
            '精打细算虾养成指南：省Token和把AI用好，从来就是一件事——Token经济学的实践视角。',
          ],
          sources: [
            { name: 'Harness大仓实战', url: 'https://mp.weixin.qq.com/s/HzyktaWgXkDaURHg1fJjew' },
            { name: '省Token指南', url: 'https://mp.weixin.qq.com/s/9NZ5xB3Q_hiR5RmZxcPb0A' },
          ],
        },
        '对快手的启示': {
          isInsight: true,
          content: [
            '腾讯"省Token"实践分享对快手AI工具内部推广有直接参考价值——AI工具的成本效率是推广落地的关键障碍。',
          ],
        },
      },
    },
    {
      id: 'alibaba',
      name: '阿里巴巴',
      color: '#FF6A00',
      summary: '3篇 · 沉寂多周后回归！Harness + 硬核少年技术节',
      sections: {
        '技术实践': {
          content: [
            'Harness工程实践：如何让Agent完成自主迭代——AI编程Agent的自主闭环能力从概念到工程。',
            '从「不敢发」到「天天发」：AI Agent时代的CI/CD生存指南——AI时代的DevOps方法论革新。',
          ],
          sources: [
            { name: 'Harness Agent自主迭代', url: 'https://mp.weixin.qq.com/s/XGuoQGdaMOznQDylIkE_EQ' },
            { name: 'AI Agent时代CI/CD', url: 'https://mp.weixin.qq.com/s/LdCtRixEba_cojvsRQVX3g' },
          ],
        },
        '人才品牌': {
          content: [
            '硬核少年技术节5.0抢鲜看！四大AI成果首发，报名即将截止——技术节IP持续运营，AI成果首发增强吸引力。',
          ],
          sources: [
            { name: '硬核少年技术节5.0', url: 'https://mp.weixin.qq.com/s/rM2Y3Re8cqRd1Z8d7l88Iw' },
          ],
        },
        '对快手的启示': {
          isInsight: true,
          content: [
            '阿里技术号沉寂多周后密集回归，且内容质量高（Harness+CI/CD实战）——说明之前是"蓄力"而非"放弃"。快手需要保持稳定的技术内容输出节奏，避免长间隔导致品牌势能衰减。',
          ],
        },
      },
    },
    {
      id: 'meituan',
      name: '美团',
      color: '#FFD100',
      summary: '0篇 · 本周暂无文章数据',
      sections: {
        '本周动态': {
          content: ['本周快照中美团暂无新文章入库，行业资讯提及美团服体王磊将离职等动态。'],
        },
        '对快手的启示': {
          isInsight: true,
          content: ['美团连续缺勤，关注其下一轮是否为LongCat相关发布。'],
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
          content: ['小红书技术号持续沉寂，世界杯后关注其下一波内容策略。'],
        },
      },
    },
  ],
};
