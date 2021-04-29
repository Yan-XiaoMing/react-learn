export const data = {
    // 节点
    nodes: [
        {
            id: 'node1', // String，可选，节点的唯一标识
            x: 40,       // Number，必选，节点位置的 x 值
            y: 40,       // Number，必选，节点位置的 y 值
            width: 80,   // Number，可选，节点大小的 width 值
            height: 40,  // Number，可选，节点大小的 height 值
            // label: 'hello', // String，节点标签
            //定制样式
            attrs:{
                body:{
                    fill:'#2ECC71',
                    stroke:'#000',
                    strokeDasharray:'10,2'
                },
                label:{
                    text:'Hello',
                    fill:'#333',
                    fontsize:13
                }
            }
        },
        // {
        //     id: 'node2', // String，节点的唯一标识
        //     x: 160,      // Number，必选，节点位置的 x 值
        //     y: 180,      // Number，必选，节点位置的 y 值
        //     width: 80,   // Number，可选，节点大小的 width 值
        //     height: 40,  // Number，可选，节点大小的 height 值
        //     label: 'world', // String，节点标签
        // },
        {
            id: 'node2',
            shape: 'ellipse', // 使用 ellipse 渲染
            x: 300,
            y: 200,
            width: 80,
            height: 40,
            label: 'world',
        },
    ],
    // 边
    edges: [
        // {
        //     source: 'node1', // String，必须，起始节点 id
        //     target: 'node2', // String，必须，目标节点 id
        //     shape:'double-edge'
        // },
        //定制样式
        {
            source: 'node1',
            target: 'node2',
            attrs:{
                line:{
                    stroke:'orange'
                }
            }
        }
    ],
};