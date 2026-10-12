<script setup lang="ts">
let languages = {
  it: {
    icon: "🇮🇹",
    name: "Italian",
    level: "Mother tongue",
  },
  en: {
    icon: "🇺🇸",
    name: "English",
    level: "Full Professional Proficiency",
  },
  de: {
    icon: "🇩🇪",
    name: "German",
    level: "Limited Working Proficiency",
  },
  fr: {
    icon: "🇫🇷",
    name: "French",
    level: "Limited Working Proficiency",
  },
};
</script>

<template>
  <div class="languages">
    <h2>Languages</h2>
    <div class="languages-list">
      <div class="language" v-for="language in languages" :key="language.name">
        <div class="icon">
          {{ language.icon }}
        </div>
        <div class="name">
          {{ language.name }}
        </div>
        <div class="level">
          {{ language.level }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
div.languages {
  break-inside: avoid;

  div.languages-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 12px 20px;

    div.language {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 10px;
      align-items: center;

      div.icon {
        grid-row: 1 / span 2;
        font-size: 1.6em;
        line-height: 1;
      }

      div.name {
        font-weight: bold;
        color: var(--color-heading);
        line-height: 1.2;
      }

      div.level {
        color: var(--color-text-soft);
        font-size: 0.9em;
        line-height: 1.2;
      }
    }
  }
}
</style>
