// MBTI类型对应的诗人描述
const poetDescriptions = {
            "ISTJ": {
                poet: "钟离",
                description: "「契约既成，食言者，当受食岩之罚！」\n你像璃月往生堂客卿钟离，典型的老干部性格，严谨守序，细节拉满，连点单都要报出精确配比。做事一板一眼，答应的事绝对做到，主打一个「言出必行，行必果」。看似高冷不好接近，实则内心柔软，会默默记住身边人的小喜好，只是表达爱的方式是「给你递一杯温茶，而不是说一句情话」。人生信条：无规矩不成方圆，摸鱼是不可能的，这辈子都不可能的。"
            },
            "ISFJ": {
                poet: "纳西妲",
                description: "「没关系的，我会陪着你」\n你像须弥草神纳西妲，温柔治愈系天花板，共情力拉满，总能精准捕捉到别人的情绪变化。不善争抢，习惯默默付出，哪怕自己受点委屈，也会优先顾及别人的感受。看似软萌，实则内心强大，会用自己的方式守护在意的人，主打一个「温柔的铠甲」。别人难过时你是最佳倾听者，自己难过时却习惯自己消化，小天使本使没错了！"
            },
            "INFJ": {
                poet: "雷电将军",
                description: "「追求永恒，乃是吾毕生之愿」\n你像稻妻雷电将军，外表清冷疏离，内心却藏着极致的执着与温柔。有自己的精神世界，不被世俗理解也无所谓，主打一个「精神上的孤勇者」。看似冷漠，实则对在意的人极度护短，为了信仰可以义无反顾。既能做到「一刀斩尽世间邪祟」的霸气，也能有「想和你一起看稻妻的樱花」的细腻，温柔与刚烈并存的矛盾体。"
            },
            "INTJ": {
                poet: "散兵/流浪者",
                description: "「世人皆愚，唯我独醒」\n你像流浪者，孤高清醒，智商在线，不屑于迎合任何人，主打一个「人间清醒天花板」。习惯用理性解构一切，做事有明确的目标和规划，从不做无意义的事。嘴硬心软，嘴上说着「关我屁事」，身体却很诚实地帮人解决问题。不被理解也不在乎，反正你知道自己要走的路，哪怕孤身一人，也能走出属于自己的道，傲娇又强大的智性恋天菜。"
            },
            "ISTP": {
                poet: "枫原万叶",
                description: "「一叶知秋，随心而行」\n你像枫原万叶，佛系淡然，随遇而安，主打一个「人间过客，自在如风」。不喜喧嚣，喜欢独处，一个人看风景、吹吹风就能治愈一切。动手能力超强，遇事冷静不慌，总能用最简单的方法解决问题。看似佛系，实则有自己的底线，「事不关己高高挂起，触及底线直接拔刀」，活得通透又自由，佛系但不摆烂。"
            },
            "ISFP": {
                poet: "温迪",
                description: "「风会带走一切，也会带来一切」\n你像蒙德风神温迪，佛系摆烂，热爱自由，主打一个「人生苦短，及时行乐」。不喜欢被束缚，讨厌条条框框，做事全凭心情，摸鱼小能手。看似吊儿郎当，实则内心细腻，能感受到风的情绪，也能读懂别人的心事。喜欢音乐、美食、美景，人生信条：开心最重要，其他的都是浮云，摆烂但不躺平，自由至上。"
            },
            "INFP": {
                poet: "神里绫华",
                description: "「愿化作樱花，伴你左右」\n你像稻妻神里家大小姐绫华，温柔敏感，极致浪漫，内心住着一个小公主。感性大于理性，做事全凭心意，容易被小美好打动，也容易emo。不善表达自己的真实情绪，习惯把温柔留给别人，把孤独留给自己。看似优雅端庄，实则有一颗渴望自由的心，「想和你一起看樱花飘落，想和你一起逛庙会」，浪漫到骨子里的小哭包。"
            },
            "INTP": {
                poet: "艾尔海森",
                description: "「麻烦的人际关系，不如看书」\n你像须弥大书记官艾尔海森，社恐天花板，智商碾压，主打一个「人类的悲欢并不相通，我只觉得他们吵闹」。喜欢独处，沉迷知识的海洋，对无聊的人际关系毫无兴趣。做事极度理性，逻辑清晰，说话直来直去，容易无意间得罪人，但自己完全没察觉。人生信条：看书比社交有趣，搞研究比谈恋爱香，智性恋天花板，社恐但不自卑。"
            },
            "ESTP": {
                poet: "胡桃",
                description: "「往生堂第七十七代堂主，胡桃，参上！」\n你像璃月往生堂胡桃，社牛天花板，古灵精怪，主打一个「人生苦短，必须搞怪」。精力旺盛，喜欢热闹，走到哪里哪里就有欢声笑语，自带搞笑buff。做事随心所欲，不按常理出牌，经常语出惊人，让人哭笑不得。看似没心没肺，实则内心善良，重情重义，「朋友有难，两肋插刀」，搞笑女/男的外表下藏着一颗温暖的心。"
            },
            "ESFP": {
                poet: "宵宫",
                description: "「烟花易逝，人情长存」\n你像稻妻长野原烟花店店主宵宫，阳光开朗，热情似火，主打一个「人间小太阳，温暖所有人」。社牛属性拉满，喜欢交朋友，走到哪里都能和人打成一片。热爱生活，喜欢一切美好的事物，总能把平凡的日子过得热热闹闹。看似大大咧咧，实则心思细腻，会记住每个人的生日，会给身边的人准备小惊喜，小太阳本阳，治愈一切不开心。"
            },
            "ENFP": {
                poet: "派蒙",
                description: "「应急食品？你才是应急食品！」\n你像旅行者的伙伴派蒙，古灵精怪，活泼可爱，主打一个「话痨小天使，行走的表情包」。好奇心拉满，对一切新鲜事物都感兴趣，脑子里有十万个为什么。社牛属性拉满，不管和谁都能聊得来，自带萌点。看似贪吃又话痨，实则是旅行者最靠谱的伙伴，关键时刻总能给出神助攻，可爱又靠谱的小话痨，谁能不爱！"
            },
            "ENTP": {
                poet: "达达利亚",
                description: "「来和我打一架吧！」\n你像至冬愚人众执行官达达利亚，热血上头，胜负欲拉满，主打一个「打架使我快乐，挑战使我兴奋」。性格外向，喜欢交朋友，更喜欢找对手，做事风风火火，说干就干。看似冲动，实则有勇有谋，战斗时智商在线，总能想出各种战术。人生信条：生命在于运动，挑战在于拼搏，热血少年本少，永远充满斗志。"
            },
            "ESTJ": {
                poet: "琴",
                description: "「为了蒙德，我将全力以赴」\n你像蒙德西风骑士团代理团长琴，责任心拉满，干练果断，主打一个「工作狂天花板，蒙德守护者」。做事雷厉风行，有规划有组织，把骑士团管理得井井有条。看似严肃，实则内心柔软，关心每一个蒙德市民，也关心自己的伙伴。人生信条：责任大于一切，工作第一，摸鱼可耻，妥妥的职场女强人/男，靠谱到让人放心。"
            },
            "ESFJ": {
                poet: "芭芭拉",
                description: "「芭芭拉，闪耀登场！」\n你像蒙德偶像芭芭拉，温柔开朗，热心肠，主打一个「人间小太阳，蒙德活雷锋」。社牛属性拉满，喜欢帮助别人，看到别人有困难就忍不住上前帮忙。性格温柔，说话轻声细语，唱歌超好听，是蒙德所有人的小偶像。看似娇弱，实则内心强大，为了粉丝可以拼尽全力，温柔又热心，小偶像本像，治愈一切不开心。"
            },
            "ENFJ": {
                poet: "迪卢克",
                description: "「蒙德的和平，由我守护」\n你像蒙德晨曦酒庄庄主迪卢克，外冷内热，责任感拉满，主打一个「默默守护的骑士，蒙德的暗夜英雄」。性格外向，有领导力，身边总有一群追随者，做事果断，有勇有谋。看似高冷，实则内心柔软，关心蒙德的每一个人，默默为蒙德付出，从不求回报。人生信条：能力越大，责任越大，守护在意的人，义不容辞，妥妥的霸道总裁，安全感拉满。"
            },
            "ENTJ": {
                poet: "凝光",
                description: "「璃月的未来，由我掌控」\n你像璃月天权星凝光，霸气侧漏，格局拉满，主打一个「璃月女强人，商业天花板」。性格强势，有领导力，做事雷厉风行，说一不二，把璃月的经济管理得井井有条。智商在线，情商也在线，能言善辩，总能把一切掌握在手中。人生信条：成大事者，不拘小节，我的人生我做主，妥妥的霸道女总裁，气场两米八。"
            }
        };

