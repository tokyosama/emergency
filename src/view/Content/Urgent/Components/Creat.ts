import { ref, onMounted, onUnmounted, reactive, nextTick, watch } from 'vue'
import { Actor } from "@/libs/Actor"
import { Urgent } from '../Urgent'
import selfIcon from '@/assets/images/Together/mark.png'

class Creat extends Actor {
    constructor(parent: Urgent | null = null) {
        super()
        this.parent = parent
    }

    public parent: Urgent | null = null

    public mapDom = ref<HTMLDivElement | null>(null)

    private GeoCode: AMap.Geocoder | null = null

    private autoComplete: any = null

    public satellite: any = null

    public map: AMap.Map | null = null

    private currentMark: AMap.Marker | null = null

    public isShow = ref<boolean>(false)

    public form = reactive({
        name: '',
        location: '',
        lng: 0,
        lat: 0,
    })

    public blurs = ref<Array<any>>([])

    public blursFlag = ref<Boolean>(true)

    public InitStates() {
        return {
            isShow: this.isShow,
            mapDom: this.mapDom,
            form: this.form,
            blurs: this.blurs,
            blursFlag: this.blursFlag
        }
    }

    public InitHooks() {
        watch(this.isShow, (newValue) => {
            if (newValue && this.map == null) {
                this.InitMap()
            }
        })
        watch(this.form, (newValue) => {
            if (this.form.location == '') {
                this.blurs.value.splice(0, this.blurs.value.length)

            } else {
                this.SearchPosition(newValue.location.trim())
            }

        })
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

    public add() {
        this.isShow.value = true
    }

    private InitMap() {

        nextTick(() => {
            if (this.mapDom.value) {
                this.map = new AMap.Map(this.mapDom.value, {
                    resizeEnable: true,
                    zoom: 15,
                    zooms: [3, 30],
                    mapStyle: 'amap://styles/whitesmoke',
                    defaultCursor: 'pointer'
                })
                this.GeoCode = new AMap.Geocoder({})
                this.map.on('click', (ev: any) => {
                    this.mapClick(ev)
                })
                //@ts-ignore
                this.satellite = new AMap.TileLayer.Satellite({
                    map: this.map
                })
                this.satellite.hide()
                //@ts-ignore
                this.autoComplete = new AMap.AutoComplete({})
            }
        })

    }

    public mapClick(ev: any) {
        this.drawMaker(ev)
        this.getLocation(ev)
    }

    public drawMaker(ev: any) {
        if (this.map) {
            if (this.currentMark) {
                this.map.remove(this.currentMark)
                this.currentMark = null
            }
            this.currentMark = new AMap.Marker({
                icon: selfIcon,
                position: [ev.lnglat.lng, ev.lnglat.lat],
                offset: new AMap.Pixel(-17, -40),
                draggable: false,
                // anchor: 'center'
            })
            // this.currentMark.setLabel({
            //     offset: new AMap.Pixel(0, -28), //设置文本标注偏移量
            //     content:
            //         `<div class='Marker_Info'>${title}</div>`,
            //     direction: 'top' //设置文本标注方位
            // })
            this.map.add(this.currentMark)
            this.map.setZoomAndCenter(17, [ev.lnglat.lng, ev.lnglat.lat])
        }

    }

    public getLocation(ev: any) {
        this.form.lng = ev.lnglat.lng;
        this.form.lat = ev.lnglat.lat;
        this.GeoCode?.getAddress(ev.lnglat, (status, result) => {
            if (status === 'complete' && result.info === 'OK') {
                this.form.location = result.regeocode.formattedAddress
                this.SearchPosition(result.regeocode.formattedAddress)

            }
        })

    }

    public moreLocation = (e: FocusEvent) => {
        // console.log('hhh', e);
        this.blursFlag.value = true
    }

    public SearchPosition(key: string) {
        this.autoComplete.search(key, (status: any, result: any) => {
            if (status == 'complete') {
                this.blurs.value.splice(0, this.blurs.value.length)
                for (let item of result.tips) {
                    if (item.location && item.location.lng) {
                        this.blurs.value.push(item)
                    }
                }
                console.log(this.blurs.value)
            }
            else if (status == 'no_data') {
                console.log('fuck');

            }
        })
    }

    public BlurInput() {
        this.blursFlag.value = false
    }
}

export { Creat }