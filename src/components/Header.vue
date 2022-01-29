<template>
  <header class="header">
    <SvgIcon :class-name="'logoSvg'" :icon-class="'logo'" />
    <ul>
      <li>NEWS</li>
      <li>WORKS</li>
      <li>COMPANY</li>
    </ul>
    <SvgIcon :class-name="'twitter'" :icon-class="'twitter'" />
    <div class="menu">
      <span />
      <span />
    </div>
  </header>
</template>

<script setup lang="ts">
import SvgIcon from "./SvgIcon.vue";
</script>

<style lang="less" scoped>
@keyframes updownOpacity {
  0% {
    transform: translateY(-20%);
    opacity: 0;
  }
  60% {
    transform: translateY(-20%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
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
      font-family: "Arimo", sans-serif;
      font-weight: 700;
      letter-spacing: normal;
      font-size: 12px;
      line-height: 1;
      text-decoration-skip-ink: auto;
      cursor: pointer;
      &:not(:first-child) {
        margin-left: 30px;
      }
      &:hover {
        animation: flash 0.18s cubic-bezier(0.4, 0, 0.2, 1);
      }
    }
  }
  .twitter {
    font-size: 22px;
    color: #fff;
    margin-left: 30px;
    margin-bottom: -6px;
    cursor: pointer;
    &:hover {
      animation: flash 0.18s cubic-bezier(0.4, 0, 0.2, 1);
    }
  }
  .menu {
    margin-left: 28px;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    flex-direction: column;
    cursor: pointer;
    &:hover {
      span {
        transform: scaleX(0);
        transform-origin: right;
        &:nth-of-type(2) {
          transform: scaleX(0);
          transition-delay: 0.2s;
          transform-origin: right;
        }
      }
    }
    span {
      display: block;
      background: white;
      width: 28px;
      height: 2px;
      transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1),
        background 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      transform-origin: left;
      &:nth-of-type(2) {
        width: 18px;
        margin-top: 4px;
      }
    }
  }
}
</style>
