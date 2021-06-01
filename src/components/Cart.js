import React, { Component, Fragment } from "react";
import { Table, Input, Button,Checkbox  } from "antd";
import "./cart.css";

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: "",
      dataSource: [
        {
          key: "1",
          name: <Checkbox/>,
		  nameInput: '胡彦斌1',
		  priceInput: <Fragment><Button>+</Button>1<Button>-</Button></Fragment>
        },
        {
          key: "2",
          name: "胡彦祖2",
          age: 42,
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
  addProduct = () => {
    const dataSource = [...this.state.dataSource];
    console.log(dataSource);
  };
  render() {
    const { dataSource, columns } = this.state;
    return (
      <Table className="cartTable" dataSource={dataSource} columns={columns} />
    );
  }
}
