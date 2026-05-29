import { create } from "zustand";

const questionData = [
  {
    question: "準備開始揉捏你的心靈麵糰，\n倒麵粉時，你不小心手滑多倒了半碗……\n這時候你的反應是？",
    options: [
      {
        label: "A",
        text: "完蛋了！瘋狂加水試圖補救，結果越揉越大團，開始慌張。",
        type: "choco",
      },
      {
        label: "B",
        text: "拿湯匙默默把多倒的麵粉舀出來，精準秤重回原本的克數。",
        type: "nut",
      },
      {
        label: "C",
        text: "算了吧～那就做一隻超大麵包吧！隨興調整配方。",
        type: "puff",
      },
      {
        label: "D",
        text: "盯著麵粉發呆三秒，突然覺得今天好累，乾脆明天再烤好了。",
        type: "mochi",
      },
    ],
  },
  {
    question: "揉麵糰需要加水。\n當身邊的人瘋狂倒苦水、塞訊息給你時，\n你的麵糰通常會？",
    options: [
      {
        label: "A",
        text: "變成一攤爛泥。你全盤接收別人的情緒，導致自己跟著內耗當機。",
        type: "choco",
      },
      {
        label: "B",
        text: "表面塗了一層防水油。你開玩笑帶過，內心設有高牆。",
        type: "nut",
      },
      {
        label: "C",
        text: "像海綿一樣吸得剛剛好，還能順便安慰對方，社交拿捏得當。",
        type: "mochi",
      },
      {
        label: "D",
        text: "直接把碗打翻。立刻開啟不讀不回、人間蒸發模式。",
        type: "puff",
      },
    ],
  },
  {
    question: "你想在麵糰中心包裹進什麼祕密內餡，\n來當作你面對世界的\n精神防禦機制？",
    options: [
      {
        label: "A",
        text: "苦甜黑巧克力：帶點微憂鬱的文青感，用冷酷和一點小脾氣保護自己。",
        type: "choco",
      },
      {
        label: "B",
        text: "爆漿流沙拉絲麻糬：性格超軟、超好說話，用順從與可愛迎合大家。",
        type: "mochi",
      },
      {
        label: "C",
        text: "剛出爐的燙口起司：性格直白烈火，踩到你的底線你會直接爆炸。",
        type: "puff",
      },
      {
        label: "D",
        text: "嚼勁十足的硬核堅果：非常有主見，只相信自己規律的生活節奏。",
        type: "nut",
      },
    ],
  },
  {
    question: "終於要把麵包送進烤箱了。\n你最習慣用什麼樣的日常步調，\n來烘烤自己的人生？",
    options: [
      {
        label: "A",
        text: "220 度大火快烤：追求效率與成就感，把自己逼得很緊，常常快烤焦。",
        type: "choco",
      },
      {
        label: "B",
        text: "120 度低溫慢焙：步調極慢，喜歡待在舒適圈裡默默發酵。",
        type: "mochi",
      },
      {
        label: "C",
        text: "精準 180 度定時定溫：生活要有完美計畫表，不允許脫軌意外。",
        type: "nut",
      },
      {
        label: "D",
        text: "隨便啦！看哪時候聞到香味再關燈：完全看心情做事，活在當下。",
        type: "puff",
      },
    ],
  },

  {
   question:
     "叮！你的心靈麵包終於新鮮出爐了！\n看著剛出爐、熱騰騰的成品，\n你打算怎麼把它包裝並分享給這個世界？",
   options: [
     {
       label: "A",
       text: "用最精緻的蕾絲紙袋加上絲帶綁好，並拍一張完美的照片發限動，雖然心裡其實很累。",
       type: "choco",
     },
     {
       label: "B",
       text: "如果有人路過露出想吃的眼神，就大方地切一塊分給對方，自己吃剩下的也沒關係。",
       type: "mochi",
     },
     {
       label: "C",
       text: "塞進無厘頭的怪異插畫紙袋裡，自己一邊哼著歌、一邊大口在路上邊走邊吃。",
       type: "puff",
     },
     {
       label: "D",
       text: "嚴格用烘焙紙包好，貼上印有「今日品嚐期限」的標籤，整齊擺在桌上。",
       type: "nut",
     },
   ],
 },
];

