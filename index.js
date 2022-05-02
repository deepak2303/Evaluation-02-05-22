// write js code here corresponding to index.html
// You should add submit event on the form


document.querySelector("#masaiForm").addEventListener("submit",masaiform) ;
var arr =JSON.parse(localStorage.getItem("schedule")) || [] ;
function masaiform(){
    event.preventDefault() ;
    var data = {
        matchNumber: masaiForm.matchNum.value ,
        A: masaiForm.teamA.value ,
        B: masaiForm.teamB.value ,
        date: masaiForm.date.value ,
        venue: masaiForm.venue.value
    }
    arr.push(data) ;
    localStorage.setItem("schedule",JSON.stringify(arr)) ;
    window.location.href="matches.html"
}