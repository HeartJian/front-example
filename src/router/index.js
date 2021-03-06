import Vue from 'vue'
import Router from 'vue-router'
import {Basic} from '../utils/Basic'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import HelloWorld from '../view/HelloWorld'

Vue.use(Router)
let routes = []
Basic.pathComponents.forEach(result => result.requireComponent.keys().forEach(fileName => {
  // 获取组件配置
  const componentConfig = result.requireComponent(fileName)
  // 获取组件的 PascalCase 命名
  const componentName = upperFirst(
    camelCase(
      // 剥去文件名开头的 `./` 和结尾的扩展名
      fileName.replace(/^\.\/(.*)\.\w+$/, '$1')
    )
  )
  routes.push({
    path: '/' + result.fileName + "/" + componentName,
    name: componentName,
    component: componentConfig.default || componentConfig
  })
}))
routes.push({
  path: '/',
  component: HelloWorld
})
export default new Router({
  routes: routes
})

