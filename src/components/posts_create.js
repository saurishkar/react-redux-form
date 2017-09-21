import React, { Component } from 'react';


export default class PostsCreate extends React.Component {

	constructor(props) {
		super(props);
		this.state ={
			success: ''
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
		console.log('submitted');
		
		event.preventDefault();

		this.setState({
			success: 'Your Post has been submitted'
		});
	}

	render() {
		return (
			<form className="form-group" onSubmit={this.handleSubmit}>
				<input className="form-control" name="title" type="text" placeholder="Post Title" />
				<input className="form-control" name="category" type="text" placeholder="Post Category" />
				<textarea className="form-control" name="content" placeholder="Your Content" />
				<button type="submit" className="btn btn-success">Submit</button>
				<div>{this.state.success}</div>
			</form>
		);
	}
}