const data = {
    questions: [
        { id: 1, dimension: "EI", text: "社交聚会中，你更容易活跃气氛。", scoreA: "E", scoreB: "I" },
        { id: 2, dimension: "EI", text: "遇到烦心事，你更愿意自己消化。", scoreA: "E", scoreB: "I" },
        { id: 3, dimension: "EI", text: "长时间社交后你会疲惫，需要独处。", scoreA: "E", scoreB: "I" },
        { id: 4, dimension: "EI", text: "你习惯主动认识新朋友。", scoreA: "E", scoreB: "I" },
        { id: 5, dimension: "EI", text: "你更喜欢在家安静过周末。", scoreA: "E", scoreB: "I" },

        { id: 6, dimension: "SN", text: "你更关注现实细节。", scoreA: "S", scoreB: "N" },
        { id: 7, dimension: "SN", text: "学习更在意理论与未来可能。", scoreA: "S", scoreB: "N" },
        { id: 8, dimension: "SN", text: "你更相信事实经验。", scoreA: "S", scoreB: "N" },
        { id: 9, dimension: "SN", text: "做事喜欢按步骤来。", scoreA: "S", scoreB: "N" },
        { id: 10, dimension: "SN", text: "你常关注未来可能性。", scoreA: "S", scoreB: "N" },

        { id: 11, dimension: "TF", text: "决策时你更依赖逻辑。", scoreA: "T", scoreB: "F" },
        { id: 12, dimension: "TF", text: "处理矛盾优先顾及他人感受。", scoreA: "T", scoreB: "F" },
        { id: 13, dimension: "TF", text: "你更在意事情是否合理。", scoreA: "T", scoreB: "F" },
        { id: 14, dimension: "TF", text: "给别人建议时你擅长安慰。", scoreA: "T", scoreB: "F" },
        { id: 15, dimension: "TF", text: "原则问题你不会为人情妥协。", scoreA: "T", scoreB: "F" },

        { id: 16, dimension: "JP", text: "你的生活习惯计划有序。", scoreA: "J", scoreB: "P" },
        { id: 17, dimension: "JP", text: "做事你喜欢临时应变。", scoreA: "J", scoreB: "P" },
        { id: 18, dimension: "JP", text: "你习惯提前完成任务。", scoreA: "J", scoreB: "P" },
        { id: 19, dimension: "JP", text: "做决定你喜欢尽快确定。", scoreA: "J", scoreB: "P" },
        { id: 20, dimension: "JP", text: "你喜欢生活有变化与惊喜。", scoreA: "J", scoreB: "P" },
    ]
};

