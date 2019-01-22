import PathComponent from './PathComponent'

class Basic {
    constructor() {
        let path = ['html', 'js', 'css']
        this.pathComponents = path.map(a => {
            let result = new PathComponent(a);
            result.requireComponent = a==='js'? require.context(
                "../view/js",
                false,
                /^\.\/(.*)\.\w+$/
            ):a==='css'? require.context(
                "../view/css",
                false,
                /^\.\/(.*)\.\w+$/
            ):require.context(
                "../view/html",
                false,
                /^\.\/(.*)\.\w+$/
            );
            result.keys = result.requireComponent.keys().map(a => a.replace(/^\.\/(.*)\.\w+$/, '$1'));
            return result;
        })
        
    }

}

export default new Basic()