import AddPerson from '../components/forms/AddPerson';
import AddCar from '../components/forms/AddCar';
import People from '../components/list/People';
const Home = ()=>{
return(
    <>
<AddPerson />
<AddCar />
<People showPage={false} />
    </>
)

}
export default Home;