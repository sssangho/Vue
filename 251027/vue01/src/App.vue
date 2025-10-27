<script setup lang="ts">
import { RouterView } from 'vue-router';

</script>

<template>
  <div id="app">
    <h1>Vue Router + Pinia 예제</h1>
    <nav>
      <RouterLink to="/">홈</RouterLink>
      <RouterLink to="/about">소개</RouterLink>
      <RouterLink to="/products">상품</RouterLink>
    </nav>

    <hr />

    <!--현재 페이지가 여기에 표시됨-->
    <RouterView />
  </div>
</template>

<style scoped>
nav {
  display: flex;
  gap: 1rem;
}
nav a.router-link-active {
  font-weight: bold;
  color: #42b983;
}
</style>