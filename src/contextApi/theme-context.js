import React from "react";

export const themes = {
    light: {
        foreground:'#000000',
        background:'#eeeeee',
    },
    dark:{
        foreground: '#ffffff',
        background: '#222222'
    }
}

export const ThemeContext = React.createContext(themes.dark)

export const NameContext = React.createContext('默认名称')