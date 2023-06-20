import"./modulepreload-polyfill-3cfb730f.js";import"./nav-8698141a.js";const r=document.querySelector("input"),s=document.querySelector("ul");document.querySelector(".add-btn");const i=document.querySelector(".invalid-check"),l=document.querySelector("#form"),c=document.querySelector(".total-count"),a=document.querySelector(".completed-count"),d=document.querySelector(".incompleted-count"),u=()=>{const t=document.querySelector("ul").children.length;c.innerHTML=t},h=()=>{const t=document.querySelectorAll(".line-through").length;a.innerHTML=t},g=()=>{const t=document.querySelectorAll("ul li:not(.line-through)").length;d.textContent=t},n=()=>{u(),h(),g()};l.addEventListener("submit",async t=>{if(t.preventDefault(),r.value===""){r.classList.remove("focus:ring-2","focus:ring-violet-600"),r.classList.add("focus:ring-2","focus:ring-rose-600"),i.classList.remove("hidden");return}r.classList.remove("focus:ring-2","focus:ring-rose-600","border-2","border-rose-600"),r.classList.add("focus:ring-2","focus:ring-violet-600"),i.classList.add("hidden");const{data:o}=await axios.post("/api/todos",{text:r.value}),e=document.createElement("li");e.id=o.id,e.classList.add("flex","flex-row"),e.innerHTML=`
		<div class="group grow flex flex-row justify-between">
			<button class="delete-icon w-12 md:w-14 hidden group-hover:flex group-hover:justify-center group-hover:items-center cursor-pointer bg-red-500 origin-left">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 md:h-7 md:w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
					<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
				</svg>
			</button>
			<p class="p-4 break-words grow">${o.text}</p>
		</div>
		<button class="check-icon w-12 md:w-14 flex justify-center items-center cursor-pointer border-l border-slate-300 dark:border-slate-400 hover:bg-green-300 transition duration-300 easy-in-out">
			<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 md:h-7 md:w-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
				<path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
			</svg>
		</button>
	`,s.append(e),r.value="",n()});s.addEventListener("click",async t=>{if(t.target.closest(".delete-icon")){const o=t.target.closest(".delete-icon").parentElement.parentElement;await axios.delete(`/api/todos/${o.id}`),o.remove(),n()}if(t.target.closest(".check-icon")){const o=t.target.closest(".check-icon"),e=o.parentElement;e.classList.contains("line-through")?(await axios.patch(`/api/todos/${e.id}`,{checked:!1}),o.classList.remove("bg-green-400"),o.classList.add("hover:bg-green-300"),e.classList.remove("line-through","text-slate-400","dark:text-slate-600")):(await axios.patch(`/api/todos/${e.id}`,{checked:!0}),o.classList.add("bg-green-400"),o.classList.remove("hover:bg-green-300"),e.classList.add("line-through","text-slate-400","dark:text-slate-600"))}});(async()=>{try{const{data:t}=await axios.get("/api/todos",{withCredentials:!0});t.forEach(o=>{const e=document.createElement("li");e.id=o.id,e.classList.add("flex","flex-row"),e.innerHTML=`
				<div class="group grow flex flex-row justify-between">
					<button class="delete-icon w-12 md:w-14 hidden group-hover:flex group-hover:justify-center group-hover:items-center cursor-pointer bg-red-500 origin-left">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 md:h-7 md:w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
							<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
					<p class="p-4 break-words grow">${o.text}</p>
				</div>
				<button class="check-icon w-12 md:w-14 flex justify-center items-center cursor-pointer border-l border-slate-300 dark:border-slate-400 hover:bg-green-300 transition duration-300 easy-in-out">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 md:h-7 md:w-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
					</svg>
				</button>
			`,o.checked?(e.children[1].classList.add("bg-green-400"),e.children[1].classList.remove("hover:bg-green-300"),e.classList.add("line-through","text-slate-400","dark:text-slate-600")):(e.children[1].classList.remove("bg-green-400"),e.children[1].classList.add("hover:bg-green-300"),e.classList.remove("line-through","text-slate-400","dark:text-slate-600")),s.append(e)}),n()}catch{window.location.pathname="/login/"}})();
