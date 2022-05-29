import * as PIXI from 'pixi.js'

export class Bubble extends PIXI.Sprite{
    private speed:number
    constructor(texture:PIXI.Texture){
        super(texture)
        console.log("I am a bubble")
        this.speed = (0.5 + (Math.random() * 2 ))
        this.x = Math.random() * 800
        this.y = Math.random() * 450
        this.anchor.set(0.5)
    }
    public float(){
        this.y -= this.speed
        if(this.y < -50){
            this.y = 500
            this.x = Math.random() * 850
        }
    }
}