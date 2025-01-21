import { FC, useRef, RefObject, useEffect, useState } from "react"
import { renderElement } from "./renderElement"
import { gameData } from "../gameData/gameInitialData/initialData"
import { Viewport } from "./Viewport"

const Canvas: FC = () => {
    const canvasRef: RefObject<HTMLCanvasElement> = useRef<HTMLCanvasElement>(null)

    const [frameIndex, setFrameIndex] = useState(1);
    const [key, setKey] = useState("");

    useEffect(() => {
        const timer = setInterval(() => {
            setFrameIndex(frameIndex => frameIndex + 1);
        }, 40);

        return () => clearInterval(timer);
    });

    const viewport = new Viewport()

    const keyDown = (e) => {
        setKey(e.key)
    }

    const keyUp = () => {
        setKey("")
    }

    useEffect(() => {
        const canvas: HTMLCanvasElement | null = canvasRef.current;
        const ctx: CanvasRenderingContext2D | null = canvas?.getContext('2d')
        renderElement(ctx, gameData, viewport, key)
    }, [frameIndex])

    return (
        <div tabIndex={0} onKeyDown={keyDown} onKeyUp={keyUp}>
            <canvas
                ref={canvasRef}
                width={window.innerWidth}
                height={window.innerHeight}>
            </canvas>
        </div>
    )
}

export default Canvas