declare namespace AMap {
    /** 像素坐标, 确定地图上的一个像素点。 */
    export class Pixel {
        /**构造一个像素坐标对象。*/
        constructor(x: number, y: number);
        /**获得X方向像素坐标*/
        public getX(): number;

        /**获得Y方向像素坐标*/
        public getY(): number;

        /**当前像素坐标与传入像素坐标是否相等*/
        public equals(point: Pixel): boolean;

        /**以字符串形式返回像素坐标对象*/
        public toString(): string;


    }

    /** 地物对象的经纬度矩形范围。 */
    export class Bounds {
        /**矩形范围的构造函数.参数southWest、northEast分别代表地物对象西南角经纬度和东北角经纬度值。*/
        constructor(southWest: LngLat, northEast: LngLat);
        /**指定点坐标是否在矩形范围内 相关示例*/
        public contains(point: LngLat): boolean;

        /**获取当前Bounds的中心点经纬度坐标。*/
        public getCenter(): LngLat;

        /**获取西南角坐标。*/
        public getSouthWest(): LngLat;

        /**获取东北角坐标*/
        public getNorthEast(): LngLat;

        /**以字符串形式返回地物对象的矩形范围*/
        public toString(): string;


    }

    /** 地物对象的像素尺寸 */
    export class Size {
        /**构造尺寸对象。参数width: 宽度, height: 长度, 单位: 像素；*/
        constructor(width: number, height: number);
        /**获得宽度。*/
        public getWidth(): number;

        /**获得高度。*/
        public getHeight(): number;

        /**以字符串形式返回尺寸大小对象(自v1.2 新增)*/
        public toString(): string;


    }

    /** 经纬度坐标, 确定地图上的一个点。 */
    export class LngLat {
        /**构造一个地理坐标对象, lng、lat分别代表经度、纬度值*/
        constructor(lng: number, lat: number);
        /**当前经纬度坐标值经度移动w, 纬度移动s, 得到新的坐标。经度向右移为正值, 纬度向上移为正值, 单位为米。(自v1.2 新增)*/
        public offset(w: number, s: number): LngLat;

        /**当前经纬度和传入经纬度或者经纬度数组连线之间的地面距离, 单位为米 相关示例*/
        public distance(lnglat: LngLat | Array<LngLat>): number;

        /**获取经度值。(自v1.2 新增)*/
        public getLng(): number;

        /**获取纬度值。(自v1.2 新增)*/
        public getLat(): number;

        /**判断当前坐标对象与传入坐标对象是否相等*/
        public equals(lnglat: LngLat): boolean;

        /**LngLat对象以字符串的形式返回。*/
        public toString(): string;

    }

    /** MarkerShapeOptions */
    export interface MarkerShapeOptions {
        /**可点击区域组成元素数组, 存放图形的像素坐标等信息, 该数组元素由type决定: - circle: coords格式为 [x1, y1, r], x1, y1为圆心像素坐标, r为圆半径 - poly: coords格式为 [x1, y1, x2, y2 … xn, yn], 各x, y表示多边形边界像素坐标 - rect: coords格式为 [x1, y1, x2, y2], x1, y1为矩形左上角像素坐标, x2, y2为矩形右下角像素坐标 Markshape的像素坐标是指相对于marker的左上角的像素坐标偏移量*/
        coords?: Array<number>;

        /**可点击区域类型, 可选值: - circle: 圆形 - poly: 多边形 - rect: 矩形*/
        type?: string;

    }

    /** MarkerShape */
    export class MarkerShape {
        /**构造一个Marker可点击区域对象, 通过MarkerShapeOptions设置可点击区域属性*/
        constructor(opt: MarkerShapeOptions);
    }

    /** IconOptions */
    export interface IconOptions {
        /**图标尺寸, 默认值(36, 36)*/
        size?: Size;

        /**图标取图偏移量。当image中指定了一个大图时, 可通过size和imageOffset配合, 显示图标的指定范围*/
        imageOffset?: Pixel;

