
function getYourMemoizedFunction(){
function doHaveyCalcution(x){
if(caches[x]) return caches[x]
const startTime=Date.now()
let currentTime=startTime
while(startTime+1000> currentTime){
    currentTime=Date.now()
    console.log('calculating',(currentTime-startTime))
}

const result=+Math.sqrt(x).toFixed(3)
caches[x]=result
return result;
}
return doHaveyCalcution
}

console.log(getYourMemoizedFunction());