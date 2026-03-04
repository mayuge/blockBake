<template>
  <div id="3dContainer" class="babylon-container"></div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from "vue"
import useHomeSiteMain from "@/presentation/organisms/homeSite/core/useHomeSiteMain"

import use3dScene from "@/infrastructure/3d/3dScene"
import use3dObject from "@/infrastructure/3d/3dObject"

import type { I3dScene } from "@/domain/interfaces/I3dScene"
import type { I3dObject } from "@/domain/interfaces/I3dObject"

const { onMountedCallback, onUnmountedCallback } = useHomeSiteMain(
  use3dScene() as I3dScene,
  use3dObject() as I3dObject
)

onMounted(() => {
  onMountedCallback()
})

onUnmounted(() => {
  onUnmountedCallback()
})
</script>

<style scoped>
.babylon-container {
  width: 100%;
  height: 100dvh;
}
</style>
