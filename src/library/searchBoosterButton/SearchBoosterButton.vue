<template>
  <button
    class="searchbooster-btn"
    :class="classButton"
    :disabled="disabled"
    :title="titleHTML"
    @click.prevent="emits('buttonClick')"
  >
    <!-- <searchbooster-icon
      v-if="prependIcon"
      class="searchbooster-btn-icon searchbooster-btn-prepend-icon"
      :icon="prependIcon"
    /> -->

    <span class="searchbooster-btn-text-in-button" v-if="!props.icon">
      <slot></slot>
      <span>{{ title }}</span>
    </span>
    <!-- <searchbooster-icon class="searchbooster-btn-icon" v-if="props.icon" :icon="icon" />
    <searchbooster-icon
      v-if="appendIcon"
      class="searchbooster-btn-icon searchbooster-btn-append-icon"
      :icon="appendIcon"
    /> -->
  </button>
</template>

<script setup lang="ts">
import { computed, PropType } from "vue";
// import ContrustIcon from "../contrustIcon/ContrustIcon.vue";
import { IBtnProps } from "./types";

const props = defineProps({
  title: String as PropType<IBtnProps["title"]>,
  prependIcon: String as PropType<IBtnProps["prependIcon"]>,
  appendIcon: String as PropType<IBtnProps["appendIcon"]>,
  disabled: Boolean,
  color: {
    type: String as PropType<IBtnProps["color"]>,
    default: "primary",
  },
  variant: {
    type: String as PropType<IBtnProps["variant"]>,
    validator(value: string) {
      return ["contained", "outlined", "ghost"].includes(value);
    },
    default: "contained",
  },
  size: {
    type: String as PropType<IBtnProps["size"]>,
    // type: String as () => "size",
    default: "medium",
  },
  titleHTML: {
    type: String,
    default: "",
  },
  rounded: Boolean as PropType<IBtnProps["rounded"]>,
  icon: String as PropType<IBtnProps["icon"]>,
});

const emits = defineEmits(["buttonClick"]);

const classButton = computed(() => {
  return [
    {
      "searchbooster-btn-disabled": props.disabled,
      "searchbooster-btn-rounded": props.rounded,
      "searchbooster-btn-only-icon": props.icon,
    },
    `searchbooster-btn-${props.color}`,
    `searchbooster-btn-${props.size}`,
    `searchbooster-btn-${props.variant}`,
  ];
});
</script>

<style lang="scss">
@import "./SearchBoosterButton.scss";
</style>
