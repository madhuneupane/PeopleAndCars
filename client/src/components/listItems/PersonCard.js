import { Card } from "antd"
import Car from "../list/Car";
import DeletePerson from "../buttons/DeletePerson";


const PersonCard = (props)=>{
  const styles = getStyles()
  const {id, firstName, lastName} =  props;

return(
    <Card style={styles.card}
     actions={[
      <DeletePerson id={id}/>
     ]}
    >
        {firstName} {lastName}
      <Car
      id={id}/>
    </Card>
)
}
export default PersonCard
const getStyles = () => ({
  card: {
    width: '500px'
  }
})
