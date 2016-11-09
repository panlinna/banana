import React, { PropTypes } from 'react';
import echarts from 'echarts';
import catme from '../images/cat.jpg';

class About extends React.Component {
    componentDidMount(){
        let option = {
            backgroundColor:'rgba(0,0,0,0.5)',
            title: {
                text: '我的专业技能',
                left: 'center',
                top: 35,
                textStyle: {
                    color: '#fff'
                }
            },

            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },

            visualMap: {
                show: false,
                min: 80,
                max: 600,
                inRange: {
                    colorLightness: [0, 1]
                }
            },
            series : [
                {
                    name:'访问来源',
                    type:'pie',
                    radius : '55%',
                    center: ['50%', '50%'],
                    data:[
                        {value:335, name:'Javascript'},
                        {value:310, name:'Jquery'},
                        {value:274, name:'Css3'},
                        {value:235, name:'Html5'},
                        {value:400, name:'React'}
                    ].sort(function (a, b) { return a.value - b.value}),
                    roseType: 'angle',
                    label: {
                        normal: {
                            textStyle: {
                                color: '#fff',
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            lineStyle: {
                                color: '#fff',
                            },
                            smooth: 0.2,
                            length: 10,
                            length2: 20
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#c23531',
                            shadowBlur: 200,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };
        let myChart = echarts.init(document.getElementById('main'));
        myChart.setOption(option);
    }
    render () {
        return(
            <div className="about">
                <div>
                    <h5>.</h5>
                    <h3>个人信息</h3>
                    <img src={catme} />
                    <h4>Pan</h4>
                    <h5>喜欢>阅读、音乐、电影</h5>
                    <h5>标签>阳光、独立、吃苦、梦想</h5>
                </div>
                <h5>.</h5>
                <div id="main" style={{width: '80%',height:'70vh',color:'#fff',margin:'2% auto 0'}}></div>
                <h5>.</h5>
                <div>
                    <h3>联系方式</h3>
                    <h5>微信：L1690083489</h5>
                    <h5>邮箱：18332523096@163.com</h5>
                </div>
                <h5>.</h5>
                <h5>.</h5>
                <h5>.</h5>
            </div>
        )
    }
}

export default About;
