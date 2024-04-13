<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <text class="title">{{ title }}</text>
      <image amaode="xxx"></image>
      <u-button text="提交"></u-button>
      <u-button text="提交"></u-button>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const title = ref('Hello')
import { useCounterStore } from './stores/counter'
const counter = useCounterStore()
counter.count++
// 自动补全！ ✨
counter.$patch({ count: counter.count + 1 })
// 或使用 action 代替
counter.increment()

</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
