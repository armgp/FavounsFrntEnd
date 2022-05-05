import Favoun from './Favoun'
import api from '../api/favouns'
import React, { useState, useEffect } from 'react'

const Favounav = () => {

    const [favouns, setFavouns] = useState([]);

    const fetchFavouns = async () => {
        try {
            const response = await api.get('/favouns');
            setFavouns(response.data);
        } catch (err) {
            if (err.response) {
                console.log(err.response.status);
            } else {
                console.log(`Error: ${err.message}`);
            }
        }
        console.log("called function fetchFavouns()");
    }

    //check fetch vs axios??
    useEffect(() => {
        fetchFavouns();
    }, []);

    return (
        <div className="m-10 grid grid-cols-1 place-items-center gap-y-20 border-2 border-slate-900 rounded-3xl py-10 sm:grid-cols-2 md:grid-cols-3 lg:mx-24 lg:grid-cols-4">
            {favouns.length > 0 ? favouns.map((favoun) =>
                <Favoun key={favoun.favId} name={favoun.name} description={favoun.description} price={favoun.price} />
            ) : console.log("favouns empty")}
        </div>
    );
}

export default Favounav;