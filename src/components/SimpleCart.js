import React, { Component } from "react";
import { Input, Button, Checkbox } from "antd";
import './SimpleCart.css'
export default class SimpleCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addName: "",
      addPrice: "",
      productList: [],
    };
  }
  changeProductInput = (e) => {
    this.setState({
      addName: e.target.value,
    });
  };
  changePriceInput = (e) => {
    this.setState({
      addPrice: e.target.value,
    });
  };
  addProduct = (e) => {
    const { addName, addPrice } = this.state;
    const productList = [...this.state.productList];
    productList.push({
      productName: addName,
      productPrice: addPrice,
      count: 1,
      countAll: addPrice,
    });
    console.log(productList);
    this.setState({
      productList,
    });
  };
  removeProduct = (index) => {
    const productList = this.state.productList.filter(
      (item, innerIndex) => innerIndex !== index
    );
    this.setState({
      productList,
    });
  };
  subCount = (index) => {
    this.setState(
      {
        productList: this.state.productList.map((item, innerIndex) => {
          if (innerIndex !== index) {
            return item;
          } else {
            item.count = item.count >= 1 ? --item.count : 0;
            return item;
          }
        }),
      },
      () => {
        this.newCountAll(index);
      }
    );
  };
  addCount = (index) => {
    this.setState(
      {
        productList: this.state.productList.map((item, innerIndex) => {
          if (innerIndex !== index) {
            return item;
          } else {
            item.count++;
            return item;
          }
        }),
      },
      () => {
        this.newCountAll(index);
      }
    );
  };
  newCountAll = (index) => {
    this.setState({
      productList: this.state.productList.map((item, innerIndex) => {
        if (innerIndex !== index) {
          return item;
        } else {
          item.countAll = item.count * item.productPrice;
          return item;
        }
      }),
    });
  };
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>
              <label>???????????????</label>
            </th>
            <th>
              <Input
                placeholder="?????????????????????"
                onChange={this.changeProductInput}
              />
            </th>
            <th>
              <label>??????</label>
            </th>
            <th>
              <Input
                prefix="???"
                suffix="RMB"
                placeholder="?????????????????????"
                onChange={this.changePriceInput}
              />
            </th>
            <th>
              <Button onClick={this.addProduct}>??????</Button>
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Checkbox />
            </td>
            <td>?????????</td>
            <td>??????</td>
            <td align="center">??????</td>
            <td>??????</td>
            <td>??????</td>
          </tr>
          {this.state.productList.map((item, index) => (
            <tr key={index}>
              <td>
                <Checkbox />
              </td>
              <td>{item.productName}</td>
              <td>{item.productPrice}</td>
              <td>
                <Button onClick={this.subCount.bind(this, index)}>-</Button>
                {item.count}
                <Button onClick={this.addCount.bind(this, index)}>+</Button>
              </td>
              <td>{item.countAll}</td>
              <td>
                <Button onClick={this.removeProduct.bind(this, index)}>
                  ??????
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
