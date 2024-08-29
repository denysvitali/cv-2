<script setup lang="ts">
import Introduction from "@/assets/snippets/introduction.md";
import { marked } from "marked";
</script>

<template>
  <div class="introduction">
    <h2>Introduction</h2>
    <p v-html="marked.parse(Introduction)"></p>

    <div class="notice-section">
      <h3>Note</h3>
      <p>
        This CV is also available as a web page:
        <a href="https://cv.denv.it">https://cv.denv.it</a>
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media screen {
  /* We don't want to show the notice on desktop / mobile, only when printed */
  div.notice-section {
    display: none;
  }
}
</style>
