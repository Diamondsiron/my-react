import React, { useState, Component } from "react";

// export default function kCreateForm(Cmp) {
//   return class extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {};
//       this.options = {};
//     }
//     handleChange = event => {
//       const { name, value } = event.target;
//       this.setState({
//         [name]: value,
//       });
//     };
//     getFieldDecorator = (field, option) => {
//       this.options[field] = option;
//       return InputCmp => {
//         return (
//           <>
//             {React.cloneElement(InputCmp, {
//               name: field,
//               value: this.state[field] || "",
//               onChange: this.handleChange,
//             })}
//           </>
//         );
//       };
//     };
//     getFieldsValue = () => {
//       return { ...this.state };
//     };
//     getFieldValue = field => {
//       return this.state[field];
//     };
//     validateFields = callback => {
//       const res = { ...this.state };
//       const err = [];
//       for (let item in this.options) {
//         if (res[item] === undefined) {
//           err.push({ [item]: "error" });
//         }
//       }
//       if (err.length) {
//         callback(err, { ...res });
//       } else {
//         callback(undefined, { ...res });
//       }
//     };
//     render() {
//       return (
//         <Cmp
//           {...this.props}
//           getFieldDecorator={this.getFieldDecorator}
//           getFieldsValue={this.getFieldsValue}
//           getFieldValue={this.getFieldValue}
//           validateFields={this.validateFields}
//         />
//       );
//     }
//   };
// }

const kCreateForm = Cmp => props => {
  const [state, setState] = useState({});
  const options = {};
  //处理input的change事件
  const handleChange = event => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
    // this.setState({
    //   [name]: value,
    // });
  };
  //处理input的高阶组件
  const getFieldDecorator = (field, option) => {
    options[field] = option;
    return InputCmp => {
      return (
        <>
          {React.cloneElement(InputCmp, {
            name: field,
            value: state[field] || "",
            onChange: handleChange,
          })}
        </>
      );
    };
  };
  //得到所有的value
  const getFieldsValue = () => {
    return { ...state };
  };
  //得到key为field的value
  const getFieldValue = field => {
    return state[field];
  };
  //校验
  const validateFields = callback => {
    const res = { ...state };
    const err = [];
    for (let item in options) {
      if (res[item] === undefined) {
        err.push({ [item]: "error" });
      }
    }
    if (err.length) {
      callback(err, { ...res });
    } else {
      callback(undefined, { ...res });
    }
  };
  return (
    <Cmp
      {...props}
      getFieldDecorator={getFieldDecorator}
      getFieldsValue={getFieldsValue}
      getFieldValue={getFieldValue}
      validateFields={validateFields}
    />
  );
};

export default kCreateForm;
