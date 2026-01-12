import { createContext } from "react";
import type { Game } from "./game";
export const AppContext = createContext<{games: Game[]}>({games: []});