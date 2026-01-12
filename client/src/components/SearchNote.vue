<script setup lang="ts">
import { useNotesStore } from "../stores/useNotesStore";

const notesStore = useNotesStore();
</script>

<template>
  <input
    v-model="notesStore.searchQuery"
    placeholder="Başlık veya etiket ara..."
    class="px-4 py-2 h-14 w-100 rounded-full backdrop-blur-xs text-white outline-none border duration-200 hover:scale-105 focus:border-3 focus:scale-105 focus:border-(--btn-primary)"
  />
</template>
