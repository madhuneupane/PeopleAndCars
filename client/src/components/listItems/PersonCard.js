import { Card } from "antd"

const PersonCard = (props)=>{
  const styles = getStyles()
  const {id, firstName, lastName} =  props;
   
return(
    <Card style={styles.card}>
        {firstName} {lastName}
    </Card>
)
}
export default PersonCard
const getStyles = () => ({
  card: {
    width: '500px'
  }
})
