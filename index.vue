<script setup>
import { ref } from 'vue'
import LiteYouTubeEmbed from 'vue-lite-youtube-embed'
import 'vue-lite-youtube-embed/style.css'

const iframe = ref(null)

iframe.value?.stopVideo()
iframe.value?.pauseVideo()
iframe.value?.playVideo()
</script>

<template>
  <LiteYouTubeEmbed
      id="w4rG5GY9IlAx"
      ref="iframe"
      title="Rick Astley - Never Gonna Give You Up (Official Music Video)"
  />
</template>


<!--<template>-->
<!--  <div>-->
<!--    <iframe-->
<!--        width="100%"-->
<!--        height="500"-->
<!--        src="https://www.youtube.com/embed/w4rG5GY9IlAx?modestbranding=1&rel=0&controls=1&iv_load_policy=3&fs=0&disablekb=1&playsinline=1"-->
<!--        title="YouTube video player"-->
<!--        frameborder="0"-->
<!--        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"-->
<!--        allowfullscreen>-->
<!--    </iframe>-->
<!--  </div>-->
<!--</template>-->

<!--<script setup>-->

<!--</script>-->

<!--<style lang="css" scoped>-->

<!--</style>-->