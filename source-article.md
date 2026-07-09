---
docId: fcAB6BPQ0zQHYjPQfENSD6C13
title: "10个快手内部最火的 Skill，这也可以……？"
url: https://docs.corp.kuaishou.com/d/home/fcAB6BPQ0zQHYjPQfENSD6C13
lastSync: 2026-04-20T19:30:39.980866
---

摘要：

只有你想不到，没有快手员工做不到！

翻了500+原创 skill后，发现快手原工脑洞也太大了…

当快手人开始自己给 AI 写"外挂"，事情就变得有点失控了

正文：

这个春天，快手的员工们，都迷上了“养龙虾”

不是真的水产养殖，而是给自己的AI Agent 一口一口喂Skill

让它从一只呆头虾，进化成能文能武的六边形战士

逐渐……搜罗别人写的 skill 已经不够用了，于是大家开始自己写

据不完全统计，我们扒了 500+ 份快手员工原创的 skill

**从里面挑出了或是最好用，或是最有趣的10个，一起分享给你**

看完你可能会有一个疑问——

​"这玩意儿也能写成 Skill？"​

**是的，这也可以。**

一、提升请假的效率，也是提升效率

点击前

**点击后**

快手休假申请助手

支持年假、调休、病假等多种假期的自动化申请。当用户提到"帮我请个假"、"我要休假"、"我要请假"等意图时触发。流程包含：自然语言日期解析、假期额度自动查询、细节确认、SSO 登录及 API 提交。

点击使用

对话框：

我要休100天年假

哈哈，100天年假的梦想大家都有，不过您目前的年假余额只有6天，申请100天会提交失败的。建议您还是先请明天的1天年假吧？请问：

全天1天 （）

上午年假0.5天

下午年假0.5天

![](images/image-01-e15e3213.png)

虽然「休假申请助手」skill

不能创造更多的年假

但是来快手

可享受额外的「春节福利假」

对了：

让它尝试修改年假系统的代码也没用

别问我怎么知道的

二、最接地气的Skill，没有之一

点击前

**点击后**

坑来

这是一个快手内网技能，用于查询快手工区内指定楼层是否有空闲卫生间蹲便/坐便。

对话框：

**有坑位吗？**

**1号坑位现在空着！快去吧，3号已经蹲了超过30分钟了，估计快出来了，可以候着😄**

![](images/image-02-3da5eec6.png)

在我测试「坑来」Skill的n次里

发现3号坑的使用率非常高

有没有懂厕所心理学的来解释一下

忠告：

**仅适用于非紧急情况**

**紧急情况，请直接去**

**三、把你的同事钓成翘嘴**

**备选小标题：**

点击前

**点击后**

Fancy Praise - 花式彩虹屁生成器

花式彩虹屁生成器 - 根据用户提供的对象和事件，生成花式夸奖文案并通过 Kim 直接发送。当用户想要夸奖某人（老板、同事、密友等）时使用，支持古风文艺、网络热梗、职场高情商、沙雕搞笑、真诚走心等多种风格。

对话框：

**请帮我夸一下我的研发zhaotianxiang03，说他是我见过最好的研发**

发送成功！🎉你的藏头诗已经飞到赵天祥那里啦～ 每句首字 "你是我见过最好的研发" 的隐藏彩蛋等他发现！希望他收到这份花式彩虹屁会开心！✨

你的代码像一条安静的河

是需求翻涌，它也不起波澜

我递过去的需求，歪歪扭扭

见你接住时，眉头都没皱一下

过了零点的工区

最难啃的那行逻辑，终于亮了

好几次以为要崩的版本

的确，是你把它从悬崖边拽了回来

研发和产品，本该是两条平行线

发现我们走着走着，成了同一支队伍

****

现在可以宣布，以下话术可以进垃圾桶了：

**线上问题要是早遇见你，就好了**

**幸亏是你做我需求，换个人我就完辣**

**上哪找这么靠谱的技术啊**

**研发同学请你听我解释：**

**token有价，真心无价**

**你真的是我见过最好的研发**

四、审核同学的福音

点击前

**点击后**

content-moderation-assistant

内容审核辅助工具，用于快手一线审核员工快速识别违法违规内容。支持识别国家保护动植物、管制器械、刀具、捕猎工具、盗墓工具等。用户发送图片或名称时，快速回答"是"或"否"判断是否为违禁内容。使用场景：审核视频/图片/文字/直播/评论/商品等内容时，需要判断用户言行或物品是否涉及违法犯罪、是否为国家保护动植物、是否为管制器械等。

