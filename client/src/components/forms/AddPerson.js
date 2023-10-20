import {Form, Input, Typography, Button} from 'antd'
import { useEffect, useState } from 'react'
const {Title} = Typography;
const AddPerson = ()=>{
    const [form] = Form.useForm()
    const [, forceUpdate] = useState()

    useEffect(() => {
        forceUpdate({})
      }, [])
    return (
    <>
    <Title level={3} style={{marginBottom:20}}>Add Person</Title>
    <Form
    name="add-person"
    layout='inline'
    size='large'
    style={{justifyContent:"center",marginBottom:'40px'}}
    form={form}>
        <Form.Item
        name='firstName'
        rules={[{ required: true, message: 'Please Enter First Name' }]}
        label ='First Name'
      >
        <Input placeholder='First Name' />
      </Form.Item>
      <Form.Item name='lastName' rules={[{ required: true, message: 'Please Enter Last Name' }]}
      label ='Last Name'
      >
        <Input placeholder='Last Name' />
      </Form.Item>

      <Form.Item shouldUpdate={true}>
        {() => (
          <Button
            type='primary'
            htmlType='submit'
            disabled={
              !form.isFieldsTouched(true) ||
              form.getFieldsError().filter(({ errors }) => errors.length).length
            }
          >
            Add Person
          </Button>
        )}
          </Form.Item>
    </Form>
    </>
    )
}
export default AddPerson