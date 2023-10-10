<script setup lang="ts">
import { ref } from "vue";
// import { BtnColorType, BtnVariantType, BtnSizeType } from "/Users/drema/Desktop/Drema/ui-searchBooster/node_modules/ui-searchbooster/dist/src/library/searchBoosterButton/types"
import { SearchBoosterButton } from "ui-searchbooster";

// import SearchBoosterButton , { BtnColorType, BtnVariantType, BtnSizeType } from 'ui-searchbooster';
// import { ContrustLoader } from '@ntc-etalon/ui-contrust';
// import { SearchBoosterButton }  from '/node_modules/ui-searchbooster/dist/ui-searchbooster.es.js'
// import SearchBoosterButton  from 'src/library/searchBoosterButton/SearchBoosterButton.vue'
// import { SearchBoosterButton }  from './dist'

defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <SearchBoosterButton @click="count++"
      >count is {{ count }}</SearchBoosterButton
    >
    <!-- <ContrustBtn @click="count++">count is {{ count }}</ContrustBtn> -->
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