对话框：

这是管制刀具吗？

![](images/image-03-5fd0edf6.png)

……盗墓工具？

快手的内容还是太丰富了

忠告：

机器辅助判断，最终还是要人来把关

毕竟违禁物的花样，比 prompt 还多。

五、MySQL？YourSQL！

点击前

**点击后**

kdb-query KDB 平台 MySQL 查询

在快手内部 KDB 平台上查询 MySQL 数据库数据。通过 KDB 的 KwaiCode API 实现：创建查询文件、保存 SQL、异步执行、轮询状态、获取结果。使用场景：(1) 查询某个集群的某张表的数据，(2) 执行任意 SELECT SQL 并获取结果，(3) 用户说"在 KDB 上查一下"/"查一下 XXX 集群的数据"/"帮我查 XXX 表"。需要用户已在内网且 KDB 平台已登录（Cookie 有效）。

对话框：

查一下ksg夺得2026KPL夏季赛冠军后的一周内，KSG几位选手的涨粉数据

数据出来了，整理如下：

用户名

**用户ID**

**涨粉数**

KSG句号

**

📈

KSG流浪

**

📈

KSG无言

**

**📈**

KSG小屿

**

**📈**

KSG一笙

**

**📈**

*仅供参考，具体数据保密！

取数、周报、AB Test！

运营同学：我们再也不是数据女/男工了！

其实：

其实想炫耀的重点是

KSG历史首次夺冠了！

我们是冠军！

六、今天到底吃什么！

点击前

点击后

hungry-helper 老铁食堂助手

老铁食堂助手，获取内网餐厅菜品数据并提供每日用餐推荐。 触发场景：用户询问今天吃什么、查看菜品、更新菜单数据、设置饮食偏好时使用此技能。

对话框：

有没有免费的午饭可以吃

![](images/image-04-cc81a803.png)

总是和同事面面相觑：

今天吃什么？

好好好，选择困难症非常需要！

对了：

谁说没有免费的午餐！

加入快手，入职工卡立享300元餐券

​【结尾】写给每一个在大厂里被小事磨损的人

写到这里你可能已经发现了——

这些Skill没有多么复杂或奇思妙想

更多的是解决那些​"不重要、但每天都在消耗你"​ 的事

需要下定决心点的请假按钮

中午12点雷打不动“今天吃什么？”的问询

取不完的数，写不完的MySQL

把那些反复消耗的事，交给 AI。​

让我们自己，去做真正值得去做的事

最后想问问你

你最近用到的最好用的Skill是什么？或者是你自己做了哪些Skill？

评论区聊聊，点赞 Top 3，随机抽 3 位送「快手定制周边」一份。​

备选Skill：

点击前

点击后

live-quality-debugger 画质调试师

分析直播画面并提供专业的高清调试建议。自动识别秀场/电商直播类型，基于快手内部SOP和163个真实调试案例，给出针对性解决方案。适用于手机直播、相机直播、摄像头直播等所有场景。

对话框：

点击前

点击后

beijing-rent-finder 通用租房信息爬取工具

当用户说"帮我找房"、"搜索租房信息"、"爬取租房"、"找租房"、"找房"等时触发。支持从贝壳找房、闲鱼、豆瓣小组、小红书四个平台自动爬取，可根据用户提示词动态设置地点、预算、户型等条件。若用户未提供必要信息（地点、预算），主动询问补充。

对话框：

点击前

点击后

快手招聘系统 - 自动约面

ks-recruit-auto-interview

快手招聘系统自动约面。当用户说「约面试」「安排面试」「给候选人约面」「创建面试」或涉及快手招聘系统约面相关需求时，使用此 skill。

对话框：





svg-flowchart-designer

🏆 人气之王

Stars 第一，全公司最万能

2

坑来

🚽 最反差

查厕所空坑位，Stars 比90%研发工具高

3

fancy-praise

🌈 最会哄人

花式彩虹屁，古风/热梗/沙雕，一键KIM发出去

4

快手总部正式休假申请助手

🏖 最「摸鱼」

说一句话自动请假，AI 帮你填完提交

5

ios-publish-automation

🔄 最「流水线」

