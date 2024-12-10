import Puzzles from './puzzles'
import Default from './default'

;(Puzzles[location.search] ?? Default)()