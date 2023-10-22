import { Card } from "antd"
import { GET_PERSON_WITH_CARS } from "../../graphql/queries";

const PersonCard = (props)=>{
  const styles = getStyles()
  const {id, firstName, lastName} =  props;
   
return(
    <Card style={styles.card}>
        {firstName} {lastName}
        <Card >
        
        
    </Card>
    </Card>
)
}
export default PersonCard
const getStyles = () => ({
  card: {
    width: '500px'
  }
})
