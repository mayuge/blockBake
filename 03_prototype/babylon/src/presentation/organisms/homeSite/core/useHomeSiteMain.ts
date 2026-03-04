import type { I3dScene } from "@/domain/interfaces/I3dScene"
import type { I3dObject } from "@/domain/interfaces/I3dObject"

const useHomeSiteMain = (scene3d: I3dScene, object3d: I3dObject) => {
  const onMountedCallback = () => {
    const scene = scene3d.createScene("3dContainer")
    if (!scene) return

    const cube = object3d.createCube(2, scene)
    cube.position.y = 1
  }

  const onUnmountedCallback = () => {
    scene3d.disposeScene()
  }

  return { onMountedCallback, onUnmountedCallback }
}

export default useHomeSiteMain
