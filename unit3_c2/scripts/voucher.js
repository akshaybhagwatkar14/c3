let num=JSON.parse(localStorage.getItem("purchase"))
  document.querySelector("#wallet_balance").innerHTML=num

  let main=document.querySelector("#main")
const getdata=async ()=>{
  try{
    let res= await fetch(`https://masai-vouchers-api.herokuapp.com/api/vouchers`)
    let data=await res.json()
    let dataarr=data[0].vouchers
    showdata(dataarr,main)
    console.log(dataarr)
  }
  catch(err){
    console.log("err",err)
  }
}
getdata()
const showdata=(data,main)=>{
  data.map((el)=>{
    let div=document.createElement("div")
    
    let img=document.createElement("img")
  img.src=el.image
    let name=document.createElement("p")
  name.innerHTML=el.name
  let price=document.createElement("p")
  price.innerHTML=el.price
    let btn=document.createElement("button")
    btn.id="buy"
    btn.innerHTML="buy"
    btn.addEventListener("click",function(){
      remove(el)
    })
      
    
div.append(img,name,price,btn)
main.append(div)
  })
  
}
let data=JSON.parse(localStorage.getItem("purchases")) || []
let remove=(obj)=>{
  if(num<obj.price){
    alert("Insuificiant ammount")
  }
   data.push(obj)
   let total=Number(num)- Number(obj.price)

   localStorage.setItem("wallet",total)
if(num>obj.price){
  localStorage.setItem("purchases",JSON.stringify(data))
}
  
  window.location.replace('index.html')
}
