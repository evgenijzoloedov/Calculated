const divisible=document.getElementById('divisible')
const divisor=document.getElementById('divisor')
const private=document.getElementById('private')
const remains=document.getElementById('remains')
const button=document.getElementById('button')


button.addEventListener("click",()=>{
    const privat=parseInt(divisible.value/divisor.value)
    const remain=parseInt(divisible.value%divisor.value)


    private.textContent=privat
    remains.textContent=remain
    private.style.borderBottom= '1px solid white'
    remains.style.borderBottom= '1px solid white'
    setTimeout(()=>{
        private.style.borderBottom= '1px solid black'
        remains.style.borderBottom= '1px solid black'
    },5000)
})