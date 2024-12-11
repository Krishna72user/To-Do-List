window.addEventListener("load",()=>{ //instead of document.onload
    for(const key in localStorage){
        if(localStorage.getItem(key)!=null){
            container.insertAdjacentHTML("beforeend",`<div>
                <input type="checkbox">
                <div>${localStorage.getItem(key)}</div>
               <svg class="ed" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>
                <svg class="x"xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
            </div>`)
        }
    }
})
const add = document.getElementById("ad");
const inp = document.getElementById("add")
const container = document.querySelector(".task");
add.addEventListener("click",(e)=>{
    if(inp.value==""){
        alert("Please add a task.")
    }
    else{
        localStorage.setItem(`${inp.value}`,`${inp.value}`)
        container.insertAdjacentHTML("beforeend",`<div>
            <input type="checkbox">
            <div>${inp.value}</div>
            <svg class="ed"xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>
            <svg class="x"xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
        </div>`)
        inp.value="";
    }
})
const tasklst =document.querySelector(".task")
tasklst.addEventListener("click",(e)=>{
    if(e.target.tagName==="svg"&&e.target.classList.contains("x")&& e.target.parentElement.firstElementChild.nextElementSibling.className==""){
        alert("Please complete the task.")
    }
    else if(e.target.tagName==="svg"&&e.target.classList.contains("x")&& e.target.parentElement.firstElementChild.nextElementSibling.className=="toggle"){
        localStorage.removeItem(e.target.previousElementSibling.previousElementSibling.innerText)
        e.target.parentElement.remove();
    }
    else if(e.target.tagName==="INPUT"){
        e.target.nextElementSibling.classList.toggle("toggle");
    }
    else if(e.target.tagName==="svg"&&e.target.classList.contains("ed")){
        if(e.target.previousElementSibling.className!=="toggle"){
            let x = prompt("Update the value:")
            if(x!=null&&x!=""){
                let pre=e.target.previousElementSibling.innerText;
                localStorage.removeItem(pre)
                localStorage.setItem(x,x);
                e.target.previousElementSibling.innerText=x;
            }
        }
        else{
            alert("The task is completed!")
        }
    }
})
