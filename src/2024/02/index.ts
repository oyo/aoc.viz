// @ts-expect-error
import { Viewer } from 'voxli'

export default () => new Viewer(
  [
    [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ],
    [
      [0, 1, 0],
      [1, 1, 1],
      [0, 1, 0],
    ],
    [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ],
  ]
)