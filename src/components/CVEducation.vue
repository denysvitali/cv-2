<script setup lang="ts">
let education = [
  {
    name: "University Of Applied Sciences of Southern Switzerland (SUPSI)",
    location: "Lugano, Switzerland",
    icon: "supsi.jpg",
    titles: [
      {
        title: "Bachelor of Science in Computer Engineering",
        from: 2016,
        to: 2019,
        description: "Thesis: DUPLEX Production Management",
      },
    ],
  },
  {
    name: "Scuola Arti e Mestieri Trevano",
    location: "Lugano, Switzerland",
    titles: [
      {
        title: "FCP as Multimedia Electronics Technician and FVB",
        from: 2011,
        to: 2015,
        description:
          "Federal Certificate of Proficency (FCP) and Federal Vocational Baccalaureate (FVB)",
      },
    ],
  },
];
</script>

<template>
  <div class="education">
    <h2>Education</h2>
    <div class="education-list">
      <div class="school" v-for="school in education" :key="school.name">
        <img
          :src="'/schools/' + school.icon"
          :alt="school.name"
          class="school-logo"
          v-if="school.icon"
        />
        <div class="school-logo" v-else>
          <font-awesome-icon icon="fa-solid fa-school" />
        </div>

        <div class="school-top">
          <div class="school-name">{{ school.name }}</div>
          <div class="location">{{ school.location }}</div>
        </div>

        <div class="line"></div>

        <div class="school-desc">
          <div class="titles">
            <div class="title" v-for="title in school.titles" :key="title.title">
              <div class="title-top">
                <div class="title-name">{{ title.title }}</div>
                <div class="from-to">{{ title.from }} – {{ title.to }}</div>
              </div>

              <div class="description" v-html="title.description"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$schoolLogoSize: 56px;

div.education {
  break-inside: avoid;
}

div.education-list {
  display: flex;
  flex-direction: column;
  row-gap: 28px;

  div.school {
    display: grid;
    grid-template-columns: $schoolLogoSize 1fr;
    grid-auto-rows: auto;
    column-gap: 24px;
    row-gap: 12px;
    break-inside: avoid;

    .school-logo {
      background-color: #fff;
      color: #000;
      object-fit: contain;
      padding: 5px;
      width: $schoolLogoSize;
      height: $schoolLogoSize;
      border-radius: 8px;
      font-size: $schoolLogoSize * 0.55;
      line-height: $schoolLogoSize - 10px;
      text-align: center;
    }

    div.line {
      margin-left: auto;
      margin-right: auto;
      background-color: var(--color-position-line);
      width: 2px;
      height: auto;
      border-radius: 2px;
    }

    div.school-top {
      display: flex;
      flex-direction: column;
      justify-content: center;
      min-height: $schoolLogoSize;

      div.school-name {
        font-weight: bold;
        font-size: 1.3em;
        line-height: 1.2;
        color: var(--color-heading);
      }

      div.location {
        color: var(--color-text-soft);
      }
    }

    div.school-desc {
      min-width: 0;

      div.titles {
        display: flex;
        flex-direction: column;
        row-gap: 1em;

        div.title-top {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: baseline;
          column-gap: 1em;

          div.title-name {
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
          margin-top: 0.4em;
        }
      }
    }
  }
}

@media print {
  $schoolLogoSize: 40px;

  div.education-list {
    row-gap: 1.2em;

    div.school {
      grid-template-columns: $schoolLogoSize 1fr;
      column-gap: 16px;
      row-gap: 6px;

      div.school-top {
        min-height: $schoolLogoSize;
      }

      .school-logo {
        width: $schoolLogoSize;
        height: $schoolLogoSize;
        padding: 2px;
        font-size: $schoolLogoSize * 0.55;
        line-height: $schoolLogoSize - 4px;
      }
    }
  }
}

@media screen and (max-width: 600px) {
  $logoSize: 40px;

  div.education-list div.school {
    grid-template-columns: $logoSize 1fr;
    column-gap: 14px;

    .school-logo {
      width: $logoSize;
      height: $logoSize;
      padding: 3px;
      font-size: $logoSize * 0.55;
      line-height: $logoSize - 6px;
    }

    div.school-top {
      min-height: $logoSize;
    }
  }
}
</style>
