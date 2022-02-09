<template>
  <div class="videoPresentation">
    <div class="videoWrapper">
      <div ref="videoSlice1" class="slice">
        <video
          preload="auto"
          ref="videoRef1"
          :src="currentVideo.src"
          muted
        />
      </div>
      <div ref="videoSlice2" class="slice">
        <video
          preload="auto"
          muted
          ref="videoRef2"
          :src="currentVideo.src"
        />
      </div>
      <div ref="videoSlice3" class="slice">
        <video
          preload="auto"
          muted
          ref="videoRef3"
          :src="currentVideo.src"
        />
      </div>
      <div class="videoBg videoBg1" ref="videoBgRef1">
        <img :src="imgArray[currentImageIndex]" alt="" />
      </div>
      <div class="videoBg videoBg2" ref="videoBgRef2">
        <img :src="imgArray[currentImageIndex]" alt="" />
      </div>
      <div class="videoBg videoBg3" ref="videoBgRef3">
        <img :src="imgArray[currentImageIndex]" alt="" />
      </div>
    </div>
    <div class="contentWrapper" ref="contentRef">
      <div class="category f-en" ref="categoryRef">
        {{ currentVideo.category }}
      </div>
      <div :class="['title', 'f-en']" ref="titleRef">
        {{ currentVideo.title }} <br />
        {{ currentVideo.littleTitle }}
      </div>
      <div class="littleInfo" ref="littleInfoRef">
        {{ currentVideo.title }} | {{ currentVideo.littleTitle }}
      </div>
    </div>
    <div class="countDown">
      <span class="prev f-en">0{{ currentIndex + 1 }}</span>
      <span class="progressBg">
        <span class="progressBar" ref="progressRef"></span>
      </span>
      <span class="next f-en">03</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  computed,
  onMounted,
  reactive,
  ref,
  VideoHTMLAttributes
} from 'vue'
import gsap from 'gsap'
import { flash, moveLeft } from '@/animations'
import cover1 from '@/assets/cover1.png'
import cover2 from '@/assets/cover2.png'
import cover3 from '@/assets/cover3.png'
const imgArray = [cover1, cover2, cover3]
const contentRef = ref<HTMLElement | null>(null)
const categoryRef = ref<HTMLElement | null>(null)
const titleRef = ref<HTMLElement | null>(null)
const littleInfoRef = ref<HTMLElement | null>(null)
const progressRef = ref<HTMLElement | null>(null)
const videoRef1 = ref<HTMLVideoElement | null>(null)
const videoRef2 = ref<HTMLVideoElement | null>(null)
const videoRef3 = ref<HTMLVideoElement | null>(null)
const videoSlice1 = ref<HTMLElement | null>(null)
const videoSlice2 = ref<HTMLElement | null>(null)
const videoSlice3 = ref<HTMLElement | null>(null)
const videoBgRef1 = ref<HTMLElement | null>(null)
const videoBgRef2 = ref<HTMLElement | null>(null)
const videoBgRef3 = ref<HTMLElement | null>(null)
const active = ref(false)
const currentIndex = ref(0)
const currentImageIndex = ref(0)
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
const tl = gsap.timeline()
function animate() {
  const refArray = [categoryRef.value, titleRef.value, littleInfoRef.value]
  const sliceArray = [
    videoSlice1.value,
    videoSlice2.value,
    videoSlice3.value
  ]
  const videoBgArray = [
    videoBgRef1.value,
    videoBgRef2.value,
    videoBgRef3.value
  ]
  tl.set(refArray, {
    opacity: 0,
    x: 50
  })
    .to(refArray, { opacity: 1, duration: 0.18 / 5 }, '>0.3')
    .to(refArray, { opacity: 0, duration: 0.18 / 5 })
    .to(refArray, { opacity: 1, duration: 0.18 / 5 })
    .to(refArray, { opacity: 0, duration: 0.18 / 5 })
    .to(refArray, { opacity: 1, duration: 0.18 / 5 })
    .to(refArray, { x: 0, stagger: 0.05, duration: 0.5 - 0.18 }, '>0.3')
    .set(progressRef.value, { scaleX: 0 })
    .call(() => {
      videoRef1.value?.play()
      videoRef2.value?.play()
      videoRef3.value?.play()
    })
    .to(progressRef.value, { scaleX: 1, duration: 4 })
    .call(() => {
      currentImageIndex.value = (currentImageIndex.value + 1) % 3
    })
    .to(refArray, { opacity: 0, duration: 0.18 / 4 })
    .to(refArray, { opacity: 1, duration: 0.18 / 4 })
    .to(refArray, { opacity: 0, duration: 0.18 / 4 })
    .to(refArray, { opacity: 1, duration: 0.18 / 4 })
    .to(refArray, { opacity: 0, x: -50, duration: 0.5 - 0.18 })
    .call(() => {
      currentIndex.value = (currentIndex.value + 1) % 3
    })
    .set(sliceArray, { x: 1350 })
    .to(sliceArray, { x: 0, stagger: 0.15, duration: 1 })
    .to(videoBgArray, { x: -1350, stagger: 0.15, duration: 1 }, '<0')
    .repeat(-1)
}
onMounted(() => {
  animate()
})
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
    position: relative;
    .videoBg {
      width: 100%;
      height: 100%;
      overflow: hidden;
      position: absolute;
      background-size: cover;
      z-index: 0;
      top: 0;
      height: 33.3%;
      img {
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
      &.videoBg2 {
        top: 33.3%;
        img {
          top: calc(-100% + (-1 * (100vw * (var(--top) / var(--vw)))));
          transform: translateX(-50%);
        }
      }
      &.videoBg3 {
        top: 66.6%;
        img {
          top: calc(-200% + (-1 * (100vw * (var(--top) / var(--vw)))));
          transform: translateX(-50%);
        }
      }
    }
    .slice {
      height: 33.3%;
      width: 100%;
      overflow: hidden;
      position: relative;
      z-index: 1;

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
        transform: scaleX(0);
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
