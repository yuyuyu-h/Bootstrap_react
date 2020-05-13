// 引入库
import React, { Component } from 'react';
import './article.less';

export default class Article extends Component {
	// 渲染视图
	createList() {
		return this.props.data.map((item, index) => (
			<li key={index} id={item.id}>
				<h3>{item.title}</h3>
				<p>{item.content}</p>
			</li>
		))
	}
	render() {
		return (
			<div className="app-article">
				<ul>{this.createList()}</ul>
			</div>
		)
	}
}
// 默认数据
Article.defaultProps = {
	data: []
}