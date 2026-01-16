<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

import AppHeader from "./components/AppHeader/AppHeader.vue";
import BaseButton from "./components/BaseButton/BaseButton.vue";
import SearchNote from "./components/SearchNote.vue";
import { useModalStore } from "./stores/modalStore";

const modalStore = useModalStore();

const route = useRoute();

const loading = ref(false);
const error = ref(null);

watch(
  () => modalStore.isModalOpen,
  (val) => {
    if (!val) {
      error.value = null;
      loading.value = false;
    }
  }
);
</script>

<template>
  <main>
    <AppHeader class="pb-5">
      <template #logo>
        <router-link to="/">
          <a class="font-bold text-3xl min-w-max whitespace-nowrap"
            >RCS Notion</a
          >
        </router-link>
      </template>

      <template #nav>
        <SearchNote class="md:ml-auto" />

        <router-link
          to="/"
          class="links md:ml-auto"
          exact-active-class="active"
        >
          Home
        </router-link>
        <router-link to="/archive" class="links" active-class="active"
          >Archive</router-link
        >
        <router-link to="/trash" class="links" active-class="active"
          >Trash</router-link
        >
      </template>

      <template #actions>
        <BaseButton
          :disabled="!route.meta.showHeaderButton"
          variant="outline"
          class="h-14 min-w-max backdrop-blur-3xl"
          @click="modalStore.openCreate"
        >
          <span>New Note</span>
          <span class="mb-1.5 text-3xl font-light">+</span>
        </BaseButton>
      </template>
    </AppHeader>

    <router-view />
  </main>
</template>
<style>
@reference "tailwindcss/theme.css";

.links {
  @apply pl-2 duration-300 hover:scale-110;
}
.active {
  @apply text-white duration-400;
}
</style>
