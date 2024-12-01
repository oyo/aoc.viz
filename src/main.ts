import Puzzles from './puzzles'
import Default from './default'

(Puzzles[location.pathname] ?? Default)()