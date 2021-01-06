import React, {Component} from 'react';
import {NameContext} from './theme-context'

class GrandSon extends Component {
    render() {
        return (
            <NameContext.Consumer>
                {
                    (name) => (
                        <div>
                            <p>孙子组件: 获取传递下来的值为:{name}</p>
                        </div>
                    )
                }
            </NameContext.Consumer>
        );
    }
}

export default GrandSon;