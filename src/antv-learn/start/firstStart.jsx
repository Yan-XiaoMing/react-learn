import React, {Component} from 'react';
import {Graph} from "@antv/x6";
import {data} from "./data";
import './style.css'


class FirstStart extends Component {

    componentDidMount() {
        const graph = new Graph({
            container: this.container,
            width: 800,
            height: 600,
            background: {
                color: '#fffbe6', // 设置画布背景颜色
            },
            grid: {
                size: 10,      // 网格大小 10px
                visible: true, // 渲染网格背景
            },
        })
        graph.fromJSON(data)
        // graph.zoom(-0.5)
        // graph.translate(80, 40)
    }

    refContainer = (container) => {
        this.container = container
    }

    render() {
        return (
            <div id='x6-quickstart' className='x6-quickstart' ref={this.refContainer}/>
        );
    }
}

export default FirstStart;