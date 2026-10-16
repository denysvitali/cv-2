<script setup lang="ts">
import Introduction from "@/assets/snippets/introduction.md";
import { marked } from "marked";
</script>

<template>
  <div class="introduction">
    <h2>Introduction</h2>
    <div class="text" v-html="marked.parse(Introduction)"></div>

    <p class="notice">
      This CV is also available as a web page:
      <a href="https://cv.denv.it">https://cv.denv.it</a>
    </p>
  </div>
</template>

<style lang="scss" scoped>
div.text :deep(p + p) {
  margin-top: 0.5em;
}

/* Lead sentence: the global reset sets font-weight: normal on everything */
div.text :deep(strong) {
  font-weight: 700;
  color: var(--color-heading);
}

p.notice {
  margin-top: 0.8em;
  font-size: 0.9em;
  color: var(--color-text-soft);
}

@media screen {
  /* We don't want to show the notice on desktop / mobile, only when printed */
  p.notice {
    display: none;
  }
}
</style>
