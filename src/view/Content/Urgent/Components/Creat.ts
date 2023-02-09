import { ref, onMounted, onUnmounted, reactive,nextTick } from 'vue'
import { Actor } from "@/libs/Actor"
import { Urgent } from '../Urgent'

class Creat extends Actor {
    constructor(parent: Urgent | null = null) {
        super()
        this.parent = parent
    }

    public parent: Urgent | null = null

    public mapDom = ref<HTMLDivElement | null>(null)

    public satellite: any = null

    public map: AMap.Map | null = null

    public isShow=ref(false)

    public form = reactive({
        name: '',
        location: '',
        lng: 0,
        lat: 0,
    })

    public InitStates() {
        return {
            isShow:this.isShow,
            mapDom: this.mapDom,
            form: this.form

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

    public add(){
        this.isShow.value=true
    }

    public InitMap(){
        console.log('hhh');
        nextTick(()=>{
            
            if (this.mapDom.value) {
                this.map = new AMap.Map(this.mapDom.value, {
                    resizeEnable: true,
                    zoom: 15,
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
    
        })
        
    }
}

export { Creat }