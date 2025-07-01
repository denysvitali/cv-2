<script setup lang="ts">
import PhoneLocatorProExp2012 from "@/assets/experiences/2012-plpro.md";
import TrueflavaExp2011 from "@/assets/experiences/2011-trueflava.md";
import CoelisExp2014 from "@/assets/experiences/2014-coelis.md";
import SyndeckExp2018 from "@/assets/experiences/2018-syndeck.md";
import NanosExp2019 from "@/assets/experiences/2019-nanos.md";
import SwisscomExp2020 from "@/assets/experiences/2020-scs.md";
import SwisscomExp2021 from "@/assets/experiences/2021-scs.md";
import NianticExp2023 from "@/assets/experiences/2023-niantic.md";
import OpenSystems2025 from "@/assets/experiences/2025-opensystems.md";
import { marked } from "marked";

type Position = {
  title: string;
  from: string;
  to: string;
  description: string;
  technologies: string[];
};

type Experience = {
  company: string;
  url?: string;
  location: string;
  icon: string;
  positions: Position[];
  pageBreak?: boolean;
};

let experiences: Experience[] = [
  {
    company: "Open Systems",
    url: "https://open-systems.com",
    icon: "open-systems.svg",
    location: "Zurich, Switzerland",
    positions: [
      {
        title: "Senior Platform Observability Engineer",
        from: "January 2025",
        to: "Today",
        description: marked.parse(OpenSystems2025),
        technologies: [
          "go",
          "grafana",
          "tempo",
          "loki",
          "github",
          "otel",
          "prometheus",
          "thanos",
          "azure",
          "kubernetes",
        ],
      },
    ],
    pageBreak: true,
  },
  {
    company: "Niantic",
    url: "https://nianticlabs.com",
    icon: "niantic.svg",
    location: "Zurich, Switzerland",
    positions: [
      {
        title: "Security Engineer, Production",
        from: "November 2023",
        to: "December 2024",
        description: marked.parse(NianticExp2023),
        technologies: [
          "gcp",
          "aws",
          "go",
          "terraform",
          "kubernetes",
          "gitlab",
          "backstage",
          "react",
          "angular",
          "otel",
          "grafana",
          "prometheus",
        ],
      },
    ],
    pageBreak: true,
  },
  {
    company: "Swisscom",
    url: "https://swisscom.ch",
    location: "Zurich, Switzerland",
    icon: "swisscom.png",
    positions: [
      {
        title: "DevOps Engineer / Software Engineer",
        from: "March 2021",
        to: "October 2023",
        description: marked.parse(SwisscomExp2021),
        technologies: [
          "go",
          "python",
          "kotlin",
          "java",
          "vue",
          "react",
          "kubernetes",
          "linux",
          "aws",
          "postgres",
          "mongodb",
          "argocd",
          "waypoint",
          "jenkins",
          "ansible",
          "haproxy",
          "redis",
          "kafka",
          "otel",
          "prometheus",
          "grafana",
        ],
      },
      {
        title: "DevOps Engineer",
        from: "March 2020",
        to: "Feb 2021",
        description: marked.parse(SwisscomExp2020),
        technologies: [
          "go",
          "python",
          "java",
          "kubernetes",
          "k3s",
          "linux",
          "ansible",
          "postgres",
          "mssql",
          "oracle",
          "jenkins",
          "angular",
          "graphql",
          "prometheus",
          "grafana",
        ],
      },
    ],
    pageBreak: true,
  },
  {
    company: "Nanos",
    url: "https://nanos.ai",
    location: "Zurich, Switzerland",
    icon: "nanos.png",
    positions: [
      {
        title: "DevOps / Backend Engineer",
        from: "Sep 2019",
        to: "Feb 2020",
        description: marked.parse(NanosExp2019),
        technologies: [
          "go",
          "nodejs",
          "react",
          "kubernetes",
          "gcp",
          "digitalocean",
        ],
      },
    ],
  },
  {
    company: "Syndeck",
    location: "Lugano, Switzerland",
    icon: "syndeck.png",
    positions: [
      {
        title: "Software Engieeer",
        from: "Jul 2018",
        to: "Dec 2018",
        description: marked.parse(SyndeckExp2018),
        technologies: ["go", "nodejs", "bluetooth", "vue"],
      },
    ],
    pageBreak: false,
  },
  {
    company: "Coelis",
    url: "https://coelis.ch",
    location: "Lugano, Switzerland",
    icon: "coelis.png",
    positions: [
      {
        title: "Head of IT Department / Co-Founder",
        from: "Nov 2014",
        to: "Oct 2017",
        description: marked.parse(CoelisExp2014),
        technologies: ["php", "c-sharp", "js", "linux", "gitlab"],
      },
    ],
    pageBreak: true,
  },
  {
    company: "TRUE FLAVA",
    url: "https://trueflava.com",
    location: "Remote (Turin, Italy)",
    icon: "trueflava.png",
    positions: [
      {
        title: "Web Developer",
        from: "Feb 2011",
        to: "Feb 2015",
        description: marked.parse(TrueflavaExp2011),
        technologies: ["php", "js"],
      },
    ],
    pageBreak: false,
  },
  {
    company: "PhoneLocator Pro",
    location: "Remote",
    icon: "plpro.jpg",
    positions: [
      {
        title: "Web Developer",
        from: "Nov 2012",
        to: "Feb 2014",
        description: marked.parse(PhoneLocatorProExp2012),
        technologies: ["php", "js"],
      },
    ],
  },
];
</script>

