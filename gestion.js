let name = document.getElementById('name')
let price = document.getElementById('price')
let mark = document.getElementById("mark")
let date = document.getElementById("date")
let category = document.getElementById("category")
let sale = document.getElementById("sale")
let nameRe = /^[a-z]{1,30}$/i;
let priceRe = /^\d+$/
class product {
    constructor(name , price , mark , date , category , sale ){
        this.name = name ;
        this.price = price ;
        this.mark = mark ;
        this.date = date ;
        this.category = category ;
        this.sale = sale ;


    }
    details(){
        return 
        
    }
}
    
    
