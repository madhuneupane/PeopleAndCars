import { Card } from "antd"
import Car from "../list/Car";


const PersonCard = (props)=>{
  const styles = getStyles()
  const {id, firstName, lastName} =  props;

return(
    <Card style={styles.card}>
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
