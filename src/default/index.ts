// @ts-expect-error
import { Viewer } from 'voxli'

export default () => {
    const viewer = new Viewer([[[1]]])
    viewer.input.setMove({u: -10, v: 12})
    setTimeout(() => viewer.input.setMove({u: 10}), 100)
    setTimeout(() => viewer.input.setMove({u: -10}), 200)
    setTimeout(() => viewer.input.setMove({u: 10}), 300)
    setTimeout(() => viewer.input.setMove({u: -10}), 400)
    setTimeout(() => viewer.input.setMove({u: 10}), 500)
    setTimeout(() => viewer.input.setMove({u: -10}), 600)
    setTimeout(() => viewer.input.setMove({u: 10}), 700)
    setTimeout(() => viewer.input.setMove({u: -5}), 800)
    return viewer
}
