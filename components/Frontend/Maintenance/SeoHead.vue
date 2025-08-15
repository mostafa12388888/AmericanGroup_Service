<template>
  <Head>
    <title>{{ title }}</title>
    <meta name="description" :content="description" />
    <meta name="keywords" :content="keywords" />
  </Head>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  keywords: String
})
</script>
