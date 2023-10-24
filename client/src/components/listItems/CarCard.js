import { Card } from "antd";
import { EditOutlined } from "@ant-design/icons";
import DeleteCar from "../buttons/DeleteCar";


const CarCard = ({id,make,model,personId,price,year})=>{
     const formattedPrice = price.toLocaleString()
    
    const symbol = "->$"

    const handleButtonClick = ()=>{

    }
    return(
        <Card type="inner"
        actions={[
            <EditOutlined key="edit" onClick={handleButtonClick}/>,
            <DeleteCar id={id} personId={personId}/>
           ]}> 
    {year} {make} {model} {symbol} {formattedPrice}
        </Card>
    )

}

export default CarCard