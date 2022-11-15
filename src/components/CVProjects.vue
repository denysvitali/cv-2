<script type="ts" setup>
import { marked } from 'marked';
import TeamsApi from '@/assets/projects/teams-api.md';

let projects = [
    {
        name: 'teams-api',
        url: 'https://github.com/fossteams/teams-api',
        description: marked.parse(TeamsApi),
        tech: ['go', 'flutter', 'vue'],
    },
    {
        name: 'surface-pro-x-linux',
        url: 'https://github.com/denysvitali/surface-pro-x-linux',
        description: 'Linux kernel for the Microsoft Surface Pro X (SQ2)',
        tech: ['linux'],
    },
    {
        name: 'pixelc-linux',
        url: 'https://github.com/pixelc-linux/documentation',
        description: 'Patches and images to run Linux on the Google Pixel C',
        tech: ['linux'],
    },
    {
        name: 'thebestmotherfuckingwebiste',
        url: 'https://thebestmotherfucking.website',
        description: 'The title says it all.',
    }
];
</script>

<script type="ts">
function formatLink(link) {
    const GITHUB_URL = 'https://github.com/';
    if (link.startsWith(GITHUB_URL)) {
        return link.substring(GITHUB_URL.length);
    }
    return link;
}
</script>

<template>
    <div class="projects">
        <h2>Projects</h2>
        <div class="projects-list">
            <div class="project" v-for="project in projects">
                <div class="project-top">
                    <div class="project-left">
                        <div class="name">{{ project.name }}</div>
                        <a :href="project.url">{{ formatLink(project.url) }}</a>
                    </div>
                    <div class="project-right">
                        <div class="tech-stack">
                            <img class="tech-icon" 
                                v-for="tech in project.tech"
                                :alt="tech"
                                :src="'/logos/' + tech + '.svg'"
                            >
                        </div>
                    </div>
                </div>
                <div class="description" v-html="project.description"></div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
div.projects {
    div.projects-list {
        display: flex;
        flex-direction: column;
        row-gap: 2em;

        div.project {
            display: flex;
            flex-direction: column;

            div.project-top {
                display: flex;
                flex-direction: row;
                justify-content: space-between;

                div.name {
                    font-weight: bold;
                    font-size: 18px;
                }

                div.tech-stack {
                    display: flex;
                    column-gap: 10px;
                    margin-top: 1em;

                    img.tech-icon {
                        height: 25px;
                    }
                }
            }

            div.description {
                margin-top: 1em;
            }
        }
    }
}
</style>