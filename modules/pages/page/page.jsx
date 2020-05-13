import React, { Component } from 'react';
import axios from 'axios';

// 组件
import Banner from '../../components/banner/banner.jsx';
import Content from '../../components/content/content.jsx';

// 定义抽象页面类，并暴露接口
export default class Page extends Component {
	// 初始化状态
	constructor(props) {
		super(props);
		// 状态
		this.state = {
			data: []
		}
	}
	render() {
		let { title, intro, style } = this.props;
		return (
			<div className="app-page" style={{ display: style ? '' : 'none' }}>
				<Banner title={title} intro={intro}></Banner>
				<Content data={this.state.data}></Content>
			</div>
		)
	}
	// 组件创建完成
	componentDidMount() {
		// 请求
		axios.get(this.props.url)
			// 监听返回，更新状态
			.then(({ data }) => this.setState({ data }))

	}
}