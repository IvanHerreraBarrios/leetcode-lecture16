var rotate = function(matrix) {
    const rings = Math.floor(matrix.length / 2)
    let ringLength = matrix.length

    for(let r=0; r < rings; r++){
        for(let ir=0; ir < ringLength - 1; ir++){
            let i = r, j = r + ir

            //first move
            let ni = j, nj = r + ringLength - 1
            let swap = matrix[ni][nj]
            matrix[ni][nj] = matrix[i][j]

            //2 move
            i = ni, j = nj
            ni = j, nj = r + ringLength - 1 -ir
            let swap2 = matrix[ni][nj]
            matrix[ni][nj] = swap

            //3 move
            i = ni, j = nj
            ni = j, nj = r
            let swap3 = matrix[ni][nj]
            matrix[ni][nj] = swap2

            //4 move
            i = ni, j = nj
            ni = j, nj = r + ir
            matrix[ni][nj] = swap3 
        }

        ringLength -= 2
    }
};