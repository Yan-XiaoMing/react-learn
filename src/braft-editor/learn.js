import React, {Component} from 'react';
import BraftEditor from 'braft-editor';
import 'braft-editor/dist/index.css';
import './learn.css';
import {Button, Form, Input} from 'antd';
import {ContentUtils} from 'braft-utils';

const mediaItems = [
  {
    id: 1,
    type: 'IMAGE',
    url: 'https://margox.cn/wp-content/uploads/2018/09/IMG_9508.jpg'
  }, {
    id: 2,
    type: 'IMAGE',
    url: 'https://margox.cn/wp-content/uploads/2017/05/IMG_4995-480x267.jpg'
  }, {
    id: 3,
    type: 'IMAGE',
    url: 'https://margox.cn/wp-content/uploads/2017/05/IMG_4984-480x267.jpg'
  }, {
    id: 4,
    type: 'AUDIO',
    url: 'https://margox.cn/wp-content/uploads/2016/10/Jesper-Kyd-Venice-Rooftops.mp3'
  }, {
    id: 5,
    type: 'IMAGE',
    url: 'https://margox.cn/wp-content/uploads/2016/02/DSC_6961-980x654.jpg'
  }
];

const sizeBase = 16;

const unitImportFn = (unit,type,source)=>{
  // type为单位类型，例如font-size等
  // source为输入来源，可能值为create或paste
  console.log(type, source);

  // 此函数的返回结果，需要过滤掉单位，只返回数值
  if (unit.indexOf('rem')) {
    console.log(parseFloat(unit, 10) * sizeBase);
    return parseFloat(unit, 10) * sizeBase
  } else {
    console.log(parseFloat(unit, 10) );
    return parseFloat(unit, 10)
  }
};

const unitExportFn = (unit, type, target) => {

  if (type === 'line-height') {
    // 输出行高时不添加单位
    return unit
  }

  // target的值可能是html或者editor，对应输出到html和在编辑器中显示这两个场景
  if (target === 'html') {
    // 只在将内容输出为html时才进行转换
    return unit / sizeBase + 'rem'
  } else {
    // 在编辑器中显示时，按px单位展示
    return unit + 'px'
  }
};

class

Learn extends Component {

  state = {
    editorState: BraftEditor.createEditorState(('<p>Hello <span style="font-size:1.28rem;">World!</span></p>',{ unitImportFn })),// 设置编辑器初始内容
    outputHTML: '<p></p>'
  };

  componentDidMount() {
    this.isLiving = true;
    // setTimeout(
    //   this.setEditorContentAsync, 3000
    // );
    // 获取媒体库实例
    this.braftFinder = this.editorInstance.getFinderInstance();
  }

  handleChange = (editorState) => {
    this.setState({
      editorState,
      outputHTML: editorState.toHTML()
    });
  };

  addMediaItem = () => {
    this.braftFinder.addItems([
      {
        id: new Date().getTime(),
        type: 'IMAGE',
        url: 'https://margox.cn/wp-content/uploads/2017/05/IMG_4995-480x267.jpg'
      }
    ]);
  };

  insertMediaItem = () => {
    // 使用ContentUtils.insertMedias来插入媒体到editorState
    const editorState = ContentUtils.insertMedias(this.state.editorState, [
      {
        type: 'IMAGE',
        url: 'https://margox.cn/wp-content/uploads/2017/05/IMG_4995-480x267.jpg'
      }
    ]);
    this.setState({editorState});
  };

  setEditorContentAsync = () => {
    this.isLiving && this.setState(
    {
      editorState: BraftEditor.createEditorState(('<p>Hello <span style="font-size:1.28rem;">World!</span></p>'))
    });
  };

  preview = () => {
    if (window.previewWindow) {
      window.previewWindow.close();
    }
    window.previewWindow = window.open();
    window.previewWindow.document.write(this.buildPreviewHtml());
    window.previewWindow.document.close();

  };

  handleSubmit = (values) => {
    const submitData = {
      title: values.username,
      content: values.text.toRAW(true),
      content2: values.text.toHTML()
    };
    console.log(submitData);
  };

  buildPreviewHtml() {
    return `
      <!Doctype html>
      <html>
        <head>
          <title>Preview Content</title>
          <style>
            html,body{
              height: 100%;
              margin: 0;
              padding: 0;
              overflow: auto;
              background-color: #f1f2f3;
            }
            .container{
              box-sizing: border-box;
              width: 1000px;
              max-width: 100%;
              min-height: 100%;
              margin: 0 auto;
              padding: 30px 20px;
              overflow: hidden;
              background-color: #fff;
              border-right: solid 1px #eee;
              border-left: solid 1px #eee;
            }
            .container img,
            .container audio,
            .container video{
              max-width: 100%;
              height: auto;
            }
            .container p{
              white-space: pre-wrap;
              min-height: 1em;
            }
            .container pre{
              padding: 15px;
              background-color: #f1f1f1;
              border-radius: 5px;
            }
            .container blockquote{
              margin: 0;
              padding: 15px;
              background-color: #f1f1f1;
              border-left: 3px solid #d1d1d1;
            }
          </style>
        </head>
        <body>
          <div class="container">${this.state.editorState.toHTML()}</div>
        </body>
      </html>
    `;
  }


  render() {
    const {editorState, outputHTML} = this.state;
    // console.log(editorState)

    const excludeControls = ['letter-spacing',
      'line-height',
      'clear',
      'headings',
      'list-ol',
      'list-ul',
      'remove-styles',
      'superscript',
      'subscript',
      'hr',
      'text-align'];

    const extendControls = [
      {
        key: 'custom-button',
        type: 'button',
        text: '预览',
        onClick: this.preview
      },
      'separator',
      {
        key: 'add-media',
        type: 'button',
        text: '插入图片到媒体库',
        onClick: this.addMediaItem
      }, {
        key: 'insert-media',
        type: 'button',
        text: '插入图片到编辑器',
        onClick: this.insertMediaItem
      }
    ];

    return (
      <div className='editor-wrapper'>
        <Form onFinish={this.handleSubmit}>
          <Form.Item
            label="Username"
            name="username"
            rules={[{required: true, message: 'Please input your username!'}]}
          >
            <Input/>
          </Form.Item>
          <Form.Item
            label="文章正文"
            name="text"
            rules={[{
              required: true,
              message:'请输入文章内容'
            }]}
          >
            <BraftEditor
              ref={instance => this.editorInstance = instance}
              excludeControls={excludeControls}
              extendControls={extendControls}
              contentStyle={{height: 210, boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.1)'}}
              value={editorState}
              onChange={this.handleChange}
              media={{items: mediaItems}}
              placeholder="请输入文章内容"
              converts={{ unitImportFn, unitExportFn }}
            />
          </Form.Item>
          <Form.Item>
            <Button size="large" type="primary" htmlType="submit">提交</Button>
          </Form.Item>
        </Form>
        <h5>输出内容</h5>
        <div className='output-content'>{outputHTML}</div>
      </div>
    );
  }


}

export default Learn;
