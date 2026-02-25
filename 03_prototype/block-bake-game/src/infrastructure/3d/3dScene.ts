import { I3dScene } from "@/domain/interfaces/I3dScene"
import * as THREE from "three"

/**
 * オブジェクトの生成以外の3Dシーンの生成に関する処理をまとめる
 * カメラやライトの生成など
 */
const use3dScene = (): I3dScene => {
  const createScene = () => {
    const scene = new THREE.Scene()
    return scene
  }
  return {
    createScene,
  }
}

export default use3dScene
