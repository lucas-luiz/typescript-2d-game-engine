import type { Canvas } from "./canvas"
import type { ObjectRenderOptions } from "../types/object"

export class Obj {

    public w
    public h

    public x : number
    public y : number 
    
    //public xSpeed
    //public ySpeed

    public isTranslucid 

    public weight
    
    public color
    
    private canvasReference : Canvas
    
    constructor(canvasEntity: Canvas, objectRenderOptions: ObjectRenderOptions) {

        canvasEntity.addObject(this)

        this.w = objectRenderOptions.w

        this.h = objectRenderOptions.h

        this.x = objectRenderOptions.x

        this.y = objectRenderOptions.y

        this.isTranslucid = false

        //this.xSpeed = 0

        //this.ySpeed = 0

        this.color = objectRenderOptions.color

        this.canvasReference = canvasEntity

    }


    /* private updatePosition(): void {
        
        const lastX = this.x
        const lastY = this.y

        this.x = lastX + this.xSpeed
        this.y = lastY + this.ySpeed 
 
    } */


    draw(): void {

        //this.updatePosition()

        const ctx: CanvasRenderingContext2D = this.canvasReference.context

        ctx.beginPath();
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y , this.w, this.h)
        ctx.closePath();  
    }
}