<template>
  <div class="experience">
    <h2>Experience</h2>
    <div class="experiences">
      <div class="company" v-for="exp in experiences">
        <img :src="'/companies/square/' + exp.icon" class="company-logo" />

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

              <div class="description" v-html="position.description"></div>

              <div class="tech-stack-section" v-if="position.technologies">
                <h4>Tech Stack</h4>
                <div class="tech-stack">
                  <img
                    class="tech-entry"
                    :src="`/tech/${language}.svg`"
                    :title="language"
                    v-for="language in position.technologies"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="exp.pageBreak" class="page-break"></div>
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

    div.page-break {
      display: none;
    }

    div.company-name {
      font-size: 1.2em;
    }

    img.company-logo {
      page-break-inside: avoid;
      width: $companyLogoSize;
      height: $companyLogoSize;
      background-color: #fff;
      object-fit: contain;
      padding: 5px;
      border-radius: 5px;
    }

    div.line {
      page-break-before: avoid;
      page-break-after: avoid;
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
      page-break-before: avoid;

      div.company-name {
        font-weight: bold;
      }

      div.location {
        font-size: 1em;
        color: var(--color-text-soft);
      }
    }

    div.experience-desc {
      page-break-before: avoid;
      page-break-after: auto;

      div.positions {
        page-break-before: avoid;
        display: flex;
        flex-direction: column;
        row-gap: 3em;

        div.position {
          page-break-before: auto;

          div.title {
            font-weight: bold;
            font-size: 1em;
          }

          div.from-to {
            display: flex;
            flex-direction: row;
            column-gap: 5px;
            color: var(--color-text-soft);
            font-size: 0.9em;
          }

          div.description {
            margin-top: 2em;
            page-break-after: auto;
          }

          div.tech-stack {
            page-break-inside: auto;
            display: grid;
            margin-left: auto;
            margin-right: auto;
            justify-items: center;
            $logoSize: 60px;
            $countColumns: 5;
            $gap: 8px;
            $logoPadding: 8px;
            grid-template-columns: repeat($countColumns, $logoSize);
            width: $logoSize * $countColumns + $gap * ($countColumns - 1);
            column-gap: $gap;
            row-gap: $gap;
            margin-top: 1em;

            img.tech-entry {
              background-color: #fff;
              width: $logoSize;
              height: $logoSize;
              padding: $logoPadding;
              border-radius: 5px;
              display: block;
              overflow: hidden;
            }
          }
        }
      }
    }
  }
}

@media print {
  * {
  }

  $companyLogoSize: 50px;

  div.experiences {
    row-gap: 1em;
    div.company {
      grid-template-columns: $companyLogoSize 1fr;
      grid-auto-rows: auto;
      div.experience-top {
        height: $companyLogoSize;
        margin-bottom: 1em;
      }

      div.page-break {
        display: block;
        page-break-after: always;
      }

      img.company-logo {
        width: $companyLogoSize;
        height: $companyLogoSize;
      }

      div.experience-desc {
        div.positions {
          div.position {
            div.description {
              margin-top: 1em;
            }
            div.tech-stack {
              $logoSize: 35px;
              $countColumns: 8;
              $gap: 8px;
              $logoPadding: 4px;
              grid-template-columns: repeat($countColumns, $logoSize);
              width: $logoSize * $countColumns + $gap * ($countColumns - 1);
              column-gap: $gap;
              row-gap: $gap;

              img.tech-entry {
                width: $logoSize;
                height: $logoSize;
                padding: $logoPadding;
              }
            }
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

    div.company div.experience-desc {
      div.positions {
        div.position {
          div.tech-stack {
            $logoSize: 60px;
            $countColumns: 3;
            $gap: 8px;
            $logoPadding: 8px;
            grid-template-columns: repeat($countColumns, $logoSize);
            width: $logoSize * $countColumns + $gap * ($countColumns - 1);
          }
        }
      }
    }
  }
}
</style>