        /**图标的取图地址。默认为蓝色图钉图片*/
        image?: string;

        /**图标所用图片大小, 根据所设置的大小拉伸或压缩图片, 等同于CSS中的background-size属性。可用于实现高清屏的高清效果*/
        imageSize?: Size;

    }

    /** MarkerShape */
    export class Icon {
        /**构造点覆盖物图标, 通过IconOptions设置图标属性*/
        constructor(opt: IconOptions);
        /**获取图标图片大小*/
        public getImageSize(): Size;

        /**设置图标图片大小*/
        public setImageSize(size: Size): void;


    }

    /** MarkerOptions */
    export interface MarkerOptions {
        /**要显示该marker的地图对象*/
        map?: Map;

        /**点标记在地图上显示的位置, 默认为地图中心点*/
        position?: LngLat | number[];

        /**点标记显示位置偏移量, 默认值为Pixel(-10, -34)。Marker指定position后, 默认以marker左上角位置为基准点, 对准所给定的position位置, 若需使marker指定位置对准在position处, 需根据marker的尺寸设置一定的偏移量。*/
        offset?: Pixel;

        /**需在点标记中显示的图标。可以是一个本地图标地址, 或者Icon对象。有合法的content内容时, 此属性无效*/
        icon?: string | Icon;

        /**点标记显示内容, 可以是HTML要素字符串或者HTML DOM对象。content有效时, icon属性将被覆盖*/
        content?: string | any;

        /**鼠标点击时marker是否置顶, 默认false , 不置顶
        * (自v1.3 新增)*/
        topWhenClick?: boolean;

        /**是否将覆盖物的鼠标或touch等事件冒泡到地图上
        * (自v1.3 新增) 默认值: false*/
        bubble?: boolean;

        /**设置点标记是否可拖拽移动, 默认为false*/
        draggable?: boolean;

        /**设置拖拽点标记时是否开启点标记离开地图的效果*/
        raiseOnDrag?: boolean;

        /**指定鼠标悬停时的鼠标样式, 自定义cursor, IE仅支持cur/ani/ico格式, Opera不支持自定义cursor*/
        cursor?: string;

        /**点标记是否可见, 默认为true*/
        visible?: boolean;

        /**点标记的叠加顺序。地图上存在多个点标记叠加时, 通过该属性使级别较高的点标记在上层显示 默认zIndex: 100*/
        zIndex?: number;

        /**点标记的旋转角度, 广泛用于改变车辆行驶方向 注: angle属性是使用CSS3来实现的, 支持IE9及以上版本*/
        angle?: number;

        /**是否自动旋转。点标记在使用moveAlong动画时, 路径方向若有变化, 点标记是否自动调整角度, 默认为false。广泛用于自动调节车辆行驶方向。 IE8以下不支持旋转, autoRotation属性无效*/
        autoRotation?: boolean;

        /**点标记的动画效果, 默认值: “AMAP_ANIMATION_NONE”
        * 可选值:
        * “AMAP_ANIMATION_NONE”, 无动画效果
        * “AMAP_ANIMATION_DROP”, 点标掉落效果
        * “AMAP_ANIMATION_BOUNCE”, 点标弹跳效果*/
        animation?: string;

        /**点标记阴影, 不设置该属性则点标记无阴影*/
        shadow?: Icon;

        /**鼠标滑过点标记时的文字提示, 不设置则鼠标滑过点标无文字提示*/
        title?: string;

        /**点标记是否可点击*/
        clickable?: boolean;

        /**设置Marker的可点击区域, 在定义的区域内可触发Marker的鼠标点击事件*/
        shape?: MarkerShape;

        /**用户自定义属性, 支持JavaScript API任意数据类型, 如Marker的id等*/
        extData?: any;

        /**添加文本标注, content为文本标注的内容, offset为偏移量, 左上角为偏移量为(0, 0)*/
        label?: { content: string, offset: LngLat };

        anchor?: string
    }

