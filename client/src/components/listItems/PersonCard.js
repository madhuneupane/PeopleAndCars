import { useState } from "react";
import { Card } from "antd"
import Car from "../list/Car";
import DeletePerson from "../buttons/DeletePerson";
import { EditOutlined } from "@ant-design/icons";
import UpdatePerson from "../forms/UpdatePerson";
import {Link} from 'react-router-dom'


const PersonCard = (props)=>{
  const [editMode, setEditMode] = useState(false)
  const styles = getStyles()
  const {id, firstName, lastName,showPage} =  props;
  console.log(showPage);

  const handleButtonClick = ()=>{
    setEditMode(!editMode)
  }
  const actions = showPage ?
  [<Link to={'/'}>Go Home</Link>]:
  [
  <EditOutlined key="edit" onClick={handleButtonClick}/>,
  <DeletePerson id={id}/>
]

return(
  <div>
    {editMode ?
    <UpdatePerson id={id} firstName={firstName} lastName={lastName} onButtonClick = {handleButtonClick}/>
    :
    <>
    <Card style={styles.card}
     actions={actions}
    >
        {firstName} {lastName}
      <Car
      id={id} showPage={showPage}/>
      {!showPage&&<div>
        <Link to={`/person/${id}`}>Learn More</Link>
        </div>}
    </Card>
   
    </>
    
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
