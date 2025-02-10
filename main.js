const wrapperWork = document.querySelector('.wrapper_work')
const workInp = document.querySelector('#work-inp');
const addWorkBtn = document.querySelector('#add-work-btn');
const numWork = document.querySelector('#num-work');
let arr = [];

addWorkBtn.addEventListener('click', () => {
  if(workInp.value === ''){
    alert("iltimos malumot kiriting")
    return
  }

    let newContent = document.createElement('div')
    newContent.classList.add('task', 'form-control', 'p-2', 'w-90', 'd-flex')
    newContent.style.justifyContent = 'space-between'
    newContent.style.alignItems = 'center'
    newContent.style.marginBottom = '10px'

    newContent.innerHTML = `
      <div class="task_content">
        <input type="checkbox">
        <label for="#">${workInp.value}</label>
      </div>
      <div class="action">
          <button id="btn-square" class="btn btn-success" onclick="changeInfo(this)"><i class="fa-solid fa-pen-to-square"></i></button>
          <button id="btn-trash" class="btn btn-danger" onclick="clearInfo(this)"><i class="fa-solid fa-trash"></i></button>
      </div>
    `;
    wrapperWork.append(newContent)
    workInp.value = ''
    arr.push(newContent);
    numWork.textContent = `${arr.length}`
})

function changeInfo(button) {
  const newText = prompt('malumotni o\'zgartirmoqchimisiz?');
    if(newText !== null && newText !== '') {
      const taskLabel = button.closest('.task').querySelector('label');
      taskLabel.textContent = newText
    }
}

function clearInfo(button) {
  const taskElement = button.closest('.task');
  taskElement.remove();
  numWork.textContent = `${arr.length}`
}













































// const workInp = document.querySelector('#work-inp');
// const addWorkBtn = document.querySelector('#add-work-btn');
// const numWork = document.querySelector('#num-work');
// const wrapperWork = document.querySelector('.wrapper_work');
// const btnbtnSquare = document.querySelector('#btn-square');
// const btnTrash = document.querySelector('#btn-trash');
// let arr = []



// function addUserInfo(){
//   if(workInp.value === '') {
//     alert('iltimos malumot kiriting')
//     return
//   }
//   let newContent = document.createElement('div')
//   newContent.innerHTML = `
//   <div class="task form-control p-2 w-90 d-flex" style="justify-content: space-between; align-items: center;">
//   <div class="task_content">
//       <input type="checkbox">
//       <label for="#">${workInp.value}</label>
//   </div>
//   <div class="action">
//       <button onclick="changeInfo()" class="btn btn-success"><i class="fa-solid fa-pen-to-square"></i></button>
//       <button onclick="clearInfo()" class="btn btn-danger"><i class="fa-solid fa-trash"></i></button>
//   </div>
//   </div>
//   `
//   wrapperWork.append(newContent)
//   newContent.style.marginBottom = '10px'
//   workInp.value = ''
// }

// function changeInfo() {
//   const newText = prompt("malumotni o'zgartirmoqchimisiz")

//   if(newText !== null && newText !== '') {
//     let newContent = document.createElement('div')
//     newContent.innerHTML = `
//     <div class="task form-control p-2 w-90 d-flex" style="justify-content: space-between; align-items: center;">
//     <div class="task_content">
//         <input type="checkbox">
//         <label for="#">${newText}</label>
//     </div>
//     <div class="action">
//         <button class="btn btn-success"><i class="fa-solid fa-pen-to-square"></i></button>
//         <button class="btn btn-danger"><i class="fa-solid fa-trash"></i></button>
//     </div>
//     </div>
//     `
//     wrapperWork.append(newContent)
//   }
// }

// function clearInfo(){
//   wrapperWork.remove()
// }