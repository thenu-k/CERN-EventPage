            // count ++;
            // console.log(count)
            // innerEl = lineElements[count-1].querySelector('.full') 
            // console.log(lineElements[count-1])
            // if(count<point && innerEl.classList.contains('off')){
            //     innerEl.classList.remove('off')
            //     console.log('on')
            // }
            // else{
            //     innerEl.classList.add('off')
            //     console.log('off')
            // }
            // if (count<lineElements.length){
            //     sleepyLoop()
            // }
            // const innerRecall= (count) =>{
            //     count ++;
            //     innerEl = lineElements[count-1].querySelector('.full') 
            //     if(count<point && !innerEl.classList.contains('off')){
            //         innerRecall(count)
            //     }else{
            //         if(count<point && innerEl.classList.contains('off')){
            //             innerEl.classList.remove('off')
            //             console.log('on')
            //         }
            //         else{
            //             innerEl.classList.add('off')
            //             console.log('off')
            //         }
            //         if (count<lineElements.length){
            //             sleepyLoop()
            //         }
            //     }
            // }
            // innerRecall(count)
                // for(let count = 0; count<lineElements.length; count++){
    //     innerEl = lineElements[count].querySelector('.full') 
    //     if(count<point){
    //         innerEl.classList.remove('off')
    //     }else{
    //         innerEl.classList.add('off')
    //     }

    // }


        const sleepyLoop = (count) => {
        count++;
        console.log('---------')
        console.log(count)
        if(count<lineElements.length){
            innerEl = lineElements[count-1].querySelector('.full') 
            if(count<point){
                if(!innerEl.classList.contains('off')){
                    sleepyLoop(count)
                    console.log('fast forwarding')
                }else{
                    innerEl.classList.remove('off')
                    console.log('adding with delay')
                    setTimeout((count)=>{
                        sleepyLoop(count)
                    },1000/count)
                }
            }else{
                innerEl.classList.add('off')
                console.log('removing with haste')
                sleepyLoop(count)
            }
        }else{
            console.log('exiting')
            return NaN
        }
    }
    sleepyLoop(count)



        // console.log(stateChange)
    // if (downScroll){
    //     for(let counter = 0; counter<lineElements.length; counter++){
    //         innerEl = lineElements[counter].querySelector('.full') 
    //         if(stateChange[counter]==1){
    //             console.log('removing')
    //             innerEl.classList.remove('off')
    //             document.removeEventListener('scroll', checkPosition);
    //             setTimeout(()=>{
    //                 console.log('discoarding')
    //                 checkPosition()
    //                 document.addEventListener('scroll', checkPosition)
    //             },800)
    //             return NaN
    //         }
    //         if(stateChange[counter]==-1){
    //             innerEl.classList.add('off')
    //             document.removeEventListener('scroll', checkPosition);
    //             setTimeout(()=>{
    //                 checkPosition()
    //                 document.addEventListener('scroll', checkPosition)
    //             },800)
    //         }
    //     }
    // }else{
    //     for(let counter = lineElements.length -1; counter>=0; counter--){
    //         innerEl = lineElements[counter].querySelector('.full') 
    //         if(stateChange[counter]==1){
    //             innerEl.classList.remove('off')
    //             document.removeEventListener('scroll', checkPosition);
    //             setTimeout(()=>{
    //                 checkPosition()
    //                 document.addEventListener('scroll', checkPosition)
    //             },800)
    //         }
    //         if(stateChange[counter]==-1){
    //             innerEl.classList.add('off')
    //             document.removeEventListener('scroll', checkPosition);
    //             setTimeout(()=>{
    //                 checkPosition()
    //                 document.addEventListener('scroll', checkPosition)
    //             },800)
    //         }
    //     }
    // }ch


        // const changeDecomposition = Decompose(changeOfState, SelfSum(changeOfState))
    // console.log('current state and change')
    // console.log(stateVariable)
    // console.log(stateDecomposition)
    // if(stateDecomposition!==undefined){
    //     let counter = 0;
    //     const sleepyLoop = (counter) =>{
    //         handleStateChange(stateDecomposition[counter], SelfSum(stateDecomposition[counter]))
    //         stateVariable = checkState().slice()
    //         counter++;
    //         if(counter>=stateDecomposition.length){
    //             setTimeout(()=>{
    //                 checkPosition(true)
    //                 document.addEventListener('scroll', checkPosition)
    //                 return NaN
    //             }, 800)
    //         }else{
    //             setTimeout(()=>{
    //                 sleepyLoop(counter)
    //             }, 800)
    //         }
    //     }
    //     sleepyLoop(counter)
    // }else{
    //     stateVariable = checkState().slice()
    //     if(!isRecursed){
    //         checkPosition(true)
    //     }
    //     document.addEventListener('scroll', checkPosition)
    // }