import { ref, onMounted, onUnmounted } from 'vue'
import { Actor } from "@/libs/Actor"
import router from "@/router"
import { Menu } from './components/Menu/Menu'
import { Nav } from './components/Nav/Nav'

class Redirect extends Actor {
    constructor() { super() }

    public Menu=new Menu(this)

    public Nav=new Nav(this)

    
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

    public ToPage(){
        router.push({ path: '/Redirect/Info', query: {} })
        // router.push({ path: '/Redirect/Urgent', query: {} })

    }
}

export { Redirect }