import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";


import { FetchSinglePost } from "../actions/posts";

class PostsShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    	// console.log("props: ",this.props.match);
    	this.props.FetchSinglePost(this.props.match.params.id);
    }

    renderPost() {
    	return  (
    			<ul className="list-group">
    				<li className="list-group-item"> Post Title: {this.props.post.title}</li>
    				<li className="list-group-item"> Post Category: {this.props.post.categories}</li>
    				<li className="list-group-item"> Post Content: {this.props.post.content}</li>
    			</ul>
    		);
    }

    render() {
    	return (
    			<div className="container">
    				 { this.props.post.id ? this.renderPost(): "" }
    			</div>
    	);
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({FetchSinglePost}, dispatch);
}

function mapStateToProps(state) {
    return {post: state.posts};
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsShow);