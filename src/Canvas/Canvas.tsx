import { FC, useRef, RefObject, useEffect, useState } from "react"
import { renderElement } from "./renderElement"
import { gameData } from "../gameData/gameInitialData/initialData"

const Canvas: FC = () => {
    const canvasRef: RefObject<HTMLCanvasElement> = useRef<HTMLCanvasElement>(null)

    const [frameIndex, setFrameIndex] = useState(1);
    const [key, setKey] = useState("");
    const [coords, setCoords] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const timer = setInterval(() => {
            setFrameIndex(frameIndex => frameIndex + 1);
        }, 16);

        return () => clearInterval(timer);
    });

    const keyDown = (e) => {
        setKey(e.key)
    }

    const keyUp = () => {
        setKey("")
    }

    const onMouseMove = (e) => {
        setCoords({
            x: e.clientX - e.target.offsetLeft,
            y: e.clientY - e.target.offsetTop,
        })
    }

    useEffect(() => {
        const canvas: HTMLCanvasElement | null = canvasRef.current;
        const ctx: CanvasRenderingContext2D | null = canvas?.getContext('2d')
        console.time("g")
        renderElement(ctx, gameData, key, frameIndex, coords)
        console.timeEnd("g")
    }, [frameIndex])

    return (
        <div tabIndex={0} onKeyDown={keyDown} onKeyUp={keyUp}>
            <canvas
                ref={canvasRef}
                onMouseMove={onMouseMove}
                width={window.innerWidth}
                height={window.innerHeight}>
            </canvas>
        </div>
    )
}

export default Canvas