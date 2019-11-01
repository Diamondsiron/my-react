import React from 'react'
import kCreateForm from '../../components/kCreateForm'

const nameRules = {require:true, message:'name'}
const passwordRules = {require:true, message:'password'}

@kCreateForm
class MyFormPage extends React.Component {
    submit = () => {
        const { getFieldsValue, getFieldValue, validateFields } = this.props;
        validateFields((err, values) => {
          if (err) {
            console.log("err", err);
          } else {
            console.log("ok", values);
          }
        });
        // console.log("submit", getFieldsValue(), getFieldValue("name"));
      };
    
    render() {
        const { getFieldDecorator } = this.props;
        console.log("props", this.props);
        return (
          <div>
            <h1>MyFormPage</h1>
            {getFieldDecorator("name", nameRules)(<input placeholder="name" />)}
            {getFieldDecorator("password", passwordRules)(
              <input type="password" placeholder="password" />,
            )}
            <button onClick={this.submit}>submit</button>
          </div>
        );
      }
}

export default MyFormPage