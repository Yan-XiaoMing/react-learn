import {Graph,Addon,FunctionExt,Shape} from "@antv/x6";

export default class MyGraph{

    init(){
        this.graph = new Graph({
            container:document.getElementById('container'),
            width:1000,
            height:800,
            grid:{
                size:10,
                visible:true,
                type:'doubleMesh',
                args:[
                    {
                        color:'#cccccc',
                        thickness:1,
                    },
                    {
                        color:'#5F95FF',
                        thickness:1,
                        factor:4
                    }
                ]
            },
            selecting:{
                enable:true,
                multiple:true,
                rubberband:true,
                movable:true,
                showNodeSelectionBox: true,
                filter: ['groupNode'],
            },
            connecting:{
                anchor:'center',
                connectionPoint:'anchor',
                allowBlank:false,
                highlight:true,
                snap:true,
                createEdge(){
                    return new Shape.Edge({
                        attrs:{
                            line:{
                                stroke:'#5F95FF',
                                strokeWidth:1,
                                targetMarker:{
                                    name:'classic',
                                    size:8,
                                }
                            }
                        },
                        router:{
                            name:'manhattan'
                        },
                        zIndex:0
                    })
                },
                validateConnection({
                    sourceView,
                    targetView,
                    sourceMagnet,
                    targetMagnet
                }){
                    if(sourceView === targetView){
                        return false
                    }
                    if(!sourceMagnet){
                        return false
                    }
                    if(!targetMagnet){
                        return false
                    }
                    return true
                }
            }
        })
    }

    initStencil(){

    }

    initShape(){

    }

    initGraphShape(){

    }

    initEvent(){

    }

}