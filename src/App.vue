<script setup lang="ts">
import CVHeader from "@/components/CVHeader.vue";
import CVIntroduction from "@/components/CVIntroduction.vue";
import CVExperience from "@/components/CVExperience.vue";
import CVEducation from "@/components/CVEducation.vue";
import CVAwardsCerts from "@/components/CVAwardsCerts.vue";

import CVLanguages from "@/components/CVLanguages.vue";
import CVProjects from "@/components/CVProjects.vue";
import CVAIPromptInjection from "@/components/CVAIPromptInjection.vue";
import CVPublicSpeaking from "./components/CVPublicSpeaking.vue";
</script>

<template>
  <main>
    <CVHeader class="cv-header" />

    <div class="sections">
      <CVIntroduction />
      <CVExperience />
      <CVEducation />
      <CVAwardsCerts />
      <CVLanguages />
      <CVPublicSpeaking />
      <CVProjects />
      <CVAIPromptInjection />
    </div>
  </main>
</template>

<style scoped>
.cv-header {
  margin-bottom: 2em;
}

div.page-break {
  page-break-after: always;
}

div.sections {
  display: flex;
  flex-direction: column;
  row-gap: 40px;
}
</style>
