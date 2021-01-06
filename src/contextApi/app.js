import React, {Component} from 'react';
import ThemedButton from "./themed-button";
import {themes,ThemeContext,NameContext} from "./theme-context";
import Son from "./son";

function Toolbar(props) {
    return (
        <ThemedButton onClick={props.changeTheme}>
            change Theme
        </ThemedButton>
    )
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: themes.light,
        };
        this.toggleTheme = () => {
            this.setState(state => ({
                theme:
                    state.theme === themes.dark
                        ? themes.light
                        : themes.dark,
            }));
        };
    }


    render() {
        let name = 'yqm'
        return (
            <NameContext.Provider value={name}>
                <div>
                    <p>父组件定义的值: {name}</p>
                    <Son/>
                </div>
            </NameContext.Provider>
        );
    }
}

export default App;