// v1.0 Good system
export function findSequence(start: {x: number, y: number, angle: number}, prisms: {id: number, x: number, y: number, angle: number}[]): number[] {
    let hits: number[] = [];
    let currentX = start.x;
    let currentY = start.y;
    let angle = normalizeAngle(start.angle);
    while(true){
        const inpath = prisms.filter(prism => {
            const dy = prism.y - currentY
            const dx = prism.x - currentX
            if(dy === 0 && dx === 0) return false
            const ang = normalizeAngle(Math.atan2(dy, dx) * (180 / Math.PI))
            return anglesAreEqual(ang, angle)
        })
        const sort = inpath.sort((a, b) => {
            const distA = distance(a.x, a.y, currentX, currentY)
            const distB = distance(b.x, b.y, currentX, currentY)
            return distA - distB;
        })
        if (sort.length === 0) break 
        else {
            hits.push(sort[0].id)
            currentX = sort[0].x
            currentY = sort[0].y
            angle = normalizeAngle(angle+sort[0].angle)
        }
    }
    return hits;
}

// v2.0 No need to use squared distance, just use normal distance
// Math.sqrt is computationally expensive, so we can avoid it by comparing squared distances instead.
function distance(x1: number, y1: number, x2: number, y2: number): number {
    const dx = x2 - x1;
    const dy = y2 - y1;
    return dx*dx + dy*dy;
}

// v2.0 Normalize angles without while loops, using modulo operator
function normalizeAngle(angle: number): number {
    let a = angle % 360;
    if (a < 0) a += 360;
    return a;
}

function anglesAreEqual(a1: number, a2: number): boolean {
    const diff = Math.abs(a1 - a2);
    return diff < 1e-1 || Math.abs(diff - 360) < 1e-1;
}