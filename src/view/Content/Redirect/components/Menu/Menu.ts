import { ref, onMounted, onUnmounted } from 'vue'
import { Actor } from "@/libs/Actor"
import { Redirect } from '../../Redirect'
import router from '@/router'
import { D } from '@/decorators/D'

import monitorIcon from '@/assets/images/Together/monitor.png'
import airportIcon from '@/assets/images/Together/ap.png'
import urgentIcon from '@/assets/images/Together/task.png'
import infoIcon from '@/assets/images/Together/record.png'
import routetIcon from '@/assets/images/Together/route.png'


class Menu extends Actor {
    constructor(parent: Redirect | null = null) {
        super()
        this.parent = parent
    }

    private parent: Redirect | null = null

    public menuList=ref<Array<D.RouterItem>>([
        { name: '大屏', path: '/Redirect/Monitor',icon:monitorIcon,type:D.Breadcrum.Monitor },
        { name: '警情执行', path: '/Redirect/Urgent',icon:urgentIcon,type:D.Breadcrum.Urgent  },
        { name: '警情记录', path: '/Redirect/Info',icon:infoIcon,type:D.Breadcrum.Info  },

    ])

    public currentPath=ref<D.Breadcrum>(D.Breadcrum.Monitor)

    public InitStates() {
        return {
            menuList:this.menuList,
            currentPath:this.currentPath

        }
    }

    public InitHooks() {

    }

    public Run() {
        this.RefreshPage()
        onMounted(() => {

        })

        onUnmounted(() => {
            this.Destroy()
        })
    }

    public Destroy() {

    }

    /**
    * 刷新界面菜单激活列还在那里
    */
   private RefreshPage(){
    this.currentPath.value=this.menuList.value.find(t=>t.path==router.currentRoute.value.path)?.type ||D.Breadcrum.Monitor   
   }

    /**
    * 点击路由
    */
    public ToSelectPage(e:D.RouterItem){
        if (e.path!=router.currentRoute.value.path) {
            this.currentPath.value=e.type
            router.push({path:e.path,query:{}})
        }
        

    }
}

export { Menu }