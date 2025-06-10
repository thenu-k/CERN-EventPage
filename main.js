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
    if(isRecursed!==true){
        checkState
    }
    const sleepyLoop = () =>{
        if(isRecursed!==true){
            checkState()
        }
        console.log('Actual and internal state')
        console.log(actualState, internalState)
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

const rulesClick = (toState) =>{
    document.removeEventListener('scroll', checkPosition)
    actualState = toState
    console.log('clicked')
    checkPosition(true)
}

// I don't think the click function is not working because of an event listener. In some cases I need two clicks to get hte state right. 
// when I click topic, that requires two further clicks. Everthing else is just one.