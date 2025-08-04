<template>
  <div class="video-container">
    <media-player
        src="https://youtu.be/z6fSugl6Jx0?si=_xiTuEe295bO8WB7"
        crossorigin
    >
      <media-provider>

      </media-provider>
      <media-video-layout></media-video-layout>
    </media-player>
  </div>
</template>

<script setup>
import 'vidstack/bundle';
</script>

<style scoped>
.video-container {
  width: 100%;
  aspect-ratio: 16/9;
  background: #000;
}

media-player {
  width: 100%;
  height: 100%;
}
</style>