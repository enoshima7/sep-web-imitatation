<template>
  <header class="header">
    <SvgIcon :class-name="'logoSvg'" :icon-class="'logo'" />
    <ul>
      <li @mouseenter="flashThis">NEWS</li>
      <li @mouseenter="flashThis">WORKS</li>
      <li @mouseenter="flashThis">COMPANY</li>
    </ul>
    <SvgIcon
      :icon-class="'twitter'"
      :class-name="'twitter'"
      @mouseenter="flashThis"
    />
    <NavIcon />
  </header>
</template>

<script setup lang="ts">
import { flash } from '@/animations'
import SvgIcon from './SvgIcon.vue'
import NavIcon from './NavIcon.vue'
function flashThis(e: MouseEvent) {
  flash(e.target)
}
</script>

<style lang="less" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  --w: 50;
  --h: 12;
  width: 100%;
  background-color: transparent;
  padding: calc(100vw * (var(--h) / var(--vw)))
    calc(100vw * (var(--w) / var(--vw)));
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  .logoSvg {
    --w: 73;
    --h: 28;
    width: calc(100vw * (var(--w) / var(--vw)));
    height: calc(100vw * (var(--h) / var(--vw)));
    min-width: 73px;
    min-height: 28px;
    color: #fff;
    cursor: pointer;
    animation: updownOpacity 0.7s ease-in-out 0.1s;
  }
  ul {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-left: auto;
    margin-bottom: -2px;
    li {
      color: #fff;
      font-family: 'Arimo', sans-serif;
      font-weight: 700;
      letter-spacing: normal;
      font-size: 12px;
      line-height: 1;
      text-decoration-skip-ink: auto;
      cursor: pointer;
      &:not(:first-child) {
        margin-left: 30px;
      }
    }
  }
  .twitter {
    font-size: 22px;
    color: #fff;
    margin-left: 30px;
    margin-bottom: -6px;
    cursor: pointer;
  }
}
</style>
