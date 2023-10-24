import { useState } from "react";
import { Card } from "antd"
import Car from "../list/Car";
import DeletePerson from "../buttons/DeletePerson";
import { EditOutlined } from "@ant-design/icons";
import UpdatePerson from "../forms/UpdatePerson";


const PersonCard = (props)=>{
  const [editMode, setEditMode] = useState(false)
  const styles = getStyles()
  const {id, firstName, lastName} =  props;

  const handleButtonClick = ()=>{
    setEditMode(!editMode)
  }

return(
  <div>
    {editMode ?
    <UpdatePerson id={id} firstName={firstName} lastName={lastName} onButtonClick = {handleButtonClick}/>
    :
    <Card style={styles.card}
     actions={[
      <EditOutlined key="edit" onClick={handleButtonClick}/>,
      <DeletePerson id={id}/>
     ]}
    >
        {firstName} {lastName}
      <Car
      id={id}/>
    </Card>
}
    </div>
)
}
export default PersonCard
const getStyles = () => ({
  card: {
    width: '500px'
  }
})