const resultData = {
  choco: {
    key: "choco",
    title: "100% 精緻黑巧克力可頌",
    tag: "外表酥脆、內心早已有微微的苦澀內耗。",
    description:
      "你是朋友圈裡看起來最精緻、最得體的存在。但你最大的問題就是「過度共情」，不小心把別人的負面情緒全都接收下來，導致自己常常在深夜過度內耗。",
    background: "pink",
    colors: ["#8B4513", "#FFF8DC", "#F4C7C3"],
    colorNames: ["焦糖棕", "奶油白", "淡粉可可"],
  },
  mochi: {
    key: "mochi",
    title: "軟萌拉絲麻糬吐司",
    tag: "性格超軟、超好捏、高共情、容易迎合別人。",
    description:
      "你像麻糬一樣充滿彈性與包容力，幾乎不跟人發生衝突。但要小心太過好脾氣的結果就是容易被人過度揉捏而失去自我。記得為自己設下防線，偶爾拒絕別人也沒關係！",
    background: "yellow",
    colors: ["#D9B982", "#FFF3C4", "#F7E5C6"],
    colorNames: ["蜂蜜金", "奶油黃", "拉絲米白"],
  },
  puff: {
    key: "puff",
    title: "爆漿空氣泡芙",
    tag: "外表膨脹大隻、其實內心全都是自由的空氣。",
    description:
      "你天馬行空、不喜歡被世俗框架束縛。在別人眼裡你可能有點無厘頭、活在自己世界。你痛恨壓抑，哪裡自由你就往哪裡。",
    background: "blue",
    colors: ["#A9CFE7", "#FFF8DC", "#E9D7B8"],
    colorNames: ["空氣粉藍", "奶油白", "泡芙米棕"],
  },
  nut: {
    key: "nut",
    title: "無麩質全麥堅果吐司",
    tag: "極度理性、規律、直白，充滿健康的生活秩序。",
    description:
      "你是一盞極度穩定的聚光燈。你做事講求條理，大腦裡就像設定了精準的 Grid 網格，不允許生活脫軌。你設有極高的防火牆，只有你的知心朋友才能看到你柔軟的一面。",
    background: "khaki",
    colors: ["#7A5A3A", "#C6A875", "#F4E7D3"],
    colorNames: ["堅果棕", "卡其土色", "全麥米色"],
  },
};

const initialScores = {
  choco: 0,
  mochi: 0,
  puff: 0,
  nut: 0,
};

export const usePsyDataStore = create((set, get) => ({
  question: 0,
  questions: questionData,
  results: resultData,
  scores: initialScores,
  answers: [],

  answerQuestion: (answer) => {
    const currentQuestion = get().question;
    const currentScores = get().scores;
    const currentAnswers = get().answers;

    set({
      question: currentQuestion + 1,
      scores: {
        ...currentScores,
        [answer.type]: currentScores[answer.type] + 1,
      },
      answers: [...currentAnswers, answer],
    });
  },

  previousQuestion: () => {
    const currentQuestion = get().question;
    const currentAnswers = get().answers;

    if (currentQuestion <= 0 || currentAnswers.length === 0) {
      return;
    }

    const lastAnswer = currentAnswers[currentAnswers.length - 1];
    const newAnswers = currentAnswers.slice(0, -1);
    const currentScores = get().scores;

    set({
      question: currentQuestion - 1,
      answers: newAnswers,
      scores: {
        ...currentScores,
        [lastAnswer.type]: Math.max(currentScores[lastAnswer.type] - 1, 0),
      },
    });
  },

  resetQuiz: () => {
    set({
      question: 0,
      scores: initialScores,
      answers: [],
    });
  },

  getResult: () => {
    const scores = get().scores;
    const answers = get().answers;

    const orderedTypes = ["choco", "mochi", "puff", "nut"];
    const maxScore = Math.max(...orderedTypes.map((type) => scores[type]));
    const topTypes = orderedTypes.filter((type) => scores[type] === maxScore);

    let finalType = topTypes[0];

    if (topTypes.length > 1 && answers.length > 0) {
      const reversedAnswers = [...answers].reverse();
      const tieBreaker = reversedAnswers.find((answer) =>
        topTypes.includes(answer.type)
      );

      if (tieBreaker) {
        finalType = tieBreaker.type;
      }
    }

    return get().results[finalType];
  },
}));