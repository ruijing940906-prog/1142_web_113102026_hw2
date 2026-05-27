import { create } from "zustand";

const questionData = [
  {
    question: "當身邊的人瘋狂倒苦水／塞訊息給你時，你的麵糰會？",
    hint: "這題在測你面對他人情緒時，會如何吸收、消化或保護自己。",
    options: [
      {
        text: "先接住對方，但也會知道自己累了就暫停。",
        value: 2,
      },
      {
        text: "默默全部吸收，回完訊息後自己開始內耗。",
        value: 4,
      },
      {
        text: "會陪一下，但如果太滿就想躲進烤箱冷靜。",
        value: 3,
      },
      {
        text: "不太會被影響，對方講完我也可以很快恢復。",
        value: 1,
      },
    ],
  },
  {
    question: "如果今天的你被放進烤箱，你覺得自己最像哪種狀態？",
    hint: "這題在看你平常面對壓力時，是膨脹、焦掉，還是穩穩成形。",
    options: [
      {
        text: "慢慢膨脹，雖然緊張但還算穩定。",
        value: 2,
      },
      {
        text: "外表看起來金黃漂亮，裡面其實快烤乾。",
        value: 4,
      },
      {
        text: "需要一點時間預熱，不然會不知所措。",
        value: 3,
      },
      {
        text: "烤得剛剛好，壓力來了也能自然處理。",
        value: 1,
      },
    ],
  },
  {
    question: "朋友突然取消約定時，你的內心第一反應是？",
    hint: "這題在測你對人際變動的敏感度。",
    options: [
      {
        text: "覺得可惜，但很快安排自己的時間。",
        value: 1,
      },
      {
        text: "表面說沒關係，但心裡會想是不是自己不重要。",
        value: 4,
      },
      {
        text: "會有點失落，但如果對方有解釋就可以接受。",
        value: 2,
      },
      {
        text: "開始回想自己是不是哪裡做錯。",
        value: 3,
      },
    ],
  },
  {
    question: "當你收到一句稱讚時，你通常會怎麼反應？",
    hint: "這題在看你對肯定的接受程度。",
    options: [
      {
        text: "開心收下，覺得今天有被灑糖粉。",
        value: 1,
      },
      {
        text: "表面冷靜，心裡偷偷開心很久。",
        value: 2,
      },
      {
        text: "會懷疑對方是不是只是客氣。",
        value: 3,
      },
      {
        text: "不知道怎麼收下，甚至覺得自己沒有那麼好。",
        value: 4,
      },
    ],
  },
  {
    question: "如果你的心是一份麵糰，你最怕它發生什麼事？",
    hint: "這題在測你最核心的不安來源。",
    options: [
      {
        text: "怕它被放太久，沒有人記得要烤它。",
        value: 4,
      },
      {
        text: "怕它還沒準備好，就被催著出爐。",
        value: 3,
      },
      {
        text: "怕味道不夠特別，但還是願意試試看。",
        value: 2,
      },
      {
        text: "不太怕，失敗了就再揉一次。",
        value: 1,
      },
    ],
  },
  {
    question: "你希望今天的心靈麵包店，最後送你一句什麼話？",
    hint: "這題在看你現在最需要的情緒補給。",
    options: [
      {
        text: "你不用一直很好，也值得被喜歡。",
        value: 4,
      },
      {
        text: "慢慢來，你正在變成更完整的自己。",
        value: 3,
      },
      {
        text: "你已經做得不錯了，可以給自己一點掌聲。",
        value: 2,
      },
      {
        text: "今天也可以輕輕鬆鬆地過完。",
        value: 1,
      },
    ],
  },
];

const resultData = [
  {
    min: 6,
    max: 10,
    title: "奶油小餐包",
    subtitle: "柔軟、輕盈，內心自帶一點剛出爐的安定感。",
    description: [
      "你通常不會讓情緒在心裡停留太久，能自然地把生活重新調回舒服的溫度。",
      "你給人的感覺溫和好親近，不太需要用力證明自己也能被喜歡。",
      "你的心靈提醒是：偶爾不那麼懂事也沒關係，柔軟不是你的弱點。",
    ],
  },
  {
    min: 11,
    max: 15,
    title: "蜂蜜吐司",
    subtitle: "外層溫暖，內在細膩，習慣把生活切成剛剛好的甜度。",
    description: [
      "你很會照顧氣氛，也常常是讓別人覺得安心的人。",
      "你不一定會直接說出自己的需求，但其實很希望有人能主動注意到你。",
      "你的心靈提醒是：不需要一直提供甜味，你本身就已經很值得靠近。",
    ],
  },
  {
    min: 16,
    max: 20,
    title: "鹽可頌",
    subtitle: "酥脆與柔軟並存，越靠近越能嚐到細緻的層次。",
    description: [
      "你對人際細節很敏感，常常能察覺別人沒有說出口的情緒。",
      "你看似可以處理很多事，但其實需要獨處時間把自己重新摺回來。",
      "你的心靈提醒是：你可以溫柔，但不需要把所有人的重量都包進自己心裡。",
    ],
  },
  {
    min: 21,
    max: 24,
    title: "100% 精緻黑巧克力可頌",
    subtitle: "外表酥脆、內心早已有微微的苦澀內耗。",
    description: [
      "你常常表現得很懂事、很能消化，但其實心裡已經默默跑完很多小劇場。",
      "你很容易把別人的一句話、一個反應、一個已讀不回反覆拿出來分析。",
      "你的心靈提醒是：你不用靠過度理解別人，來換取自己被留下的安全感。",
    ],
  },
];

export const usePsyDataStore = create((set, get) => ({
  question: 0,
  totalValue: 0,
  questions: questionData,
  results: resultData,

  answerQuestion: (value) => {
    const currentQuestion = get().question;

    set({
      totalValue: get().totalValue + value,
      question: currentQuestion + 1,
    });
  },

  resetQuiz: () => {
    set({
      question: 0,
      totalValue: 0,
    });
  },

  getCurrentQuestion: () => {
    const currentQuestionIndex = get().question;
    return get().questions[currentQuestionIndex];
  },

  isFinished: () => {
    return get().question >= get().questions.length;
  },

  getResult: () => {
    const score = get().totalValue;
    const result = get().results.find((item) => {
      return score >= item.min && score <= item.max;
    });

    return result || get().results[get().results.length - 1];
  },
}));