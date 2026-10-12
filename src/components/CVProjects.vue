<script setup lang="ts">
import { marked } from "marked";
import TeamsApi from "@/assets/projects/teams-api.md";
import GtfsServer from "@/assets/projects/gtfs-server.md";
import Dc1Pmos from "@/assets/projects/dc-1-pmos.md";

let projects = [
  {
    name: "dc-1-pmos",
    url: "https://github.com/denysvitali/dc-1-pmos",
    description: marked.parse(Dc1Pmos),
    tech: ["linux"],
  },
  {
    name: "teams-api",
    url: "https://github.com/fossteams/teams-api",
    description: marked.parse(TeamsApi),
    tech: ["go", "flutter", "vue"],
  },
  {
    name: "gtfs-server",
    url: "https://github.com/denysvitali/gtfs-server",
    description: marked.parse(GtfsServer),
    tech: ["rust", "postgresql"],
  },
  {
    name: "surface-pro-x-linux",
    url: "https://github.com/denysvitali/surface-pro-x-linux",
    description: "Linux kernel for the Microsoft Surface Pro X (SQ2)",
    tech: ["linux"],
  },
  {
    name: "pixelc-linux",
    url: "https://github.com/pixelc-linux/documentation",
    description: "Patches and images to run Linux on the Google Pixel C",
    tech: ["linux"],
  },
];

function formatLink(link: string): string {
  const GITHUB_URL = "https://github.com/";
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
      <div class="see-more">
        This is just an incredibly small part of the many (190+) Open Source
        projects I've created. Check out my
        <a href="https://github.com/denysvitali/">GitHub profile</a>!
      </div>
      <div class="project" v-for="project in projects" :key="project.name">
        <div class="project-top">
          <div class="project-left">
            <div class="name">{{ project.name }}</div>
            <a class="repo" :href="project.url" target="_blank">{{
              formatLink(project.url)
            }}</a>
          </div>
          <div class="tech-stack">
            <img
              class="tech-icon"
              v-for="tech in project.tech"
              :key="tech"
              :alt="tech"
              :title="tech"
              :src="'/tech/' + tech + '.svg'"
            />
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
    row-gap: 1.3em;

    div.see-more {
      color: var(--color-text-soft);
      break-after: avoid;
    }

    div.project {
      display: flex;
      flex-direction: column;
      break-inside: avoid;

      div.project-top {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        column-gap: 1em;

        div.name {
          font-weight: bold;
          font-size: 1.1em;
          line-height: 1.25;
          color: var(--color-heading);
        }

        a.repo {
          font-size: 0.9em;
        }

        div.tech-stack {
          display: flex;
          flex-shrink: 0;
          column-gap: 8px;

          img.tech-icon {
            height: 22px;
          }
        }
      }

      div.description {
        margin-top: 0.3em;
      }
    }
  }
}
</style>
