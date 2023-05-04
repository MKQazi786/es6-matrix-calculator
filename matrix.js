function calculateMatrixAdd(event) {
    {
        event.preventDefault()

    }

    let x1 = document.getElementById("x1").value
    let x2 = document.getElementById("x2").value
    let x3 = document.getElementById("x3").value
    let x4 = document.getElementById("x4").value
    let x5 = document.getElementById("x5").value
    let x6 = document.getElementById("x6").value
    let x7 = document.getElementById("x7").value
    let x8 = document.getElementById("x8").value
    let x9 = document.getElementById("x9").value

    x1 = Number(x1)
    x2 = Number(x2)
    x3 = Number(x3)
    x4 = Number(x4)
    x5 = Number(x5)
    x6 = Number(x6)
    x7 = Number(x7)
    x8 = Number(x8)
    x9 = Number(x9)

    const val1 = [x1, x2, x3, x4, x5, x6, x7, x8, x9]

    let y1 = document.getElementById("y1").value
    let y2 = document.getElementById("y2").value
    let y3 = document.getElementById("y3").value
    let y4 = document.getElementById("y4").value
    let y5 = document.getElementById("y5").value
    let y6 = document.getElementById("y6").value
    let y7 = document.getElementById("y7").value
    let y8 = document.getElementById("y8").value
    let y9 = document.getElementById("y9").value

    y1 = Number(y1)
    y2 = Number(y2)
    y3 = Number(y3)
    y4 = Number(y4)
    y5 = Number(y5)
    y6 = Number(y6)
    y7 = Number(y7)
    y8 = Number(y8)
    y9 = Number(y9)


    const val2 = [y1, y2, y3, y4, y5, y6, y7, y8, y9]

    //    const resultVal3 = []

    //     for (let i = 0; i < val1.length; i++) {
    //         resultVal3.push(val1[i] + val2[i]);
    //     }

    z1 = val1[0] + val2[0]
    z2 = val1[1] + val2[1]
    z3 = val1[2] + val2[2]
    z4 = val1[3] + val2[3]
    z5 = val1[4] + val2[4]
    z6 = val1[5] + val2[5]
    z7 = val1[6] + val2[6]
    z8 = val1[7] + val2[7]
    z9 = val1[8] + val2[8]

    document.getElementById("z1").innerHTML = z1
    document.getElementById("z2").innerHTML = z2
    document.getElementById("z3").innerHTML = z3
    document.getElementById("z4").innerHTML = z4
    document.getElementById("z5").innerHTML = z5
    document.getElementById("z6").innerHTML = z6
    document.getElementById("z7").innerHTML = z7
    document.getElementById("z8").innerHTML = z8
    document.getElementById("z9").innerHTML = z9

}

function calculateMatrixSub(event) {
    {
        event.preventDefault()
    }

    let x1 = document.getElementById("x1").value
    let x2 = document.getElementById("x2").value
    let x3 = document.getElementById("x3").value
    let x4 = document.getElementById("x4").value
    let x5 = document.getElementById("x5").value
    let x6 = document.getElementById("x6").value
    let x7 = document.getElementById("x7").value
    let x8 = document.getElementById("x8").value
    let x9 = document.getElementById("x9").value

    x1 = Number(x1)
    x2 = Number(x2)
    x3 = Number(x3)
    x4 = Number(x4)
    x5 = Number(x5)
    x6 = Number(x6)
    x7 = Number(x7)
    x8 = Number(x8)
    x9 = Number(x9)

    const val1 = [x1, x2, x3, x4, x5, x6, x7, x8, x9]

    let y1 = document.getElementById("y1").value
    let y2 = document.getElementById("y2").value
    let y3 = document.getElementById("y3").value
    let y4 = document.getElementById("y4").value
    let y5 = document.getElementById("y5").value
    let y6 = document.getElementById("y6").value
    let y7 = document.getElementById("y7").value
    let y8 = document.getElementById("y8").value
    let y9 = document.getElementById("y9").value

    y1 = Number(y1)
    y2 = Number(y2)
    y3 = Number(y3)
    y4 = Number(y4)
    y5 = Number(y5)
    y6 = Number(y6)
    y7 = Number(y7)
    y8 = Number(y8)
    y9 = Number(y9)

    const val2 = [y1, y2, y3, y4, y5, y6, y7, y8, y9]

    z1 = val1[0] - val2[0]
    z2 = val1[1] - val2[1]
    z3 = val1[2] - val2[2]
    z4 = val1[3] - val2[3]
    z5 = val1[4] - val2[4]
    z6 = val1[5] - val2[5]
    z7 = val1[6] - val2[6]
    z8 = val1[7] - val2[7]
    z9 = val1[8] - val2[8]

    document.getElementById("z1").innerHTML = z1
    document.getElementById("z2").innerHTML = z2
    document.getElementById("z3").innerHTML = z3
    document.getElementById("z4").innerHTML = z4
    document.getElementById("z5").innerHTML = z5
    document.getElementById("z6").innerHTML = z6
    document.getElementById("z7").innerHTML = z7
    document.getElementById("z8").innerHTML = z8
    document.getElementById("z9").innerHTML = z9
}

function calculateMatrixMult(event){
    {
        event.preventDefault()
    }

    let x1 = document.getElementById("x1").value
    let x2 = document.getElementById("x2").value
    let x3 = document.getElementById("x3").value
    let x4 = document.getElementById("x4").value
    let x5 = document.getElementById("x5").value
    let x6 = document.getElementById("x6").value
    let x7 = document.getElementById("x7").value
    let x8 = document.getElementById("x8").value
    let x9 = document.getElementById("x9").value

    let y1 = document.getElementById("y1").value
    let y2 = document.getElementById("y2").value
    let y3 = document.getElementById("y3").value
    let y4 = document.getElementById("y4").value
    let y5 = document.getElementById("y5").value
    let y6 = document.getElementById("y6").value
    let y7 = document.getElementById("y7").value
    let y8 = document.getElementById("y8").value
    let y9 = document.getElementById("y9").value

    let z1 = x1 * y1
    let z2 = x2 * y2
    let z3 = x3 * y3
    let z4 = x4 * y4
    let z5 = x5 * y5
    let z6 = x6 * y6
    let z7 = x7 * y7
    let z8 = x8 * y8
    let z9 = x9 * y9

    document.getElementById("z1").innerHTML = z1
    document.getElementById("z2").innerHTML = z2
    document.getElementById("z3").innerHTML = z3
    document.getElementById("z4").innerHTML = z4
    document.getElementById("z5").innerHTML = z5
    document.getElementById("z6").innerHTML = z6
    document.getElementById("z7").innerHTML = z7
    document.getElementById("z8").innerHTML = z8
    document.getElementById("z9").innerHTML = z9  
}
