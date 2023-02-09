import { ref, onMounted, onUnmounted, reactive } from 'vue'
import { Actor } from "@/libs/Actor"
import { MessageBox } from '@/libs/MessageBox'
import { Creat } from './Components/Creat'
import statusIcon from '@/assets/images/Together/sate.png'
import searchIcon from '@/assets/images/Together/search.png'
import addIcon from '@/assets/images/Together/add.png'
import subIcon from '@/assets/images/Together/sub.png'

interface Tools {
    id: number,
    icon: string,
    text: string
}
class Urgent extends Actor {
    constructor() { super() }

    public Creat = new Creat(this)

    private mapDom = ref<HTMLDivElement | null>(null)

    private satellite: any = null

    public map: AMap.Map | null = null

    public tools = ref<Array<Tools>>([
        { id: 1, icon: statusIcon, text: '图层' },
        { id: 2, icon: searchIcon, text: '搜索' },
        { id: 3, icon: addIcon, text: '放大' },
        { id: 4, icon: subIcon, text: '缩小' },
    ])

    public addAlert = ref(false)

    public form = reactive({
        name: '',
        location: '',
        lng: 0,
        lat: 0,
    })

    public InitStates() {
        return {
            mapDom: this.mapDom,
            tools: this.tools,
            addAlert: this.addAlert,
        }
    }

    public InitHooks() {

    }

    public Run() {
        onMounted(() => {
            this.InitMap()

        })

        onUnmounted(() => {
            this.Destroy()
        })
    }

    public Destroy() {

    }

    private InitMap() {
        if (this.mapDom.value) {
            this.map = new AMap.Map(this.mapDom.value, {
                resizeEnable: true,
                zoom: 12,
                zooms: [3, 30],
                mapStyle: 'amap://styles/whitesmoke',
                defaultCursor: 'pointer'
            })
            //@ts-ignore
            this.satellite = new AMap.TileLayer.Satellite({
                map: this.map
            })
            this.satellite.hide()
        }
    }

    public x() {
        MessageBox.Confirm("是否保存当前预案", () => { })
    }


}

export { Urgent }