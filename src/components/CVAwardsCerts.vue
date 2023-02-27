<script setup>
let certificates = [
{
        title: "HashiCorp Core Contributor 2023",
        logo: "hashicorp-core-2023",
        link: "https://www.credly.com/badges/7e7f6ee7-2658-4a06-9551-47ed0f5b40b6", 
    },
    {
        title: "HashiCorp Core Contributor 2022",
        logo: "hashicorp-core-2022",
        link: "https://www.credly.com/badges/aab7cccb-ddc7-4b25-84cd-055ee877169e", 
    }
]
</script>

<template>
<h2>Awards / Certifications</h2>
<div class="certifications">
    <div class="certificate" v-for="cert in certificates">
        <a :href=cert.link target="_blank" class="cert">
            <img class="certificate" :src="`/certs/${cert.logo}.png`"/>
        </a>
    </div>
</div>
</template>

<style lang="scss" scoped>
div.certifications {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 20px;
    row-gap: 10px;
    
    div.certificate {
        width: 150px;
        img {
            width: 100%;
        }
    }
}
</style>