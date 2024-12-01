// @ts-expect-error
import { Viewer, VoxelScene, Shape, COLOR } from 'voxli'

class CustomScene extends VoxelScene {
  data = [
    [
      [1, 1, 1],
      [1, 0, 1],
      [1, 1, 1],
    ],
    [
      [1, 0, 1],
      [0, 0, 0],
      [1, 0, 1],
    ],
    [
      [1, 1, 1],
      [1, 0, 1],
      [1, 1, 1],
    ],
  ]
  style = {
    2: { shape: Shape.STAR, color: COLOR.YELLOW },
  }
  start() {
    setInterval(this.step.bind(this), 800)
    return this
  }
  step() {
    this.data[1][1][1] = this.data[1][1][1] ? 0 : 2
    super.updateModel()
  }

}

export default () => new Viewer(
  new CustomScene().start()
)