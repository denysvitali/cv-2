<script setup lang="ts">
import CVHeader from './components/CVHeader.vue';
import CVIntroduction from '@/components/CVIntroduction.vue';
import CVExperience from '@/components/CVExperience.vue';
</script>

<template>
  <main>
    <CVHeader class="cv-header"/>
    
    <div class="sections">
      <CVIntroduction/>
      <CVExperience/>
      <CVEducation/>
      <CVProjects/>
    </div>
  </main>
</template>

<style scoped>
  .cv-header {
    margin-bottom: 2em;
  }

  div.sections {
    display: flex;
    flex-direction: column;
    row-gap: 40px;
  }
</style>