两个仓库发版全流程，一条命令搞定

6

black-stream-v9

🕵️ 最神秘

描述只有「黑产检测 v9」，迭代9轮不多说

7

token-cost-daily-report

📋 最「老实」

用 AI 监控自己用了多少 AI

8

abtest

📊 最数据驱动

跑 CUPED+DiD 统计模型，不是查个数字

9

git-branch-eloc

🔬 最硬核

AST 语法树算有效代码量，比行数精准

10

legal-quick-reference

🌍 最出圈

劳动/婚姻/租房法律速查，不只给程序员用



以下为草稿区：

参考：

当年轻人试图养龙虾，场面一度失控

北京打工人最夯的通勤包：

回母校，鹅厂员工被问得最多的问题是...

一、背景资料：

快手Skillhub：https://skills.corp.kuaishou.com/domains

1.快手 SkillHub 265 个 Skill 完整分类统计

9 大类分布

大类

数量

## 占比

典型 Skill

🔧 研发工程效率

**62**

23%

kdev-ops、rpc-development、java-root-pom-update、android-crash-monitor

🧪 测试质量保障

48

18%

auto-test-manager、playwright-test-generator、batch-test-runner、ltong-test-orchestrator

📊 数据查询分析

40

15%

kwaibi-data-query、kdb-mysql-query、Ba-data-analysis、onesql-ck-query

🏢 内部流程自动化

35

13%

休假申请、实习生考勤、ks-recruit-auto-interview、kuaishou-bpm-abtest-approval

🎨 内容创作生产

28

11%

svg-flowchart-designer、ppt-maker、baoyu-translate、baoyu-infographic

🔍 信息查询搜索

20

8%

multi-search-engine、hot-word-detector、web-query-summarizer、wechat-mp-article-fetcher

🛠 平台工具集成

15

6%

docs-shuttle、kuaishou-sso-login、kim-msg、kcdn-uploader

😄 生活娱乐整活

8

3%

坑来、吃什么、花式彩虹屁、自动请假、小红花自动化、像素办公室、SBTI人格测试、health-assistant

🧰 测试/示例占位

9

3%

test、test-demo-wyy、hello-world-skill、测试skill、date-time-skill

-

2.最有意思的几个发现

① 生活向只有 8 个，但占据了前 10 名里的 4 席 热度严重不成比例，说明大家平时最爱看/用的其实是这类。

② 「写周报」被 5 个 Skill 围攻 daily-report、daily-report-v2、我写周报、weekly-report-compare、token-cost-daily-report——周报是快手员工最想甩锅给 AI 的事。

③ 有人做了「SBTI 人格测试」 AI 版人格测试，还支持「毒舌人格陪聊」和「反向人格诊断」，纯整活向，悄悄混进技能库里。

④ 有 9 个 Skill 是测试用/占位的 test、hello-world-skill、test-zxr……开发者在调试发布流程时留下的，正式混在 265 个里面没被清理。

⑤「自我进化」系列 self-improvement、Agent自我更新、memclaw——有人在让 AI 自己学习自己进化，元宇宙套娃。

⑥ 安全部 + 信息内容双保险 kwai-skill-vetter（安全审查）+ content-moderation-assistant（内容审核辅助）——安全合规方向有独立卡位，且风格是全平台最「强硬」的。

二、使用测评

名称

SkillHub截图

链接

使用截图

坑来

![](images/image-05-257d6228.png)

hungry-helper

![](images/image-06-49ee3969.png)

进阶版：

吃什么

![](images/image-07-b35cb23a.png)

**好用，很详细**

快手总部正式休假申请助手

![](images/image-08-8f29b244.png)

![](images/image-09-bc6ed3a2.png)

没有访问权限

花式彩虹屁

![](images/image-10-4e665ad1.png)

**

mario 可以

![](images/image-11-508517dd.png)

![](images/image-12-e4b1f8b1.png)

![](images/image-13-d2369c49.png)

![](images/image-14-dbed18cf.png)

打开让我登陆飞书……

Mario可以

![](images/image-15-5067b438.png)

健康助手

![](images/image-16-ba0670e7.png)

![](images/image-17-d2e57c7a.png)

SBTI

![](images/image-18-bb3eaf36.png)

![](images/image-19-0038944d.png)

![](images/image-20-203c30b5.png)

法律速查手册

![](images/image-21-c1af956d.png)

