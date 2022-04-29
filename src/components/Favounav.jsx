import Favoun from './Favoun'
import api from '../api/favouns'
import {useState, useEffect} from 'react'

const Favounav = () => {

    const [favouns, setFavouns] = useState([]);

    //check fetch vs axios??
    useEffect(() => {
        const fetchFavouns = async () => {
            try{
                const response = await api.get('/favouns');
                setFavouns(response.data);
                console.log(favouns);
            }catch(err){
                if(err.response){
                    console.log(err.response.status);
                }else{
                    console.log(`Error: ${err.message}`);
                }
            }
        } 
        fetchFavouns();
    }, []);

    return(
        <div className="m-10 grid grid-cols-1 place-items-center gap-y-20 border-2 border-slate-900 rounded-3xl py-10 sm:grid-cols-2 md:grid-cols-3 lg:mx-24 lg:grid-cols-4">
           <Favoun name={favouns[0].name} description={favouns[0].description} price={favouns[0].price}/>
        </div>
    );
}

export default Favounav;