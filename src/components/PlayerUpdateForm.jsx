function PlayerUpdateForm({
    name,
    position,
    setName,
    setPosition,
    handleSubmit,
}) {

    // useEffect(() => {
    //     getTeams()
    //     .then((res) => setTeams(res))
    // }, []);
     
    return (
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Name:</label>
                <input
                    id='name' 
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor='position'>Position:</label>
                <input
                    id='position' 
                    type="text" 
                    value={position} 
                    onChange={(e) => setPosition(e.target.value)}
                />
                <button aria-label='edit player' type="submit">Submit</button>
            </form>
    );
}
export default PlayerUpdateForm