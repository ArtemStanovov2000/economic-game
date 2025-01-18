import { FC, useRef, RefObject, useEffect, useState } from "react"
import { renderElement } from "./renderElement"
import { gameData } from "../gameData/gameInitialData/initialData"

const Canvas: FC = () => {
    const canvasRef: RefObject<HTMLCanvasElement> = useRef<HTMLCanvasElement>(null)

    const [seconds, setSeconds] = useState(1);

    useEffect(() => {
        const timer = setInterval(() => {
            setSeconds(seconds => seconds + 1);
        }, 50);

        return () => clearInterval(timer);
    });

    useEffect(() => {
        const canvas: HTMLCanvasElement | null = canvasRef.current;
        const ctx: CanvasRenderingContext2D | null = canvas?.getContext('2d')
        renderElement(ctx, gameData)
    }, [seconds])

    return (
        <canvas
            ref={canvasRef}
            width={window.innerWidth}
            height={window.innerHeight}>
        </canvas>
    )
}

export default Canvas