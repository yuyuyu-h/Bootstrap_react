// 引入库
import React, { Component } from 'react';
import './banner.less';

export default class Banner extends Component {
	render() {
		return (
			<div className="app-banner">
				<div className="container">
					<h1>{this.props.title}</h1>
					<p>{this.props.intro}</p>
				</div>
			</div>
		)
	}
}