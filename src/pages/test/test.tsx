import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text ,Button,Image } from '@tarojs/components' //  相对地址必须用require包裹
import {setDate,getDate} from '../../utils'
import Img from '../../img/1.png'
import './test.scss'
export default class Test extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '测试页面'
  }

  state={
    list:[{id:1,name:'项目1'},
          {id:2,name:'项目2'},
          {id:3,name:'项目3'},
          {id:4,name:'项目4'},
          {id:5,name:'项目5'},
          {id:6,name:'项目6'},
          {id:7,name:'项目7'},
          {id:8,name:'项目8'},
          {id:9,name:'项目9'},
          {id:10,name:'项目10'}]
  }

  clickHandle(){
    setDate(),getDate();
    // Taro.navigateTo({url:'/pages/index/index'}) //跳转
    // Taro.redirectTo({url:'/pages/index/index?name=张三'}) //重定向跳转
  }
  // getDom(){  //不可以这么写 X错误的
  //   return (<Button onClick={this.clickHandle}>跳转</Button>)
  // }
  render () {
    let dom=null;
    dom=false || <Button onClick={this.clickHandle}>跳转</Button>;
    let {list}=this.state;
    return (
      <View className='index'>
        <Image src={require('../../img/1.png')}/>
        <Image className='img' src={Img}/>
        {/* {  三元表达式
          ! true ? <Button onClick={this.clickHandle}>跳转</Button> : null
        } */}
        {/* {  短路表达式
          true || <Button onClick={this.clickHandle}>跳转</Button>
        } */}
        {
          dom
        }
        
        {
          list.map((item,index)=>{
            return (<View key={item.id}><Text>{item.name}</Text></View>)
          })
        }

      </View>
    )
  }
}
