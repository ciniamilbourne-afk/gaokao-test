import { TestQuestion } from "../lib/personality-test";

export const personalityTest: TestQuestion[] = [
  // ===== 第一阶段：身份与热点暴击（Q1-Q3） =====
  {
    no: 1,
    question: "此时此刻，你的真实身份是？",
    answerOptions: [
      { type: "A", answer: "刚考完的应届生（对未来既慌又野）", score: { z: "young" } },
      { type: "B", answer: "大学生（高三感觉已经是上辈子的事了）", score: { z: "young" } },
      { type: "C", answer: "已经被社会毒打的打工人（每天只想搞钱和退休）", score: { z: "social" } },
      { type: "D", answer: "家长（在辅导作业中重温当年的噩梦）", score: { z: "social" } },
    ],
  },
  {
    no: 2,
    question: "看到今年数学'跳跃集合'把考生考破防，你的第一反应？",
    answerOptions: [
      { type: "A", answer: "庆幸：幸好老子早生几年，这卷子我进去得被抬出来。", score: { t1: 3 } },
      { type: "B", answer: "吃瓜：只要不用我考，看别人破防就是最大的乐子。", score: { t3: 3 } },
      { type: "C", answer: "不屑：考得好不如踩中时代风口，我已经看透了。", score: { t2: 3 } },
      { type: "D", answer: "怀念：看到考场外的画面，突然想起了当年的死党。", score: { t4: 3 } },
    ],
  },
  {
    no: 3,
    question: "今年高考作文讲'词语理解的变化'。毕业至今，你感触最深的词是？",
    answerOptions: [
      { type: "A", answer: "【牛马】：以前以为是搞笑梗，现在是我的个人传记。", score: { t1: 3 } },
      { type: "B", answer: "【成功】：以前以为是年薪百万，现在觉得是准点下班。", score: { t3: 3 } },
      { type: "C", answer: "【旷野】：以前以为考上大学就是自由，现在只想掀了工位去旷野。", score: { t2: 3 } },
      { type: "D", answer: "【遗憾】：总觉得当年如果多对一道题，身边的人会不会不一样。", score: { t4: 3 } },
    ],
  },

  // ===== 第二阶段：青春直觉快答（Q4-Q10） =====
  {
    no: 4,
    question: "考完最难的一科，交卷铃响时你在干嘛？",
    answerOptions: [
      { type: "A", answer: "疯狂检查答题卡名字涂没涂。", score: { t1: 3 } },
      { type: "B", answer: "'沈腾式'战术后仰，假装自己已经稳上清北。", score: { t2: 3 } },
      { type: "C", answer: "已经在盘算中午吃什么、晚上去哪通宵了。", score: { t3: 3 } },
      { type: "D", answer: "冲出去逮住学霸对答案：'第三题是不是选 C？！'", score: { t4: 3 } },
    ],
  },
  {
    no: 5,
    question: "晚自习突然停电 10 分钟，你的第一反应？",
    answerOptions: [
      { type: "A", answer: "极其懊恼，这道大题刚有思路啊！", score: { t1: 3 } },
      { type: "B", answer: "狂喜！带头起哄，甚至想砸个矿泉水瓶。", score: { t2: 3 } },
      { type: "C", answer: "熟练地往后一靠，闭眼睡合法的 10 分钟觉。", score: { t3: 3 } },
      { type: "D", answer: "迅速在黑暗中锁定暗恋那个人的位置。", score: { t4: 3 } },
    ],
  },
  {
    no: 6,
    question: "班主任突然出现在后窗，你现在的感觉是？",
    answerOptions: [
      { type: "A", answer: "依然会有生理性的脊背发凉。", score: { t1: 3 } },
      { type: "B", answer: "挺感激的，没他盯着我真考不上大学。", score: { t3: 3 } },
      { type: "C", answer: "毫无波澜，甚至有点想笑当年那么怂。", score: { t2: 3 } },
      { type: "D", answer: "瞬间想起了当年陪我一起被抓包的同桌。", score: { t4: 3 } },
    ],
  },
  {
    no: 7,
    question: "毕业照按下快门的那一刻，你在想什么？",
    answerOptions: [
      { type: "A", answer: "终于解脱了！老子要去拥抱自由！", score: { t2: 3 } },
      { type: "B", answer: "以后一定要赚大钱，惊艳所有人！", score: { t1: 3 } },
      { type: "C", answer: "我的发型乱没乱？今天拍得好不好看？", score: { t3: 3 } },
      { type: "D", answer: "那个谁怎么没站我旁边……", score: { t4: 3 } },
    ],
  },
  {
    no: 8,
    question: "身边同学为了保研/升职卷得头破血流，你？",
    answerOptions: [
      { type: "A", answer: "咬牙加入战局，拿回属于我的一切！", score: { t1: 3 } },
      { type: "B", answer: "找漏洞、寻捷径，主打一个弯道超车。", score: { t2: 3 } },
      { type: "C", answer: "准点下班，绝不参与无意义的内耗。", score: { t3: 3 } },
      { type: "D", answer: "看着他们觉得心累，越来越不想说话。", score: { t4: 3 } },
    ],
  },
  {
    no: 9,
    question: "你觉得高三那年，你喝得最多的是什么？",
    answerOptions: [
      { type: "A", answer: "各种强行续命的黑咖啡和浓茶。", score: { t1: 3 } },
      { type: "B", answer: "妈妈每天熬的、味道奇特的十全大补汤。", score: { t4: 3 } },
      { type: "C", answer: "同学请客的可乐和奶茶。", score: { t3: 3 } },
      { type: "D", answer: "课桌上永远装满的温开水。", score: { t2: 3 } },
    ],
  },
  {
    no: 10,
    question: "你现在的书架/抽屉里，还留着高中的什么？",
    answerOptions: [
      { type: "A", answer: "一本满是心血的错题本/笔记。", score: { t1: 3 } },
      { type: "B", answer: "早扔干净了，过去就过去了。", score: { t2: 3 } },
      { type: "C", answer: "当年的校服/校牌/准考证。", score: { t3: 3 } },
      { type: "D", answer: "传过的纸条/信件/同学录。", score: { t4: 3 } },
    ],
  },

  // ===== 第三阶段：真题极速防伪（Q11-Q20） =====
  // 后台逻辑：选A记1分，其他计0分
  {
    no: 11,
    question: "《出师表》：'受任于败军之际，_________'？",
    answerOptions: [
      { type: "A", answer: "奉命于危难之间（属于是肌肉记忆脱口而出了）", score: { y: 1 } },
      { type: "B", answer: "挽狂澜于既倒（虽然不太确定，但这句听起来很霸气）", score: { y: 0 } },
      { type: "C", answer: "每天都在改 BUG（不要问，问就是打工人的真实写照）", score: { y: 0 } },
    ],
  },
  {
    no: 12,
    question: "听到'奇变偶不变'，你的下一句是？",
    answerOptions: [
      { type: "A", answer: "符号看象限（刻在 DNA 里的暗号，对不上就是内鬼）", score: { y: 1 } },
      { type: "B", answer: "大于取两边（主打一个顺口溜大乱炖，押韵就行）", score: { y: 0 } },
      { type: "C", answer: "到底变不变？（大脑已经死机，数学早已还给老师）", score: { y: 0 } },
    ],
  },
  {
    no: 13,
    question: "完形填空常客'nevertheless'意思是？",
    answerOptions: [
      { type: "A", answer: "然而，不过（当年做阅读理解只要看见它就选）", score: { y: 1 } },
      { type: "B", answer: "永远不，绝不（看着长得像 never 的亲戚，应该就是它了）", score: { y: 0 } },
      { type: "C", answer: "连 abandon 都不认识了（别考了，我现在全靠翻译软件）", score: { y: 0 } },
    ],
  },
  {
    no: 14,
    question: "牛顿第二定律公式 F=ma 代表什么？",
    answerOptions: [
      { type: "A", answer: "力 = 质量 × 加速度（脑子里突然闪过了当年物理老师的脸）", score: { y: 1 } },
      { type: "B", answer: "F是Father，m是mother，a是apple？（虽然离谱，但非常合理）", score: { y: 0 } },
      { type: "C", answer: "现在的我：Freak out(崩溃) = Monday(周一) + Anxiety(焦虑)", score: { y: 0 } },
    ],
  },
  {
    no: 15,
    question: "细胞的'动力工厂'是哪个细胞器？",
    answerOptions: [
      { type: "A", answer: "线粒体（生物书上的那张图，到现在都还有印象）", score: { y: 1 } },
      { type: "B", answer: "叶绿体（要是我自己能光合作用，每天还能省顿饭钱）", score: { y: 0 } },
      { type: "C", answer: "动力工厂早就停工了（现在的我全靠冰美式强行供能）", score: { y: 0 } },
    ],
  },
  {
    no: 16,
    question: "中国古代科举制度正式创立于？",
    answerOptions: [
      { type: "A", answer: "隋朝（历史老师当年的敲黑板声还在耳边回荡）", score: { y: 1 } },
      { type: "B", answer: "唐朝（大唐盛世，感觉这种大制度必须是唐朝的）", score: { y: 0 } },
      { type: "C", answer: "大清都亡了（我哪还记得这些，能记住今天星期几就不错了）", score: { y: 0 } },
    ],
  },
  {
    no: 17,
    question: "北半球夏至日，太阳直射点在？",
    answerOptions: [
      { type: "A", answer: "北回归线（脑海中立刻浮现出那颗倾斜的地球仪）", score: { y: 1 } },
      { type: "B", answer: "赤道（感觉太阳这种东西，就应该老老实实待在中间）", score: { y: 0 } },
      { type: "C", answer: "这不重要（重要的是阳光正好直射在我不想上班的工位上）", score: { y: 0 } },
    ],
  },
  {
    no: 18,
    question: "商品的两个基本属性是？",
    answerOptions: [
      { type: "A", answer: "使用价值和价值（当年早读课背了无数遍的考点）", score: { y: 1 } },
      { type: "B", answer: "价格和供求（虽然拿不准，但听起来很有经济学专家的味道）", score: { y: 0 } },
      { type: "C", answer: "贵，和买不起（这才是商品对我这个打工人展示出的唯一属性）", score: { y: 0 } },
    ],
  },
  {
    no: 19,
    question: "铁锅生锈主要属于哪种化学腐蚀？",
    answerOptions: [
      { type: "A", answer: "吸氧腐蚀（虽然不知道为什么，但这个词就是很熟）", score: { y: 1 } },
      { type: "B", answer: "析氢腐蚀（带个氢字，直觉告诉我它比较高级）", score: { y: 0 } },
      { type: "C", answer: "谁管它什么腐蚀（我的铁锅早就落灰了，我只点外卖）", score: { y: 0 } },
    ],
  },
  {
    no: 20,
    question: "现在让你手写 800 字高考作文，你会？",
    answerOptions: [
      { type: "A", answer: "稍微构思一下，依然能洋洋洒洒写完。（文采依旧犀利）", score: { y: 1 } },
      { type: "B", answer: "提笔忘字，大概只能凑出 400 字的车轱辘话。（大脑彻底空空）", score: { y: 0 } },
      { type: "C", answer: "呼叫 AI 工具：帮我生成一篇《历久弥新》的议论文！（全面拥抱科技）", score: { y: 0 } },
    ],
  },

  // ===== 第四阶段：现实暴击与灵魂对话（Q21-Q28） =====
  {
    no: 21,
    question: "如果用一个形象总结你从'高中到社会'的心态转变？",
    answerOptions: [
      { type: "A", answer: "从'哪吒闹海'变成了'唐僧取经（随缘吧）'。", score: { t1: 3 } },
      { type: "B", answer: "从'被设定的NPC'变成了'想觉醒的玩家'。", score: { t2: 3 } },
      { type: "C", answer: "依然是'热血动漫主角'，心里的火一直没灭。", score: { t4: 3 } },
      { type: "D", answer: "变成了每天只想退休的'卡皮巴拉（水豚）'。", score: { t3: 3 } },
    ],
  },
  {
    no: 22,
    question: "面对生活中无解的烂摊子，你现在的策略是？",
    answerOptions: [
      { type: "A", answer: "像解大题一样死磕到底。", score: { t1: 3 } },
      { type: "B", answer: "绕过去找捷径，主打利益最大化。", score: { t2: 3 } },
      { type: "C", answer: "坦然接受，允许一切发生。", score: { t3: 3 } },
      { type: "D", answer: "找人疯狂吐槽，疯狂内耗。", score: { t4: 3 } },
    ],
  },
  {
    no: 23,
    question: "成年人的世界，最让你感到疲惫的是？",
    answerOptions: [
      { type: "A", answer: "随时可能被替代的饭碗焦虑。", score: { t1: 3 } },
      { type: "B", answer: "房贷、车贷和永远赚不够的钱。", score: { t2: 3 } },
      { type: "C", answer: "必须戴上的社交面具和人情世故。", score: { t3: 3 } },
      { type: "D", answer: "发现自己失去了对事物的纯粹热情。", score: { t4: 3 } },
    ],
  },
  {
    no: 24,
    question: "看到当年成绩不如你的人，现在混得比你好，你？",
    answerOptions: [
      { type: "A", answer: "焦虑反思，自己到底哪一步走错了。", score: { t1: 3 } },
      { type: "B", answer: "暗暗较劲，准备换个赛道赢回来。", score: { t2: 3 } },
      { type: "C", answer: "毫无波澜，各人有各命。", score: { t3: 3 } },
      { type: "D", answer: "真心祝福，但也感叹造化弄人。", score: { t4: 3 } },
    ],
  },
  {
    no: 25,
    question: "夜深人静回想青春，你最真实的遗憾是？",
    answerOptions: [
      { type: "A", answer: "当年如果再拼一点，起点会不会不一样？", score: { t1: 3 } },
      { type: "B", answer: "当年选错了专业/入错了行！", score: { t2: 3 } },
      { type: "C", answer: "没有任何遗憾，都是经历。", score: { t3: 3 } },
      { type: "D", answer: "没跟那个惊艳的人走到最后。", score: { t4: 3 } },
    ],
  },
  {
    no: 26,
    question: "如果有时光机回到填志愿那天，你会？",
    answerOptions: [
      { type: "A", answer: "撕掉志愿表，必选能搞钱的硬核专业。", score: { t2: 3 } },
      { type: "B", answer: "拦住自己：别瞎填！弄懂专业的真相再报！", score: { t1: 3 } },
      { type: "C", answer: "依然选现在的路，绝不后悔。", score: { t3: 3 } },
      { type: "D", answer: "选真正热爱的冷门方向，不再讨好父母。", score: { t4: 3 } },
    ],
  },
  {
    no: 27,
    question: "经历了这些年，'高考'在你生命里算什么？",
    answerOptions: [
      { type: "A", answer: "一个证明我抗压能力的勋章。", score: { t1: 3 } },
      { type: "B", answer: "一道决定我现在圈子和见识的分水岭。", score: { t2: 3 } },
      { type: "C", answer: "一段早已放下、只想搞好当下的青春往事。", score: { t3: 3 } },
      { type: "D", answer: "一场纯粹付出的修行，过程比分数重要。", score: { t4: 3 } },
    ],
  },
  {
    no: 28,
    question: "最后，送给现在的自己一句话，你会选？",
    answerOptions: [
      { type: "A", answer: "关关难过关关过，前路漫漫亦灿灿。", score: { t1: 3 } },
      { type: "B", answer: "只要心里有火，哪里都是旷野。", score: { t2: 3 } },
      { type: "C", answer: "允许一切发生，做不被定义的风。", score: { t3: 3 } },
      { type: "D", answer: "别想那么多了，今晚先吃顿好的！", score: { t4: 3 } },
    ],
  },
];
