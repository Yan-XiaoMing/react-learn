import React, {Component} from 'react';
import {NameContext} from './theme-context'
import GrandSon from './grandSon'

class Son extends Component {
    render() {
        return (
            <NameContext.Consumer>
                {
                    (name) => (
                        <div>
                            <p>子组件,获取父组件的值:{name}</p>
                            <GrandSon/>
                        </div>
                    )
                }
            </NameContext.Consumer>
        );
    }
}

export default Son;