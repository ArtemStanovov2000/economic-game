import { FC, useRef, RefObject, useEffect, useState } from "react"
import { renderElement } from "./renderElement"
import { gameData } from "../gameData/gameInitialData/initialData"

const Canvas: FC = () => {
    const canvasRef: RefObject<HTMLCanvasElement> = useRef<HTMLCanvasElement>(null)

    const [frameIndex, setFrameIndex] = useState(1);
    const [key, setKey] = useState("");

    useEffect(() => {
        const timer = setInterval(() => {
            setFrameIndex(frameIndex => frameIndex + 1);
        }, 16);

        return () => clearInterval(timer);
    });

    const keyDown = (e: any) => {
        setKey(e.key)
    }

    const keyUp = () => {
        setKey("")
    }

    const onMouseMove = (e: any) => {
        gameData.coordinates.setCoordinates(
            e.clientX - e.target.offsetLeft,
            e.clientY - e.target.offsetTop,
        )
    }

    useEffect(() => {
        const canvas: HTMLCanvasElement | null = canvasRef.current;
        const ctx: CanvasRenderingContext2D | null | undefined = canvas?.getContext('2d')
        console.time("g")
        renderElement(ctx, gameData, key)
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