<script setup lang="ts">
let talks = [
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
    description: "Discussing about the challenges of porting Go* on an ESP32-C3 (Xtensa architecture)",
    date: "December 2023",
    tech: ["go", "linux"],
    links: [
      "https://docs.google.com/presentation/d/18jWccV-F2FguZiB5gXLkQFAhUFK_yl7FwkgtldwstxI/edit",
    ],
  },
  {
    name: "Introduction to Go Generics",
    description: "An introduction to Go Generics and how to use them effectively",
    date: "April 2022",
    tech: ["go"],
    links: ["https://go-generics.slides.denv.it/"],
  },
];

function formatLink(link: string): string {
  const YOUTUBE_URL = "https://www.youtube.com/watch?v=";
  
  if (link.startsWith(YOUTUBE_URL)) {
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
            <div class="links">
              <template v-for="(link, index) in talk.links" :key="link">
                <a :href="link" target="_blank">
                  {{ formatLink(link) }}
                </a>
                <span v-if="index < talk.links.length - 1"> • </span>
              </template>
            </div>
          </div>
          <div class="talk-right">
            <div class="tech-stack">
              <img
                class="tech-icon"
                v-for="tech in talk.tech"
                :key="tech"
                :alt="tech"
                :src="'/tech/' + tech + '.svg'"
              />
            </div>
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
    row-gap: 2em;

    div.talk {
      display: flex;
      flex-direction: column;

      div.talk-top {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        div.talk-left {
          display: flex;
          flex-direction: column;

          div.name {
            font-weight: bold;
            font-size: 1.2em;
            margin-bottom: 0.5em;
          }

          div.links {
            display: flex;
            gap: 0.5em;
            align-items: center;

            a {
              color: #007acc;
              text-decoration: none;
              font-size: 0.9em;

              &:hover {
                text-decoration: underline;
              }
            }
          }
        }

        div.talk-right {
          div.tech-stack {
            display: flex;
            column-gap: 10px;
            margin-top: 1em;

            img.tech-icon {
              height: 25px;
            }
          }
        }
      }

      div.description {
        margin-top: 1em;
        line-height: 1.5;
      }
    }
  }
}
</style>
