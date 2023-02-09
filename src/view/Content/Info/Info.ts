import { ref, onMounted, onUnmounted ,nextTick} from 'vue'
import { Actor } from "@/libs/Actor"
import { Role } from './compontents/Role/Role'
import { Account } from './compontents/Account/Account'
class Info extends Actor {
    constructor() {
        super()
    }

    public Role=new Role(this)

    public Account=new Account(this)


    public activeName=ref<string>('1')

    public containerRef = ref<HTMLDivElement | null>(null)

    public searchRef = ref<HTMLDivElement | null>(null)

    public tableH = ref<number>(0)

    public InitStates() {
        return {
            activeName:this.activeName,
            containerRef:this.containerRef,
            searchRef:this.searchRef,
            tableH:this.tableH

        }
    }

    public InitHooks() {

    }

    public Run() {
        onMounted(() => {
            this.getHeight()
            window.addEventListener("resize", this.getHeight);

        })

        onUnmounted(() => {
            this.Destroy()
        })
    }

    public Destroy() {

    }

    public getHeight=()=>{
        if (this.containerRef.value && this.searchRef.value) {
            const containerH = this.containerRef.value.offsetHeight
            const searchH = this.searchRef.value.offsetHeight
            this.tableH.value = containerH - searchH - 60
        }

    }

    public changeTab(tab:string){
        this.activeName.value = tab
        if (this.activeName.value !== tab) {
            this.activeName.value = tab
            nextTick(() => {
                this.getHeight()
            })
        }

    }
}

export { Info }