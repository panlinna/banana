import React, { PropTypes } from 'react'
import BlogCard from '../components/BlogCard'
import { carddata } from '../utils/Helpers.js'

class Blog extends React.Component {
    constructor(){
        super();
        this.state={
            data:[],
            wait:true
        }
    }
    componentDidMount() {
            carddata()
            .then((we)=>
                this.setState({
                    data:we.as,
                    wait: ! this.state.wait
                })
             )
             .catch(()=>{
                 alert('404')
             })

    }
    render () {
        let ass = this.state.data.map((item,i)=> <BlogCard {...item} key={i} /> )
        return(
            <div className="blog">
                {this.state.wait ? <p className="loadingp">loading...</p> : ass }
            </div>
        )
    }
}

export default Blog;
