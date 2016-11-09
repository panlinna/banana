import React, { PropTypes } from 'react'
import { Link } from 'react-router';

class BlogCard extends React.Component {
    render () {
        let styles={
            root:{
                boxShadow: '0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24)',
                borderRadius:'10px',
                margin:'0 auto',
                color:'#fff',
                overflow: 'hidden',
                marginBottom:'20px',
                backgroundColor:'rgba(255,255,255,0.4)'
            },
            index:{
                height:'50px',
                textAlign:'center',
                color:'#fff',
                padding:'5px 0',
                backgroundColor:'rgba(0,0,0,0.4)'
            },
            pspan:{
                display:'block',
                width:'40px',
                height:'40px',
                margin:'0 auto',
                fontSize:'18px',
                lineHeight:'40px',
                borderRadius:'50%',
                backgroundColor:'#222'
            },
            title:{
                fontSize:'24px',
                margin:'5px 10px',
            },
            desc:{
                margin:'5px 10px',
                color:'#eee'
            },
        }
        let addurl= `blog/${this.props.title}`;
        return(
            <div className="blogcard" style={styles.root}>
                <p style={styles.index}><span style={styles.pspan}>{this.props.num}</span></p>
                <p style={styles.title}>{this.props.title}</p>
                <p style={styles.desc}>
                    {this.props.txt}
                </p>
                <Link to={addurl} style={styles.btn}>阅读更多</Link>
            </div>
        )
    }
}

export default BlogCard;
