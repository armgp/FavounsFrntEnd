const Navbar = () => {
    return (
        <header class="mx-24 my-5 border-2 border-slate-900 rounded-3xl">
            <div class="max-w-screen-xl p-4 mx-auto">
                <div class="flex items-center justify-between space-x-4 lg:space-x-10">
                    <div class="flex lg:w-0 lg:flex-1">
                        <span class="w-12 h-12 bg-gray-200 rounded-lg border-2 border-black"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAAjElEQVRoge3XQQqAMAwAwSj+/1Pqu+rVi5hIrQvugCcFu1SKiZA+t0dEG3yt2cVNhZBWeLan1Brnt1cxiiE0htDQQ9LH79L5xZXjvCv6jqQZQmMIjSE0htAYcmHoeHtGHXXL/2x+WjSG0BBDHp1aTog0htAYQmMIjSE0htAYQmMIzS9Dtpv7jyY7Ce4AMGE0hs2u+BwAAAAASUVORK5CYII=" /></span>
                    </div>



                    <div class="items-center justify-end flex-1 hidden space-x-4 sm:flex">
                        <button
                            class="border-2 border-black px-5 py-2 text-sm font-medium text-gray-500 bg-gray-100 rounded-lg"
                            href=""
                        >
                            Log in
                        </button>

                        <button
                            class="border-2 border-black px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg"
                            href=""
                        >
                            Sign up
                        </button>
                    </div>

                    <div class="lg:hidden">
                        <button class="p-2 border-2 border-black text-gray-600 bg-gray-100 rounded-lg" type="button">
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