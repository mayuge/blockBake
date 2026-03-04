import { I3dScene } from "@/domain/interfaces/I3dScene"
import {
  ArcRotateCamera,
  Color4,
  Engine,
  HemisphericLight,
  Scene,
  Vector3,
} from "@babylonjs/core"

/**
 * オブジェクトの生成以外の3Dシーンの生成に関する処理をまとめる
 * カメラやライトの生成など
 */
const use3dScene = (): I3dScene => {
  let engine: Engine | null = null
  let handleResize: (() => void) | null = null

  const disposeScene = () => {
    if (handleResize) {
      window.removeEventListener("resize", handleResize)
      handleResize = null
    }
    if (engine) {
      engine.dispose()
      engine = null
    }
  }

  const createScene = (containerId: string) => {
    const container = document.getElementById(containerId)
    if (!container) return null

    disposeScene()

    const canvas = document.createElement("canvas")
    canvas.style.width = "100%"
    canvas.style.height = "100%"
    canvas.style.display = "block"
    container.replaceChildren(canvas)

    engine = new Engine(canvas, true)
    const scene = new Scene(engine)

    const camera = new ArcRotateCamera(
      "camera",
      -Math.PI / 2,
      Math.PI / 2.5,
      6,
      Vector3.Zero(),
      scene
    )
    camera.attachControl(canvas, true)

    const light = new HemisphericLight("light", new Vector3(0, 1, 0), scene)
    light.intensity = 0.9

    scene.clearColor = new Color4(0.93, 0.96, 1, 1)

    engine.runRenderLoop(() => {
      scene.render()
    })

    handleResize = () => {
      engine?.resize()
    }
    window.addEventListener("resize", handleResize)

    return scene
  }

  return {
    createScene,
    disposeScene,
  }
}

export default use3dScene
