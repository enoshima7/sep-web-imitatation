<template>
  <div class="videoPresentation">
    <div class="videoWrapper">
      <div class="slice">
        <video :src="currentVideo.src" />
      </div>
      <div class="slice">
        <video :src="currentVideo.src" />
      </div>
      <div class="slice">
        <video :src="currentVideo.src" />
      </div>
    </div>
    <div class="contentWrapper">
      <div class="category f-en">{{ currentVideo.category }}</div>
      <div ref="titleRef" :class="['title', 'f-en']" @click="nextVideo">
        {{ currentVideo.title }} <br />
        {{ currentVideo.littleTitle }}
      </div>
      <div class="littleInfo">
        {{ currentVideo.title }} | {{ currentVideo.littleTitle }}
      </div>
    </div>
    <div class="countDown">
      <span class="prev f-en">0{{ currentIndex + 1 }}</span>
      <span class="progressBg">
        <span class="progressBar"></span>
      </span>
      <span class="next f-en">03</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { flash } from '../animations'
const titleRef = ref<HTMLElement | null>(null)
const active = ref(false)
const currentIndex = ref(0)
const videoData = reactive([
  {
    src: 'https://sep.co.jp/wp-content/uploads/2021/03/SixTONES_uyamuya_1C_10sec.mp4',
    active: true,
    category: 'XR',
    title: 'SixTONES',
    littleTitle: 'うやむや'
  },
  {
    src: 'https://sep.co.jp/wp-content/uploads/2021/03/sample.mp4',
    active: false,
    category: 'MV',
    title: 'PUNPEE',
    littleTitle: 'SOFA KINDOMCOME'
  },
  {
    src: 'https://sep.co.jp/wp-content/uploads/2021/03/97597afb2fbdd86abefc3b39996f4c88.mp4',
    active: true,
    category: 'MV',
    title: 'LEX',
    littleTitle: 'GOLD'
  }
])
const currentVideo = computed(() => {
  return videoData[currentIndex.value]
})
function nextVideo() {
  flash(titleRef.value)
}
</script>

<style lang="less" scoped>
.videoPresentation {
  width: 100%;
  height: 100vh;
  background-color: #000;
  overflow: hidden;
  overflow: hidden;
  --w: 1000;
  --h: 563;
  --top: 107;
  --right: 50;
  --bottom: 50;
  --left: 230;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-top: calc(100vw * (var(--top) / var(--vw)));
  padding-right: calc(100vw * (var(--right) / var(--vw)));
  padding-bottom: calc(100vw * (var(--bottom) / var(--vw)));
  padding-left: calc(100vw * (var(--left) / var(--vw)));
  .videoWrapper {
    height: 100%;
    width: 100%;
    overflow: hidden;
    padding: 0;
    z-index: 1;
    .slice {
      height: 33.3%;
      width: 100%;
      overflow: hidden;
      position: relative;

      video {
        --top: 50;
        width: 100vw;
        height: 100vh;
        object-fit: cover;
        position: absolute;
        --h: 232;
        --w: 414;
        left: 50%;
        top: calc(-1 * (100vw * (var(--top) / var(--vw))));
        transform: translateX(-50%);
        transition: transform 1s 0.2s;
      }
      &:nth-of-type(2) video {
        top: calc(-100% + (-1 * (100vw * (var(--top) / var(--vw)))));
        transform: translateX(-50%);
      }
      &:nth-of-type(3) video {
        top: calc(-200% + (-1 * (100vw * (var(--top) / var(--vw)))));
        transform: translateX(-50%);
      }
    }
  }
  .contentWrapper {
    color: #fff;
    z-index: 1;
    position: absolute;
    --bottom: 120;
    --left: 50;
    padding: 0;
    bottom: calc(100vw * (var(--bottom) / var(--vw)));
    left: calc(100vw * (var(--left) / var(--vw)));
    overflow: visible;
    .category {
      --size: 12;
      --bottom: 12;
      line-height: 1;
      font-size: calc(100vw * (var(--size) / var(--vw)));
      margin-bottom: calc(100vw * (var(--bottom) / var(--vw)));
    }
    .title {
      --size: 80;
      --w: 620;
      width: calc(100vw * (var(--w) / var(--vw)));
      --bottom: 6;
      font-size: calc(100vw * (var(--size) / var(--vw)));
      margin-bottom: calc(100vw * (var(--bottom) / var(--vw)));
      line-height: 1;
      opacity: 1;
    }
    .littleInfo {
      --w: 400;
      --size: 16;
      font-size: calc(100vw * (var(--size) / var(--vw)));
      font-weight: bold;
      width: calc(100vw * (var(--w) / var(--vw)));
    }
  }
  .countDown {
    --w: 142.5;
    --bottom: 70;
    --left: 50;

    position: absolute;
    top: auto;
    bottom: calc(100vw * (var(--bottom) / var(--vw)));
    left: calc(100vw * (var(--left) / var(--vw)));
    display: flex;
    align-items: center;
    width: calc(100vw * (var(--w) / var(--vw)));
    justify-content: space-between;
    .prev,
    .next {
      --size: 10;
      font-size: calc(100vw * (var(--size) / var(--vw)));
      line-height: 1;
      color: #fff;
    }
    .progressBg {
      width: 135px;
      background-color: #5f5f5f;
      height: 1px;
      position: relative;
      .progressBar {
        position: absolute;
        top: 0;
        left: 0;
        transform: scaleX(0.5);
        transform-origin: left;
        z-index: 1;
        height: 1px;
        width: 100%;
        background-color: #fff;
      }
    }
  }
}
</style>
