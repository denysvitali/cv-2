<script setup lang="ts" >
import PhoneLocatorProExp2012 from '@/assets/experiences/2012-plpro.md';
import TrueflavaExp2011 from '@/assets/experiences/2011-trueflava.md';
import CoelisExp2014 from '@/assets/experiences/2014-coelis.md';
import SyndeckExp2018 from '@/assets/experiences/2018-syndeck.md';
import NanosExp2019 from '@/assets/experiences/2019-nanos.md';
import SwisscomExp2020 from '@/assets/experiences/2020-scs.md';
import SwisscomExp2021 from '@/assets/experiences/2021-scs.md';
import { marked } from 'marked';

let experiences = [
    {
        company: 'Swisscom (Schweiz) AG',
        url: 'https://swisscom.ch',
        location: 'Zurich, Switzerland',
        icon: 'swisscom.png',
        positions: [
            {
                title: 'Software Engineer / DevOps Engineer (Data, Analytics & AI)',
                from: 'March 2021',
                to: 'Present',
                description: marked.parse(SwisscomExp2021)
            },
            {
                title: 'DevOps Engineer',
                from: 'March 2020',
                to: 'Feb 2021',
                description: marked.parse(SwisscomExp2020)
            }
        ]
    },
    {
        company: 'Nanos',
        url: 'https://nanos.ai',
        location: 'Zurich, Switzerland',
        icon: 'nanos.png',
        positions: [
            {
                title: 'DevOps / Backend Engineer',
                from: 'Sep 2019',
                to: 'Feb 2020',
                description: marked.parse(NanosExp2019)
            }
        ]
    },
    {
        company: 'Syndeck',
        location: 'Lugano, Switzerland',
        icon: 'syndeck.png',
        positions: [
            {
                title: 'Software Engieeer',
                from: 'Jul 2018',
                to: 'Dec 2018',
                description: marked.parse(SyndeckExp2018)
            }
        ]
    },
    {
        company: 'Coelis',
        url: 'https://coelis.ch',
        location: 'Lugano, Switzerland',
        icon: 'coelis.png',
        positions: [
            {
                title: 'Head of IT Department / Co-Founder',
                from: 'Nov 2014',
                to: 'Oct 2017',
                description: marked.parse(CoelisExp2014)
            }
        ]
    },
    {
        company: 'TRUE FLAVA',
        url: 'https://trueflava.com',
        location: 'Remote (Turin, Italy)',
        icon: 'trueflava.png',
        positions: [
            {
                title: 'Web Developer',
                from: 'Feb 2011',
                to: 'Feb 2015',
                description: marked.parse(TrueflavaExp2011)
            }
        ]
    },
    {
        company: 'PhoneLocator Pro',
        location: 'Remote',
        icon: 'plpro.jpg',
        positions: [
            {
                title: 'Web Developer',
                from: 'Nov 2012',
                to: 'Feb 2014',
                description: marked.parse(PhoneLocatorProExp2012)
            }
        ]
    },
]

</script>

<template>
    <div class="experience">
        <h2>Experience</h2>
        <div class="experiences">
            <div class="company" v-for="exp in experiences">
                <img :src="'/companies/square/' + exp.icon" class="company-logo"/>

                <div class="experience-top">
                    <div class="company-name">{{ exp.company }}</div>
                    <div class="location">{{ exp.location }}</div>
                    <a :href="exp.url" v-if="exp.url" target="_blank">{{ exp.url }}</a>
                </div>

                <div class="line"></div>

                <div class="experience-desc">
                    <div class="positions">
                        <div class="position" v-for="position in exp.positions">
                            <div class="title">{{ position.title }}</div>
                            <div class="from-to">
                                <span class="from">
                                    {{ position.from }}
                                </span>
                                <span class="divider">-</span>
                                <span class="to">
                                    {{ position.to }}
                                </span>
                            </div>

                            <div class="description" v-html="position.description">
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
div.experiences {
    display: flex;
    flex-direction: column;
    row-gap: 80px;
    div.company {
        display: grid;
        grid-template-columns: $companyLogoSize 1fr;
        grid-auto-rows: minmax(100px, auto);
        column-gap: 40px;
        page-break-before: avoid;
        break-before: avoid;

        div.company-name {
            font-size: 18px;
        }

        img.company-logo {
            width: $companyLogoSize;
            height: $companyLogoSize;
            background-color: #FFF;
            object-fit: contain;
            padding: 5px;
            border-radius: 5px;
        }

        div.line {
            margin-left: auto;
            margin-right: auto;
            background-color: var(--color-position-line);
            width: 2px;
            height: auto;
        }

        div.experience-top {
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: $companyLogoSize;

            div.company-name {
                font-weight: bold;
            }

            div.location {
                font-size: 14px;
                color: var(--color-text-soft);
            }
        }

        div.experience-desc {
            div.positions {
                display: flex;
                flex-direction: column;
                row-gap: 3em;
                div.position {
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
                        page-break-after: auto;
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 600px) {
    $logoSize: 50px;
    div.experiences {
        div.company {
            grid-template-columns: $logoSize 1fr;
            column-gap: 20px;
            img.company-logo {
                width: $logoSize;
                height: $logoSize;
            }
        }
    }
}
</style>
