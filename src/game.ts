import * as PIXI from 'pixi.js'
import { Fish } from "./Fish"
import { Bubble } from "./Bubble"
import { Shark } from './Shark'
import fishImage from "./images/fish.png"
import bubbleImage from "./images/bubble.png"
import waterImage from "./images/water.jpg"
import sharkImage from "./images/shark.png"
import bonesImage from "./images/bones.png"

class Game {
    private pixi : PIXI.Application // canvas element in de html file
    private loader : PIXI.Loader
    private fishes:Fish[] = []
    private bubbles:Bubble[] = []
    private shark:Shark
    constructor(){
        this.pixi = new PIXI.Application({ width: 800, height: 450 })
        document.body.appendChild(this.pixi.view)
        this.loader = new PIXI.Loader()
        this.loader.add('fishTexture', fishImage)
            .add('bubbleTexture', bubbleImage)
            .add('waterTexture', waterImage)
            .add('sharkTexture', sharkImage)
            .add('bonesTexture', bonesImage)
        this.loader.load(() => this.loadCompleted())
    }
    loadCompleted() {
        for(let i = 0; i < 100; i++){
            let fish = new Fish(this.loader.resources["fishTexture"].texture!, this.loader.resources["bonesTexture"].texture!,)
            this.pixi.stage.addChild(fish)
            this.fishes.push(fish)
        }
        for(let i = 0; i < 20; i++){
            let bubble = new Bubble(this.loader.resources["bubbleTexture"].texture!)
            this.pixi.stage.addChild(bubble)
            this.bubbles.push(bubble)
        }
        
        this.shark = new Shark(this.loader.resources["sharkTexture"].texture!)
        this.pixi.stage.addChild(this.shark)
        
        this.pixi.ticker.add((delta) => this.update(delta))
    }
    private update(delta : number){
        for(let fish of this.fishes){
            fish.swim()
            let fishHitShark = this.collision(this.shark, fish)
            if(fishHitShark){
                fish.hitShark()
            }
        }
        for(let bubble of this.bubbles){
            bubble.float()
        }
            this.shark.swim()
    }

    private collision(sprite1:PIXI.Sprite, sprite2:PIXI.Sprite) {
        const bounds1 = sprite1.getBounds()
        const bounds2 = sprite2.getBounds()

        return bounds1.x < bounds2.x + bounds2.width
            && bounds1.x + bounds1.width > bounds2.x
            && bounds1.y < bounds2.y + bounds2.height
            && bounds1.y + bounds1.height > bounds2.y;
    }

}
let g = new Game()

//
// STAP 1 - maak een pixi canvas
//
// const pixi = new PIXI.Application({ width: 800, height: 450 })
// document.body.appendChild(pixi.view)

//
// STAP 2 - preload alle afbeeldingen
//
// const loader = new PIXI.Loader()
// loader.add('fishTexture', fishImage)
//     .add('bubbleTexture', bubbleImage)
//     .add('waterTexture', waterImage)
// loader.load(() => loadCompleted())

//
// STAP 3 - maak een sprite als de afbeeldingen zijn geladen
//


// function loadCompleted() {
//     pixi.ticker.add((delta) => update(delta))
//     for (let i = 0; i < 5; i++) {
//         let fish = new PIXI.Sprite(loader.resources["fishTexture"].texture!)
//         pixi.stage.addChild(fish)
//         fish.anchor.set(0.5)
//         fish.y = Math.random() * pixi.screen.height
//         fish.x = Math.random() * pixi.screen.width
//         fishes.push(fish)
//     }
//     const style = new PIXI.TextStyle({
//         fontSize: 36,
//         fill: 0xFFFFFF
//     })
//     const basicText = new PIXI.Text(`Score: 0 Lives: 3`, style)
//     basicText.x = 10
//     basicText.y = 10
    
//     pixi.stage.addChild(basicText)
// }

// function update(delta: number) {
//     for (let fish of fishes) {
//         fish.x += 5 * delta
//         fish.y += 5 * delta
//         fish.rotation += 0.2
//         if(fish.x > 850){
//             fish.x = -50
//         }
//         if(fish.y > 500){
//             fish.y = -50
//         }
//     }
// }