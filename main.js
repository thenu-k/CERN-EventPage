const checkPointElements = document.querySelectorAll(".chkp")
const lineElements = document.querySelectorAll(".between")
const loaderElement = document.querySelector("section.loader")
const navElement = document.querySelector(".credentialsOuter")
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

    if(loaderElement.getBoundingClientRect().top<=44){
        loaderElement.classList.remove('LONG')
    }else{
        loaderElement.classList.add('LONG')
    }
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
        if(actualState===internalState){
            document.addEventListener('scroll', checkPosition)
            return null;        
        }
        // console.log('Actual and internal state')
        // console.log(actualState, internalState)
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
    // console.log('clicked')
    setTimeout(()=>{checkPosition(true)}, 750)
}

// The click function was not working because smooth scroll keeps on scrolling after the function readds the event listener.

//Adjusting the pipe lengths
const cavityElement = document.querySelector(".loaderInner .item")
const spaceElement = document.querySelector(".loaderInner")
const pipeElements = document.querySelectorAll(".loaderInner .between")
const adjustPipeLength = () =>{
    // console.log('adjusting')
    const cavityWidth = cavityElement.getBoundingClientRect().width
    const spaceWidth = spaceElement.getBoundingClientRect().width
    const pipeLength = (spaceWidth - cavityWidth*4)/3
    // console.log(spaceWidth - cavityWidth*4)
    pipeElements.forEach(element =>{
        element.setAttribute("style",`width:${pipeLength}px`);
    })
}
// window.addEventListener('resize', adjustPipeLength)
// adjustPipeLength()