    /** Marker类 */
    export class Marker {
        /**构造一个点标记对象, 通过MarkerOptions设置点标记对象的属性*/
        constructor(opt: MarkerOptions);
        /**唤起高德地图客户端标注页其中Object里面包含有{ name: String, name属性 必要参数 position:
        * LngLat 坐标点 }*/
        public markOnAMAP(obj: any): void;

        /**获取Marker偏移量
        * (自v1.3 新增)*/
        public getOffset(): Pixel;

        public on(event: string, callback: Function): void;

        /**设置Marker偏移量
        * (自v1.3 新增)*/
        public setOffset(offset: Pixel): void;

        /**设置点标记的动画效果, 默认值: “AMAP_ANIMATION_NONE”
        * 可选值:
        * “AMAP_ANIMATION_NONE”, 无动画效果
        * “AMAP_ANIMATION_DROP”, 点标掉落效果
        * “AMAP_ANIMATION_BOUNCE”, 点标弹跳效果*/
        public setAnimation(animate: string): void;

        /**获取点标记的动画效果类型*/
        public getAnimation(): string;

        /**设置点标记是支持鼠标单击事件*/
        public setClickable(clickable: boolean): void;

        /**获取点标记是否支持鼠标单击事件*/
        public getClickable(): boolean;

        /**获取点标记的位置*/
        public getPosition(): LngLat;

        /**设置点标记位置*/
        public setPosition(lnglat: LngLat): void;

        /**设置点标记的旋转角度*/
        public setAngle(angle: number): void;

        /**设置点标记文本标签内容相关示例*/
        public setLabel(label: any): void;

        /**获取点标记文本标签内容*/
        public getLabel(): any;

        /**获取点标记的旋转角度*/
        public getAngle(): number;

        /**设置点标记的叠加顺序, 默认最先添加的点标记在最底层*/
        public setzIndex(index: number): void;

        /**获取点标记的叠加顺序*/
        public getzIndex(): number;

        /**设置点标记的显示图标。 参数image可传入String、Icon两种类型的值。
        * 若为String(图片url), 表示点标记以指定图片形式显示；若为Icon, 表示点标记以Icon对象形式显示*/
        public setIcon(content: string | Icon): void;

        /**当点标记未自定义图标时, 获取Icon内容*/
        public getIcon(): string
            | Icon;

        /**设置点标记对象是否可拖拽移动*/
        public setDraggable(draggable: boolean): void;

        /**获取点标记对象是否可拖拽移动*/
        public getDraggable(): boolean;

        /**点标记隐藏*/
        public hide(): void;

        /**点标记显示*/
        public show(): void;

        /**设置鼠标悬停时的光标。 参数cur可为CSS标注中的光标样式, 如:
        * setCursor(“pointer”)等；或者自定义的光标样式, 如:
        * setCursor("url('http: //http://webapi.amap.com/images/0.png') , pointer")
        * 注: 当浏览器不支持css2, url值不起作用, 鼠标样式就按pointer来设置*/
        public setCursor(Cursor: any): string;

        /**设置点标记显示内容, 可以是HTML要素字符串或者HTML DOM对象*/
        public setContent(html: string | HTMLDivElement): void;

        /**获取点标记内容*/
        public getContent(): string;

        /**以指定的速度, 点标记沿指定的路径移动。参数path为路径坐标串；speed为指定速度, 单位: 千米/小时； 回调函数f为变化曲线函数, 缺省为function(k){return k}；参数circlable表明是否循环执行动画, 默认为false*/
        public moveAlong(path: Array<any>, speed: number,
            f: Function, circlable: boolean): void;

        /**以给定速度移动点标记到指定位置。参数lnglat为指定位置, 必设；speed为指定速度, 单位: 千米/小时；回调函数f为变化曲线函数, 缺省为function(k){return k}。*/
        public moveTo(lnglat: LngLat, speed: number,
            f: Function): void;

        /**点标记停止动画*/
        public stopMove(): void;

        /**暂定点标记的动画效果*/
        public pauseMove(): void;

        /**重新开始点标记的动画效果*/
        public resumeMove(): void;

