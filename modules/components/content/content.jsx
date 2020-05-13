// 引入库
import React, { Component } from 'react';
// 引入两个组件
import Article from '../article/article.jsx';
import Aside from '../aside/aside.jsx';

// 定义组件并暴露接口
export default class Content extends Component {
	// 渲染
	render() {
		// console.log(this.props.data)
		return (
			<div className="app-content">
				<div className="container">
					<Aside data={this.props.data}></Aside>
					<Article data={this.props.data}></Article>
				</div>
			</div>
		)
	}
}