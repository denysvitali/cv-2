<script setup lang="ts">
type Certs = {
  title: string;
  logo: string;
  link: string;
};
let certificates: Certs[] = [
  {
    title: "CKA: Certified Kubernetes Administrator",
    logo: "cka",
    link: "https://www.credly.com/badges/966660e6-d780-43a1-94cd-71bd4b5ec6ae",
  },
  {
    title: "HashiCorp Core Contributor 2023",
    logo: "hashicorp-core-2023",
    link: "https://www.credly.com/badges/7e7f6ee7-2658-4a06-9551-47ed0f5b40b6",
  },
  {
    title: "HashiCorp Core Contributor 2022",
    logo: "hashicorp-core-2022",
    link: "https://www.credly.com/badges/aab7cccb-ddc7-4b25-84cd-055ee877169e",
  },
];
</script>

<template>
  <div class="awards-certs">
    <h2>Awards / Certifications</h2>
    <div class="certifications">
      <a
        :href="cert.link"
        target="_blank"
        class="certificate"
        v-for="cert in certificates"
        :key="cert.logo"
      >
        <img :src="`/certs/${cert.logo}.png`" :alt="cert.title" />
        <span class="title">{{ cert.title }}</span>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
div.awards-certs {
  break-inside: avoid;
}

div.certifications {
  display: flex;
  flex-wrap: wrap;
  gap: 16px 28px;

  a.certificate {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 6px;
    width: 150px;
    text-align: center;
    text-decoration: none;
    color: var(--color-text);

    img {
      width: 110px;
      height: 110px;
      object-fit: contain;
    }

    span.title {
      font-size: 0.9em;
      font-weight: 600;
      line-height: 1.25;
    }
  }
}

@media screen and (max-width: 570px) {
  div.certifications {
    justify-content: space-around;
    column-gap: 12px;

    a.certificate {
      width: 130px;
    }
  }
}

@media print {
  div.certifications a.certificate {
    width: 120px;

    img {
      width: 70px;
      height: 70px;
    }
  }
}
</style>
