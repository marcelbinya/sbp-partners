<template>
  <div class="w-full my-4 px-4 column h-full">
    <!-- Article -->
    <article
      class="
        grid-item
        bg-white
        rounded-xl
        text-black
        relative
        flex flex-nowrap flex-col
        h-80
        overflow-hidden
        shadow-2xl
        hover:shadow-lg
      "
    >
      <img
        alt="Placeholder"
        class="cover-image absolute lg:relative"
        :src="partner.imageUrl"
      />

      <div class="px-2 py-3">
        <div class="font-bold text-xl mb-2">{{ partner.name }}</div>
        <p class="text-gray-700 text-base">
          {{ partner.subtitle }}
        </p>
      </div>

      <!-- <div class="partner-description px-4 py-1 overflow-hidden">
                {{ partner.description || defaultDescription }}
                <p class="read-more"></p>
            </div> -->

      <!-- <div class="absolute bottom-0 right-0 lex justify-between h-8">
                <span class="relative p-4 text-lg">
                Mehr erfahren >
                </span>
            </div> -->

      <div class="grid grid-cols-2">
        <div>
          <div class="px-1 pb-1 grid gap-2">
            <span
              class="
                bg-gray-200
                rounded-full
                text-sm
                font-semibold
                text-gray-700 text-center
              "
              v-for="(tag, index) in partner.tags ?? []"
              :key="index"
            >
              {{ tag
              }}<template v-if="partner.tags?.length - 1 !== index"></template>
            </span>
          </div>
        </div>

        <div>
          <div
            class="
              absolute
              bottom-2
              right-2
              grid grid-column-2 grid-flow-col
              gap-2
            "
          >
            <button
              @click="
                $router.push({
                  name: 'partner',
                  params: {
                    name: partner.name.toLowerCase().replaceAll(' ', '-'),
                  },
                })
              "
              type="button"
              class="
                mdi mdi-information-variant
                px-2.5
                py-1
                text-xl text-black-700
                border border-black
                rounded-full
              "
            ></button>
            <Popper v-bind="$attrs" arrow="true">
              <button
                @click="callToDashboard()"
                type="button"
                class="
                  mdi mdi-eye
                  px-2.5
                  py-1
                  text-center text-xl text-black-700
                  border border-black
                  rounded-full
                "
              ></button>
              <template #content="props">
                <div class="grid grid-cols-2 gap-2 w-64 h-36 bg-gray-200 border-4 border-white shadow-xl">
                  <div class="bg-gray-600 text-white hover:bg-gray-700 p-2" @click="callToDashboard('top-left'); props.close();">Oben links</div>
                  <div class="bg-gray-600 text-white hover:bg-gray-700 p-2" @click="callToDashboard('top-right'); props.close();">Oben rechts</div>
                  <div class="bg-gray-600 text-white hover:bg-gray-700 p-2" @click="callToDashboard('bottom-left'); props.close();">Unten links</div>
                  <div class="bg-gray-600 text-white hover:bg-gray-700 p-2" @click="callToDashboard('bottom-right'); props.close();">Unten rechts</div>
                </div>
                <div class="bg-gray-600 text-white hover:bg-gray-700 p-2" @click="callToDashboard('full'); props.close();">Ganzer Bildschirm</div>
              </template>
            </Popper>
          </div>
        </div>
      </div>
    </article>
    <!-- END Article -->
  </div>
</template>

<script>
export default {
  props: ["partner"],
  methods: {
    callToDashboard(position) {
      var oReq = new XMLHttpRequest();

      oReq.addEventListener("load", reqListener);

      oReq.open(
        "POST",
        "https://1src.tech/api/functions/sbp_set-window/run?key=XFKdw42rYH2pLgGZ9WGzzShWD9GfJZra"
      );

      oReq.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

      oReq.send(JSON.stringify({ partner: this.partner.name, position }));
    },
  },
};
function reqListener() {}
</script>
 
<style>
@media (min-width: 1024px) {
  .cover-image {
    object-fit: cover;
    min-height: 10rem;
    max-height: 10rem;
    height: 10rem;
  }
}
.partner-description {
  position: relative;
}
.grid-item {
  transition: box-shadow 0.3s cubic-bezier(0.22, 1, 0.36, 1);
}
.partner-description .read-more {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  margin: 0;
  padding: 30px 0;
  color: red;

  margin-top: 2rem;

  /* "transparent" only works here because == rgba(0,0,0,0) */
  background-image: linear-gradient(to bottom, transparent, lightgrey);
}
</style>