import React, { Component, Fragment } from "react";
import { Table, Input, Button, Checkbox } from "antd";
import "./cart.css";

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: "",
      count: 1,
      dataSource: [
        {
          key: 1,
          name: <Checkbox />,
          nameInput: "商品名称",
          price: "单价",
          priceInput: "数量",
          addProduct: "小计",
          optional: "操作",
        },
        {
          key: 2,
          name: <Checkbox />,
          nameInput: "衣服",
          price: 10,
          priceInput: (
            <>
              <Button>+</Button>1<Button>-</Button>
            </>
          ),
          addProduct: 10,
          optional: <Button >删除</Button>,
        },
      ],
      columns: [
        {
          title: "商品名称",
          dataIndex: "name",
          key: "name",
        },
        {
          title: (
            <Input
              placeholder="请输入商品名称"
              onChange={this.changeProductInput}
            />
          ),
          dataIndex: "nameInput",
          key: "nameInput",
        },
        {
          title: "价格",
          dataIndex: "price",
          key: "price",
        },
        {
          title: (
            <Input
              placeholder="请输入商品价格"
              prefix="￥"
              suffix="RMB"
              onChange={this.changePriceInput}
            />
          ),
          dataIndex: "priceInput",
          key: "priceInput",
        },
        {
          title: <Button onClick={this.addProduct}>添加商品</Button>,
          dataIndex: "addProduct",
          key: "addProduct",
        },
        {
          dataIndex: "optional",
          key: "optional",
        },
      ],
    };
  }
  changeProductInput = (e) => {
    this.setState(
      {
        name: e.target.value,
      },
      () => {
        console.log(this.state.name);
      }
    );
  };
  changePriceInput = (e) => {
    this.setState(
      {
        price: e.target.value,
      },
      () => {
        console.log(this.state.price);
      }
    );
  };
  addProduct = (e) => {
    const dataSource = [...this.state.dataSource];
    dataSource.push({
      key: dataSource.length + 1,
      name: <Checkbox />,
      nameInput: this.state.name,
      price: this.state.price,
      priceInput: (
        <>
          <Button>+</Button>1<Button>-</Button>
        </>
      ),
      addProduct: this.state.price,
      optional: <Button onClick={this.removeProduct}>删除</Button>,
    });
	this.setState({
		dataSource
	},()=>{
		console.log(this.state.dataSource);
	})
  };
  removeProduct = (e) =>{
	console.log(e);
  }
  render() {
    const { dataSource, columns } = this.state;
    return (
      <Table className="cartTable" dataSource={dataSource} columns={columns} />
    );
  }
}
