import * as PIXI from 'pixi.js'

export class Shark extends PIXI.Sprite{

    private xspeed:number
    private yspeed:number
    constructor(texture:PIXI.Texture){
        super(texture)
        this.xspeed = 0
        this.yspeed = 0
        this.x = Math.random() * 800
        this.y = Math.random() * 450
        this.anchor.set(0.5)

        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e))
        window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e))
    }

    public swim(){
        this.x += this.xspeed
        this.y += this.yspeed
        if(this.x > 950){
            this.x = -100
        }
        if(this.x < -100){
            this.x = 950
        }
        if(this.y > 500){
            this.y = -50
        }
        if(this.y < -50){
            this.y = 500
        }
    }

    onKeyDown(e: KeyboardEvent): void {
        switch (e.key.toUpperCase()) {
            case " ":
                break;
            case "A":
            case "ARROWLEFT":
                this.xspeed = -7
                break
            case "D":
            case "ARROWRIGHT":
                this.xspeed = 7
                break
            case "W":
            case "ARROWUP":
                this.yspeed = -7
                break
            case "S":
            case "ARROWDOWN":
                this.yspeed = 7
                break
        }
    }

    private onKeyUp(e: KeyboardEvent): void {
        switch (e.key.toUpperCase()) {
            case " ":
                break;
            case "A":
            case "D":
            case "ARROWLEFT":
            case "ARROWRIGHT":
                this.xspeed = 0
                break
            case "W":
            case "S":
            case "ARROWUP":
            case "ARROWDOWN":
                this.yspeed = 0
                break
        }
    }
}