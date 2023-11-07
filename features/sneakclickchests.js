import { WorldState } from "../utils/world"
import { prefix } from "../utils/prefix"

var reset = new Boolean(true);

register("tick", () => {
    if (WorldState.inDungeons()) {
        if (Player.getContainer().getName() == 'container') {
            reset = true
        }
        else if (Player.getContainer().getName() == 'Chest' && reset === true || Player.getContainer().getName() == 'Large Chest' && reset === true) {
            ChatLib.chat(prefix + '&aRemember to &bsneak&a click chests!')
            reset = false
        }
    }
})