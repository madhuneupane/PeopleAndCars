import { Card } from "antd";
import { GET_PERSON_WITH_CARS } from "../../graphql/queries";
import {useQuery} from '@apollo/client'
import CarCard from "../listItems/CarCard";

const Car = ({id})=>{
    const {loading,error,data} = useQuery(GET_PERSON_WITH_CARS, {
		variables: { personWithCarsId: id },
	})
    if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`
return(
    <>
    
        {data.personWithCars.cars.map(({id,make,model,personId,price,year})=>(
          <CarCard 
          key={id}
          id= {id}
          make={make}
          model={model}
          personId={personId}
          price={price}
          year={year}
          />
          
        )

        )}
    
    </>
)
}

export default Car;