        /**为Marker指定目标显示地图。当参数值取null时, 地图上移除当前Marker: setMap(null)*/
        public setMap(map?: Map | null): void;

        /**获取Marker所在地图对象*/
        public getMap(): Map;

        /**鼠标滑过点标时的文字提示*/
        public setTitle(title: string): void;

        /**获取点标记的文字提示*/
        public getTitle(): string;

        /**地图上有多个marker时, 当isTop为true时, marker将显示在最前面；当为false时, marker取消置顶*/
        public setTop(isTop: boolean): void;

        /***/
        public getTop(): boolean;

        /**为marker设置阴影效果*/
        public setShadow(icon: Icon): void;

        /**获取marker的阴影图标*/
        public getShadow(): Icon;

        /**设置marker的可点击区域*/
        public setShape(shape: MarkerShape): void;

        /**获取marker的可点击区域*/
        public getShape(): MarkerShape;

        /**设置用户自定义属性, 支持JavaScript API任意数据类型, 如Marker的id等*/
        public setExtData(ext: any): void;

        /**获取用户自定义属性*/
        public getExtData(): any;


    }

    export interface MapOptions {
        /**地图显示的缩放级别，可以设置为浮点数；若center与level未赋值，地图初始化默认显示用户所在城市范围。*/
        zoom?: number;

        /**地图中心点坐标值*/
        center?: LngLat | number[];

        /**是否监控地图容器尺寸变化, 默认值为false*/
        resizeEnable?: boolean;

        /**地图显示的缩放级别范围在PC上, 默认为[3, 18], 取值范围[3-18]；在移动设备上, 默认为[3, 19], 取值范围[3-19]*/
        zooms?: Array<any>;

        /**设置地图的显示样式, 目前支持两种地图样式: 第一种: 自定义地图样式, 如"amap: //styles/d6bf8c1d69cea9f5c696185ad4ac4c86"可前往地图自定义平台定制自己的个性地图样式；第二种: 官方样式模版, 如"amap: //styles/grey"。其他模版样式及自定义地图的使用说明见开发指南*/
        mapStyle?: string;

        /**地图默认鼠标样式。参数defaultCursor应符合CSS的cursor属性规范*/
        defaultCursor?: string;


    }

    /** 地图对象类, 封装了地图的属性设置、图层变更、事件交互等接口的类。相关示例 */
    export class Map {
        constructor(contanier: string | HTMLDivElement | Element, opts: MapOptions);
        /**获取当前地图缩放级别, 在PC上, 默认取值范围为[3, 18]；在移动设备上, 默认取值范围为[3-19]3D地图会返回浮点数, 2D视图为整数。(3D地图自V1.4.0开始支持)*/
        public getZoom(): number;

        /**获取地图图层数组, 数组为一个或多个图层(自v1.3 新增)*/
        public getLayers(): Array<any>;

        /**获取地图中心点经纬度坐标值。*/
        public getCenter(): LngLat;

        /**返回地图对象的容器*/
        public getContainer(): HTMLDivElement;

        /**获取地图中心点所在区域, 回调函数返回对象属性分别对应为{省, 市, 区/县}*/
        public getCity(callback: (province: string, city: string, citycode: string, district: string) => void): void;

        /**获取当前地图视图范围, 获取当前可视区域。3D地图下返回类型为ArrayBounds, 2D地图下仍返回Bounds 。(3D自V1.4.0开始支持)*/
        public getBounds(): Bounds;

        /**获取当前地图标注的显示顺序*/
        public getLabelzIndex(): number;

        /**获取Map的限制区域*/
        public getLimitBounds(): Bounds;

        /**获取底图语言类型(自v1.3 新增)*/
        public getLang(): string;

        /**获取地图容器像素大小*/
        public getSize(): Size;

        /**获取地图顺时针旋转角度(自v1.3 新增)*/
        public getRotation(): number;

        /**获取当前地图状态信息, 包括是否可鼠标拖拽移动地图、地图是否可缩放、地图是否可旋转(rotateEnable)、是否可双击放大地图、是否可以通过键盘控制地图旋转(keyboardEnable)等*/
        public getStatus(): any;

