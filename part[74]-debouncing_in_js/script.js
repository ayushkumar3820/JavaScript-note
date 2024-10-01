const input=document.querySelector('input');
debugger
const debouncing=(func,wait)=>{
    let TimeId;
    return (...arg)=>{
      console.log('calling')
      clearTimeout(TimeId); 
      TimeId=setTimeout(()=>func(...arg),wait)
    }
  }

  const handleInput=(e   )=>{
    console.log('calling api',e.target.value)
} 
  const debounceCallApi=debouncing(handleInput,1000);

 console.log(debounceCallApi);

input.addEventListener('input',debounceCallApi)



