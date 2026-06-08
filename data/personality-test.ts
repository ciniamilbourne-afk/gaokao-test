import { TestQuestion } from "../lib/personality-test";

export const personalityTest: TestQuestion[] = [
  // ===== 第一阶段：身份确认与今日热点（Q1-Q6） =====
  {
    no: 1,
    question: "此时此刻，如果要给你的真实身份打个标签，你是？",
    answerOptions: [
      { type: "A", answer: "刚下战场的应届生（对未来既慌又野）", score: { z: "young", t2: 2 } },
      { type: "B", answer: "还在象牙塔的大学生（高三感觉已经是上辈子的事了）", score: { z: "young", t3: 2 } },
      { type: "C", answer: "已经被社会毒打的打工人（每天只想搞钱和退休）", score: { z: "social", t1: 2 } },
      { type: "D", answer: "看着孩子长大的家长（在辅导作业中重温当年的噩梦）", score: { z: "social", t1: 2 } },
    ],
  },
  {
    no: 2,
    question: "今年数学压轴题彻底反套路，出了个没人见过的'跳跃集合'。在成年人的世界里，面对老板/生活突然丢给你的'无套路烂摊子'，你的解题思路是？",
    answerOptions: [
      { type: "A", answer: "像当年解大题一样死磕到底，哪怕写个'解'也要硬刚，把锅扛下来。", score: { t1: 3 } },
      { type: "B", answer: "找规律、钻空子。既然规则全变了，那我就跳跃式解决，绝不按常理出牌。", score: { t2: 3 } },
      { type: "C", answer: "题太难老子就不做了！果断装死或换个赛道，不参与无意义的内耗。", score: { t3: 3 } },
      { type: "D", answer: "在心里把出题人骂一万遍，疯狂内耗，然后边哭边熬夜做完。", score: { t4: 3 } },
    ],
  },
  {
    no: 3,
    question: "今年全国 I 卷作文考了'成长中对某个词语理解的变化'。如果让你选一个词来概括你从毕业到现在的变化，最贴切的是？",
    answerOptions: [
      { type: "A", answer: "【牛马】：以前以为是个搞笑梗，现在发现是我的个人传记纪实文学。", score: { t1: 3 } },
      { type: "B", answer: "【旷野】：以前以为考上大学就是自由，现在只想掀了这工位去真正的旷野。", score: { t2: 3 } },
      { type: "C", answer: "【成功】：以前以为是年薪百万，现在觉得是能准点下班、无病无灾。", score: { t3: 3 } },
      { type: "D", answer: "【遗憾】：总觉得如果当年多选对一道题，现在身边的人会不会完全不一样。", score: { t4: 3 } },
    ],
  },
  {
    no: 4,
    question: "今年上海卷作文探讨了'科技改造世界时，也改变着想象'。在这个 AI 几乎能代替一切的时代，你内心最真实的恐慌（或期待）是？",
    answerOptions: [
      { type: "A", answer: "恐慌：担心自己的技能随时被机器淘汰，每天都在为了保住饭碗而焦虑。", score: { t1: 3 } },
      { type: "B", answer: "期待：AI 赶紧把那些无聊的工作全干了吧，我好安心去摸鱼葛优瘫。", score: { t3: 3 } },
      { type: "C", answer: "无所谓：它再牛也得听拔电源的人的话，老子混江湖靠的是人情世故和手腕。", score: { t2: 3 } },
      { type: "D", answer: "伤感：机器越来越聪明，但能懂我情绪、跟我交心的人却越来越少。", score: { t4: 3 } },
    ],
  },
  {
    no: 5,
    question: "今年物理卷被全网吐槽'像在做阅读理解'，全考真实情境。回看这几年你在社会上的摸爬滚打，你最大的感触是？",
    answerOptions: [
      { type: "A", answer: "只要基础打得牢，再复杂的职场情境我也能熬出头。", score: { t1: 3 } },
      { type: "B", answer: "课本知识屁用没有，全靠我自己在实践中摸索出的野路子。", score: { t2: 3 } },
      { type: "C", answer: "阅读理解太累了，我现在连长篇大论的 PPT 都不想看，只想躺平。", score: { t3: 3 } },
      { type: "D", answer: "生活的情境比物理题复杂多了，人心太难懂了。", score: { t4: 3 } },
    ],
  },
  {
    no: 6,
    question: "这几天考场外，有穿旗袍的爸爸天团，有张桂梅校长凌晨高唱《红梅赞》送考。刷到这些暖心名场面，你的真实感受是？",
    answerOptions: [
      { type: "A", answer: "没啥感觉。成年人的世界只有冰冷的 KPI，感动能抵房贷吗？", score: { t3: 2, t2: 1 } },
      { type: "B", answer: "瞬间破防。总是很容易被这种纯粹的付出击中，眼泪不值钱。", score: { t4: 3 } },
      { type: "C", answer: "极其共情家长。因为我也正承担着家庭重任，知道撑起一把伞有多难。", score: { t1: 3 } },
    ],
  },

  // ===== 第二阶段：青春荒诞图鉴（Q7-Q16） =====
  {
    no: 7,
    question: "当年考完理综/数学，交卷铃响的那一刻，考场百态中你属于哪一种？",
    answerOptions: [
      { type: "A", answer: "'沈腾式'战术后仰：双手抱头，虽然没做完，但气势上我已经稳上清北。", score: { t2: 2, t3: 1 } },
      { type: "B", answer: "'祥林嫂式'抓人对线：在走廊里逮住学霸：'第三题是不是选 C？完了我选了 B！'", score: { t4: 3 } },
      { type: "C", answer: "'地下工作者'做派：假装看风景，其实耳朵竖得像天线偷听别人对答案。", score: { t2: 2, t4: 1 } },
      { type: "D", answer: "'胖东来式'情绪稳定：考完一门扔一门，主打一个道法自然。", score: { t3: 3 } },
    ],
  },
  {
    no: 8,
    question: "身边的人为了保研/拼 KPI，简直像安陵容半夜苦练冰嬉一样拼命，你的真实反应是？",
    answerOptions: [
      { type: "A", answer: "扶我起来！我也能卷，拿回属于我的一切！", score: { t1: 3 } },
      { type: "B", answer: "宁可枝头抱香死，我要准点下班，绝不参与无意义的内耗。", score: { t3: 3 } },
      { type: "C", answer: "你们卷你们的，我化身'卡皮巴拉'，天没塌我就接着泡澡。", score: { t3: 2, t2: 1 } },
      { type: "D", answer: "别管我了，大润发工作了十年的鱼，我的心早已像刀一样冷。", score: { t4: 3 } },
    ],
  },
  {
    no: 9,
    question: "晚自习突然停电，长达十分钟，当时你的真实心理活动是？",
    answerOptions: [
      { type: "A", answer: "狂喜！甚至想带头起哄，砸响一个矿泉水瓶。", score: { t2: 3 } },
      { type: "B", answer: "迅速在黑暗中锁定那个暗恋的人的位置。", score: { t4: 3 } },
      { type: "C", answer: "极其懊恼，我这道大题刚有了思路啊！", score: { t1: 3 } },
      { type: "D", answer: "熟练地往后一靠，双眼一闭，感谢老天赐予的合法睡觉机会。", score: { t3: 3 } },
    ],
  },
  {
    no: 10,
    question: "班主任突然出现在后窗的那个眼神，现在的你回想起来感觉是？",
    answerOptions: [
      { type: "A", answer: "依然会有生理性的脊背发凉，像被狙击手锁定。", score: { t1: 2, t4: 1 } },
      { type: "B", answer: "觉得有点好笑，当年怎么会那么怕一个普通的中年人。", score: { t3: 2, t2: 1 } },
      { type: "C", answer: "挺感激的，没有他盯着，我可能真考不上大学。", score: { t1: 3 } },
      { type: "D", answer: "毫无波澜，我当年坐第一排，后窗不归我管。", score: { t3: 3 } },
    ],
  },
  {
    no: 11,
    question: "高中毕业照按下快门的那一刻，你其实在想什么？",
    answerOptions: [
      { type: "A", answer: "终于解脱了！老子要去拥抱自由！", score: { t2: 3 } },
      { type: "B", answer: "那个谁怎么没跟我站得近一点……", score: { t4: 3 } },
      { type: "C", answer: "突然有点舍不得这个呆了三年的破地方。", score: { t4: 2, t1: 1 } },
      { type: "D", answer: "我的发型乱没乱？今天拍得好不好看？", score: { t3: 2, t4: 1 } },
    ],
  },
  {
    no: 12,
    question: "如果高中可以重来选座位，你其实最想坐在哪里？",
    answerOptions: [
      { type: "A", answer: "只要不换同桌，坐垃圾桶旁边我也愿意。", score: { t4: 3 } },
      { type: "B", answer: "离黑板最近的地方，我想再好好听一堂课。", score: { t1: 3 } },
      { type: "C", answer: "倒数第二排中间，和兄弟/闺蜜们连成一片。", score: { t2: 3 } },
      { type: "D", answer: "自己一个人单桌，清净，不受任何人打扰。", score: { t3: 3 } },
    ],
  },
  {
    no: 13,
    question: "高中时期的周末，你最真实的写照是？",
    answerOptions: [
      { type: "A", answer: "换个地方继续上补习班，比上学还累。", score: { t1: 3 } },
      { type: "B", answer: "睡到日上三竿，然后疯狂打游戏/看剧。", score: { t3: 3 } },
      { type: "C", answer: "和几个死党去街上闲逛、喝奶茶、拍大头贴。", score: { t2: 3 } },
      { type: "D", answer: "在家一边看电视，一边在星期天晚上狂补作业。", score: { t4: 2, t1: 1 } },
    ],
  },
  {
    no: 14,
    question: "当年最害怕被叫到办公室的原因是？",
    answerOptions: [
      { type: "A", answer: "成绩下滑，看着老师语重心长地叹气。", score: { t1: 2, t4: 1 } },
      { type: "B", answer: "纪律问题，比如上课讲话、迟到被抓包。", score: { t2: 2, t3: 1 } },
      { type: "C", answer: "早恋或者有早恋倾向，被老师叫去'喝茶'。", score: { t4: 3 } },
      { type: "D", answer: "从来没去过办公室，我是老师眼里的隐形人。", score: { t3: 3 } },
    ],
  },
  {
    no: 15,
    question: "你觉得高三那年，你喝得最多的是什么？",
    answerOptions: [
      { type: "A", answer: "各种强行续命的黑咖啡和浓茶。", score: { t1: 3 } },
      { type: "B", answer: "课桌上永远装满的温开水。", score: { t3: 3 } },
      { type: "C", answer: "同学请客的快乐水（可乐/奶茶）。", score: { t2: 3 } },
      { type: "D", answer: "妈妈每天熬的、味道奇特的大补汤。", score: { t4: 2, t1: 1 } },
    ],
  },
  {
    no: 16,
    question: "你现在的书架/抽屉里，还保留着高中的什么东西？",
    answerOptions: [
      { type: "A", answer: "一本满是心血的错题本或复习资料。", score: { t1: 3 } },
      { type: "B", answer: "一沓传过的纸条、信件或同学录。", score: { t4: 3 } },
      { type: "C", answer: "当年的校服或者有特殊意义的小物件。", score: { t4: 2, t2: 1 } },
      { type: "D", answer: "早扔干净了，过去就过去了。", score: { t3: 3 } },
    ],
  },

  // ===== 第三阶段：防伪真题大考（Q17-Q26，硬核单选） =====
  {
    no: 17,
    question: "【语文防伪】《出师表》中，诸葛亮用来表明自己临危受命的千古名句是：'受任于败军之际，_________'？",
    answerOptions: [
      { type: "A", answer: "奉命于危难之间（正确，你的语文老师流下了欣慰的泪水）", score: { y: 1, t1: 1 } },
      { type: "B", answer: "挽狂澜于既倒（帅是挺帅的，但你串台了）", score: { t2: 1 } },
      { type: "C", answer: "拔剑四顾心茫然（不要这么悲观嘛）", score: { t4: 1 } },
      { type: "D", answer: "每天都在改 BUG（职场打工人实锤了）", score: { t3: 1 } },
    ],
  },
  {
    no: 18,
    question: "【数学防伪】听到'奇变偶不变'，你脱口而出的是？",
    answerOptions: [
      { type: "A", answer: "符号看象限（满分接头暗号！）", score: { y: 1, t1: 1 } },
      { type: "B", answer: "奇变偶不变（卡壳了……下一句是啥来着？）", score: { t4: 1 } },
      { type: "C", answer: "大于取两边，小于取中间（你把不等式缝合进来了）", score: { t2: 1 } },
      { type: "D", answer: "这是一句什么咒语？", score: { t3: 1 } },
    ],
  },
  {
    no: 19,
    question: "【英语防伪】在各种完形填空中看到'nevertheless'这个词，它的意思是？",
    answerOptions: [
      { type: "A", answer: "然而，不过（英语语感依然在线）", score: { y: 1, t1: 1 } },
      { type: "B", answer: "永远不（被前缀 never 骗了吧）", score: { t4: 1 } },
      { type: "C", answer: "除非（这是 unless！）", score: { t2: 1 } },
      { type: "D", answer: "别考我了，我现在连 abandon 都不一定拼得对。", score: { t3: 1 } },
    ],
  },
  {
    no: 20,
    question: "【物理防伪】当年闭着眼睛都会背的牛顿第二定律公式 F=ma，现在对你来说代表什么？",
    answerOptions: [
      { type: "A", answer: "力等于质量乘以加速度（真·理综大佬）", score: { y: 1, t1: 1 } },
      { type: "B", answer: "F 是 Father，m 是 mother，a 是 apple？（英语老师看了想打人）", score: { t4: 1 } },
      { type: "C", answer: "代表我现在的工作：Freak out（崩溃）= Monday（周一）+ Anxiety（焦虑）。", score: { t3: 1 } },
      { type: "D", answer: "不认识。我现在只认得工资条上的数字。", score: { t2: 1 } },
    ],
  },
  {
    no: 21,
    question: "【生物防伪】被称为人体细胞'动力工厂'，主要提供能量的细胞器是？",
    answerOptions: [
      { type: "A", answer: "线粒体（正解！）", score: { y: 1, t1: 1 } },
      { type: "B", answer: "叶绿体（你要是能光合作用还能省点饭钱）", score: { t3: 1 } },
      { type: "C", answer: "核糖体（这是合成蛋白质的）", score: { t2: 1 } },
      { type: "D", answer: "我的动力工厂早就停工了，现在全靠冰美式。", score: { t4: 1 } },
    ],
  },
  {
    no: 22,
    question: "【历史防伪】中国古代科举制度正式创立于哪个朝代？",
    answerOptions: [
      { type: "A", answer: "隋朝（历史常识稳稳拿捏）", score: { y: 1, t1: 1 } },
      { type: "B", answer: "唐朝（唐朝是完善，不是创立哦）", score: { t4: 1 } },
      { type: "C", answer: "汉朝（汉朝那是察举制）", score: { t2: 1 } },
      { type: "D", answer: "清朝（大清亡了，醒醒）", score: { t3: 1 } },
    ],
  },
  {
    no: 23,
    question: "【地理防伪】在地球公转过程中，北半球夏至日时，太阳直射点位于？",
    answerOptions: [
      { type: "A", answer: "北回归线（正解！你的空间思维依然清晰）", score: { y: 1, t1: 1 } },
      { type: "B", answer: "赤道（那是春/秋分）", score: { t4: 1 } },
      { type: "C", answer: "南回归线（那是冬至）", score: { t3: 1 } },
      { type: "D", answer: "直射在我不愿上班的工位上。", score: { t2: 1 } },
    ],
  },
  {
    no: 24,
    question: "【政治防伪】马克思主义政治经济学中，商品的两个基本属性是？",
    answerOptions: [
      { type: "A", answer: "使用价值和价值（满分！刻在文科生 DNA 里）", score: { y: 1, t1: 1 } },
      { type: "B", answer: "价格和供求关系（这是现象，不是属性）", score: { t2: 1 } },
      { type: "C", answer: "质量和品牌（那是电商直播间的属性）", score: { t3: 1 } },
      { type: "D", answer: "贵和买不起。", score: { t4: 1 } },
    ],
  },
  {
    no: 25,
    question: "【化学地狱题】关于生活中常见的物质，下列说法正确的是？",
    answerOptions: [
      { type: "A", answer: "铁锅生锈主要发生的是电化学腐蚀中的'吸氧腐蚀'（正解！你这脑子是服务器吧）", score: { y: 1, t1: 1 } },
      { type: "B", answer: "纯净的矿泉水绝对不含任何离子（水自身会微弱电离，理综全还给老师了）", score: { t4: 1 } },
      { type: "C", answer: "'白色污染'指的是满天乱飞的废纸（那是塑料啊喂）", score: { t3: 1 } },
      { type: "D", answer: "炒菜时锅里起火，应该立刻倒水进去（你是不是想把厨房炸了？）", score: { t2: 1 } },
    ],
  },
  {
    no: 26,
    question: "【终极拷问】如果现在让你手写一篇 800 字的高考作文，你的真实反应是？",
    answerOptions: [
      { type: "A", answer: "稍微构思一下，依然能洋洋洒洒写完，文采依旧。", score: { y: 1, t1: 1 } },
      { type: "B", answer: "只能勉强凑出 400 字，还全是车轱辘话。", score: { t4: 1 } },
      { type: "C", answer: "提笔忘字，大概连 800 个字都写不清楚了。", score: { t3: 1 } },
      { type: "D", answer: "呼叫 AI 工具：帮我生成一篇《历久弥新》的议论文！", score: { t2: 1 } },
    ],
  },

  // ===== 第四阶段：现实碰撞与终极觉察（Q27-Q36） =====
  {
    no: 27,
    question: "如果用一个经典形象总结你从'高中到社会'的心态转变，最贴切的是？",
    answerOptions: [
      { type: "A", answer: "从高中的'哪吒闹海（我命由我不由天）'，变成了现在的'唐僧取经（随缘吧）'。", score: { t3: 2, t1: 1 } },
      { type: "B", answer: "从高中的'江户川柯南（试图看透真相）'，变成了现在的'毛利小五郎（糊涂点挺好）'。", score: { t3: 3 } },
      { type: "C", answer: "依然是热血动漫主角，无论现实多难，心里的那团火一直没灭。", score: { t2: 3 } },
      { type: "D", answer: "曾经是被设定的'NPC'，现在终于觉醒，想去做不被定义的自己。", score: { t2: 2, t4: 1 } },
    ],
  },
  {
    no: 28,
    question: "面对生活中那些'无解'的难题（比如复杂的职场人际、中年危机），你现在的解题思路是？",
    answerOptions: [
      { type: "A", answer: "像当年解数学大题一样，步步为营，死磕到底。", score: { t1: 3 } },
      { type: "B", answer: "绕过去，不去硬碰硬，寻找利益最大化的捷径。", score: { t2: 3 } },
      { type: "C", answer: "坦然接受有些题就是没有答案，允许一切发生。", score: { t3: 3 } },
      { type: "D", answer: "找有经验的人请教，借力打力。", score: { t1: 2, t2: 1 } },
    ],
  },
  {
    no: 29,
    question: "成年人的世界里，最让你感到疲惫的是什么？",
    answerOptions: [
      { type: "A", answer: "永远做不完的工作和随时可能被替代的焦虑。", score: { t1: 3 } },
      { type: "B", answer: "复杂的人际交往和必须戴上的社交面具。", score: { t4: 3 } },
      { type: "C", answer: "房贷、养家和兜底生活带来的沉重现实压力。", score: { t1: 2, t4: 1 } },
      { type: "D", answer: "发现自己越来越难对一件事产生纯粹的热情。", score: { t4: 3 } },
    ],
  },
  {
    no: 30,
    question: "假设现在有一个完全属于你的'间隔年（Gap Year）'，你最想做的是？",
    answerOptions: [
      { type: "A", answer: "去一个没人认识的地方，开一家小店，重归生活烟火。", score: { t3: 2, t2: 1 } },
      { type: "B", answer: "考一个含金量极高的证书或者跨界学新技术，完成职业转型。", score: { t1: 3 } },
      { type: "C", answer: "什么都不干，把这几年缺的觉全补回来，彻底放空。", score: { t3: 3 } },
      { type: "D", answer: "离职休息，去弥补当年因为世俗而错过的一些疯狂的探索。", score: { t2: 3 } },
    ],
  },
  {
    no: 31,
    question: "回看这几年，你觉得学历带给你的影响，最真实的情况是？",
    answerOptions: [
      { type: "A", answer: "它是一块敲门砖，没有它我连入场的资格都没有。", score: { t1: 3 } },
      { type: "B", answer: "它给了我一种底层逻辑和思维方式，这比知识本身更重要。", score: { t1: 2, t2: 1 } },
      { type: "C", answer: "它其实成了一种枷锁，让我放不下身段去尝试那些'不体面'但有机会的事。", score: { t2: 3 } },
      { type: "D", answer: "它的红利已经吃完了，现在完全靠自己在社会上摸爬滚打的街头智慧。", score: { t2: 3 } },
    ],
  },
  {
    no: 32,
    question: "夜深人静时，回想起青春，你最真实的遗憾是？",
    answerOptions: [
      { type: "A", answer: "当年如果再拼一点，现在的起点会不会完全不同？", score: { t1: 2, t4: 1 } },
      { type: "B", answer: "没能跟那个惊艳了时光的人走到最后。", score: { t4: 3 } },
      { type: "C", answer: "高中太压抑了，没能好好享受肆意妄为的青春。", score: { t2: 3 } },
      { type: "D", answer: "没有任何遗憾，走过的每一步都算数。", score: { t3: 3 } },
    ],
  },
  {
    no: 33,
    question: "如果有一台时光机能回到填志愿那一天，你会？",
    answerOptions: [
      { type: "A", answer: "毫不犹豫地撕掉志愿表，一定要选一个能搞钱/有前途的硬核专业。", score: { t2: 3 } },
      { type: "B", answer: "依然选现在的路，虽然辛苦，但这是我自己一步步走出来的。", score: { t1: 3 } },
      { type: "C", answer: "选自己真正热爱的那个冷门方向，不再为了迎合世俗和父母妥协。", score: { t2: 2, t4: 1 } },
      { type: "D", answer: "拦住当年的自己：别瞎填！必须要实事求是地搞清楚每个专业的真相！", score: { t1: 2, t2: 1 } },
    ],
  },
  {
    no: 34,
    question: "当你看到现在的孩子还在为了分数拼命内卷时，你的心情是？",
    answerOptions: [
      { type: "A", answer: "心疼，但也知道这是出身普通的人突围必须经历的淬炼。", score: { t1: 3 } },
      { type: "B", answer: "焦虑，担心自己的孩子将来也要受这种苦。", score: { t4: 3 } },
      { type: "C", answer: "释怀，一代人有一代人的苦，也有他们自己的旷野。", score: { t3: 3 } },
      { type: "D", answer: "庆幸，幸好老子早就考完了！", score: { t3: 2, t2: 1 } },
    ],
  },
  {
    no: 35,
    question: "经历了这些年，你觉得'高考'在你生命里最终沉淀成了什么？",
    answerOptions: [
      { type: "A", answer: "一个证明了我拥有极强忍耐力和抗压能力的勋章。", score: { t1: 3 } },
      { type: "B", answer: "一场漫长的修行，分数不再重要，纯粹付出的感觉成了内心的支撑。", score: { t1: 2, t4: 1 } },
      { type: "C", answer: "一道巨大的分水岭，它客观上决定了我现在的朋友圈和生活圈。", score: { t1: 2, t2: 1 } },
      { type: "D", answer: "一段我已经彻底放下、只想搞好当下生活的青春往事。", score: { t3: 3 } },
    ],
  },
  {
    no: 36,
    question: "测试即将结束，如果要送给此时此刻、历经千帆的自己一句话，你会选？",
    answerOptions: [
      { type: "A", answer: "关关难过关关过，前路漫漫亦灿灿。", score: { t1: 3 } },
      { type: "B", answer: "允许一切发生，做不被定义的风。", score: { t2: 3 } },
      { type: "C", answer: "只要心里有火，哪里都是旷野。", score: { t2: 2, t4: 1 } },
      { type: "D", answer: "别想那么多了，今晚先好好吃顿饭！", score: { t3: 3 } },
    ],
  },
];
