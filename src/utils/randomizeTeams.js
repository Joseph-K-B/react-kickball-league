const team = [
    'randomTeam',
    'randomTeamTwo',
    'randomTeamThree',
    'randomTeamFour'
]

// const match = []

// const randomizeTeams = async (arr) => {
//     const matchOneArr = []
    // const matchTwoArr = []
    // const randomIndex = Math.floor(Math.random() * arr.length)
    // const newValue = arr.splice(randomIndex);
    // if(matchOneArr.length <= 2 && !matchOneArr.includes(randomIndex)) {
    //     const newArr = matchOneArr.push(newValue)
    //     console.log('AT PUSH', newArr)
    // } 
    
    // else if(matchOneArr.length !== 2 && !matchOneArr.includes(arr[randomIndex]) && matchTwoArr !== 2 && !matchTwoArr.includes(randomIndex)) {
    //     matchTwoArr.push(arr[randomIndex])
    // }
//     return;
// }


//fisher-yates algo
function shuffle(arr) {
    let current = arr.length, random;
    while(current !== 0) {
        random = Math.floor(Math.random() * current);
        current --;

        [arr[current], arr[random]] = [arr[random], arr[current]];
    }
    return arr;
}

console.log('FUNCTION CALL', shuffle(team));
export default shuffle;