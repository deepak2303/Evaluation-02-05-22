// write js code here corresponding to favourites.html

var favouriteArr = JSON.parse(localStorage.getItem("favourites")) ;

data(favouriteArr)
function data(Form){
    Form.forEach(function(el,index){
        var tr = document.createElement("tr") ;

        var td1 = document.createElement("td") ;
        td1.innerText=el.matchNumber

        var td2 = document.createElement("td") ;
        td2.innerText=el.A ;

        var td3 = document.createElement("td") ;
        td3.innerText=el.B ;
        
        var td4 = document.createElement("td") ;
        td4.innerText=el.date ;

        var td5 = document.createElement("td") ;
        td5.innerText=el.venue ;

        var td6 = document.createElement("td") ;
        td6.innerText="Delete";
        td6.style.color="red" ;
        td6.style.cursor="pointer";
        td6.addEventListener("click",function(){
            deleteFun(el , index)
        })

        tr.append(td1, td2, td3, td4, td5, td6) ;

        document.querySelector("tbody").append(tr) ;
    });
}

function deleteFun(el , index){
    favouriteArr.splice(index , 1)
    localStorage.setItem("favourites",JSON.stringify(favouriteArr)) ;
    window.location.reload();
}