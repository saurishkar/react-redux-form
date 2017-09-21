import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";


class PostsCreate extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
            success: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        console.log("submitted");
		
        event.preventDefault();

        this.setState({
            success: "Your Post has been submitted"
        });
    }

    render() {
        return (
            <form className="form-group" onSubmit={this.handleSubmit}>
                <Field name="title"  />
                <div>{this.state.success}</div>
            </form>
        );
    }
}

export default reduxForm({
    form: "PostsNewForm"
})(PostsCreate);