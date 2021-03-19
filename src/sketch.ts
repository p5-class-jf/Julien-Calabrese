// -------------------
//  Parameters and UI
// -------------------

const gui = new dat.GUI()
const params = {
    raffraichissement: 0,
    transparenceR: 255,
    transparenceJ: 200,
    centre1: 0,
    centre2: -150,
    centre3: 150,
    Download_Image: () => save(),
}
gui.add(params, "raffraichissement", 0, 100, 1)
gui.add(params, "transparenceR", 0, 255, 1)
gui.add(params, "transparenceJ", 0, 255, 1)
gui.add(params, "centre1", -100, 100, 1)
gui.add(params, "centre2", -250, -50, 1)
gui.add(params, "centre3", 50, 250, 1)


//mes parametres

//gui.add(params, "Nombre_traits", 0, 100, 1)
gui.add(params, "Download_Image")
// -------------------
//       Drawing
// -------------------

function draw() {
    randomSeed(params.raffraichissement)
    background('black')
    rectMode(CENTER)
    translate(width/2, height/2)


    //RAJOUTER A BALLE DE TRAITS LE SANG
    
    //figure 1
        for (let i = 0; i <= random(30, 45); i++){
            for (let t = 0; t < 1; t += 0.1) {
                const couleur = lerpColor(
                    color(255, 0, 0, params.transparenceR), 
                    color(255, 255, 0, params.transparenceJ),
                    t
                  )
                const y = lerp(random(40, 60), random(90, 120), t)
                stroke(couleur, params.transparence)
                line(random(-16, -24), params.centre1, random(50, 100),y)
            }
        }

        for (let i = 0; i <= random(30, 45); i++){
            for (let t = 0; t < 1; t += 0.1) {
                const couleur = lerpColor(
                    color(255, 0, 0, params.transparenceR), 
                    color(255, 255, 0, params.transparenceJ),
                    t
                  )
                const y = lerp(random(-40, -60), random(-90, -115), t)
                stroke(couleur, params.transparence)
                line(random(-16, -24), params.centre1, random(-50, -100),y)
            }
        }

        let existence12 = random(1, 10)
        if (existence12 <= 9){
            for (let i = 0; i <= random(30, 45); i++){
                for (let t = 0; t < 1; t += 0.1) {
                    const couleur = lerpColor(
                        color(255, 0, 0, params.transparenceR), 
                        color(255, 255, 0, params.transparenceJ),
                        t
                      )
                    const y = lerp(random(-10, 10), random(70, 90), t)
                    stroke(couleur, params.transparence)
                    line(random(-16, -24), params.centre1, random(-100, -150),y)
                }
            }
        }

        let existence13 = random(1, 9)
        if (existence13 <= 8){
            for (let i = 0; i <= random(30, 45); i++){
                for (let t = 0; t < 1; t += 0.12) {
                    const couleur = lerpColor(
                        color(255, 0, 0, params.transparenceR), 
                        color(255, 255, 0, params.transparenceJ),
                        t
                      )
                    const y = lerp(random(40, 60), random(-10, 10), t)
                    stroke(couleur, params.transparence)
                    line(random(-16, -24), params.centre1, random(50, 150),y)
                }
            }
        }



        //figure 2
        let existence21 = random(1, 8)
        if (existence21 <= 7){
            for (let i = 0; i <= random(30, 45); i++){
                for (let t = 0; t < 1; t += 0.1) {
                    const couleur = lerpColor(
                        color(255, 0, 0, params.transparenceR), 
                        color(255, 255, 0, params.transparenceJ),
                        t
                      )
                    const y = lerp(random(-40, -60), random(-90, -120), t)
                    stroke(couleur, params.transparence)
                    line(random(40, 48), params.centre2, random(150, 200),y)
                }
            }
        }

        let existence22 = random(1, 8)
        if (existence22 <= 7){   
            for (let i = 0; i <= random(30, 45); i++){
                for (let t = 0; t < 1; t += 0.1) {
                    const couleur = lerpColor(
                        color(255, 0, 0, params.transparenceR), 
                        color(255, 255, 0, params.transparenceJ),
                        t
                      )
                    const y = lerp(random(-200, -250), random(-210, -250), t)
                    stroke(couleur, params.transparence)
                    line(random(40, 48), params.centre2, random(-50, -100),y)
                }
            }
        }

            let existence23 = random(1, 6)
            if (existence23 <= 5){
                for (let i = 0; i <= random(30, 45); i++){
                    for (let t = 0; t < 1; t += 0.1) {
                        const couleur = lerpColor(
                            color(255, 0, 0, params.transparenceR), 
                            color(255, 255, 0, params.transparenceJ),
                            t
                          )
                        const y = lerp(random(-50, -70), random(0, -30), t)
                        stroke(couleur, params.transparence)
                        line(random(40, 48), params.centre2, random(-100, -150),y)
                    }
                }
            }

            let existence24 = random(1, 4)
            if (existence24 <= 3){
                for (let i = 0; i <= random(30, 45); i++){
                    for (let t = 0; t < 1; t += 0.12) {
                        const couleur = lerpColor(
                            color(255, 0, 0, params.transparenceR), 
                            color(255, 255, 0, params.transparenceJ),
                            t
                          )
                        const y = lerp(random(-200, -220), random(-30, -50), t)
                        stroke(couleur, params.transparence)
                        line(random(40, 48), params.centre2, random(-100, -150),y)
                    }
                }
            }
        

        //figure 3
        let existence31 = random(0, 2)
        if (existence31 <= 1){
            for (let i = 0; i <= random(30, 45); i++){
                for (let t = 0; t < 1; t += 0.1) {
                    const couleur = lerpColor(
                        color(255, 0, 0, params.transparenceR), 
                        color(255, 255, 0, params.transparenceJ),
                        t
                      )
                    const y = lerp(random(40, 60), random(150, 220), t)
                    stroke(couleur, params.transparence)
                    line(random(-108, -100), params.centre3, random(100, 150),y)
                }
            }
        }

        let existence32 = random(0, 3)
        if (existence32 <= 1){
            for (let i = 0; i <= random(30, 45); i++){
                for (let t = 0; t < 1; t += 0.1) {
                    const couleur = lerpColor(
                        color(255, 0, 0, params.transparenceR), 
                        color(255, 255, 0, params.transparenceJ),
                        t
                      )
                    const y = lerp(random(30, 50), random(10, 50), t)
                    stroke(couleur, params.transparence)
                    line(random(-108, -100), params.centre3, random(50, 100),y)
                }
            }
        }

        let existence33 = random(0, 3)
        if (existence33 <= 1){
            for (let i = 0; i <= random(30, 45); i++){
                for (let t = 0; t < 1; t += 0.1) {
                    const couleur = lerpColor(
                        color(255, 0, 0, params.transparenceR), 
                        color(255, 255, 0, params.transparenceJ),
                        t
                      )
                    const y = lerp(random(50, 70), random(100, 120), t)
                    stroke(couleur, params.transparence)
                    line(random(-108, -100), params.centre3, random(-150, -250),y)
                }
            }
        }

        let existence34 = random(0, 4)
        if (existence34 <= 1){
            for (let i = 0; i <= random(30, 45); i++){
                for (let t = 0; t < 1; t += 0.1) {
                    const couleur = lerpColor(
                        color(255, 0, 0, params.transparenceR), 
                        color(255, 255, 0, params.transparenceJ),
                        t
                      )
                    const y = lerp(random(250, 270), random(100, 120), t)
                    stroke(couleur, params.transparence)
                    line(random(-108, -100), params.centre3, random(-150, -250),y)
                }
            }
        }
        


}

// -------------------
//    Initialization
// -------------------

function setup() {
    p6_CreateCanvas()
}

function windowResized() {
    p6_ResizeCanvas()
}