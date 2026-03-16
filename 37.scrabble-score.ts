// v.1.0 Brute Force, O(n^2) causee double for loop
// Should do a reverse map
export function score(val: string | undefined): number {
    const map: Record<number, string[]> = {
        1: ["A","E","I","O","U","L","N","R","S","T"],
        2: ["D","G"],
        3: ["B","C","M","P"],
        4: ["F","H","V","W","Y"],
        5: ["K"],
        8: ["J","X"],
        10: ["Q","Z"]
    };
    
    let s = 0;
    if (val === undefined) {
        return 0
    } else {
        for (let i of val) {
            for (const [score, letters] of Object.entries(map)) {
                    if (letters.includes(i.toUpperCase())) {
                    s += Number(score)
                }
            }
        }
    }
    return s
}

// v.2.0 Ezz solution
export function scorev2(val: string | undefined): number {
    const map = new Map<string, number>([
        ["A",1],["E",1],["I",1],["O",1],["U",1],["L",1],
        ["N",1],["R",1],["S",1],["T",1],["D",2],["G",2],
        ["B",3],["C",3],["M",3],["P",3],["F",4],["H",4],
        ["V",4],["W",4],["Y",4],["K",5],["J",8],["X",8],
        ["Q",10],["Z",10]
    ]);
    
    let s = 0
    if (val === undefined) {
        return 0
    } else {
        val = val.toUpperCase()
        for (let i of val) {
            if (map.has(i)) {
                s += map.get(i)!
            }
        }
    }
    return s
}

// v.3.0 Using plain object is faster than Map, O(n) time and O(1) space
export function scorev3(val: string | undefined): number {
    const map: Record<string, number> = {
        A:1, E:1, I:1, O:1, U:1, L:1,
        N:1, R:1, S:1, T:1, D:2, G:2,
        B:3, C:3, M:3, P:3, F:4, H:4,
        V:4, W:4, Y:4, K:5, J:8, X:8,
        Q:10, Z:10
    };
    
    let s = 0
    if (val === undefined) {
        return 0
    } else {
        val = val.toUpperCase()
        for (let i of val) {
            s += map[i] || 0
        }
    }
    return s
}