


const categoriesContainer = document.getElementById("categoriesContainer");

async function loadCategories() {
  const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");
  const result = await res.json();

  console.log(result);
  const issues = result.data;
  categoriesContainer.innerHTML = "";
  issues.forEach(issue => {
    const div = document.createElement("div");
    // const btn = document.createElement("button");
    // btn.className = "btn btn-outline hover:bg-primary px-10"
    // categoriesContainer.appendChild(btn);
    div.innerHTML = `

    <div class="card bg-base-100 shadow-md border-t-4 border-green-500">
    <div class="card-body">

      <div class="flex justify-between items-center">
        <span class=""><img src="./assets/Open-Status.png" alt=""></span>
        <span class="badge badge-error opacity-80 px-8 rounded-3xl">HIGH</span>
      </div>

      <h2 class="font-bold text-lg">
        ${issue.title}
      </h2>

      <p class="text-gray-500 text-sm">
        ${issue.description || "No description"}
      </p>

      <div class="flex gap-2 mt-3">
        <span class="badge badge-outline badge-error">BUG</span>
        <span class="badge badge-outline badge-warning">HELP WANTED</span>
      </div>

    </div>

    <div class="border-t p-4 text-sm text-gray-500">
      #1 by john_doe <br>
      1/15/2024
    </div>
  </div>
    
    `;
    categoriesContainer.appendChild(div);
    
  });

}
loadCategories();


// const buttons = document.querySelectorAll(".btn");
// buttons.forEach(button => { 
//     button.addEventListener("click", () => {
//     buttons.forEach(btn => { 
//         btn.classList.remove("btn-primary"); });
//         button.classList.add("btn-primary"); 
//     }); 
// });






const allBtn = document.getElementById("all");
const openBtn = document.getElementById("open");
const closedBtn = document.getElementById("closed");

function removeActive(){
    allBtn.classList.remove("btn-active");
    openBtn.classList.remove("btn-active");
    closedBtn.classList.remove("btn-active");
}

allBtn.addEventListener("click", function(){
    removeActive();
    allBtn.classList.add("btn-active");
});

openBtn.addEventListener("click", function(){
    removeActive();
    openBtn.classList.add("btn-active");
});

closedBtn.addEventListener("click", function(){
    removeActive();
    closedBtn.classList.add("btn-active");
});





// const loadLevelWord = (id) => {
//     manageSpinner(true);
//     // console.log(id);
//     const url = `https://phi-lab-server.vercel.app/api/v1/lab/issue/{id}`;
//     fetch(url)
//     .then((res) => res.json()) 
//     .then((data) => {
//         removeActive(); // remove all active class
//         const clickBtn = document.getElementById(`lesson-btn-${id}`);
//         // console.log(clickBtn);
//         clickBtn.classList.add("active");
//         displayLevelWord(data.data)
//     });
// };









 