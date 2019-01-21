class Basic {
    constructor() {
        this.requireComponent = require.context(
            // 其组件目录的相对路径
            "../components",
            // 是否查询其子目录
            false,
            // 匹配基础组件文件名的正则表达式
            /^\.\/(.*)\.\w+$/
        );
        this.keys = this.requireComponent.keys().map(a => a.replace(/^\.\/(.*)\.\w+$/, '$1'));
    }

}
export default new Basic()