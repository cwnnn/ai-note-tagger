<script setup>
import { computed } from "vue";

const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  date: {
    type: String,
    default: "",
  },
  content: {
    type: String,
    default: "",
  },
  loading: Boolean,
  readonly: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:title", "update:content", "submit"]);

const titleModel = computed({
  get: () => props.title,
  set: (val) => emit("update:title", val),
});

const contentModel = computed({
  get: () => props.content,
  set: (val) => emit("update:content", val),
});

function submit() {
  if ((!titleModel.value.trim() && !contentModel.value.trim()) || props.loading)
    return;

  emit("submit", {
    title: titleModel.value,
    content: contentModel.value,
  });
}
</script>

<template>
  <div class="note-form-wrapper">
    <div class="note-card relative">
      <p class="absolute font-serif text-sm top-2 left-9">{{ props.date }}</p>
      <div class="flex justify-between">
        <input
          v-model="titleModel"
          type="text"
          placeholder="Title..."
          class="note-input"
          :disabled="readonly"
        />
        <slot name="header"></slot>
      </div>
      <textarea
        v-model="contentModel"
        rows="6"
        placeholder="Your Note…"
        class="note-textarea"
        :disabled="readonly"
      ></textarea>

      <div class="flex gap-2 items-center">
        <slot name="tags"></slot>
      </div>

      <slot name="footer"></slot>
    </div>
  </div>
</template>

<style>
@reference "tailwindcss/theme.css";
.note-form-wrapper {
  @apply p-6 flex justify-center items-center w-200;
}

.note-card {
  @apply w-full max-w-[80vw]  rounded-2xl shadow-2xl shadow-amber-50 p-8 flex flex-col gap-6 bg-(--bg-color);
}

/* INPUT Başlık */
.note-input {
  @apply w-full rounded-xl text-gray-100 px-4 font-semibold text-xl border-none;
  outline: none;
}

.note-input:disabled {
  @apply text-gray-400 cursor-not-allowed;
}

/* TEXTAREA İçerik */
.note-textarea {
  @apply w-full rounded-2xl text-gray-100 p-4 text-base resize-none border border-white/20 h-100;
}

.note-textarea:focus {
  @apply outline-none ring-4 ring-indigo-500 border-indigo-500;
}

.note-textarea:disabled {
  @apply text-gray-400 cursor-not-allowed border-gray-500;
}

/* SLOT: etiketler veya ekstra içerik için boş bırakıldı */

/* BUTTON */
.submit-btn {
  @apply h-14 rounded-xl bg-linear-to-br from-indigo-600 to-purple-600 text-white font-semibold flex items-center justify-center gap-2 transition-transform duration-200;
}

/* Hover / active (sadece aktif button) */
.submit-btn:hover:not(:disabled) {
  @apply scale-105 shadow-lg;
}

.submit-btn:disabled {
  @apply opacity-50 cursor-not-allowed scale-100 shadow-none;
}

/* SPINNER */
.spinner {
  @apply w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin;
}
</style>
