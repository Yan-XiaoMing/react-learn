import React from 'react';
import {Toolbar} from '@antv/x6-react-components'
import '@antv/x6-react-components/es/toolbar/style/index.css'
import {ClearOutlined,UndoOutlined,RedoOutlined} from "@ant-design/icons";

const Item = Toolbar.Item
const Group = Toolbar.Group

const ToolBar = () => {
    return (
        <div>
            <Toolbar hoverEffect={true} size='big'>
                <Group>
                    <Item name='delete'
                          icon={<ClearOutlined/>}
                          tooltip='清除'
                    />
                </Group>
                <Group>
                    <Item
                        name="undo"
                        tooltip="Undo (Cmd + Z, Ctrl + Z)"
                        icon={<UndoOutlined />}
                        // disabled={!canUndo}
                    />
                    <Item
                        name="redo"
                        tooltip="Redo (Cmd + Shift + Z, Ctrl + Y)"
                        icon={<RedoOutlined />}
                        // disabled={!canRedo}
                    />
                </Group>
            </Toolbar>
        </div>
    );
};

export default ToolBar;