import { Card } from "antd";

const CarCard = ({id,make,model,personId,price,year})=>{
     const formattedPrice = price.toLocaleString()
    
    const symbol = "->$"
    return(
        <Card type="inner"> 
    {year} {make} {model} {symbol} {formattedPrice}
        </Card>
    )

}

export default CarCard