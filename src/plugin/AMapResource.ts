import AMapLoader from '@amap/amap-jsapi-loader'

/**
 * 高德地图加载
 */
class AMapResource {
    private constructor() { }

    private static instance = new AMapResource()

    public static get Instance() { return this.instance }

    private aMap: any = null

    public get AMap() { return this.aMap }

    public Run() {
        return new Promise((resolve, reject) => {
            AMapLoader.load({
                key: "9ff344d55da8b201fe549f3ecb362c4c",
                version: "2.0",
                plugins: ['AMap.Geolocation', 'AMap.AutoComplete', 'AMap.GeometryUtil'],
            }).then((e) => {
                this.aMap = e
                resolve('AMAP')
            }).catch(e => {
                console.error(e);
            })
        })

    }
}

export { AMapResource }