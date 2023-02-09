import { ref, onMounted, onUnmounted } from 'vue'
import { Actor } from "@/libs/Actor"
import { Redirect } from '../../Redirect'

class Nav extends Actor {
    constructor(parent: Redirect | null = null) {
        super()
        this.parent = parent
    }

    private parent: Redirect | null = null

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

    public Destroy() {

    }
}

export { Nav }