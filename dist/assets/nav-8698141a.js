const e=document.querySelector("#navbar"),o=()=>{e.innerHTML=`
    <div class="flex justify-between items-center h-20 px-4 max-w-7xl mx-auto">
      <h1 class="text-2xl font-bold text-indigo-700 dark:text-indigo-300">ContactList</h1>
     <div class="flex gap-4">
      
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 dark:text-zinc-50 md:hidden cursor-pointer">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
      <div class="hidden md:flex gap-4">
        <a href="/signup/" class="bg-indigo-700 dark:bg-indigo-300 text-white dark:text-zinc-700 uppercase font-bold px-4 py-2 rounded-lg hover:bg-indigo-800 dark:hover:bg-indigo-200 transition-all ">Registro</a>
        <a href="/login/" class=" text-zinc-700 dark:text-zinc-50 uppercase font-bold px-4 py-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-all ">Login</a>
      </div>
     </div>
     <div class="bg-zinc-100 dark:bg-zinc-700  pt-4 px-4 fixed h-screen top-20 bottom-0 -right-12 transition-all">
     <div class="gap-4 flex-col text-center hidden">
       <a href="/signup/" class="bg-indigo-700 dark:bg-indigo-300 text-white dark:text-zinc-700 uppercase font-bold px-4 py-2 rounded-lg hover:bg-indigo-800 dark:hover:bg-indigo-200 transition-all ">Registro</a>
       <a href="/login/" class=" text-zinc-700 dark:text-zinc-50 uppercase font-bold px-4 py-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-all ">Login</a>
     </div>
    </div>
    </div>
   `},s=()=>{e.innerHTML=`
      <div class="flex justify-between items-center h-20 px-4 max-w-7xl mx-auto">
        <h1 class="text-2xl font-bold text-indigo-700 dark:text-indigo-300">ContactList</h1>
       <div class="flex gap-4">
        
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 dark:text-zinc-50 md:hidden cursor-pointer">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        <div class="hidden md:flex gap-4">
          <a href="/login/" class=" text-zinc-700 dark:text-zinc-50 uppercase font-bold px-4 py-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-all ">Login</a>
        </div>
       </div>
       <div class="bg-zinc-100 dark:bg-zinc-700 pt-4 px-4 fixed h-screen top-20 bottom-0 -right-12 transition-all">
       <div class="gap-4 flex-col text-center hidden">
         <a href="/login/" class=" text-zinc-700 dark:text-zinc-50 uppercase font-bold px-4 py-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-all ">Login</a>
       </div>
      </div>
      </div>
     `},a=()=>{e.innerHTML=`
        <div class="flex justify-between items-center h-20 px-4 max-w-7xl mx-auto">
          <h1 class="text-2xl font-bold text-indigo-700 dark:text-indigo-300">ContactList</h1>
         <div class="flex gap-4">
          
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 dark:text-zinc-50 md:hidden cursor-pointer">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          <div class="hidden md:flex gap-4">
            <a href="/signup/" class=" text-zinc-700 dark:text-zinc-50 uppercase font-bold px-4 py-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-all ">Registro</a>
          </div>
         </div>
         <div class="bg-zinc-100 dark:bg-zinc-700 pt-4 px-4 fixed h-screen top-20 bottom-0 -right-12 transition-all">
         <div class="gap-4 flex-col text-center hidden">
           <a href="/signup/" class=" text-zinc-700 dark:text-zinc-50 uppercase font-bold px-4 py-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-all ">Registro</a>
         </div>
        </div>
        </div>
       `},r=()=>{e.innerHTML=`
        <div class="flex justify-between items-center h-20 px-4 max-w-7xl mx-auto">
          <h1 class="text-2xl font-bold text-indigo-700 dark:text-indigo-300">ContactList</h1>
         <div class="flex gap-4">
          
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 s dark:text-zinc-50 md:hidden cursor-pointer">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          <div class="hidden md:flex gap-4">
            <button id="close-btn" class=" text-zinc-700 dark:text-zinc-50 uppercase font-bold px-4 py-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-all ">Cerrar Sesion</button>
          </div>
         </div>
         <div class="bg-zinc-100 dark:bg-zinc-700 pt-4 px-4 fixed h-screen top-20 bottom-0 -right-12 transition-all">
         <div class="gap-4 flex-col text-center hidden">
           <button id="close-btn" class=" text-zinc-700 dark:text-zinc-50 uppercase font-bold px-4 py-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-all ">Cerrar Sesion</button>
         </div>
        </div>
        </div>
       `};window.location.pathname==="/"?o():window.location.pathname==="/signup/"?s():window.location.pathname==="/login/"?a():window.location.pathname==="/todos/"&&r();const d=e.children[0].children[1].children[0];d.addEventListener("click",i=>{const t=i.target.parentElement.parentElement.children[2],n=t.children[0];t.classList.contains("-right-12")?(t.classList.remove("-right-12","w-0"),t.classList.add("right-0","w-3/4"),n.classList.remove("hidden"),n.classList.add("flex")):(t.classList.add("-right-12","w-0"),t.classList.remove("right-0","w-3/4"),n.classList.add("hidden"),n.classList.remove("flex"))});const l=e.children[0].children[1];l.addEventListener("click",async i=>{if(i.target.classList.contains("rounded-lg"))try{await axios.get("http://localhost:3004/api/logout",{withCredentials:!0}),window.location.pathname="/login"}catch(t){console.log(t)}});const c=e.children[0].children[2].children[0].children[0];c.addEventListener("click",async i=>{try{await axios.get("api/logout"),window.location.pathname="/login"}catch(t){console.log(t)}});
