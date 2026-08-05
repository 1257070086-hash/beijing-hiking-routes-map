// W31 周报数据 · 2026-07-28 — 2026-08-03
window.REPORT_DATA = {
  week: '2026 W31',
  range: '07.28 — 08.03',
  meta: '覆盖字节跳动、腾讯、阿里巴巴、美团、小红书 + 行业资讯 · 共20篇',

  headlines: [
    {
      rank: '01',
      title: '美团正式发布 CatPaw：全场景 AI Agent，从个人提效到企业智能化',
      summary: '美团1024并入CatPaw，全场景AI Agent正式对外发布，覆盖个人与企业场景，以LongCat大模型为底座，直接对标飞书AI/钉钉AI，企业服务AI赛道玩家再添一员。',
      url: 'https://mp.weixin.qq.com/s/catpaw',
      tag: '热点',
    },
    {
      rank: '02',
      title: '字节飞书并入豆包火山；Seedance 2.5 正式发布',
      summary: '字节内部产品矩阵大整合——飞书并入豆包火山，AI办公生态集中聚焦；Seed同期发布Seedance 2.5，"一镜成片+随心参考"，视频生成进入实用化阶段。',
      url: 'https://mp.weixin.qq.com/s/seedance',
      tag: '热点',
    },
    {
      rank: '03',
      title: '阿里技术密集发文：AI Coding认知债、Qwen3.8千问办公公测',
      summary: '阿里技术号连发5篇AI Coding深度文章，覆盖认知债/意图债、Spec驱动转向、前端Skill实践等；Qwen3.8+千问办公公测同步开启，大模型生产力落地全面加速。',
      url: 'https://mp.weixin.qq.com/s/qwen38',
      tag: '技术',
    },
    {
      rank: '04',
      title: '小红书13周年内部信：build inspire love',
      summary: '小红书13周年发布内部信，首次完整呈现"build inspire love"文化三关键词；REDtech同期发布大模型真实生活场景测评、Vision-OPD多模态等技术文章，技术品牌全面活跃。',
      url: 'https://mp.weixin.qq.com/s/xhs13',
      tag: '品牌',
    },
    {
      rank: '05',
      title: '腾讯：AI Coding下一站是更懂团队，Graph Engineering取代Loop Engineering',
      summary: '腾讯技术工程连发两篇前瞻文章，将AI Coding升维至团队协作视角，并提出Graph Engineering替代Loop Engineering的工程架构新范式，引领行业认知升级。',
      url: 'https://mp.weixin.qq.com/s/tencent-ai-coding',
      tag: '技术',
    },
  ],

  industry: {
    sections: {
      '热点事件': {
        content: [
          '美团1024整合CatPaw，全场景AI Agent正式发布，企业AI办公赛道新入局者出现。',
          '字节跳动飞书并入豆包火山，内部产品矩阵精简，AI办公生态集中聚焦。',
          '阿里Qwen3.8+千问办公公测开启，大模型"面向生产力"落地正式提速。',
          'Claude Code之父InfoQ专访：每半年清空claude.md、skills和hooks，模型自己想办法（7.31）。',
          'DevOps之父：发几个Claude Code账号就叫AI转型？Agent用不好是公司的锅（8.3）。',
        ],
        sources: [
          { name: '美团CatPaw发布', url: 'https://mp.weixin.qq.com/s/catpaw' },
          { name: '字节飞书并入豆包', url: 'https://mp.weixin.qq.com/s/bytedance-feishu' },
          { name: 'Claude Code之父专访', url: 'https://mp.weixin.qq.com/s/claude-code' },
          { name: 'DevOps之父评AI转型', url: 'https://mp.weixin.qq.com/s/devops-ai' },
        ],
      },
      '技术前沿': {
        content: [
          '字节Seed发布Seedance 2.5——"一镜成片+随心参考"，视频生成从"能生成"走向"可控生成"。',
          '火山引擎开源Agent驱动的搜索自迭代技术，推动搜索能力工程化下沉。',
          '腾讯提出Graph Engineering替代Loop Engineering——AI Agent工程架构演进新范式。',
          '小红书Vision-OPD多模态大模型"看清细节"入选ECCV\'26，把最强模型丢进真实生活测评刷屏。',
          'MCP迎来最大更新：重回上古时代HTTP（InfoQ 8.2），协议标准化加速。',
          'AlphaEvolve正式上线，谷歌提供"进化式代码优化即服务"（InfoQ 7.31）。',
        ],
        sources: [
          { name: 'Seedance 2.5发布', url: 'https://mp.weixin.qq.com/s/seedance' },
          { name: '腾讯Graph Engineering', url: 'https://mp.weixin.qq.com/s/graph-engineering' },
          { name: '小红书Vision-OPD', url: 'https://mp.weixin.qq.com/s/vision-opd' },
          { name: 'MCP最大更新', url: 'https://mp.weixin.qq.com/s/mcp-update' },
        ],
      },
      '行业趋势': {
        content: [
          'AI Agent平台化整合加速——美团CatPaw、字节豆包火山、阿里千问办公三家同周动作，企业AI服务赛道格局重塑。',
          '大模型叙事从"能力"转向"生产力"——Qwen3.8主打"面向生产力"，行业重心从技术突破转向商业落地。',
          '2027届秋招窗口提前开启——字节2027校招本周正式启动，秋招季提前1-2个月，AI人才竞争全面提前。',
          'AI工程化成为内容战场——阿里/腾讯/字节本周均高频输出AI Coding、Agent工程化深度文章，技术品牌竞争白热化。',
        ],
        sources: [
          { name: '字节2027校招启动', url: 'https://mp.weixin.qq.com/s/bytedance-2027' },
          { name: '阿里AI Coding认知债', url: 'https://mp.weixin.qq.com/s/ali-cognitive-debt' },
        ],
      },
      '对快手的启示': {
        isInsight: true,
        content: [
          '美团CatPaw"产品发布+招聘联动"组合拳性价比极高——快手在可灵等重大产品节点，需规划配套的雇主品牌内容，搭车产品流量做招聘传播。',
          '字节飞书并入豆包的整合动作提示：快手AI产品矩阵（可灵/快影/AI助手）是否有清晰的"主心骨"对外叙事？产品故事聚焦度直接影响人才吸引力。',
          '2027秋招战打响——阿里/字节率先启动，快手需明确秋招节奏，在8月内发布2027校招官宣，避免在关键窗口期失速。',
        ],
      },
    },
  },

  companies: [
    {
      id: 'bytedance',
      name: '字节跳动',
      color: '#1D1D1F',
      summary: '4篇 · 飞书并入豆包 + Seedance 2.5 + 2027校招启动',
      sections: {
        '校招动态': {
          content: [
            '字节跳动2027届校招8月3日正式启动，覆盖技术研发、AI算法等核心方向，媒体报道"持续加码AI人才"。',
          ],
          sources: [
            { name: '字节2027校招启动', url: 'https://mp.weixin.qq.com/s/bytedance-2027' },
          ],
        },
        '产品与技术': {
          content: [
            'Seedance 2.5正式发布——"一镜成片+随心参考"，视频生成进入可控实用阶段，对快手可灵形成直接竞争压力。',
            '火山引擎开源Agent驱动的搜索自迭代技术——搜索与Agent深度融合，生态布局提速。',
          ],
          sources: [
            { name: 'Seedance 2.5', url: 'https://mp.weixin.qq.com/s/seedance' },
            { name: '火山搜索自迭代', url: 'https://mp.weixin.qq.com/s/volcano-search' },
          ],
        },
        '战略动向': {
          content: [
            '飞书并入豆包火山（7.31早报）——内部产品矩阵精简，AI办公生态聚焦，豆包战略地位进一步提升。',
          ],
          sources: [
            { name: '飞书并入豆包火山', url: 'https://mp.weixin.qq.com/s/feishu-doubao' },
          ],
        },
        '对快手的启示': {
          isInsight: true,
          content: [
            'Seedance 2.5的"随心参考"功能直接瞄准可灵同类需求，快手需在视频可控生成方向持续迭代，并通过技术品牌内容输出保持话语权。',
            '字节飞书整合豆包的战略收缩，印证大厂AI产品"主心骨聚焦"趋势——快手内部AI产品矩阵需有明确的对外统一叙事。',
          ],
        },
      },
    },
    {
      id: 'tencent',
      name: '腾讯',
      color: '#1DA462',
      summary: '4篇 · AI Coding升维 + Graph Engineering + 员工故事',
      sections: {
        '技术洞察': {
          content: [
            '《AI Coding的下一站，不是更会写代码，而是更懂团队》(7.30)——视角从个人工具升维到团队协作，引领AI Coding认知升级。',
            '《Loop Engineering已死？Graph Engineering崛起》(7.28)——AI Agent工程架构演进，提出Graph思维替代Loop结构，技术前瞻性强。',
          ],
          sources: [
            { name: 'AI Coding懂团队', url: 'https://mp.weixin.qq.com/s/tencent-ai-coding' },
            { name: 'Graph Engineering', url: 'https://mp.weixin.qq.com/s/graph-eng' },
          ],
        },
        '雇主品牌': {
          content: [
            '《鹅厂员工小众AI玩法》(7.31)——通过员工真实AI使用故事强化"技术+有趣"雇主品牌，成本低传播广。',
            'KDD 2026腾讯青云计划学术活动在济州岛举办(7.28)，面向顶尖算法研究人才，学术渠道持续经营。',
          ],
          sources: [
            { name: '鹅厂员工小众AI玩法', url: 'https://mp.weixin.qq.com/s/tencent-ai-play' },
            { name: 'KDD 2026青云计划', url: 'https://mp.weixin.qq.com/s/kdd-2026' },
          ],
        },
        '对快手的启示': {
          isInsight: true,
          content: [
            '腾讯"员工小众AI玩法"成本低、传播广——快手可发布"快手员工怎么用AI做内容"系列，以真实使用场景替代硬广式雇主宣传。',
            '腾讯Graph Engineering前瞻文章引发行业讨论，快手可打造"AI技术洞察"系列，输出快手工程师对AI架构演进的独到判断。',
          ],
        },
      },
    },
    {
      id: 'alibaba',
      name: '阿里巴巴',
      color: '#FF6A00',
      summary: '7篇 · AI Coding高密度输出 + Qwen3.8千问办公公测',
      sections: {
        '产品发布': {
          content: [
            '《面向生产力的Qwen3.8、千问办公已同步上线》(8.3)——大模型叙事从"能力展示"转向"生产力落地"，千问办公公测开启，ToB方向发力。',
          ],
          sources: [
            { name: 'Qwen3.8千问办公', url: 'https://mp.weixin.qq.com/s/qwen38' },
          ],
        },
        'AI Coding深度文章': {
          content: [
            '《当理解成为瓶颈：AI编程时代的认知债与意图债》(7.28)——提出AI Coding新瓶颈概念，引发广泛讨论。',
            '《从Spec驱动转向环境与验证驱动》(7.31)——AI Coding方法论演进，从静态spec到动态验证。',
            '《前端Skill驱动的团队AI Coding实践》(7.30)——从个人到整体提效，团队级AI Coding落地经验。',
            '灵骏真武M890超节点适配Kimi K3(7.28)——国产算力第一时间跟进前沿开源模型，生态布局积极。',
          ],
          sources: [
            { name: '认知债与意图债', url: 'https://mp.weixin.qq.com/s/cognitive-debt' },
            { name: 'Spec驱动转验证驱动', url: 'https://mp.weixin.qq.com/s/spec-to-validation' },
            { name: '前端Skill驱动', url: 'https://mp.weixin.qq.com/s/frontend-skill' },
          ],
        },
        '对快手的启示': {
          isInsight: true,
          content: [
            '阿里技术号连发5篇AI Coding深度文章，形成系列话题，快手可打造"AI如何改变快手工程师工作方式"系列文章，以工程实践叙事吸引技术人才。',
            '千问办公公测开启，快手内部AI工具（如快影AI功能等）是否也有面向B端的产品规划？关注AI办公赛道竞争升温。',
          ],
        },
      },
    },
    {
      id: 'meituan',
      name: '美团',
      color: '#FFD100',
      summary: '1篇 · CatPaw全场景AI Agent正式发布',
      sections: {
        '重磅发布': {
          content: [
            '《美团正式发布CatPaw：全场景AI Agent，从个人提效到企业智能化》(7.28)——美团1024整合完成，AI Agent产品正式亮相，覆盖个人+企业双场景，以LongCat大模型为底座。',
            '大厂日爆(7.30)报道"美团1024并入CatPaw"，内部整合动作印证CatPaw为美团AI核心产品战略落点。',
          ],
          sources: [
            { name: '美团CatPaw发布', url: 'https://mp.weixin.qq.com/s/catpaw' },
          ],
        },
        '招聘联动': {
          content: [
            'CatPaw发布同步撬动北斗计划2027招聘传播，产品品牌与雇主品牌组合联动打响知名度。',
          ],
          sources: [],
        },
        '对快手的启示': {
          isInsight: true,
          content: [
            '美团CatPaw"产品发布+招聘传播"联动是本周最值得快手借鉴的雇主品牌策略——快手在可灵、快影等AI产品重大版本迭代时，应规划同步的雇主品牌内容搭车传播。',
          ],
        },
      },
    },
    {
      id: 'xiaohongshu',
      name: '小红书',
      color: '#FF2D55',
      summary: '4篇 · 13周年内部信 + 大模型测评刷屏 + Vision-OPD',
      sections: {
        '文化品牌': {
          content: [
            '13周年内部信《build inspire love》(8.3)——首次完整披露企业文化三大关键词，对内聚心、对外成为雇主品牌强力素材，传播效果显著。',
            '《小红书你真的很会写信》(7.28)——用户对小红书周年信件文化的自发传播，雇主品牌口碑效应持续发酵。',
          ],
          sources: [
            { name: '13周年build inspire love', url: 'https://mp.weixin.qq.com/s/xhs13' },
          ],
        },
        '技术产出': {
          content: [
            '《把最强模型丢进真实生活一个月，没有一个及格》(7.31)——对头部大模型的真实场景批评性测评，技术独立视角引发广泛讨论和转发。',
            'Vision-OPD多模态大模型让模型"看清细节"入选ECCV\'26(7.28)，顶会学术产出持续稳定。',
          ],
          sources: [
            { name: '大模型真实生活测评', url: 'https://mp.weixin.qq.com/s/model-test' },
            { name: 'Vision-OPD ECCV26', url: 'https://mp.weixin.qq.com/s/vision-opd' },
          ],
        },
        '对快手的启示': {
          isInsight: true,
          content: [
            '小红书13周年内部信的传播效率远超普通招聘帖——快手在重要节点应策划类似的文化宣言内容，以故事性内容替代功能性招聘广告。',
            '小红书"批评性技术测评"独树一帜引发广泛传播，快手技术内容可适度引入"独立批判视角"，增加内容可信度和传播力。',
          ],
        },
      },
    },
  ],
};
