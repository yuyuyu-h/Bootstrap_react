// 引入库
import React, { Component } from 'react';
import axios from 'axios';
// 引入组件
import Banner from '../../components/banner/banner.jsx';
import Content from '../../components/content/content.jsx';

// 定义组件并暴露接口
export default class Start extends Component {
	// 定义数据
	constructor(props) {
		super(props);
		// 定义状态
		this.state = {
			title: '起步',
			intro: '简要介绍 Bootstrap，以及如何下载、使用，还有基本模版和案例，等等。',
			// 请求地址
			url: 'data/start.json',
			// 初始化数组
			data: []
		}
	}
	render() {
		return (
			<div style={{ display: this.props.style ? '' : 'none' }} className="app-start">
				<Banner title={this.state.title} intro={this.state.intro}></Banner>
				<Content data={this.state.data}></Content>
			</div>
		)
	}
	// 组件创建完成，请求数据
	componentDidMount() {
		// 发送请求
		axios.get(this.state.url)
			// 监听返回
			.then(({ data }) => this.setState({ data }))
	}
}
