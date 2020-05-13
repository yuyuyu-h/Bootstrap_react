import React, { Component } from 'react';
// 引入样式
import './home.less';

// 定义组件
export default class Home extends Component {
	// 数据
	constructor(props) {
		super(props);
		// 状态
		this.state = {
			firstList: [
				{
					h3: '预处理脚本',
					p: '虽然可以直接使用 Bootstrap 提供的 CSS 样式表，不要忘记 Bootstrap 的源码是基于最流行的 CSS 预处理脚本 - <a href="">Less</a> 和 <a href="">Sass</a> 开发的。你可以采用预编译的 CSS 文件快速开发，也可以从源码定制自己需要的样式。',
					img: 'sass-less.png'
				},
				{
					h3: '一个框架、多种设备',
					p: '你的网站和应用能在 Bootstrap 的帮助下通过同一份代码快速、有效适配手机、平板、PC 设备，这一切都是 CSS 媒体查询（Media Query）的功劳。',
					img: 'devices.png'
				},
				{
					h3: '特性齐全',
					p: 'Bootstrap 提供了全面、美观的文档。你能在这里找到关于 HTML 元素、HTML 和 CSS 组件、jQuery 插件方面的所有详细文档。',
					img: 'components.png'
				}
			],
			// 第二个列表
			secondList: ['01.png', '02.jpg', '03.png', '04.png']
		}
	}
	// 创建第一个列表方法
	createFirstList() {
		// 渲染列表
		return this.state.firstList.map((item, index) => (
			<li key={index}>
				<img src={'img/' + item.img} alt=""/>
				<h3>{item.h3}</h3>
				<p dangerouslySetInnerHTML={{ __html: item.p }}></p>
			</li>
		))
	}
	// 创建第二个列表方法
	createSecondList() {
		return this.state.secondList.map((item, index) => (
			<li key={index}>
				<img src={'img/' + item} alt=""/>
			</li>
		))
	}
	render() {
		return (
			<div className="app-home" style={{ display: this.props.style ? '' : 'none' }}>
				<div className="banner">
					<div className="logo">B</div>
					<h1>Bootstrap 是最受欢迎的 HTML、CSS 和 JS 框架，用于开发响应式布局、移动设备优先的 WEB 项目。</h1>
					<span className="btn btn-lg">下载 BootStrap</span>
					<p>当前版本： v3.3.7 | 文档更新于：2017-05-22</p>
				</div>
				<div className="first-part">
					<div className="container">
						<h2>为所有开发者、所有应用场景而设计。</h2>
						<p className="info">Bootstrap 让前端开发更快速、简单。所有开发者都能快速上手、所有设备都可以适配、所有项目都适用。</p>
						<div className="line"></div>
						<ul className="clearfix">{this.createFirstList()}</ul>
						<div className="line"></div>
						<p className="info">Bootstrap 是完全开源的。它的代码托管、开发、维护都依赖 GitHub 平台。</p>
						<span className="btn btn-lg">查看 GitHub 项目主页</span>
					</div>
				</div>
				{/*div.second-part>div.container>h2+p.info+div.line+ul.clearfix+div.line+p.info+span.btn.btn-lg*/}
				<div className="second-part">
					<div className="container">
						<h2>基于 Bootstrap 构建的网站</h2>
						<p className="info">全球数以百万计的网站都是基于 Bootstrap 构建的。你可以先参观一下我们提供的实例精选或者看一看我们粉丝的网站吧。</p>
						<div className="line"></div>
						<ul className="clearfix">{this.createSecondList()}</ul>
						<div className="line"></div>
						<p className="info">我们在“优站精选”里展示了许多精美的 Bootstrap 网站。</p>
						<span className="btn btn-lg">逛一逛“优站精选”</span>
					</div>
				</div>
			</div>
		)
	}
}
