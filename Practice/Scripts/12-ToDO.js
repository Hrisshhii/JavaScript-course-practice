const toDoList=[{
    name:'',
    date:''
}];
const toDoList2=[{
    name:'',
    date:''
}];

function Keydown1(event){
    if(event.key==='Enter'){
        addTodo();
    }
}

// function Keydown2(event){
//     if(event.key==='Enter'){
//         addTodo2();
//     }
// }

rendertodolist();

function rendertodolist(){

    let resultList='';

    toDoList2.forEach((todoObj,index) =>{
        const {name, date}=todoObj;
        const html=`
            <div>${name}</div>
            <div>${date}</div>
                <button class="delete-button js-delete-button">DELETE</button>`;
        resultList+=html;
    });

    document.querySelector('.js-todo-list').innerHTML=resultList;

    document.querySelectorAll('.js-delete-button')
        .forEach((deleteButton,index)=>{
            deleteButton.addEventListener('click',()=>{
                toDoList2.splice(index,1);
                    rendertodolist();
            });
        });
}

document.querySelector('.js-add-todo-button').addEventListener('click',()=>{
        addTodo2();
});

document.querySelector('.js-name-in').addEventListener('keydown',(event)=>{
    if(event.key==='Enter'){
        addTodo2();
    }
});

function addTodo2(){
    const inputEle=document.querySelector('.js-name-in');
    const name=inputEle.value;

    const dateEle=document.querySelector('.js-date');
    const duedate=dateEle.value;
    toDoList2.push({
        //name: name
        name,
        date: duedate
    });
    console.log(toDoList2);

    inputEle.value='';
    rendertodolist();
}

function addTodo(){
    const inputEle=document.querySelector('.js-name-input');
    const name=inputEle.value;

    toDoList.push(name);
    console.log(toDoList);

    inputEle.value='';
}

