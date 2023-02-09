namespace Together {
    export function ES<T extends { new(...args: any[]): Object }>(C: T) {
        return class extends C {
            constructor(...args: any[]) {
                super(...args)
            }
            // ... Just do it ...
        }
    }

    /**
     * 告警记录详情
     */
    export interface recordDetail {
        id: number,
        address: string,//位置
        description: string, //警情描述,
        createtime: string,//创建时间
        type: string,//警情类型
        status: number,//执行状态
        // name:string,//创建人
    }
}
export { Together }