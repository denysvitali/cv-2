<script setup lang="ts">
import { faGithub } from "@fortawesome/free-brands-svg-icons";

let basicInfo = {
  home: { icon: "🏠", value: "Zurich, Switzerland" },
  phone: { icon: "📞", value: "+41 79 366 43 60" },
  birthday: { icon: "🎂", value: "September 29, 1996" },
  citizenship: { icon: "🇨🇭", value: "Swiss Citizen" },
};

type ContactInfo = {
  icon: string;
  value: string;
  url?: string;
};

type ContactMap = {
  [id: string]: ContactInfo;
};

let contactInfo: ContactMap = {
  email: {
    icon: "fa-solid fa-envelope",
    value: "denys@denv.it",
    url: "mailto:denys@denv.it",
  },
  web: { icon: "fa-solid fa-link", value: "denv.it", url: "https://denv.it" },
  blog: {
    icon: "fa-solid fa-link",
    value: "blog.denv.it",
    url: "https://blog.denv.it",
  },
  github: {
    icon: "fa-brands fa-github",
    value: "@denysvitali",
    url: "https://github.com/denysvitali",
  },
  linkedin: {
    icon: "fa-brands fa-linkedin",
    value: "denysvitali",
    url: "https://www.linkedin.com/in/denysvitali/",
  },
};
</script>
<template>
  <header>
    <img class="profile-picture" src="/profile.jpg" alt="Denys Vitali" />
    <div class="contact-info">
      <div class="my-name">Denys Vitali</div>
      <div class="basic-info-grid">
        <div class="info-element" v-for="element of basicInfo">
          <div class="icon">{{ element.icon }}</div>
          <div class="text">{{ element.value }}</div>
        </div>
      </div>

      <hr />

      <div class="contact-info-grid">
        <div class="info-element" v-for="element of contactInfo">
          <div class="icon">
            <font-awesome-icon :icon="element.icon" />
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
  justify-content: center;
  column-gap: 4em;
  align-items: center;

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
    row-gap: 0.5em;

    div.my-name {
      font-size: 3em;
      font-weight: 700;
      width: 100%;
      text-align: center;
    }

    div.basic-info-grid,
    div.contact-info-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 1em;
      font-size: 1em;

      div.info-element {
        display: flex;
        flex-direction: row;
        overflow: hidden;
        column-gap: 8px;
        height: 24px;
        line-height: 20px;

        div.icon {
          height: 1em;
          font-size: 1em;
          width: 1em;
        }

        div.text {
          font-weight: 600;
        }
      }
    }
  }
}

@media (max-width: 700px) {
  header {
    img.profile-picture {
      $size: 150px;
      width: $size;
      height: $size;
      object-fit: cover;
      border-radius: $size;
      box-shadow: 0px 3px 24px 3px var(--color-shadow);
    }
  }
}

@media print {
  header {
    column-gap: 3em;

    img.profile-picture {
      $size: 130px;
      width: $size;
      height: $size;
      box-shadow: none;
    }

    div.contact-info div.my-name {
      font-size: 2.6em;
      line-height: 1.2;
    }
  }
}

@media screen and (max-width: 650px) {
  header {
    display: flex;
    flex-direction: column;
    align-items: center;

    div.contact-info {
      min-width: 80px;

      div.basic-info-grid,
      div.contact-info-grid {
        grid-template-columns: 1fr;
        align-items: center;
        column-gap: 8px;
      }
    }
  }
}
</style>
