// 引入start类
import Start from '../start/start.jsx';
// 定义组件类，继承混合类
export default class Css extends Start {
	// 重写数据
	constructor(props) {
		super(props);
		// 状态
		this.state = {
			title: '全局 CSS 样式',
			intro: '设置全局 CSS 样式；基本的 HTML 元素均可以通过 class 设置样式并得到增强效果；还有先进的栅格系统。',
			url: 'data/css.json',
			data: []
		}
	}
}

// // 引入库
// import React, { Component } from 'react';
// import axios from 'axios';

// // 引入组件
// import Banner from '../../components/banner/banner.jsx';
// import Content from '../../components/content/content.jsx';

// // 定义组件并暴露接口
// export default class Css extends Component {
// 	// 初始化数据
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			title: '全局 CSS 样式',
// 			intro: '设置全局 CSS 样式；基本的 HTML 元素均可以通过 class 设置样式并得到增强效果；还有先进的栅格系统。',
// 			url: 'data/css.json',
// 			data: []
// 		}
// 	}
// 	render() {
// 		let { title, intro, data } = this.state;
// 		return (
// 			<div className="app-css" style={{ display: this.props.style ? '' : 'none' }}>
// 				<Banner title={title} intro={intro}></Banner>
// 				<Content data={data}></Content>
// 			</div>
// 		)
// 	}
// 	// 组件创建完成，发送请求
// 	componentDidMount() {
// 		// 请求
// 		axios.get(this.state.url)
// 			// 监听数据返回
// 			.then(({ data }) => this.setState({ data }))
// 	}
// }