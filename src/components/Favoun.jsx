import api from '../api/favouns'
import { useLocalState } from '../utils/useLocalStorage';

const Favoun = (props) => {

    const [jwt, setJwt] = useLocalState("", "jwt");

    const buyFavoun = async () => {
        const URL = `/buyfavoun/${props.id}`;
        api.put(URL, { headers: { Authorization: `Bearer ${jwt}` } })
        .then(response => {
            console.log(response);
        })
        .catch((error) => {
            if(error.response) console.log(error.response);
            else console.log(`Error: ${error.message}`);
        });
        // console.log(props.id);
    }

    return (
        <div class="flex h-64 w-56 px-1 flex-col items-center rounded-lg border-2 border-black hover:border-y-4">
            <div class="py-6 text-lg font-extrabold">{props.name}</div>
            <div class="h-48 overflow-auto scrollbar-hide">
                <div class="px-6 font-mono text-sm font-semibold">{props.description}</div>
            </div>
            <button onClick={buyFavoun}>
                <div class="bg-gray-200 my-7 h-10 w-28 rounded-2xl border border-x-2 border-black p-1 font-extrabold hover:bg-black hover:text-white">{props.price} oweins</div>
            </button>
        </div>
    );
}

export default Favoun;
