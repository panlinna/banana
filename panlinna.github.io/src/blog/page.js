import React, { PropTypes } from 'react';
import { gitmd } from '../utils/Helpers.js';
import marked from 'marked';
import hljs from 'highlight.js';

class BlogPage extends React.Component {
    constructor(){
        super();
        this.state={
            data:'',
            wait:true
        }
    }
    componentDidMount() {
        let xss=this.props.params.url;
            gitmd(xss)
            .then((we)=>
                   this.setState({
                      data:we.as,
                      wait:!this.state.wait
                  })
             )
             .catch(()=>{
                 alert('404')
             })
    }
    render () {
            marked.setOptions({
                highlight:function(code){
                    return hljs.highlightAuto(code).value;
                }
            });
            let asss=marked(this.state.data)
        return(
            <div className="blogpage">
                {this.state.wait ? <p className="loadingp">loading...</p> : <div dangerouslySetInnerHTML={{__html: asss}} className="post-content" /> }
            </div>
        )
    }
}

export default BlogPage;