        /**获取地图默认鼠标指针样式*/
        public getDefaultCursor(): string;

        /**获取指定位置的地图分辨率, 单位: 米/像素。 参数point有指定值时, 返回指定点地图分辨率, point缺省时, 默认返回当前地图中心点位置的分辨率*/
        public getResolution(point: LngLat): number;

        /**获取当前地图比例尺。其值为当前地图中心点处比例尺值的倒数*/
        public getScale(dpi: number): number;

        /**设置地图显示的缩放级别, 在PC上, 参数zoom可设范围: [3, 18]；在移动端: 参数zoom可设范围: [3, 19]3D地图下, 可将zoom设置为浮点数。(3D自V1.4.0开始支持)*/
        public setZoom(level: number): void;

        /**设置地图标注显示的顺序*/
        public setlabelzIndex(index: number): void;

        /**设置地图图层数组, 数组为一个或多个图层。当叠加多个图层时, 普通二维地图需通过实例化一个TileLayer类实现(自v1.3 新增)*/
        public setLayers(layers: Array<any>): void;

        /**添加地图覆盖物数组, 数组为一个或多个覆盖物。*/
        public add(overlayers: Array<any> | any): void;

        /**删除地图覆盖物数组, 数组为一个或多个覆盖物。*/
        public remove(overlayers: Array<any> | any): void;

        /**返回添加的覆盖物对象, 可选类型包括marker、circle、polyline、polygon； Type可缺省, 缺省时返回所有覆盖物(marker、circle、polyline、polygon)。 返回结果不包含官方覆盖物等, 比如定位marker, 周边搜索圆等*/
        public getAllOverlays(type: any): any;

        /**设置地图显示的中心点*/
        public setCenter(position: LngLat | number[]): void;

        /**地图缩放至指定级别并以指定点为地图显示中心点*/
        public setZoomAndCenter(zoomLevel: number, center: LngLat | number[]): void;

        /**按照行政区名称或adcode来设置地图显示的中心点。行政区名称支持中国、省、市、区/县名称, 如遇重名的情况, 会按城市编码表顺序返回第一个。adcode请在城市编码表中查询。建议不要同时使用center/setCenter()和setCity(), 如一起使用程序将以setCity()作为最后结果。 相关示例*/
        public setCity(city: string, callback: Function): void;

        /**指定当前地图显示范围, 参数bounds为指定的范围*/
        public setBounds(bound: Bounds): void;

        /**设置Map的限制区域, 设定区域限制后, 传入参数为限制的Bounds。地图仅在区域内可拖拽 相关示例*/
        public setLimitBounds(bound: Bounds): void;

        /**清除限制区域*/
        public clearLimitBounds(): void;

        /**设置地图语言类型, 设置后底图重新加载(自v1.3 新增)*/
        public setLang(lang: string): string;

        /**设置地图顺时针旋转角度, 旋转原点为地图容器中心点, 取值范围 [0-360](自v1.3 新增)*/
        public setRotation(rotation: number): number;

        /**设置当前地图显示状态, 包括是否可鼠标拖拽移动地图、地图是否可缩放、地图是否可旋转(rotateEnable)、是否可双击放大地图、是否可以通过键盘控制地图旋转(keyboardEnable)等 相关示例*/
        public setStatus(status: any): void;

        /**设置鼠标指针默认样式, 参数cursor应符合CSS的cursor属性规范。可为CSS标注中的光标样式, 如: setCursor(“pointer”)等；或者自定义的光标样式, 如: setCursor("url('http: //http://lbs.amap.com/webapi/static/Images//0.png'), pointer")*/
        public setDefaultCursor(cursor: string): void;

        /**地图放大一级显示*/
        public zoomIn(): void;

        /**地图缩小一级显示*/
        public zoomOut(): void;

        /**地图中心点平移至指定点位置*/
        public panTo(positon: LngLat): void;

        /**以像素为单位, 沿x方向和y方向移动地图, x向右为正, y向下为正*/
        public panBy(x: number, y: number): void;

