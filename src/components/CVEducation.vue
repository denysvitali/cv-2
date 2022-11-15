<script type="ts" setup>
import { marked } from 'marked';

let education = [
    {
        name: 'University Of Applied Sciences of Southern Switzerland (SUPSI)',
        location: 'Lugano, Switzerland',
        icon: 'supsi.jpg',
        titles: [
            {
                title: 'Bachelor of Science in Computer Engineering',
                from: 2016,
                to: 2019,
                description: 'Thesis: DUPLEX Production Management',
            },
        ]
    },
    {
        name: 'Scuola Arti e Mestieri Trevano',
        location: 'Lugano, Switzerland',
        titles: [
            {
                title: 'FCP as Multimedia Electronics Technician and FVB',
                from: 2011,
                to: 2015,
                description: 'Federal Certificate of Proficency (FCP) and Federal Vocational Baccalaureate (FVB)',
            },
        ]
    }
]

</script>

<template>
    <div class="education">
        <h2>Education</h2>
        <div class="education-list">
            <div class="school" v-for="school in education">
                <img 
                    :src="'/schools/' + school.icon" 
                    class="school-logo"
                    v-if="school.icon"
                />
                <div class="school-logo" v-else>
                    <font-awesome-icon icon="fa-solid fa-school"/>
                </div>

                <div class="school-top">
                    <div class="school-name">{{ school.name }}</div>
                    <div class="location">{{ school.location }}</div>
                </div>

                <div class="line"></div>

                <div class="school-desc">
                    <div class="titles">
                        <div class="title" v-for="title in school.titles">
                            <div class="title">{{ title.title }}</div>
                            <div class="from-to">
                                <span class="from">
                                    {{ title.from }}
                                </span>
                                <span class="divider">-</span>
                                <span class="to">
                                    {{ title.to }}
                                </span>
                            </div>

                            <div class="description" v-html="title.description">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    $companyLogoSize: 70px;
    div.education-list {
        display: flex;
        flex-direction: column;
        row-gap: 80px;
        div.school {
            display: grid;
            grid-template-columns: $companyLogoSize 1fr;
            grid-auto-rows: minmax(100px, auto);
            column-gap: 40px;

            div.school-name {
                font-size: 18px;
            }

            .school-logo {
                background-color: #FFF;
                color: #000;
                object-fit: contain;
                padding: 5px;
                width: $companyLogoSize;
                height: $companyLogoSize;
                object-fit: contain;
                border-radius: 5px;
                font-size: $companyLogoSize * 0.6;
                text-align: center;
            }

            div.line {
                margin-left: auto;
                margin-right: auto;
                background-color: var(--color-position-line);
                width: 2px;
                height: auto;
            }

            div.school-top {
                display: flex;
                flex-direction: column;
                justify-content: center;
                height: $companyLogoSize;

                div.school-name {
                    font-weight: bold;
                }

                div.location {
                    font-size: 14px;
                    color: var(--color-text-soft);
                }
            }

            div.school-desc {

                div.titles {
                    display: flex;
                    flex-direction: column;
                    row-gap: 3em;
                    div.title {
                        div.title {
                            font-weight: bold;
                            font-size: 18px;
                        }

                        div.from-to {
                            display: flex;
                            flex-direction: row;
                            column-gap: 5px;
                            color: var(--color-text-soft);
                            font-size: 0.90rem;
                        }

                        div.description{
                            margin-top: 2em;
                        }
                    }
                }
            }
        }
    }
</style>