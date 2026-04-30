import { create } from 'zustand'

let questionData=[
    {
      title:"Q1:麵包師傅要你「靜置 30 分鐘」，你會怎麼做？",
      options:[
         {
            text:"選項一",
            value:1
         },
         {
          text:"選項二",
          value:2
       },
       {
        text:"選項三",
        value:3
        },

      ]
    },
    {
      title:"Q2:麵包師傅要你「靜置 30 分鐘」，你會怎麼做？",
      options:[
         {
            text:"選項一",
            value:1
         },
         {
          text:"選項二",
          value:2
       },
       {
        text:"選項三",
        value:3
        },

      ]
    },
    {
      title:"Q3:麵包師傅要你「靜置 30 分鐘」，你會怎麼做？",
      options:[
         {
            text:"選項一",
            value:1
         },
         {
          text:"選項二",
          value:2
       },
       {
        text:"選項三",
        value:3
        },

      ]
    }
   ]; 
 

const usePsyDataStore = create(
    (set)=>({
        question:0,
        totalValue:0,
        questions:questionData
    })



);

export{ usePsyDataStore }