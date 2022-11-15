<script type="ts" setup>
import { faGithub } from '@fortawesome/free-brands-svg-icons';

let basicInfo = {
    'home': {'icon': '🏠', 'value': 'Zurich, Switzerland'},
    'phone': {'icon': '📞', 'value': '+41 79 366 43 60'},
    'birthday': {'icon': '🎂', 'value': 'September 29, 1996'},
    'citizenship': {'icon': '🇨🇭', value: 'Swiss Citizen'}
};

let contactInfo = {
    'email': {'icon': 'fa-solid fa-envelope', 'value': 'denys@denv.it'},
    'web': {'icon': 'fa-solid fa-link', 'value': 'denv.it', 'url': 'https://denv.it'},
    'github': {'icon': 'fa-brands fa-github', value: '@denysvitali', 'url': 'https://github.com/denysvitali' },
    'linkedin': {'icon': 'fa-brands fa-linkedin', value: 'denysvitali', 'url': 'https://www.linkedin.com/in/denysvitali/'},
    'telegram': {'icon': 'fa-brands fa-telegram', value: '@denvit', 'url': 'https://telegram.me/denvit'},
    'twitter': {'icon': 'fa-brands fa-twitter', value: '@DenysVitali', 'url': 'https://twitter.com/DenysVitali'}
};
</script>
<template>
    <header>
        <img class="profile-picture" src="/profile.jpg"/>
        <div class="contact-info">
            <div class="my-name">Denys Vitali</div>
            <div class="basic-info-grid">
                <div class="info-element" v-for="element of basicInfo">
                    <div class="icon">{{ element.icon }}</div>
                    <div class="text">{{ element.value }}</div>
                </div>
            </div>

            <hr/>

            <div class="contact-info-grid">
                <div class="info-element" v-for="element of contactInfo">
                    <div class="icon">
                        <font-awesome-icon :icon="element.icon"/>
                    </div>
                    <a 
                        v-if="element.url" 
                        :href="element.url" 
                        target="_blank"
                        class="text" 
                    >
                        {{ element.value }}
                    </a>
                    <div class="text" v-else>{{ element.value }}</div>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
    header {
        display: flex;
        justify-content: space-around;

        img.profile-picture {
            $size: 200px;
            width: $size;
            height: $size;
            object-fit: cover;
            border-radius: $size;
            box-shadow: 0px 3px 24px 3px var(--color-shadow);
        }

        div.contact-info {
            display: flex;
            flex-direction: column;
            min-width: 300px;
            row-gap: 12px;

            div.my-name {
                font-size: 48px;
                font-weight: 700;
                width: 100%;
                text-align: center;
            }

            div.basic-info-grid, div.contact-info-grid {
                display: grid;
                grid-template-columns: 1fr 1fr;
                column-gap: 16px;
                font-size: 14px;

                div.info-element {
                    display: flex;
                    flex-direction: row;
                    column-gap: 8px;
                    height: 24px;
                    line-height: 20px;

                    div.icon {
                        height: 24px;
                        font-size: 18px;
                        width: 24px;
                    }

                    div.text {
                        font-weight: 600;
                    }
                }
            }
        }
    }
</style>