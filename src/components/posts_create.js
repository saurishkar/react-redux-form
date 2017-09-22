import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Redirect } from "react-router";

import { StorePosts } from "../actions/posts";

class PostsCreate extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
            success: " "
        };
        this.renderFormFields = this.renderFormFields.bind(this);
    }

    renderFormFields(field) {
        // const { pristine, touched } = this.props;
        return (
            <div>
                <div className="form-group">
                    <label> {field.label} </label>
                    <input className={`form-control ${(field.meta.touched && field.meta.error)? "error":""}`} type="text" { ...field.input } />
                    <span className="text-danger">{field.meta.touched && field.meta.error}</span>
                </div>
            </div>
        );
    }

    onSubmit(values) {

        this.props.StorePosts(values, () => {
            this.props.history.push("/");
        });
        // console.log("values: ", this.props.posts);
        
    }

    render() {

        const { handleSubmit } = this.props;
        return (
            <div className="form-container">
                <form className="form-group" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field
                        label="Title"
                        name="title"
                        component={this.renderFormFields} 
                    />

                    <Field
                        label="Categories"
                        name="categories"
                        component={this.renderFormFields} 
                    />

                    <Field
                        label="Post Content"
                        name="content"
                        component={this.renderFormFields} 
                    />
                    <button type="submit" className="btn btn-success">Submit</button>
                    <Link  className="btn btn-danger" to="/">Cancel</Link>    
                    <div className="text-success">{this.state.success}</div>
                </form>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({StorePosts}, dispatch);
}

function mapStateToProps({posts}) {
    return {posts};
}

function validate(values) {
    // console.log(values);
    const errors ={} ; // redux-form will check for this object for any added properties and return them
    // as errors if present on submission of the form
    
    if (!values.title) {
        errors.title = "Title is Required";
    }

    if (!values.categories) {
        errors.categories = "Categories are Required";
    }

    if (!values.content) {
        errors.content = "Post Content is Required";
    }

    return errors;
}

export default reduxForm({
    validate: validate,
    form: "PostsNewForm"
})(
    connect(mapStateToProps, mapDispatchToProps)(PostsCreate)
);


// export connect(mapStateToProps, mapDispatchToProps)(PostsCreate);