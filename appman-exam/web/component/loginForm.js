import React from "react";
import { Button, Label } from "semantic-ui-react";
import { Form } from "formsy-semantic-ui-react";
const RegisterForm = props => {
  return (
    <div className="container fluid ">
      <Form.Input
        fluid
        name="email"
        label={"อีเมลล์"}
        placeholder="อีเมลล์"
        required
        errorLabel={<Label color="red" pointing />}
        validationErrors={{
          isDefaultRequiredValue: "โปรดระบุอีเมลล์"
        }}
        onChange={e => props.handleOnChange("email", e.target.value)}
      />
      <Form.Input
        fluid
        name="password"
        label="รหัสผ่าน"
        placeholder="รหัสผ่าน"
        type="password"
        required
        errorLabel={<Label color="red" pointing />}
        validationErrors={{
          isDefaultRequiredValue: "โปรดระบุรหัสผ่าน"
        }}
        onChange={e => props.handleOnChange("password", e.target.value)}
      />
      <center>
      <Button className="submitBtn">เข้าสู่ระบบ</Button>
      </center>
    </div>
  );
};

export default RegisterForm;
