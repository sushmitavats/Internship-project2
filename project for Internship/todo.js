let todoList=[
  {
    item:'Buy milk',
    duedate:'4/10/2024'
  },
  {
    item:'Buy Chocolate',
    duedate:'5/10/2024'
  }
];
 displayItems();   
function addTodo(){
  let inputelement=document.querySelector('#todo-input');
  let dateelement=document.querySelector('#todo-date');
  let todoItem=inputelement.value;
  let tododate=dateelement.value;
   todoList.push({item: todoItem,duedate:tododate});
   inputelement.value='';
   displayItems();
}
function displayItems(){
 let containerElement=document.querySelector('.todo-container');
  let newHtml='';
 for(let i=0;i<todoList.length;i++){
  // let item=todoList[i].item;
  // let duedate=todoList[i].duedate;
  let {item,duedate}=todoList[i];
   newHtml +=`
       <span>${item}</span>
       <span>${duedate}</span>
       <button class="btn-delete" onclick="todoList.splice(${i},1);displayItems();">Delete</button>
    `;  
 }
 containerElement.innerHTML=newHtml;
}