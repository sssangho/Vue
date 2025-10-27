<template>
    <div>
        <h2>상품 페이지</h2>
        <p>장바구니에 담긴 상품 수: {{counter.count }}</p>
        <button @click="counter.increment">상품추가</button>
        <button @click="counter.reset">리셋</button>
    </div>
</template>

<script setup>
import { useCounterStore } from '../stores/counter'
const counter = useCounterStore()
</script>