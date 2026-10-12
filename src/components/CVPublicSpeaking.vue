<script setup lang="ts">
let talks = [
  {
    name: "I'm a happy engineer",
    tech: [],
    links: ["https://youtu.be/f1a_MRLibqU"],
  },
  {
    name: "Go Meetup: Photobooth",
    description: "Building a photobooth from scratch",
    date: "April 2025",
    tech: ["go", "linux"],
    links: [
      "https://www.youtube.com/watch?v=Sc1bdh_iiSA",
      "https://photobooth.slides.denv.it/",
    ],
  },
  {
    name: "postmarketOS-powered Kubernetes Cluster",
    links: ["https://blog.denv.it/posts/pmos-k3s-cluster/"],
    description:
      "Transforming old smartphones into a functional Kubernetes cluster using postmarketOS, giving them a second life as computing nodes.",
    tech: ["linux", "kubernetes"],
  },
  {
    name: "Porting Go to a new microcontroller",
    description:
      "Discussing about the challenges of porting Go* on an ESP32-C3 (Xtensa architecture)",
    date: "December 2023",
    tech: ["go", "linux"],
    links: [
      "https://docs.google.com/presentation/d/18jWccV-F2FguZiB5gXLkQFAhUFK_yl7FwkgtldwstxI/edit",
    ],
  },
  {
    name: "Introduction to Go Generics",
    description:
      "An introduction to Go Generics and how to use them effectively",
    date: "April 2022",
    tech: ["go"],
    links: ["https://go-generics.slides.denv.it/"],
  },
];

function formatLink(link: string): string {
  const YOUTUBE_URL = "https://www.youtube.com/watch?v=";

  if (link.startsWith(YOUTUBE_URL) || link.startsWith("https://youtu.be/")) {
    return "YouTube";
  }
  if (
    link.includes("slides") ||
    link.startsWith("https://docs.google.com/presentation")
  ) {
    return "Slides";
  }
  if (link.startsWith("https://blog.denv.it")) {
    return "Blog Post";
  }
  return link;
}
</script>

<template>
  <div class="public-speaking">
    <h2>Public Speaking & Blog Posts</h2>
    <div class="talks-list">
      <div class="talk" v-for="talk in talks" :key="talk.name">
        <div class="talk-top">
          <div class="talk-left">
            <div class="name">{{ talk.name }}</div>
            <div class="meta">
              <span class="date" v-if="talk.date">{{ talk.date }}</span>
              <a
                v-for="link in talk.links"
                :key="link"
                :href="link"
                target="_blank"
              >
                {{ formatLink(link) }}
              </a>
            </div>
          </div>
          <div class="tech-stack">
            <img
              class="tech-icon"
              v-for="tech in talk.tech"
              :key="tech"
              :alt="tech"
              :title="tech"
              :src="'/tech/' + tech + '.svg'"
            />
          </div>
        </div>
        <div class="description" v-if="talk.description">
          {{ talk.description }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
div.public-speaking {
  div.talks-list {
    display: flex;
    flex-direction: column;
    row-gap: 1.3em;

    div.talk {
      display: flex;
      flex-direction: column;
      break-inside: avoid;

      div.talk-top {
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

        div.meta {
          display: flex;
          flex-wrap: wrap;
          font-size: 0.9em;
          color: var(--color-text-soft);

          > * + *::before {
            content: "·";
            display: inline-block;
            margin: 0 0.3em;
            color: var(--color-text-soft);
          }
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
