let a = 5       
function contador () {    
    if (a>=0){
        document.write( " || " + a + " " )
        a--
    } 
}

function reloj () {
    let d = new Date()
    document.write(" || " + d.getHours() + ":"+ d.getMinutes() + ":"+d.getSeconds())
}

function contadorRec () {    
    if (a>=0){
        document.write( " || " + a + " " )
        a--
    } else {
        location.assign("https://www.google.com/?hl=es")
    }
}