import {Form, Input, Typography, Button, Select} from 'antd'
import { useEffect, useState } from 'react'
import { GET_PEOPLE } from '../../graphql/queries';
import {useQuery} from '@apollo/client'

const {Title} = Typography;
const AddCar = ()=>{
    const [form] = Form.useForm()
    const [, forceUpdate] = useState()
	const { Option } = Select;
  useEffect(() => {
    forceUpdate({})
  }, [])

    const {loading,error,data} = useQuery(GET_PEOPLE)
    if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`


   
    return (
    <>
    <Title level={3} style={{marginBottom:20}}>Add Car</Title>
    <Form
    name="add-car"
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

      <Form.Item name='Person' rules={[{ required: true, message: 'Please Select Person' }]}
      label ='Person'
      >
        <Select style={{ width: 200 }} placeholder='Select a Person'>
						{
							data.people.map(({ id, firstName, lastName }) => (
								<Option key={id} value={id}>
									{firstName} {lastName}
								</Option>
							))}
					</Select>
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
            Add Car
          </Button>
        )}
          </Form.Item>
    </Form>
    </>
    )
}
export default AddCar