function outer (){
    const a=4
    function parent(){
        const b=6
        return function (){
            console.log(a);
        }
      
    }
   return parent;
}

const ayush = outer ();


console.dir(ayush);