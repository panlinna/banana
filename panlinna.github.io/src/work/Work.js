import React, { PropTypes } from 'react'

import imga from '../images/github1.png'
import imgb from '../images/github2.png'
import imgc from '../images/github3.png'
import imgd from '../images/github4.png'

// <div className="work-inner">

class Work extends React.Component {
    render () {
        return(
            <div className="work">
                <div className="work-card">
                    <img src={ imga } />
                    <div className="work-text">
                        <h3>作品一</h3>
                        <p>2016.5.6</p>
                    </div>
                </div>
                <div className="work-card">
                    <img src={ imgb } />
                    <div className="work-text">
                        <h3>作品一</h3>
                        <p>2016.5.6</p>
                    </div>
                </div>
                <div className="work-card">
                    <img src={ imgc } />
                    <div className="work-text">
                        <h3>作品一</h3>
                        <p>2016.5.6</p>
                    </div>
                </div>
                <div className="work-card">
                    <img src={ imgd } />
                    <div className="work-text">
                        <h3>作品一</h3>
                        <p>2016.5.6</p>
                    </div>
                </div>
                <div className="work-card">
                    <img src={ imgc } />
                    <div className="work-text">
                        <h3>作品一</h3>
                        <p>2016.5.6</p>
                    </div>
                </div>

                <div className="work-card">
                    <img src={ imga } />
                    <div className="work-text">
                        <h3>作品一</h3>
                        <p>2016.5.6</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Work;
