import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import _ from "lodash";
import { Link } from "react-router-dom";
import { ROOT_URL, API_KEY } from "../actions/posts";
import { FetchPosts } from "../actions/posts";

class PostsIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    listPosts() {
        console.log(_.map(this.props.posts));
        return _.map(this.props.posts).map((elem) => {
            const link = `/posts/show/${elem.id}/`;
            return (
                <Link to={link} className="post">
                    <li key={elem.id} className="list-group-item">
                        {elem.title} <br />
                        {elem.categories} <br />
                        {elem.content} <br />
                    </li>
                </Link>
            );
        });
    }

    componentDidMount() {
        this.props.FetchPosts();
    }

    render() {
        // console.log(this.props.posts);
        return (
            <div>
                <div className="text-xs-right"><Link className="btn btn-primary" to="/posts/create/">Add a Post</Link>
                </div>
                <ul className="list-group">{ this.listPosts() }</ul>
            </div>
        );
    }
}

function mapStateToProps({posts}) {
    return {posts};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({FetchPosts}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);
