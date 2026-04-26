// 周报数据 - W17 (4.21-4.27)
window.REPORT_DATA = {
  week: '2026 W17',
  range: '4.21 — 4.27',
  meta: '共采集 130 篇文章 · 行业资讯 102 篇 + 各公司公众号 28 篇',

  headlines: [
    { rank: 1, tag: '技术', title: '全球首个医疗视频大模型开源', summary: '降低医疗AI开发门槛，推动行业应用落地。', url: 'https://mp.weixin.qq.com/s/am6FOS9N6O5AOFxgodAuHw' },
    { rank: 2, tag: '技术', title: 'Qwen3.6-27B开源，性能超越旗舰', summary: '小模型逆袭，提升智能体与编程效率。', url: 'https://mp.weixin.qq.com/s/68U5hHkOirI5SFPybA_Olg' },
    { rank: 3, tag: '技术', title: 'Coding Agent失败根源可精准定位', summary: '南大快手推出可追溯框架，降低AI调试成本。', url: 'https://mp.weixin.qq.com/s/Yiy81crvuj9dnLb2paVobA' },
    { rank: 4, tag: '人才', title: '大厂AI抢人大战，从实习生开始', summary: '人才竞争白热化，预示AI行业持续扩张。', url: 'https://mp.weixin.qq.com/s/GgbYX-OLmbB7xES--ibFXQ' },
    { rank: 5, tag: '产品', title: '华为乾崑智驾赋能燃油SUV', summary: '传统车企加速智能化，车市竞争升级。', url: 'https://mp.weixin.qq.com/s/Z1ydZoj2DYHNIdejTzB4-w' },
  ],

  industry: {
    sections: {
      '本周热点事件': {
        content: [
          '<strong>大厂AI抢人大战，从实习生开始</strong>：字节、腾讯、美团等巨头加码AI实习生招聘，争夺年轻技术人才。',
          '<strong>Qwen3.6-27B开源，27B秒杀自家397B旗舰</strong>：阿里通义千问发布小模型，智能体与编程能力超越前代，强调"小模型高效化"趋势。',
          '<strong>华人再破硅谷天花板，AI黑马新任CTO</strong>：中科大80后华人出任硅谷AI公司CTO，凸显华人技术领袖影响力上升。',
          '<strong>Claude降智实锤，越聊越傻</strong>：Claude被曝三个bug，引发对AI模型长期稳定性与一致性的质疑。',
          '<strong>神秘模型"大象"仅100B拿下SOTA</strong>：未公开厂商的模型以更低参数量实现顶级性能，暗示Token效率成为竞争焦点。',
        ],
        sources: [],
      },
      '技术进展速览': {
        content: [
          '<strong>医疗视频理解</strong>：全球首个医疗视频理解大模型开源，配套6k+组精标测试集，推动AI在临床诊断应用。',
          '<strong>多模态Agent</strong>：浙大与上海AI Lab推出国产多模态Agent，无需修改模型即可拿下医学分割SOTA，降低部署门槛。',
          '<strong>Coding Agent可追溯框架</strong>：南大与快手提出无需重训的框架，精准定位Coding Agent失败根源，提升开发效率。',
        ],
        sources: [],
      },
      '行业趋势洞察': {
        content: [
          '<strong>小模型高效化成为新战场</strong>：Qwen3.6-27B和"大象"等模型证明，更小参数、更高Token效率的模型正取代"越大越好"的旧范式。',
          '<strong>AI人才争夺下沉至实习生</strong>：大厂提前锁定AI潜力人才，反映行业对稀缺技术人才的焦虑和长期布局需求。',
          '<strong>AI应用场景从通用向垂直深化</strong>：医疗视频理解、宠物健康监测、汽车智能化等垂直领域落地加速，强调"实用优先"。',
        ],
        sources: [],
      },
      '对快手的启示': {
        content: [
          '<strong>加速小模型与端侧推理部署</strong>：利用更低成本实现AI功能（如视频理解、智能体），降低对旗舰大模型的依赖。',
          '<strong>借鉴Coding Agent可追溯框架</strong>：优化内部AI开发工具链，提升开发者效率与模型可靠性。',
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
      summary: '加速AI技术落地，3D生成与Agent能力升级，内容生态与直播联动探索新路',
      sections: {
        '招聘动态': {
          content: '本周聚焦AI产品经理、国际商业化产品与技术实习生、企业服务团队校招，尤其强调AI产品经理岗位的实战经验与跨部门协作能力，显示其对AI应用层人才的迫切需求。',
          sources: [],
        },
        '近期战略重点': {
          content: [
            '<strong>加速AI技术落地</strong>：发布Seed3D 2.0提升3D生成精度，通过OpenViking框架强化Agent复杂行为模拟能力，推动AI从工具向自主智能体演进。',
            '<strong>强化内容生态与直播业务</strong>：调整抖音直播管理架构，引入番茄小说高管，探索小说IP与直播联动的内容变现新路径。',
            '<strong>深化企业服务与数据观测</strong>：火山引擎TLS日志服务升级为全景观测，飞书项目强调"AI友好"开放架构，提升企业客户数据运维与协作效率。',
          ],
          sources: [],
        },
        '对快手的启示': {
          content: '快手应警惕字节通过AI技术（如3D生成、Agent行为模拟）和内容生态联动（小说+直播）构建的差异化壁垒，需加快自身AI与内容融合的创新节奏，避免在技术应用层被拉开代差。',
          sources: [],
          isInsight: true,
        },
      },
    },
    {
      id: 'tencent',
      name: '腾讯',
      color: '#1A3FBF',
      summary: 'ICLR 150+中稿，产学研合作提速，AI工程化落地探索',
      sections: {
        '招聘动态': {
          content: '"青云计划"持续吸引顶尖AI人才，强调加入最佳时机；同时通过ICLR 150+中稿成果和与浙江大学共建联合实验室，强化游戏技术人才储备。',
          sources: [],
        },
        '近期战略重点': {
          content: [
            '<strong>深化AI基础研究</strong>：ICLR 2026中稿150+篇，展示在强化学习、多模态等前沿领域的领先技术积累。',
            '<strong>拓展产学研合作</strong>：与浙江大学共建"智能图形与互动娱乐联合实验室"，培育游戏技术人才，驱动互动娱乐创新。',
            '<strong>探索AI工程化落地</strong>：研究AI在后端高风险场景中的代码编写能力，推动AI从实验走向生产环境。',
          ],
          sources: [],
        },
        '对快手的启示': {
          content: '快手应加速与顶尖高校（如清华、北大）共建实验室，聚焦AI在短视频/直播场景的工程化落地，并强化"技术人才品牌"以吸引顶级算法专家。',
          sources: [],
          isInsight: true,
        },
      },
    },
    {
      id: 'alibaba',
      name: '阿里',
      color: '#FF6A00',
      summary: 'AI数字人落地，底层技术自研，布局大模型生态投资',
      sections: {
        '招聘动态': {
          content: '本周招聘聚焦AI人才与游戏业务，阿里星热爱之旅·阿里日特别版开启报名，侧重顶尖技术人才吸引；灵犀互娱放出四月热招岗位，重点补充游戏研发与运营方向。',
          sources: [],
        },
        '近期战略重点': {
          content: [
            '<strong>发布千问AI数字人"千问小酒窝"</strong>：强化AI在社交与办事场景的落地应用。',
            '<strong>推出C++内核引擎elasticpp</strong>：重塑Elasticsearch查询性能，凸显底层技术自研与性能优化决心。',
            '<strong>布局大模型生态</strong>：市场传闻阿里等巨头洽谈投资DeepSeek，积极布局大模型生态与前沿AI投资。',
          ],
          sources: [],
        },
        '对快手的启示': {
          content: '快手应加速AI数字人及大模型在社交、娱乐场景的落地，同时关注底层技术自研（如搜索性能优化）以提升产品竞争力，并积极评估外部AI投资机会。',
          sources: [],
          isInsight: true,
        },
      },
    },
    {
      id: 'meituan',
      name: '美团',
      color: '#FFAA00',
      summary: '引入Anthropic专家，校园AI竞赛+模拟面试多线布局AI人才',
      sections: {
        '招聘动态': {
          content: '本周重点推进AI人才招募，包括前Anthropic后训练工程师李迎超加入，以及举办校园AI Hackathon和社招闪购事业部岗位。通过模拟面试直播吸引AI产品经理和算法工程师候选人，强化技术岗位招聘力度。',
          sources: [],
        },
        '近期战略重点': {
          content: [
            '<strong>强化AI人才储备</strong>：引入高级别后训练专家，提升大模型技术能力。',
            '<strong>通过校园AI竞赛和模拟面试活动</strong>：提前锁定并培养年轻技术人才。',
            '<strong>核心本地商业持续扩招</strong>：闪购事业部侧重业务与AI结合的岗位需求。',
          ],
          sources: [],
        },
        '对快手的启示': {
          content: '快手可借鉴美团"专家引入+校园竞赛+业务联动"的立体化AI人才策略，加速技术落地与生态构建。',
          sources: [],
          isInsight: true,
        },
      },
    },
    {
      id: 'xiaohongshu',
      name: '小红书',
      color: '#FF2442',
      summary: 'AI Builder创造营定向吸引高校AI人才，内部文化建设同步提升',
      sections: {
        '招聘动态': {
          content: '本周启动"AI Builder 创造营"，面向同济大学等高校定向招募AI方向人才，显示其正加速吸纳年轻技术力量以强化AI能力储备。',
          sources: [],
        },
        '近期战略重点': {
          content: [
            '<strong>强化AI技术人才储备</strong>：通过高校专项活动提前锁定应届生源，布局下一代AI应用开发。',
            '<strong>提升内部文化体验</strong>：将艺术展搬入总部，增强员工归属感与品牌软实力。',
            '<strong>调整流量分配逻辑</strong>：从单纯内容热度转向更复杂的商业转化权重，优化内容与商业的平衡。',
          ],
          sources: [],
        },
        '对快手的启示': {
          content: '建议快手加速布局面向高校的AI专项人才计划，同时警惕流量分配机制僵化，需动态平衡内容质量与商业效率。',
          sources: [],
          isInsight: true,
        },
      },
    },
  ],
};
