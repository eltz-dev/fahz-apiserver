function toggleMenu(){
document.getElementById("sidebar").classList.toggle("active")
}

function showPage(page){
document.getElementById("dashboard").style.display="none"
document.getElementById("report").style.display="none"
document.getElementById(page).style.display="block"
}

async function run(base,input,result){

let value=document.getElementById(input).value
let endpoint=base+encodeURIComponent(value)
let url="/api/proxy?endpoint="+encodeURIComponent(endpoint)
let box=document.getElementById(result)

box.textContent="Loading..."

try{

let r=await fetch(url)
let data=await r.json()

box.textContent=JSON.stringify(data,null,2)

}catch(e){

box.textContent="Error : "+e

}
}

