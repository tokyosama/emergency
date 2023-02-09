import { onMounted, onUnmounted } from "vue"
import { Actor } from "@/libs/Actor"
import { Monitor } from "../../Monitor"
class Status extends Actor {
    public constructor(parent: Monitor | null = null) {
        super()
        this.parent = parent
    }

    private parent: Monitor | null = null

    public InitStates() {
        return {

        }
    }

    public InitHooks() {

    }

    public Run() {
        onMounted(() => {

        })

        onUnmounted(() => {
            this.Destroy()
        })
    }

    protected Destroy() {

    }
}

export { Status }