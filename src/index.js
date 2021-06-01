/*
    react中的两个核心依赖
    React包含react中的核心API
    ReactDom包含了对DOM的操作
*/
import React from "react";
import ReactDOM from "react-dom";
import Cart from './components/Cart'
// import "./index.css";
import 'antd/dist/antd.css';
/*
render渲染函数 两个参数
  参数一：元素或者组件
  参数二： 容器节点
  作用：把元素或者组件渲染到容器节点里面
  虚拟DOM： JS对象，用来描述DOM节点的
  比如：<div className='test'> Hello World </div> 
  --
  -- ｛type:div,props:{childen:"Hello World",className:'test'}｝
  JSX:
    1.什么是JSX：在js文件中出现的类似html的标签就是JSX
    2.JSX和HTML一样吗？
      完全不一样，JSX本质上是JS对象，它的底层是通过React.createElement创建虚拟DOM
      JSX其实是React.createElement的语法糖
      React.createElement("div",null,"Hello World")

  表达式： 什么是表达式
  凡是具有返回值的JS语句，就是一个表达式
*/
ReactDOM.render(
  <Cart></Cart>,
  document.getElementById("root")
);
// const DOM = document.createElement('div');
// const ReactElement = React.createElement('div');
// console.log('DOM',DOM);//对比真实DOM与虚拟DOM
// console.log('ReactElement',ReactElement);
