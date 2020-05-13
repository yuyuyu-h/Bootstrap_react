// 引入库文件
import React, { Component } from 'react';
// 引入header组件
import Header from '../components/header/header.jsx';
import './app.less';
// 属性约束
// import PropTypes from 'prop-types';
// 引入首页
import Home from '../pages/home/home.jsx';
// import Start from '../pages/start/start.jsx';
// import Css from '../pages/css/css.jsx';
import Page from '../pages/page/page.jsx';

// 定义应用程序
export default class App extends Component {
	// 定义状态
	constructor(props) {
		super(props);
		// 初始化状态
		this.state = {
			// 将属性数据转换成状态数据
			[ props.page ]: true
		}
	}
	// 获取显示页面的名称
	getShowPageName() {
		// 在状态中，寻找属性值为true的页面
		for (let key in this.state) {
			// this.state[key] 	属性值, key 属性名称
			if (this.state[key]) {
				return key;
			}
		}

	}
	// 父组件提供给子组件的切换页面方法
	changePage(id) {
		// 更新状态切换页面
		// console.log(arguments)
		// 排他法，切换页面
		let state = this.state;
		// 遍历页面
		for (let key in state) {
			// 隐藏页面
			state[key] = false;
		}
		// 特殊页面被显示
		state[id] = true;
		// 更新状态
		this.setState(state);
	}
	render() {
		// 解构
		let { home, start, css, component, js, marker } = this.state;
		return (
			<div>
				{/*父组件向子组件通信，子组件向父组件通信*/}
				{/* 1 父组件传递方法，并绑定父组件 */}
				<Header choosePage={this.getShowPageName()} method={this.changePage.bind(this)}></Header>
				<Home style={home}></Home>
				{/*<Start style={start}></Start>
				<Css style={css}></Css>*/}
				<Page style={start} url="data/start.json" title="起步" intro="简要介绍 Bootstrap，以及如何下载、使用，还有基本模版和案例，等等。"></Page>
				<Page style={css} url="data/css.json" title="全局 CSS 样式" intro="设置全局 CSS 样式；基本的 HTML 元素均可以通过 class 设置样式并得到增强效果；还有先进的栅格系统。"></Page>
				<Page style={component} url="data/component.json" title="组件" intro="无数可复用的组件，包括字体图标、下拉菜单、导航、警告框、弹出框等更多功能。"></Page>
				<Page style={js} url="data/js.json" title="JavaScript 插件" intro="jQuery 插件为 Bootstrap 的组件赋予了“生命”。可以简单地一次性引入所有插件，或者逐个引入到你的页面中。"></Page>
				<Page style={marker} url="data/marker.json" title="定制并下载 Bootstrap" intro="通过自定义 Bootstrap 组件、Less 变量和 jQuery 插件，定制一份属于你自己的 Bootstrap 版本吧。"></Page>
			</div>
		)
	}
}

// 属性约束
// App.propTypes = {
// 	page: PropTypes.string.isRequired
// }

// 默认属性
App.defaultProps = {
	page: 'home'
}