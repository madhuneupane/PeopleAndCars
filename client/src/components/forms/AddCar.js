import {Form, Input, Typography, Button} from 'antd'
import { useEffect, useState } from 'react'
const {Title} = Typography;
const AddCar = ()=>{
    const [form] = Form.useForm()
    const [, forceUpdate] = useState()

    useEffect(() => {
        forceUpdate({})
      }, [])
    return (
    <>
    <Title level={3} style={{marginBottom:20}}>Add Car</Title>
    <Form
    name="add-person"
    layout='inline'
    size='large'
    style={{justifyContent:"center",marginBottom:'40px'}}
    form={form}>
        <Form.Item
        name='Year'
        rules={[{ required: true, message: 'Please Enter Year' }]}
        label ='Year'
      >
        <Input placeholder='Year' />
      </Form.Item>
      <Form.Item name='Make' rules={[{ required: true, message: 'Please Enter Make' }]}
      label ='Make'
      >
        <Input placeholder='Make' />
      </Form.Item>

      <Form.Item name='Model' rules={[{ required: true, message: 'Please Enter Model' }]}
      label ='Model'
      >
        <Input placeholder='Model' />
      </Form.Item>

      <Form.Item name='Price' rules={[{ required: true, message: 'Please Enter Price' }]}
      label ='Price'
      >
        <Input prefix="$" />
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
export default AddCar