let current = 0;
const count = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
const answers = {}; // 存储每道题的答案

function render() {
    const app = document.getElementById('app');

    // 显示欢迎页面
    if (current === 0) {
        app.innerHTML = `
            <div class="welcome-container">
                <h1>你的MBTI与哪位原神角色相似？</h1>
                <p class="welcome-text">本测试包含20道题目，通过分析您的性格特质，为您匹配最相似的角色。</p>
                <p class="welcome-text">请根据您的真实情况选择最符合的选项。</p>
                <div class="start-btn" onclick="current = 1; render();">开始测试</div>
            </div>
        `;
        return;
    }

    // 显示结果页面
    if (current > data.questions.length) {
        const type = [
            count.E > count.I ? 'E' : 'I',
            count.S > count.N ? 'S' : 'N',
            count.T > count.F ? 'T' : 'F',
            count.J > count.P ? 'J' : 'P'
        ].join('');

        const poetInfo = poetDescriptions[type] || { poet: "未知角色", description: "你的性格特质独特，建议玩鸣潮。" };

        app.innerHTML = `
            <div class="result-container">
                <h2>你的MBTI类型：${type}</h2>
                <div class="poet-match">
                    <h3>与你最相似的角色：${poetInfo.poet}</h3>
                    <p class="poet-description">${poetInfo.description}</p>
                </div>
                <div class="restart-btn" onclick="location.reload()">重新测试</div>
            </div>
        `;
        return;
    }

    // 显示题目页面
    const q = data.questions[current - 1];
    const isFirstQuestion = current === 1;
    const isLastQuestion = current === data.questions.length;

    let navigationButtons = '';

    if (isFirstQuestion) {
        navigationButtons = `
            <div class="nav-buttons">
                <div class="nav-btn next-btn" onclick="nextQuestion()">下一题</div>
            </div>
        `;
    } else if (isLastQuestion) {
        navigationButtons = `
            <div class="nav-buttons">
                <div class="nav-btn prev-btn" onclick="prevQuestion()">上一题</div>
                <div class="nav-btn submit-btn" onclick="submitTest()">提交</div>
            </div>
        `;
    } else {
        navigationButtons = `
            <div class="nav-buttons">
                <div class="nav-btn prev-btn" onclick="prevQuestion()">上一题</div>
                <div class="nav-btn next-btn" onclick="nextQuestion()">下一题</div>
            </div>
        `;
    }

    app.innerHTML = `
        <div class="question-container">
            <div class="progress">${current}/20</div>
            <div class="question">${q.text}</div>
            <div class="options">
                <div class="option ${answers[current] === 'A' ? 'selected' : ''}" onclick="selectOption('A')">A 同意</div>
                <div class="option ${answers[current] === 'B' ? 'selected' : ''}" onclick="selectOption('B')">B 不同意</div>
            </div>
            ${navigationButtons}
        </div>
    `;
}

