import { ref, onMounted, onUnmounted } from 'vue'
import { Actor } from "@/libs/Actor"
import { Urgent } from '../Urgent'

class Creat extends Actor {
    constructor(parent: Urgent | null = null) {
        super()
        this.parent = parent
    }

    private parent: Urgent | null = null

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

export { Creat }