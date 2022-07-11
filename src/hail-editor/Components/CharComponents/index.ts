import AbstractChar from "./AbstractChar";
import PlainChar from "./PlainChar";
import LinkChar from "./LinkChar";
import SymbolChar from "./SymbolChar";

export function createCharComponentMap(): Map<string, AbstractChar> {
    const map = new Map();
    map.set('P', PlainChar);
    map.set('L', LinkChar);
    map.set('S', SymbolChar);
    return map;
}
