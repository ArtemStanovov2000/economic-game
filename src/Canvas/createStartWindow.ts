export const createStartWindow = (ctx: CanvasRenderingContext2D | null, width: number, height: number) => {
    if (ctx !== null) {
        ctx.fillStyle = "#000005";
        ctx.fillRect(0, 0, width, height);
        ctx.stroke();
    }
}