import React from "react";
import ReactDOM from "react-dom";
// import "antd/dist/antd.css";
// import "./index.css";
import { Select } from "antd";


import Form from 'react-bootstrap/Form';




import SweetAlert from "react-bootstrap-sweetalert";

const NEW_ITEM = "NEW_ITEM";

const Option = Select.Option;

const list1Options = ["option-1", "option-2", "option-3"];

export default class InputSelect extends React.Component {
  state = {
    list1Value: "",

    showList1: false,

    list1Options: list1Options
  };

  onChangeList1 = (value) => {
    if (value !== NEW_ITEM) {
      this.setState({ list1Value: value });
    } else {
      this.setState({ showList1: true });
    }
  };

  onConfirm = (inputValue) => {
    inputValue = inputValue.trim();
    if (this.state.list1Options.includes(inputValue)) {
      this.setState({
        showList1: false,
        list1Value: inputValue
      });
    } else {
      this.setState({
        showList1: false,
        list1Options: [inputValue, ...this.state.list1Options],
        list1Value: inputValue
      });
    }
  };

  render() {
    const { list1Value } = this.state;

    const list1SelectOptions = this.state.list1Options.map((o) => (
      <Option key={o}>{o}</Option>
    ));

    return (
      <div>

<Form.Group className="mb-3 input__style" controlId="exampleForm.ControlInput1">
    <Form.Label> Ваше образование</Form.Label>
        <Select 
          value={list1Value}
          style={{ width: 420 }}
          onChange={this.onChangeList1}
        >
          {list1SelectOptions}
          <Option value={NEW_ITEM}>+ New Item</Option>
        </Select>

</Form.Group>
        

        <SweetAlert
          show={this.state.showList1}
          title="Add New System Name"
          text="Enter new System Name"
          showCancelButton
          type="input"
          inputPlaceholder="Enter System Name"
          animation="slide-from-top"
          validationMsg="Please enter a response!"
          onConfirm={(inputValue) => {
            inputValue = inputValue.trim();
            if (this.state.list1Options.includes(inputValue)) {
              this.setState({
                showList1: false,
                list1Value: inputValue
              });
            } else {
              this.setState({
                showList1: false,
                list1Options: [inputValue, ...this.state.list1Options],
                list1Value: inputValue
              });
            }
          }}
          onCancel={() => {
            this.setState({ showList1: false });
          }}
          onEscapeKey={() => this.setState({ showList1: false })}
          onOutsideClick={() => this.setState({ showList1: false })}
        />
      </div>
    );
  }
}


