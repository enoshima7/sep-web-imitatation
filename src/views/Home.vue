<template>
  <GsapDemo />
  <button @click="startAnimation" type="button">开始</button>
</template>

<script setup lang="ts">
import { useConfig } from "@/store/global";
import GsapDemo from "@/components/GsapDemo.vue";
import gsap from "gsap";
import { onMounted } from "vue";
const config = useConfig();
const tl = gsap.timeline();
function startAnimation() {
  tl.to(".box", { duration: 2, x: 100 });
}
</script>

<style scoped></style>
