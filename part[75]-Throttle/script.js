const input=document.querySelector('input');

const span=document.querySelector('span');

// const callApi=(e)=>{
// console.log('calling api',e.target.value)
// }

const callApi=function(value){
    console.log('Calling api',value)
}
const logInput=throttle(callApi,400);

input.addEventListener('input',callApi);

document.addEventListener('mouseover',()=>{
    span.innerText=++span.innerText
})



function throttle(func,delay=1000){
    let firstCall=true
    let timeId=null
    let lastArgs=[]
    return function (...args){
        console.log(this)
        lastArgs=args
        if(firstCall){
            func.apply(this,lastArgs)
            firstCall=false
            return
        }
        if(timeId)return 
        timeId=setTimeout(()=>{
            timeId=null
            func.apply(this.lastArgs)
        },delay)
    }
}