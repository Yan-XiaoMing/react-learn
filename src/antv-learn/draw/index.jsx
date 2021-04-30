import React from 'react';
import './index.scss'
import ToolBar from "./components/ToolBar";

const Draw = () => {
    return (
        <div>
            <header className='draw-header'>darw</header>
            <div className={'draw-body'}>
                <div id="stencil" className='sider'/>
                <nav className={'draw-left'}>
                    <ToolBar />
                </nav>
                <div className={'draw-canvas'}>
                </div>
            </div>
        </div>
    );

};
export default Draw;