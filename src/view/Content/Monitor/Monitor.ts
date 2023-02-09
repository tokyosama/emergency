import { ref, onMounted, onUnmounted } from 'vue'
import { Actor } from "@/libs/Actor"
import router from "@/router"

class Monitor extends Actor {
    constructor() { super() }

    public number=ref<number>(0)

    public InitStates() {
        return {
            number:this.number

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