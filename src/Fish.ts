import * as PIXI from 'pixi.js'

export class Fish extends PIXI.Sprite {
    private speed: number
    private deadTexture: PIXI.Texture
    private alive = true
    constructor(texture: PIXI.Texture, deadTexture: PIXI.Texture) {
        super(texture)
        this.deadTexture = deadTexture
        console.log("I am a fish")
        this.speed = (0.5 + (Math.random() * 3))
        this.x = Math.random() * 800
        this.y = Math.random() * 450
        this.anchor.set(0.5)
        this.tint = ((Math.random() * 0.001) + 0.999) * 0xFFFFFF
        this.scale.set(0.4 + (Math.random() * 0.6))
        this.interactive = true


    }

    public swim() {
        if (this.alive) {
            this.x -= this.speed
            if (this.x < - 75) {
                this.x = 1000
                this.tint = ((Math.random() * 0.001) + 0.999) * 0xFFFFFF
            }
        } else {
            if(this.y < 450){
                this.y ++
            } 
        }
    }

    public hitShark(){
        this.alive = false
        this.texture = this.deadTexture
        this.angle = 180
    }
}