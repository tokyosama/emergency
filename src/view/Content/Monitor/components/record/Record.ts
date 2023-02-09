import { onMounted, onUnmounted, reactive, ref, toRaw } from "vue"
import { Actor } from "@/libs/Actor"
import { Monitor } from "../../Monitor"
import { Together } from "@/decorators/Together"
class Record extends Actor {
    public constructor(parent: Monitor | null = null) {
        super()
        this.parent = parent
    }

    private parent: Monitor | null = null

    public recordData = ref<Array<Together.recordDetail>>([
        { id: 0, address: 'ss', description: 'ss', createtime: '2023', type: '火警', status: 1 }
    ])

    public InitStates() {
        return {
            recordData: this.recordData
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

export { Record }