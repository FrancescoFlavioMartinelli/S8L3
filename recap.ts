let temp = [ -5, -10, -2, 3, 2, -10]

function closeToZero(arr) {
    arr = arr.map((e) => {
        if (typeof e == 'string') {
            return parseInt(e)
        } else {
            return e
        }
    })

    return arr.reduce((total, el) => {
        let positiveTotal = total < 0 ? -total : total
        let positiveEl = el < 0 ? -el : el
        if (positiveEl < positiveTotal) {
            return el
        }
        if (positiveEl == positiveTotal) {
            if (el > total) {
                return el
            } else if (total > el) {
                return total
            }
        }
        return total
    }, arr[0])
    // let closerToZero = arr[0]
    // arr.forEach((e)=>{
    //     if((e<0?-e:e) < (closerToZero<0?-closerToZero:closerToZero)){
    //         closerToZero = e
    //     }
    //     if((e<0?-e:e) == (closerToZero<0?-closerToZero:closerToZero)){
    //         closerToZero = e < closerToZero ? closerToZero : e
    //     }
    // })
    // return closerToZero
}

console.log(closeToZero(temp));