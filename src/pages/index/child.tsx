import Taro,{ Component } from '@tarojs/taro'  
import { View,Text } from '@tarojs/components'


 class Child extends Component{
    componentWillReceiveProps(nextProps){
        this.props.flag!=nextProps.flag  //加个判断，以防频繁触发
        console.log('props属性变化了:'+nextProps.name)
    }
    cl(){
        this.props.test(); //绑定父组件的方法
    }
    render () {
        let {name,obj}=this.props;
        return (
            <View onClick={this.cl.bind(this)}>我是子节点{name}----{obj.key[0].name}</View>
        )
      }
}
Child.defaultProps={
    obj:{key:[{name:'aaaa'}]}
}
export default Child;