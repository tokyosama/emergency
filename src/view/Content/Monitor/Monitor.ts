import { ref, onMounted, onUnmounted } from 'vue'
import { Actor } from "@/libs/Actor"
import { Status } from './components/status/Status'
import { Record } from './components/record/Record'
import router from "@/router"

class Monitor extends Actor {
    constructor() { super() }
    public Status = new Status(this)
    public Record = new Record(this)
    public number = ref<number>(0)

    public InitStates() {
        return {
            number: this.number

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

    public Add(): void {
        console.log('aa');

        // router.push({ path: '/Redirect', query: {} })
        // router.push({ path: '/Redirect/Info', query: {} })


    }
}

export { Monitor }