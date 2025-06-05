const checkPointElements = document.querySelectorAll(".chkp")
const lineElements = document.querySelectorAll(".between")
var stateVariable = []
var actualState = []
var changeCache = []
lineElements.forEach(el=>{
    stateVariable.push(0)
})
// console.log(checkPointElements)
// console.log('state variable')
// console.log(stateVariable)
//VECTOR OPERATIONS
const VectorSub = (A, B) =>{
    return A.map((val, i) => val - B[i]);
}
const SelfSum = (ar) =>{
    var sum = 0
    ar.forEach(num =>{
        sum += num;
    })
    return sum;
}
const Decompose = (A, directionalID) =>{
    const template = Array(lineElements.length).fill(0);
    var decomposition = []
    if (directionalID===0) return undefined;
    if (directionalID===1  || directionalID==-1) return [A];
    for(let count = 0; count<Math.abs(directionalID);count++){
        var templateUsed = template.slice()
        templateUsed[count] =  (directionalID>0) ? 1: -1;
        decomposition.push(templateUsed)
    }
    return decomposition
}
//STATE CHANGE
const handleStateChange = (stateChange, directionalID) =>{
    let count = 0
    stateChange.forEach(num =>{
        if(num===1){
            lineElements[count].querySelector('.full').classList.remove('off')
        }
        if (num===-1){
            lineElements[count].querySelector('.full').classList.add('off')
        }
        count ++;
    })
}
const checkState = () =>{
    const windowHeight = window.innerHeight  
    var positions = []
    const newStateVariable = []
    checkPointElements.forEach(element => {
        distanceFromTop = element.getBoundingClientRect().bottom - windowHeight
        // console.log(element)
        // console.log(distanceFromTop)
        if(distanceFromTop<0){
            positions.push(distanceFromTop) // we don't need the element id because this will be in order I think
            newStateVariable.push(1)
        }else{
            newStateVariable.push(0)
        }
    });
    return newStateVariable
}
//EVENT LISTENER
checkPosition = (isRecursed) => {
    document.removeEventListener('scroll', checkPosition)
    const newStateVariable = checkState()
    const changeOfState = VectorSub(newStateVariable, stateVariable)
    const stateDecomposition = Decompose(changeOfState, SelfSum(changeOfState))
    console.log('current state and change')
    console.log(stateVariable)
    console.log(stateDecomposition)
    if(stateDecomposition!==undefined){
        let counter = 0;
        const sleepyLoop = (counter) =>{
            handleStateChange(stateDecomposition[counter], SelfSum(stateDecomposition[counter]))
            stateVariable = checkState().slice()
            counter++;
            if(counter>=stateDecomposition.length){
                setTimeout(()=>{
                    checkPosition(true)
                    document.addEventListener('scroll', checkPosition)
                    return NaN
                }, 800)
            }else{
                setTimeout(()=>{
                    sleepyLoop(counter)
                }, 800)
            }
        }
        sleepyLoop(counter)
    }else{
        stateVariable = checkState().slice()
        if(!isRecursed){
            checkPosition(true)
        }
        document.addEventListener('scroll', checkPosition)
    }

}
checkPosition()
document.addEventListener('scroll', checkPosition)


