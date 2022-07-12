import { Link } from 'react-router-dom';
import { useLocalState } from '../utils/useLocalStorage';
import { Dropdown } from '.';

const Navbar = () => {
    const [jwt, setJwt] = useLocalState("", "jwt");

    const loginOrOut = () =>{
        if(jwt==""){
            window.location.href = "/login";
        }else{
            setJwt("");
            window.location.href = "/login";
        }
    }

    return (
        <header class="mx-24 my-5 border-2 border-slate-900 rounded-3xl">
            <div class="max-w-screen-xl p-4 mx-auto">
                <div class="flex items-center justify-between space-x-4 lg:space-x-10">
                    <Link to={"/"} class="flex lg:w-0 lg:flex-1">
                        <span class="w-12 h-12 bg-gray-200 rounded-lg border-2 border-black"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAAjElEQVRoge3XQQqAMAwAwSj+/1Pqu+rVi5hIrQvugCcFu1SKiZA+t0dEG3yt2cVNhZBWeLan1Brnt1cxiiE0htDQQ9LH79L5xZXjvCv6jqQZQmMIjSE0htAYcmHoeHtGHXXL/2x+WjSG0BBDHp1aTog0htAYQmMIjSE0htAYQmMIzS9Dtpv7jyY7Ce4AMGE0hs2u+BwAAAAASUVORK5CYII=" /></span>
                    </Link>


                    <div class="items-center justify-end flex-1 hidden space-x-4 sm:flex">
                        

                        {jwt == "" ? 
                        <button to={"/login"}
                            class="border-2 border-black px-5 py-2 text-sm font-medium hover:text-white hover:bg-black text-black bg-gray-100 rounded-lg"
                            onClick={loginOrOut}
                        >
                            Login
                        </button>

                         : <Dropdown name="Divya" opt1="Account" opt2="Store" opt2link="/store" opt3="Support" opt4="Logout" opt4function={loginOrOut}/>}

                        {jwt == "" ? 
                        <Link to={"signup"}
                            class="border-2 border-black px-5 py-2 text-sm font-medium hover:text-black hover:bg-gray-100 text-white bg-black rounded-lg"
                            href=""
                        >
                            Sign up
                        </Link>

                         : <div class="flex h-12 w-32 rounded-3xl border-2 border-black p-2">
                         <div class="ml-3 font-extrabold">100</div>
                         <div class="ml-2 font-extrabold  text-gray-600">oweins</div>
                     </div>}

                        
                        
                    </div>

                    <div class="lg:hidden">
                        <button class="p-2 border-2 border-black text-black bg-gray-100 rounded-lg" type="button">
                            <span class="sr-only">Open menu</span>
                            <svg
                                aria-hidden="true"
                                class="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewbox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M4 6h16M4 12h16M4 18h16"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;