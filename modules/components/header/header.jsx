// 引入库
import React, { Component } from 'react';
// 引入样式
import './header.less';

// 定义类并暴露接口
export default class Header extends Component {
	// 构造函数
	constructor(props) {
		super(props);
		// console.log(this)
		// 将属性数据转换成状态数据
		this.state = {
			// 选中的页面，添加choose类
			[props.choosePage]: 'choose'
		}
	}
	// 切换页面
	toggle(id) {
		// console.log(id)
		// 获取状态
		let state = this.state;
		// 排他法，切换样式类
		for (let key in state) {
			// 清空
			state[key] = ''
		}
		// 设置特殊的
		state[id] = 'choose';
		// 更新状态
		this.setState(state)
		// 2 子组件执行方法，并传递参数
		this.props.method(id);
	}
	render() {
		// div.app-header.navbar.navbar-static-top>div.container>(div.navbar-header>a.navbar-brand{Bootstrap})+(ul.navbar-nav.nav.nav-pills.pull-right>li>a{Bootstrap中文网})+ul.navbar-nav.nav.nav-pills>(li>a)*6
		// 解构数据
		let { start, css, component, js, marker } = this.state;
		return (
			<div className="app-header navbar navbar-static-top">
				<div className="container">
					<div className="navbar-header">
						<a className="navbar-brand" onClick={e => this.toggle('home')}>Bootstrap</a>
					</div>
					<ul className="navbar-nav nav nav-pills pull-right">
						<li>
							<a href="">Bootstrap中文网</a>
						</li>
					</ul>
					<ul className="navbar-nav nav nav-pills">
						<li>
							{/*解决刷新页面问题：1 javascript:void(0)  2 删除href*/}
							<a className={start} onClick={e => this.toggle('start')}>起步</a>
						</li>
						<li>
							<a className={css} onClick={e => this.toggle('css')}>全局 CSS 样式</a>
						</li>
						<li>
							<a className={component} onClick={e => this.toggle('component')}>组件</a>
						</li>
						<li>
							<a className={js} onClick={e => this.toggle('js')}>JavaScript 插件</a>
						</li>
						<li>
							<a className={marker} onClick={e => this.toggle('marker')}>定制</a>
						</li>
						<li>
							<a href="">网站实例</a>
						</li>
					</ul>
				</div>
			</div>
		)
	}
}





