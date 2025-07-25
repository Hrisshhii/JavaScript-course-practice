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

function Keydown2(event){
    if(event.key==='Enter'){
        addTodo2();
    }
}

rendertodolist();

function rendertodolist(){

    let resultList='';

    for(let i=0; i<toDoList2.length;i++){
        const todoObj=toDoList2[i];
        //const name=todoObj.name;
        const {name}=todoObj;
        //const date=todoObj.date;
        const {date}=todoObj;
        const html=`
            <div>${name}</div>
            <div>${date}</div>
                <button class="delete-button" onclick="
                    toDoList2.splice(${i},1);
                    rendertodolist();
                ">DELETE</button>`;
        resultList+=html;
    }

    document.querySelector('.js-todo-list').innerHTML=resultList;
}

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