        /**根据地图上添加的覆盖物分布情况, 自动缩放地图到合适的视野级别, 参数overlayList默认为当前地图上添加的所有覆盖物图层*/
        public setFitView(overlayList?: Array<any> | any): void;

        /**删除地图上所有的覆盖物*/
        public clearMap(): void;

        /**注销地图对象, 并清空地图容器*/
        public destroy(): void;

        /**插件加载方法。参数name中指定需要加载的插件类型, 同时加载多个插件时, 以字符串数组的形式添加。在Callback回调函数中进行地图插件的创建、插件事件的绑定等操作；插件为地图功能的扩展, 按需加载；插件写作方法, 请参考相关示例。*/
        public plugin(name: string | Array<any>, callback: Function): void;

        /**添加控件。参数可以是插件列表中的任何插件对象, 如: ToolBar、OverView、Scale等*/
        public addControl(obj: any): void;

        /**移除地图上的指定控件*/
        public removeControl(obj: any): void;

        /**清除地图上的信息窗体。*/
        public clearInfoWindow(): void;

        /**平面地图像素坐标转换为地图经纬度坐标 相关示例*/
        public pixelToLngLat(pixel: Pixel, level: number): LngLat;

        /**地图经纬度坐标转换为平面地图像素坐标*/
        public lnglatToPixel(lngLat: LngLat, level: number): Pixel;

        /**地图容器像素坐标转为地图经纬度坐标 相关示例*/
        public containerToLngLat(pixel: Pixel): LngLat;

        /**地图经纬度坐标转为地图容器像素坐标*/
        public lngLatToContainer(lnglat: LngLat): Pixel;

        /**设置地图的显示样式, 目前支持两种地图样式: 第一种: 自定义地图样式, 如"amap: //styles/d6bf8c1d69cea9f5c696185ad4ac4c86"可前往地图自定义平台定制自己的个性地图样式；第二种: 官方样式模版, 如"amap: //styles/grey"。其他模版样式及自定义地图的使用说明见开发指南*/
        public setMapStyle(style: string): void;

        /**获取地图显示样式*/
        public getMapStyle(): string;

        /**设置地图上显示的元素种类, 支持bg(地图背景)、point(兴趣点)、road(道路)、building(建筑物)*/
        public setFeatures(feature: Array<any>): void;

        /**获取地图显示元素种类*/
        public getFeatures(): Array<any>;

        /**
         * 绑定事件声明
         */
        public on(event: string, callback: Function): void;


    }

    export interface GeocoderOptions {
        /**城市，地理编码时，设置地址描述所在城市可选值：城市名（中文或中文全拼）、citycode、adcode；默认值：“全国” */
        city?: string;
        /**逆地理编码时，以给定坐标为中心点，单位：米 */
        radius?: Number;
        /**设置语言类型 */
        lang?: String;
        /**是否批量查询batch=true为批量查询,batch=false为单点查询，batch=false时即使传入多个点也只返回第一个点结果 */
        batch?: Boolean;
        /**逆地理编码时，返回信息的详略,默认值：base，返回基本地址信息；取值为：all，返回地址信息及附近poi、道路、道路交叉口等信息 */
        extensions?: String;

    }

    export class Geocoder {
        constructor(opts: GeocoderOptions);
        /**
         * 根据给定坐标进行解析当status为complete时，result为ReGeocodeResult；
         * 当status为error时，result为错误信息info；
         * 当status为no_data时，代表检索返回0结果
         * 批量逆地理编码时，最多支持20个坐标点，超过20个坐标点，按20处理
         */
        public getAddress(location: (LngLat | Array<LngLat> | number[]), callback: (status: String, result: any) => void): void

        /**
         * 根据给定的地址描述进行解析，支持中文、拼音当status为complete时，
         * result为GeocodeResult；当status为error时，result为错误信息info；
         * 当status为no_data时，代表检索返回0结果
         */
        public getLocation(address: String, callback: (status: String, result: any) => void): void
    }
}