// 引入库
import React, { Component } from 'react';
import './aside.less'

export default class Aside extends Component {
	// 渲染列表
	createList() {
		return this.props.data.map((item, index) => (
			<li key={index}>
				<a href={'#' + item.id}>{item.title}</a>
			</li>
		))
	}
	render() {
		return (
			<div className="app-aside">
				<ul>{this.createList()}</ul>
			</div>
		)
	}
}
// 默认属性
Aside.defaultProps = {
	data: []
}