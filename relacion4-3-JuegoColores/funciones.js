export function makeGame (difficulty) {
    let board = []
    let choosed = true
    for (let i = 0; i<6*difficulty; i++) {
        let tile = {
            color1: "#" + Math.round(Math.random()*255),
            color2: "#" + Math.round(Math.random()*255),
            color3: "#" + Math.round(Math.random()*255),
            choosen: choosed,
        }
        choosed = false
        board.push(tile)
    }
    board.sort(() => 0.5-Math.random())
    return board
}