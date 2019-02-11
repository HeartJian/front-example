import PathComponent from './PathComponent';
const selectPath = ['js', 'css']
const names = { ChatRoom:"聊天室",CallBack:"优雅的回调",Promise:"JS实现Promise" }
// 根据path的不同 扫描不同的文件夹
class BasicInfo {
    constructor() {
        this.pathComponents = selectPath.map(a => {
            let result = new PathComponent(a);
            result.requireComponent = a === 'js' ? require.context(
                "../view/js",
                false,
                /^\.\/(.*)\.\w+$/
            ) : a === 'css' ? require.context(
                "../view/css",
                false,
                /^\.\/(.*)\.\w+$/
            ) : null;
            result.keys = result.requireComponent.keys().map(a => a.replace(/^\.\/(.*)\.\w+$/, '$1'));
            result.names=names
            return result;
        })
    }
    // 添加二级目录名
    addName = (fileName, names) => {
        this.pathComponents.forEach(pathComponent => {
            if (pathComponent.fileName === fileName) {
                pathComponent.names = names;
            }
        })
    }
}

export const Basic = new BasicInfo()