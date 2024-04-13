import { defineStore } from "pinia";

export const useStore = defineStore(
  "main",
  () => {
    const someState = ref("hello pinia");
    return { someState };
  },
  {
    unistorage: true, // 开启后对 state 的数据读写都将持久化
  }
);
