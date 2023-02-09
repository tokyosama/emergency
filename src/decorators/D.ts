namespace D {

    /**
    * 页面路由枚举
    */
    export enum Breadcrum {
        None,
        Monitor,
        Urgent,
        Info
    }

    /**
    * 路由项
    */
    export interface RouterItem {
        /**
        * 路由名称
        */
        name: string,
        /**
        * 路由地址
        */
        path: string,
        /**
        * 路由图片
        */
        icon: string,
        /**
        * 页面所属
        */
        type: Breadcrum
    }
}
export { D }