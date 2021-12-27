export async function setRandomMatch(arr) {
    const match = await arr.splice(0, 2)
    return [...match]           
}

//fisher-yates algorithm 
export function shuffle(arr) {
    let current = arr.length, random;
    while(current !== 0) {
        random = Math.floor(Math.random() * current);
        current --;

        [arr[current], arr[random]] = [arr[random], arr[current]];
    }
    return arr;
}