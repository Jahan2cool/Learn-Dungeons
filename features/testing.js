import { renderBlockHitbox } from "../../BloomCore/RenderUtils"
import { prefix } from "../utils/prefix"

register("RenderWorld", () => {
    const la = Player.lookingAt()
    if (la.getClass() !== Block) { return }
    renderBlockHitbox(la, 1, 1, 1, 1, true, 2, false)
})
