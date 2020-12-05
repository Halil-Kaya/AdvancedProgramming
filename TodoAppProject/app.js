class Todo{

    constructor(userName,todo){
        this.userName = userName
        this.todo = todo
    }

}




let cardBody = document.querySelectorAll(".card-body")[1]
let headerCardBody = document.querySelector("#todo-form")
let newTodoInput = document.querySelector(".form-control")
let searchInput = document.querySelectorAll(".form-control")[1]






//todo eklendiginde calisan yer
headerCardBody.addEventListener("click",function(e){

    
    //ekliyecegim todo
    let newTodoText = newTodoInput.value

    //bos mu diye kontrol ediyorum
    if(newTodoText != ""){
        
        //burda yeni bir todo ekliyecem
        //ekliyeceğim yer: list-group (ul etiketine)

        //once çerez olarak ekliyorum eğer işlem başarılıysa true değilse false dönüyor
        //eğer ekleme işlemi başarılıysa htmle de eklyorum
        if(localStorageEkle(newTodoText)){
            
            //htmldeki ul etiketine ekliyor
            listeyeEkle(newTodoText)

        }
    
    }

    newTodoInput.value = ""

    e.preventDefault()

})



//tiklanilan olaya göre işlem yapıyorum
cardBody.addEventListener("click",function(e){

    //todonun silme yerine tiklandiysa todoyu siliyorum
    if(e.target.className == "fa fa-remove"){

        //dolaylı yoldan parentini buluyorum
        var todo = e.target.parentElement.parentElement
        var todoText = todo.textContent

        
        //todo yu çerezlerden (depodan) siliyorum
        localStoragedenSil(todoText)

        //elementi html den siliyorum
        todo.remove()

    }//tüm todolari temizle butonuna tıklandıysa her şeyi siliyorum
    else if(e.target.id == "clear-todos"){
        
        if(confirm("Emin misin?")){

            //htmli temizliyorum
            listGroup.innerHTML = ""
            
            let todos = []   
            if(localStorage.getItem("todos") !== null){
                todos = JSON.parse(localStorage.getItem("todos"))
            }

            var user = JSON.parse(localStorage.getItem("user"))

            let targetIndexs = []
            todos.forEach((item,index) => {
        
                if(item.userName == user.userName){
                    targetIndexs.push(index)
                }
                
        
            })
            
            //reverse yapiyorum cunku silerken index siralari kayiyor
            targetIndexs = targetIndexs.reverse()
            targetIndexs.forEach(item => {
                todos.splice(item,1)
            })


            localStorage.setItem("todos",JSON.stringify(todos))

        

            
        }
        
        
    }

    e.preventDefault()
})


searchInput.addEventListener("keyup",function(e){
    
    const filterValue = e.target.value.toLowerCase();

    const listItems = document.querySelectorAll(".list-group-item");

    listItems.forEach(function(item){

        const text = item.textContent.toLowerCase();

        if(text.indexOf(filterValue) === -1){
            item.setAttribute("style","display : none !important")
        }else{
            item.setAttribute("style","display : block ")
        }
        

    })

    
})

