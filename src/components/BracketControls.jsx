
export default function BracketControls({
    handleResetClick,
    handleShuffleClick,
    handleMatchClick
}) {
    return(
        <>
        <div className="controlDiv">
            <button onClick ={handleResetClick}>Reset</button>
            <button onClick ={handleShuffleClick}>Shuffle Teams</button>
            <button onClick = {handleMatchClick}>Set Match</button>
        </div>
        </>
    )
}