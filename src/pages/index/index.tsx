import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'
import Child from './child'

export default class Index extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页'
  }

  state={
    name: 'Hello World!!!',
    // text: '张三'
    obj:undefined //设置为null时，相当于已经赋值，但是为空，还是会传值到子组件，子组件就不会读取defaultProps
  }

  componentWillMount () {  //第一次渲染之前执行 只执行一次
    console.log('第一次渲染之前执行 只执行一次')
    let {name}=this.$router.params; //路由传值获取值
    alert(name);
  }  

  componentDidMount () { //第一次渲染之后执行 只执行一次
    console.log('第一次渲染之后执行 只执行一次')
    // this.state.name="Hello China!!!"  //错误的写法
    // this.setState({name:'Hello China!!!',text:'李四'},()=>{ //这个是回调函数
    //   console.log(this.state.name+'----'+this.state.text) //Hello China!!!----李四
    // })
    // console.log(this.state.name+'----'+this.state.text) //Hello World!!!----张三 因为异步原因还会是之前的参数  taro中状态更新一定是异步
    // this.setState({text:'李四'})
    
    this.setState({name:'Hello China!!!',obj:{key:[{name:'张三'}]}},()=>{ //这个是回调函数
        console.log(this.state.name+'----') //Hello China!!!----李四
      })
   }  

  componentWillUnmount () {  //卸载时执行 只执行一次
    console.log('卸载时执行 只执行一次')
  } 

  componentWillUpdate(){  //state数据将要更新
    console.log('state数据将要更新')
  }
  componentDidUpdate(){ //state数据更新过后
    console.log('state数据更新过后')
  }
  componentWillReceiveProps(nextProps){ //会在父组件传递给子组件的参数发生改变时触发
    console.log('会在父组件传递给子组件的参数发生改变时触发')
  }
  shouldComponentUpdate(nextProps,nextState){ //检查此次setState是否要进行render调用
    console.log('检查此次setState是否要进行render调用')
    // if(nextState.text=="李四") //nextState下一次的text等于李四 一般用来多次的setState调用时提升render的性能
      return true;
    // else
    //   return false;
  }

  componentDidShow () { //reactjs是不存在该函数，为了支持小程序，顺便支持  页面显示时触发
    console.log('reactjs是不存在该函数，为了支持小程序，顺便支持  页面显示时触发')
   } 

  componentDidHide () {  //页面隐藏时触发
    console.log('页面隐藏时触发')
  } 

  test(){  //传递给子组件的方法  小程序中，原本传递方法应该在render中在方法前面加个on，现在不需要加on,H5中不需要加on
    console.log('test父组件传递参数');
  }
  render () {
    let {name,obj}=this.state;
    // let obj={key:[{name:'张三'}]}
    return (
      <View className='index'>
        
        <Child name={name} obj={obj} test={this.test}></Child>
      </View>
    )
  }
}
