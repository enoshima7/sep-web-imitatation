<template>
  <div class="menu">
    <span />
    <span />
  </div>
</template>
<script setup lang="ts"></script>
<style lang="less" scoped>
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
</style>
