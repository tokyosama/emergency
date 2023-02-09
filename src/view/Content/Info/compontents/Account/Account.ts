import { ref, onMounted, onUnmounted } from 'vue'
import { Actor } from "@/libs/Actor"
import { Info } from '../../Info'

class Account extends Actor {
    constructor(parent: Info | null = null) {
        super()
        this.parent = parent
    }

    private parent: Info | null = null

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

export { Account }