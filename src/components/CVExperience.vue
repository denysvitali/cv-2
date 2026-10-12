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
  location?: string;
  icon?: string;
  positions: Position[];
  pageBreak?: boolean;
};

let experiences: Experience[] = [
  {
    company: "kaiko.ai",
    url: "https://kaiko.ai",
    icon: "kaiko.svg",
    location: "Zurich, Switzerland",
    positions: [
      {
        title: "Senior Platform Engineer",
        from: "November 2025",
        to: "Today",
        description: "",
        technologies: [],
      },
    ],
    pageBreak: false,
  },
  {
    company: "Open Systems",
    url: "https://open-systems.com",
    icon: "open-systems.svg",
    location: "Zurich, Switzerland",
    positions: [
      {
        title: "Senior Platform Observability Engineer",
        from: "January 2025",
        to: "September 2025",
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
          "clickhouse",
          "jaeger",
          "linux",
        ],
      },
    ],
    pageBreak: false,
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
    pageBreak: false,
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
          "jaeger",
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
    pageBreak: false,
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
        title: "Software Engineer",
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
    pageBreak: false,
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

function formatUrl(url: string): string {
  return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
}
</script>

<template>
  <div class="experience">
    <h2>Experience</h2>
    <div class="experiences">
      <div class="company" v-for="exp in experiences" :key="exp.company">
        <div class="company-header">
          <img
            v-if="exp.icon"
            :src="'/companies/square/' + exp.icon"
            :alt="exp.company"
            class="company-logo"
          />

          <div class="experience-top">
            <div class="company-name">{{ exp.company }}</div>
            <div class="company-meta" v-if="exp.location || exp.url">
              <span class="location" v-if="exp.location">{{
                exp.location
              }}</span>
              <a :href="exp.url" v-if="exp.url" target="_blank">{{
                formatUrl(exp.url)
              }}</a>
            </div>
          </div>
        </div>

        <div class="experience-desc">
          <div class="positions">
            <div
              class="position"
              v-for="position in exp.positions"
              :key="position.title"
            >
              <div class="position-top">
                <div class="title">{{ position.title }}</div>
                <div class="from-to">
                  {{ position.from }} – {{ position.to }}
                </div>
              </div>

              <div
                v-if="position.description"
                class="description"
                v-html="position.description"
              ></div>

              <div class="tech-stack" v-if="position.technologies.length">
                <img
                  class="tech-entry"
                  :src="`/tech/${language}.svg`"
                  :title="language"
                  :alt="language"
                  :key="language"
                  v-for="language in position.technologies"
                />
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
$companyLogoSize: 56px;
$railWidth: 2px;

// Header row (logo + name) followed by a body hanging off a vertical rail
// centered under the logo. Plain block layout so it fragments well in print.
@mixin company-layout($logoSize, $gap, $bodyGap) {
  div.company-header {
    column-gap: $gap;
  }

  img.company-logo {
    width: $logoSize;
    height: $logoSize;
  }

  div.experience-top {
    min-height: $logoSize;
  }

  div.experience-desc {
    margin-top: $bodyGap;
    margin-left: ($logoSize - $railWidth) * 0.5;
    padding-left: ($logoSize - $railWidth) * 0.5 + $gap;
  }
}

// Block layout (not flex) so the browser can break pages inside a company
div.experiences {
  div.company + div.company {
    margin-top: 32px;
  }

  div.company {
    @include company-layout($companyLogoSize, 24px, 12px);

    div.page-break {
      display: none;
    }

    div.company-header {
      display: flex;
      align-items: center;
      break-inside: avoid;
      break-after: avoid;
    }

    img.company-logo {
      flex-shrink: 0;
      background-color: #fff;
      object-fit: contain;
      padding: 5px;
      border-radius: 8px;
    }

    div.experience-top {
      display: flex;
      flex-direction: column;
      justify-content: center;
      min-width: 0;

      div.company-name {
        font-size: 1.3em;
        font-weight: bold;
        line-height: 1.2;
        color: var(--color-heading);
      }

      div.company-meta {
        color: var(--color-text-soft);

        > * + *::before {
          content: "·";
          display: inline-block;
          margin: 0 0.3em;
          color: var(--color-text-soft);
        }
      }
    }

    div.experience-desc {
      border-left: $railWidth solid var(--color-position-line);

      div.positions {
        div.position + div.position {
          margin-top: 1.8em;
        }

        div.position {
          div.position-top {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: baseline;
            column-gap: 1em;
            break-inside: avoid;
            break-after: avoid;

            div.title {
              font-weight: bold;
              font-size: 1.05em;
              color: var(--color-heading);
            }

            div.from-to {
              color: var(--color-text-soft);
              font-size: 0.9em;
              white-space: nowrap;
            }
          }

          div.description {
            margin-top: 0.6em;

            :deep(ul) {
              padding-left: 1.3em;
              margin: 0.3em 0;
            }

            :deep(li) {
              break-inside: avoid;
            }

            :deep(p + p) {
              margin-top: 0.5em;
            }

            :deep(h4) {
              font-size: 1em;
              margin: 0.8em 0 0.2em;
              break-after: avoid;
            }
          }

          div.tech-stack {
            $logoSize: 36px;
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
            margin-top: 0.9em;
            break-inside: avoid;
            break-before: avoid;

            img.tech-entry {
              background-color: #fff;
              width: $logoSize;
              height: $logoSize;
              padding: 5px;
              border-radius: 6px;
              display: block;
              object-fit: contain;
            }
          }
        }
      }
    }
  }
}

@media print {
  $companyLogoSize: 40px;

  div.experiences {
    div.company + div.company {
      margin-top: 1.4em;
    }

    div.company {
      @include company-layout($companyLogoSize, 16px, 6px);

      div.page-break {
        display: block;
        page-break-after: always;
      }

      img.company-logo {
        padding: 2px;
      }

      div.experience-desc div.positions {
        div.position + div.position {
          margin-top: 1.2em;
        }

        div.position div.tech-stack {
          $logoSize: 22px;
          gap: 5px;
          margin-top: 0.6em;

          img.tech-entry {
            width: $logoSize;
            height: $logoSize;
            padding: 1px;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 600px) {
  $logoSize: 40px;

  div.experiences div.company {
    @include company-layout($logoSize, 14px, 10px);

    img.company-logo {
      padding: 3px;
    }
  }
}
</style>
