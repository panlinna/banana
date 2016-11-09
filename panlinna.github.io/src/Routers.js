import React, { PropTypes } from 'react'
import { Router, Route, browserHistory,IndexRoute,hashHistory } from 'react-router';

import App from './App'
import About from './about/About'
import Work from './work/Work'
import Home from './home/Home'
import Blog from './blog/Blog'
import BlogPage from './blog/page'

class Routers extends React.Component {
    render () {
        return(
            <Router history={browserHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/work" component={Work} />
                    <Route path="/blog" component={Blog} />
                    <Route path="/blog/:url" component={BlogPage} />
                </Route>
            </Router>
        )
    }
}
// /:title
export default Routers;
