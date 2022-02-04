<script lang="ts" setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
  <a-button type="primary" @click="count++">count is: {{ count }}</a-button>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
