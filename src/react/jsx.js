//在以下 JSX 中，仅当 showHeader 为 true 时，才会渲染 <Header /> 组件：

// <div>
//   {showHeader && <Header />}
//   <Content />
// </div>

//确保 && 之前的表达式总是布尔值：
// <div>
//   {props.messages.length > 0 &&
//   <MessageList messages={props.messages} />
//   }
// </div>

// 如果你想渲染 false、true、null、undefined 等值，你需要先将它们转换为字符
// <div>
//   My JavaScript variable is {String(myVariable)}.
// </div>
