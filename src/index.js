import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ReduxPromise from "redux-promise";

import reducers from "./reducers";
import PostsIndex from "./components/posts_index";
import PostsCreate from "./components/posts_create";
import PostsShow from "./components/posts_show";
import NotFound from "./components/404_not_found";

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/posts/create/" component={PostsCreate} />
                    <Route path="/posts/show/:id" component={PostsShow} />
                    <Route path="/" exact component={PostsIndex} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
    , document.querySelector(".container"));
