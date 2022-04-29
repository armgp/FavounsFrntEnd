const Favoun = (props) => {
    return(
       <div class="h-64 w-56 rounded-lg border-2 border-black hover:border-y-4">
           <div class="flex flex-col items-center">
               <div class="py-6 text-xl font-extrabold">{props.name}</div>
               <div class="px-6 font-mono text-sm font-semibold">{props.description}</div>
               <button>
               <div class="my-7 p-1 rounded-2xl w-28 h-10 border hover:border-x-4 border-x-2 border-black font-extrabold">{props.price} oweins</div>
               </button>
           </div>
           </div>
    );
}

export default Favoun;
