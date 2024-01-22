import "./styles.css";
import arrow from "../img/arrow.svg"
function Email(){
return(
<section class="min-h-screen flex items-center justify-center font-bold bg-[#fbe9dc]">
    <div class= " border shadow-2xl shadow-black py-10 px-6 rounded-2xl bg-[#e5dee0]">
        <div class="px-16 ">
            
            <h2 class="font-serif font-semibold text-3xl translate-x-6 text-red-800">BloodBond</h2>
            <h2 class="text-1xl mt-3 font-semibold -translate-x-14 ">Create a BloodBond Account</h2>
            <p class="text-sm font-medium -translate-x-14">signup and let's embarace the journey
                <br/> ahead together..</p>
            </div>
            
            
            
        
        <div> 
            <form action class="flex flex-col">
                <p class="font-semibold mt-4 py-2 mx-2">Enter Your Email</p>
                <input class="py-2 px-2 w-full rounded-xl placeholder-gray-500 placeholder-animate border border-blue-300 font-semibold"
                type="text"
                name="email"
                placeholder="abcd@gmail.com"
                required
                />
            </form>
        </div>
            

            <div class="flex justify-end">
            <button class=" mt-6 w-full  text-sm text-white px-6 py-2 border rounded-xl border-blue-300  bg-red-500 hover:bg-red-800">Signup</button>
            </div>
            <div>
                <button class="border -translate-y-72 border-blue-900 rounded-xl"><img src={arrow}/></button>
            </div>
            <p class="mt-4 text-center text-sm font-bold text-gray-500">
        already have an account?_ 
        <a
        href="#"
        class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
        >
        <button class="text-sm  font-bold">Signin</button>
        </a>
        </p>
            
        </div>
    

    

    
</section>

);
}
export default Email;