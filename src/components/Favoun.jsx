const Favoun = (props) => {
    return (
        <div class="flex h-64 w-56 flex-col items-center rounded-lg border-2 border-black hover:border-y-4">
            <div class="py-6 text-xl font-extrabold">{props.name}</div>
            <div class="h-48 overflow-auto scrollbar-hide">
                <div class="px-6 font-mono text-sm font-semibold">{props.description}</div>
            </div>
            <button>
                <div class="my-7 h-10 w-28 rounded-2xl border border-x-2 border-black p-1 font-extrabold hover:border-x-4">{props.price} oweins</div>
            </button>
        </div>


    );
}

export default Favoun;
