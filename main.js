const checkPointElements = document.querySelectorAll(".chkp")
const lineElements = document.querySelectorAll(".between")
const wrapperElement = document.querySelector(".wrapper")
const loaderElement = document.querySelector("section.loader")
const navElement = document.querySelector(".credentialsOuter")
var internalState =0
var actualState =  undefined

const checkState = () =>{
    const windowHeight = window.innerHeight  
    var newStateTemp = 0
    // console.log(checkPointElements)
    checkPointElements.forEach(element => {
        distanceFromTop = element.getBoundingClientRect().bottom - windowHeight
        if(distanceFromTop<0){
            // console.log('increasing state')
            newStateTemp ++;
        }
    });
    actualState = newStateTemp
    if(wrapperElement.getBoundingClientRect().top<=44){
        loaderElement.classList.remove('LONG')
    }else{
        loaderElement.classList.add('LONG')
    }
}
timing = 100
checkPosition = (isRecursed, timeOut) => {
    document.removeEventListener('scroll', checkPosition)
    if(isRecursed!==true){
        checkState
    }
    const sleepyLoop = () =>{
        if(isRecursed!==true){
            checkState()
        }
        if(actualState===internalState){
            if(timeOut){
                setTimeout(()=>{document.addEventListener('scroll', checkPosition)}, timeOut)
                return null;
            }else{
                document.addEventListener('scroll', checkPosition)
                return null;        
            }
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
    checkPosition(true, 750)
}

// Link Hover
const linkParents = document.querySelectorAll(".links >div ")
const toggleLink = (event) =>{
    const imageElement = event.target.querySelector('.image')
    imageElement.classList.toggle('hover')
}

linkParents.forEach(parent => {
    parent.addEventListener("mouseenter", (event) => {toggleLink(event)})
    parent.addEventListener("mouseleave", (event) => {toggleLink(event)})
})
