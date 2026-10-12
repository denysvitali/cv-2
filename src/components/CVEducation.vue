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
        <div class="school-header">
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
        </div>

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
$railWidth: 2px;

// Same header + rail layout as the experience section
@mixin school-layout($logoSize, $gap, $bodyGap, $logoPadding) {
  div.school-header {
    column-gap: $gap;
  }

  .school-logo {
    width: $logoSize;
    height: $logoSize;
    padding: $logoPadding;
    font-size: $logoSize * 0.55;
    line-height: $logoSize - $logoPadding * 2;
  }

  div.school-top {
    min-height: $logoSize;
  }

  div.school-desc {
    margin-top: $bodyGap;
    margin-left: ($logoSize - $railWidth) * 0.5;
    padding-left: ($logoSize - $railWidth) * 0.5 + $gap;
  }
}

div.education {
  break-inside: avoid;
}

div.education-list {
  display: flex;
  flex-direction: column;
  row-gap: 28px;

  div.school {
    @include school-layout($schoolLogoSize, 24px, 12px, 5px);
    break-inside: avoid;

    div.school-header {
      display: flex;
      align-items: center;
    }

    .school-logo {
      flex-shrink: 0;
      background-color: #fff;
      color: #000;
      object-fit: contain;
      border-radius: 8px;
      text-align: center;
    }

    div.school-top {
      display: flex;
      flex-direction: column;
      justify-content: center;
      min-width: 0;

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
      border-left: $railWidth solid var(--color-position-line);

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
      @include school-layout($schoolLogoSize, 16px, 6px, 2px);
    }
  }
}

@media screen and (max-width: 600px) {
  $logoSize: 40px;

  div.education-list div.school {
    @include school-layout($logoSize, 14px, 10px, 3px);
  }
}
</style>
