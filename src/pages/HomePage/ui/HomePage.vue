<template>
  <Header></Header>
  <NetrumStat></NetrumStat>
</template>

<script setup>
import Header from '~/widigets/Header'
import NetrumStat from '~/widigets/NetrumStat'
</script>

<!-- <script lang="ts" setup>
const link = '/api/nodes/stats'
// const link = '/data/test.json'
const { data } = await useFetch(link, {
  method: 'get',
  server: false,
  onResponse({ response }) {
    console.log(response)
  },
})
</script>

<template>Главная</template>

<style scoped lang="sass"></style> -->