function selectOption(ans) {
    answers[current] = ans;
    const q = data.questions[current - 1];
    count[ans === 'A' ? q.scoreA : q.scoreB]++;
    render();
}

function nextQuestion() {
    // 检查当前题目是否已回答
    if (!answers[current]) {
        showAlert("请先选择答案再继续");
        return;
    }

    if (current < data.questions.length) {
        current++;
        render();
    }
}

function prevQuestion() {
    if (current > 1) {
        current--;
        render();
    }
}

function submitTest() {
    // 检查最后一题是否已回答
    if (!answers[current]) {
        showAlert("请先选择答案再提交");
        return;
    }

    // 检查是否所有题目都已回答
    const unansweredQuestions = [];
    for (let i = 1; i <= data.questions.length; i++) {
        if (!answers[i]) {
            unansweredQuestions.push(i);
        }
    }

    if (unansweredQuestions.length > 0) {
        showAlert(`还有 ${unansweredQuestions.length} 道题目未回答：第 ${unansweredQuestions.join(', ')} 题`);
        return;
    }

    current = data.questions.length + 1;
    render();
}

function showAlert(message) {
    // 创建提示框
    const alertBox = document.createElement('div');
    alertBox.className = 'alert-box';
    alertBox.innerHTML = `
        <div class="alert-content">
            <div class="alert-icon">⚠️</div>
            <div class="alert-message">${message}</div>
            <div class="alert-close" onclick="this.parentElement.parentElement.remove()">×</div>
        </div>
    `;

    // 添加到页面
    document.body.appendChild(alertBox);

    // 3秒后自动消失
    setTimeout(() => {
        if (alertBox.parentElement) {
            alertBox.remove();
        }
    }, 3000);
}

// 初始化渲染
render();