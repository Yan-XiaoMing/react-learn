import React, {Component} from 'react';

const numbers =[1,2,3,4,5];
const doubled = numbers.map((number)=>number*2);
// console.log(doubled);

const listItems = numbers.map((number) =>
  <li key={number.toString()}>{number}</li>
);


//如果列表项目的顺序可能会变化，我们不建议使用索引来用作 key 值，因为这样做会导致性能变差，还可能引起组件状态的问题
//如果你选择不指定显式的 key 值，那么 React 将默认使用索引用作为列表项目的 key 值。

//key 只是在兄弟节点之间必须唯一
// 数组元素中使用的 key 在其兄弟节点之间应该是独一无二的。然而，它们不需要是全局唯一的。当我们生成两个不同的数组时，我们可以使用相同的 key 值：

class DoubleMap extends Component {
  render() {
    return (
      <div>
        <ul>
          {listItems}
        </ul>
      </div>
    );
  }
}

export default DoubleMap;
