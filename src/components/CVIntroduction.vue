<script type="ts" setup>
import Introduction from '@/assets/snippets/introduction.md';
import { marked } from 'marked';
</script>

<template>
    <div class="introduction">
        <h2>Introduction</h2>
        <p v-html="marked.parse(Introduction)"></p>
    </div>
</template>

<style lang="scss" scoped>
    
</style>