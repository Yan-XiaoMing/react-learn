

/**
 * useEffect
 * componentDidMount
 * componentDidUpdate
 * componentWillUnmount
 *
 */
//保存状态的数组
let hookStates = []
//索引
let hookIndex = 0

function useEffect(callback,dependencies){
  if(hookStates[hookIndex]){
    //非初始化调用
    let lastDependencies = hookStates[hookIndex]
    //判断传入的依赖项跟上次的是否相同
    let same = dependencies.every(
      (item,index) => item === lastDependencies[index]
    )
    if(same){
      hookIndex++
    }
    else{
      hookStates[hookIndex++] = dependencies
      callback()
    }
  }
  else{
    //初始调用
    hookStates[hookIndex++] = dependencies
    callback()
  }
}
