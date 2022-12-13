let name = document.getElementById('name')
let price = document.getElementById('price')
let mark = document.getElementById("mark")
let date = document.getElementById("date")
let category = document.getElementById("article")
let sale = document.getElementById("sale")
let nameRe = /^[a-z]{1,30}$/i;
let priceRe = /^\d+$/
let data;
class product {
    constructor(name , price , mark , date , category , sale ){
        this.name = name ;
        this.price = price ;
        this.mark = mark ;
        this.date = date ;
        this.category = article ;
        this.sale = sale ;


    }
    details(){
        return 
        `
        <p>Name: ${this.name}</p>
        <p>Price: ${this.price}</p>
        <p>Mark: ${this.mark}</p>
        <p>Date: ${this.date}</p>
        <p>Category: ${this.category}</p>
        <p>Sale: ${this.sale}</p>
        `
        
    }
}
if(localStorage.data === undefined){
    data = [];
}else {
    data = JSON.parse(localStorage.data);
    create()
}


document.getElementById('add').addEventListener("click",function(){
    let valide = true
if(nameRe.test(document.getElementById("name").value)){
    document.getElementById('nameerror').classList.remove('show');
    document.getElementById('name').classList.add('valide');
    document.getElementById('name').classList.remove('invalide');


}else{
    valide= false;
    document.getElementById('nameerror').classList.add('show');
    document.getElementById('name').classList.add('invalide');
    document.getElementById('name').classList.remove('valide');
}
if (document.getElementById('mark').value=="Mark"){
    valide = false
    document.getElementById('markerror').classList.add('show');
    mark.classList.add('invalide');
    mark.classList.remove('valide')
}else{
    mark.classList.add('valide');
    mark.classList.remove('invalide');
}
if(priceRe.test(document.getElementById('price').value)){
    document.getElementById('price').classList.add('valide');
    document.getElementById('price').classList.remove('invalide');
}else{
    valide= false
    document.getElementById('priceerror').classList.add('show');
    document.getElementById('price').classList.add('invalide');
    document.getElementById('price').classList.remove('valide');
}
if(document.getElementById('date').value==''){
    document.getElementById('dateerror').classList.add('show');
    date.classList.add('invalide');
    date.classList.remove('valide');
    valide= false
}else{
    date.classList.add('valide')
    date.classList.remove('invalide')
}
if(document.getElementById('article').value=="Category"){
    valide=false
    document.getElementById('categoryerror').classList.add('show');
    category.classList.add('invalide')
    category.classList.remove('valide')
}else{
    category.classList.add('valide')
    category.classList.remove('invalide')

}
if(document.querySelector('[name=sale]:checked')==null){
    valide=false
    document.getElementById('saleerror').classList.add('show');
    sale.classList.add('invalide')
    sale.classList.remove('valide')
}
if (valide === true){
    document.querySelector("tbody").innerHTML = "";
    let nameValue = document.getElementById('name').value
    let priceValue = document.getElementById('price').value
    let markValue =document.getElementById("mark").value
    let dateValue = document.getElementById("date").value
    let categoryValue = document.getElementById("article").value
    let saleValue = document.querySelector('[name=sale]:checked').value
    data.push(new product(nameValue,priceValue,markValue,dateValue,categoryValue,saleValue));
    localStorage.data = JSON.stringify(data)
    create();

}
})
function create(){
    document.querySelector("tbody").innerHTML = "";
            data.forEach(obje=>{
                let tr = document.createElement("tr")
               let thisData = [obje.name,obje.price,obje.mark,obje.date,obje.article,obje.sale]
               for (let index = 0; index < 6; index++) {
                let td = document.createElement("td");
                td.innerHTML =thisData[index]
                tr.appendChild(td)
               }
               let remove = document.createElement("button");
               let edit = document.createElement("button");
               let removeS = document.createTextNode("remove")
               let editS = document.createTextNode("Edit")
               let lasttd = document.createElement("td")
               remove.classList.add('remove')
               edit.classList.add('edit')
               lasttd.appendChild(remove)
               lasttd.appendChild(edit)
               tr.appendChild(lasttd)
               edit.appendChild(editS)
               remove.appendChild(removeS)
               document.querySelector("tbody").appendChild(tr)
               document.querySelector("form").reset()
            })
            document.querySelectorAll(".remove").forEach(button=>{
                button.addEventListener("click",event=>{
                    let index = Array.from(document.querySelector("tbody").children).indexOf(event.target.parentElement.parentElement)
                    data.splice(index,1);
                    localStorage.data = JSON.stringify(data)
                    create();
                })
            })
            document.querySelectorAll(".edit").forEach(button=>{
                button.addEventListener("click",Event=>{
                    
                    let index = Array.from(document.querySelector("tbody").children).indexOf(Event.target.parentElement.parentElement)
                    document.getElementById("name").value= data[index].name
                    document.getElementById("price").value= data[index].price
                    document.getElementById("mark").value= data[index].mark
                    document.getElementById("name").value= data[index].name
                    document.getElementById("name").value= data[index].name

                })
            })
    
}

    
