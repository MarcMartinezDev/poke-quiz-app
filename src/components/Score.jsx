const Score = ({ state }) => {

    //lifes.
    const lifes = ["❤","❤","❤"];
    lifes.length = state.lifes;
    
    return (
        <>
            <span>Record personal: {localStorage.getItem("pokeQuizRecord")}</span>
            <div className="flex justify-around w-full bg-[#fcfc32] p-1 my-2 rounded-lg">
                <span>Aciertos: <b>{state.points}</b></span>
                {
                    lifes.length < 1 ?
                    <span className="text-red-700">Sin vidas</span>
                    :
                    <span><b>{lifes}</b> Vidas</span>
                }
            </div>
        </>
    );
}
export default Score;