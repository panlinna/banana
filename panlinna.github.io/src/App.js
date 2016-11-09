import React  from 'react'
import NavHeader  from './components/NavHeader'
import NavFooter  from './components/NavFooter'
import NavLeft  from './components/NavLeft'

class App extends React.Component {
    constructor () {
        super();
        this.state={
            noWrap:false
        }
    }
    gitInnerWidth(){
        this.setState({
            noWrap:window.innerWidth > 666 ? true : false
        })
    }
    componentDidMount () {
        this.gitInnerWidth();
        window.onresize=this.gitInnerWidth.bind(this);
    }
    render () {
        return(
            <div className="content-warp">
                { this.state.noWrap ? <NavLeft /> : <NavHeader /> }
                <div className="content-main">
                    {this.props.children}
                </div>
                { this.state.noWrap ? null : <NavFooter /> }
            </div>
        )
    }
}

export default App;
