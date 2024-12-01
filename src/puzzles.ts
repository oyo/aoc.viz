// @ts-expect-error
import { Viewer } from 'voxli'
import Puzzle2401 from './2024/01'
import Puzzle2402 from './2024/02'

const Puzzles: Record<string, () => Viewer> = {
    '/2024/01': Puzzle2401,
    '/2024/02': Puzzle2402,
}

export default Puzzles