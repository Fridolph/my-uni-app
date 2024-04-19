# uniapp-vue3-ts-scaffold

#### 一、介绍

本项目是一个uni-app + Vue3 + Typescript + Pinia + Vite + Tailwind CSS + uv-ui开发脚手架，下载本项目后可快速开始界面开发，无须再进行复杂繁琐的配置。

#### 二、技术栈简介

##### 2.1 uni-app

uni-app 是一个使用 Vue.js 开发所有前端应用的框架，开发者编写一套代码，可发布到iOS、Android、Web（响应式）、以及各种小程序（微信/支付宝/百度/头条/飞书/QQ/快手/钉钉/淘宝）、快应用等多个平台。

uni-app官方文档：[https://uniapp.dcloud.net.cn/](https://uniapp.dcloud.net.cn/)

##### 2.2 vue3

Vue 3 是一个流行的开源JavaScript框架，用于构建用户界面和单页面应用。Vue 3与Vue 2的主要区别包括：

- 构建：Vue 3使用monorepo架构，更容易管理和维护。
- API：Vue 3引入了新的组合式API，它提供了更灵活的代码组织方式。
- 性能：Vue 3提供了更好的性能，包括更快的渲染速度和更小的打包大小。
- TypeScript：Vue 3提供了更好的TypeScript支持。

Vue3官方文档：[https://cn.vuejs.org/](https://cn.vuejs.org/)

##### 2.3 TypeScript

TypeScript是由 Microsoft 开发并维护的开源编程语言，它是在 JavaScript的基础上增加了静态类型、类和接口等特性，从而将其提升为一个功能更为丰富的开发平台。TypeScript 通过编译器将 TypeScript 代码转换为 JavaScript 代码，确保这些代码能够在支持 JavaScript 的各种设备和平台上运行。这种设计允许开发者利用 TypeScript 的静态类型检查以及类、接口和其他 OOP 功能来构建大型、复杂的 Web 应用，同时享受 JavaScript 本身的高灵活性和易于使用的特点。

Typescript官网文档：[https://www.typescriptlang.org/](https://www.typescriptlang.org/)

##### 2.4 Pinia

Pinia 是 Vue 的存储库，它允许您跨组件/页面共享状态。 如果您熟悉 Composition API，您可能会认为您已经可以通过一个简单的 export const state = reactive({}). 这对于单页应用程序来说是正确的，但如果它是服务器端呈现的，会使您的应用程序暴露于安全漏洞。 但即使在小型单页应用程序中，您也可以从使用 Pinia 中获得很多好处：

- dev-tools 支持
   - 跟踪动作、突变的时间线
   - Store 出现在使用它们的组件中
   - time travel 和 更容易的调试
- 热模块更换
   - 在不重新加载页面的情况下修改您的 Store
   - 在开发时保持任何现有状态
- 插件：使用插件扩展 Pinia 功能
- 为 JS 用户提供适当的 TypeScript 支持或 autocompletion
- 服务器端渲染支持

Pinia 目前也已经是 vue 官方正式的状态库。适用于 vue2 和 vue3。可以简单的理解成 Pinia 就是 Vuex5。也就是说， Vue3 项目，建议使用Pinia。

Pinia官方文档：[https://pinia.web3doc.top/](https://pinia.web3doc.top/)

##### 2.5 Tailwind CSS

Tailwind是一个原子类方式命名的CSS工具集。Tailwind CSS 是一个功能类优先的 CSS 框架，它集成了诸如 flex, pt-4, text-center 和 rotate-90 这样的的类，它们能直接在脚本标记语言中组合起来，构建出任何设计。它将所有的css属性全部封装成语义化的类，比如你想要一个float:left，它已经帮你封装好了，你直接使用一个float-left就可以。需要一个宽度为12像素，只需要写w-3就可以。

使用tailwindcss极大的减少代码量，能轻松完成响应式设计，不需要再写单独的css，也不需要再为class取个什么名字而苦恼。

tailwindcss官方文档：[https://tailwindcss.com/](https://tailwindcss.com/)

##### 2.6 uv-ui

说到uv-ui，就不得不先从uni-ui和uView说起。uni-ui、uView和uv-ui都是uni-app生态下专用的组件库。

- uni-ui 是DCloud官方提供的跨端ui库，它是基于vue组件的、flex布局的、无dom的跨全端ui框架。

    但此组件库组件相对较少，设计风格略显滞后，笔者本人并不是很喜欢。
    
    uni-ui官方文档：[https://uniapp.dcloud.net.cn/component/uniui/uni-ui.html](https://uniapp.dcloud.net.cn/component/uniui/uni-ui.html)

- uView从2018年初发布以来，是uni-app生态最优秀的UI框架，全面的组件和便捷的工具会让您信手拈来，如鱼得水。uView2.0，全面兼容了uni-app生态下的nvue开发模式，对1.x进行了架构重构，细节和性能都有极大提升。

    但uView是基于vue2实现，在vue3框架下使用会存在诸多问题。

    uView官方文档：[https://uviewui.com/](https://uviewui.com/)

- uv-ui是兼容vue3+2、nvue、app、h5、多端小程序的uni-app生态框架，大部分组件基于uView2.x，在经过改进后全面支持vue3，部分组件做了进一步的优化，支持单独导入，方便开发者选择导入需要的组件。
    
    uv-ui官方文档：[https://www.uvui.cn/](https://www.uvui.cn/)


结合本项目的实际情况，笔者最终选择uv-ui作为项目的ui库。

##### 2.7 vite

Vite是Vue的作者尤雨溪开发的Web开发构建工具，它是一个基于浏览器原生ES模块导入的开发服务器，在开发环境下，利用浏览器去解析import，在服务器端按需编译返回，完全跳过了打包这个概念，服务器随启随用。同时不仅对Vue文件提供了支持，还支持热更新，而且热更新的速度不会随着模块增多而变慢。Vue3默认使用Vite作为项目脚手架工具。

Vite官方文档：[https://vitejs.cn/](https://vitejs.cn/)

#### 三、创建过程

开发者也可参考此文章手动搭建自己的脚手架工程。

[使用命令行方式搭建uni-app + Vue3 + Typescript + Pinia + Vite + Tailwind CSS + uv-ui开发脚手架](https://blog.csdn.net/kingslave1/article/details/135454239)

