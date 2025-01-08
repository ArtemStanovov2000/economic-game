import { FC, useRef, RefObject, useEffect } from "react"
import { createStartWindow } from "./createStartWindow"
import { renderElement } from "./renderElement"

const Canvas: FC = () => {
    const canvasRef: RefObject<HTMLCanvasElement> = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas: HTMLCanvasElement | null = canvasRef.current;
        const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d')
        createStartWindow(ctx, window.innerWidth, window.innerHeight);
        renderElement(ctx)
    }, [])

    return (
        <canvas 
        ref={canvasRef} 
        width={window.innerWidth} 
        height={window.innerHeight}>
        </canvas>
    )
}

export default Canvas