const checkPointElements = document.querySelectorAll(".chkp")
const lineElements = document.querySelectorAll(".between")
var internalState =0
var actualState =  undefined

const checkState = () =>{
    const windowHeight = window.innerHeight  
    var newStateTemp = 0
    checkPointElements.forEach(element => {
        distanceFromTop = element.getBoundingClientRect().bottom - windowHeight
        if(distanceFromTop<0){
            newStateTemp ++;
        }
    });
    actualState = newStateTemp
}
timing = 100
checkPosition = (isRecursed) => {
    document.removeEventListener('scroll', checkPosition)
    checkState()
    console.log('entered check')
    const sleepyLoop = () =>{
        checkState()
        if(actualState===internalState){
            document.addEventListener('scroll', checkPosition)
            return null;        
        }
        if(actualState>internalState){
            const currEl = lineElements[internalState].querySelector('.full')
            currEl.classList.remove('off')
            internalState++;
            setTimeout(()=>{sleepyLoop()}, timing)

        }else if(actualState< internalState){
            const currEl = lineElements[internalState-1].querySelector('.full')
            currEl.classList.add('off')
            internalState--;
            setTimeout(()=>{sleepyLoop()}, timing)    
        }
    }
    sleepyLoop()
}
document.addEventListener('scroll', checkPosition)
checkPosition()


