
//çereze(depoya) ekliyorum
function localStorageEkle(newTodoText){

    //tum todolari getiriyorum
    let todos = todolariGetir()

    console.log("todos: ")
    console.log(todos)

    buTododanVarMi = false
    
    todos.forEach(element => {
        
        if(element.userName == user.userName){

            if(element.todo == newTodoText){
                buTododanVarMi = true
            }

        }

    });

    if(buTododanVarMi){

        alert("bu tododan zaten var")
        return false

    }else{

        todos.push(new Todo(user.userName,newTodoText))
        localStorage.setItem("todos",JSON.stringify(todos))
        return true

    }

}

//çerezlerden(depodan) siliyorum
function localStoragedenSil(todoText){
    
    let todos = todolariGetir()

    var user = JSON.parse(localStorage.getItem("user"))

    let targetIndex = 0
    todos.forEach((item,index) => {

        if(item.userName == user.userName && item.todo == todoText){
            targetIndex = index
        }
        

    })


    todos.splice(targetIndex,1)

    localStorage.setItem("todos",JSON.stringify(todos))

}



//çerezlerdeki(depodaki) todo ları getiriyorum
function todolariGetir(){
    let todos = []   
    if(localStorage.getItem("todos") !== null){
        todos = JSON.parse(localStorage.getItem("todos"))
    }
    return todos
}

//ul etiketine ekliyorum
function listeyeEkle(todoText){
    //gelen todoyu html e dönüştürüp ul etiketine ekliyorum
    listGroup.appendChild(todoHtmliOlustur(todoText))
}