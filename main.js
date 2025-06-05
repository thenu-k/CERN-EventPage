const checkPointElements = document.querySelectorAll(".chkp")
const lineElements = document.querySelectorAll(".between")
var internalState =0
var actualState =  undefined

const checkState = () =>{
    const windowHeight = window.innerHeight  
    var positions = []
    var newStateTemp = 0
    checkPointElements.forEach(element => {
        distanceFromTop = element.getBoundingClientRect().bottom - windowHeight
        // console.log(element)
        // console.log(distanceFromTop)
        if(distanceFromTop<0){
            positions.push(distanceFromTop) // we don't need the element id because this will be in order I think
            newStateTemp ++;
        }
    });
    actualState = newStateTemp
}
//EVENT LISTENER
timing = 100
checkPosition = (isRecursed) => {
    document.removeEventListener('scroll', checkPosition)
    checkState()
    // const changeRequired = changeDecomposer(actualState, internalState)
    console.log('entered check')
    const sleepyLoop = () =>{
        checkState()
        console.log('actual and internal state')
        console.log(actualState, internalState)
        // console.log(currEl)
        if(actualState===internalState){
            console.log('exiting')
            document.addEventListener('scroll', checkPosition)
            return null;
            
        }
        if(actualState>internalState){
            const currEl = lineElements[internalState].querySelector('.full')
            console.log('increasing')
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


