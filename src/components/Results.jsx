import { returnPokemonInfo, restartConfig } from "../js/utils";

const Results = ({ state, setState, listOptions, countdown, setCountdown }) => {

    return (
        <>  
        {
            state.result === "ok" || state.result === "nok" || state.result === "restart" || countdown === "no-time" || state.result === "no-time" ?
            <div className="flex flex-col w-full text-center justify-evenly items-center">
                <p className="p-2 rounded-lg w-full" style={state.result === "ok" ? {backgroundColor:"green"} : {backgroundColor:"red"}}>
                    {/* text results */}
                    {
                        state.result === "ok" ? "¡Correcto!" : state.result === "nok" ? `¡Incorrecto! Su nombre es ${state.pokemon[1]}` : state.result === "restart" ? "!Se acabaron las vidas!" : `¡Se acabó el tiempo! Su nombre es ${state.pokemon[1]}`
                    }
                </p>
                {/* get results */}
                {
                    state.result === "restart" ? 
                    <p>
                        ¡Has conseguido <span>{localStorage.getItem("actualPoints")}</span> puntos!
                    </p>
                    :
                    ""
                }
                <button className="btn w-full mt-4" onClick={()=>
                {
                    //call restart configuration.
                    restartConfig(state, setState, listOptions, returnPokemonInfo, setCountdown, countdown);
                }}>
                    {/* text button */}
                    {
                        
                        state.result === "restart" ? "Reiniciar" : state.result === "ok" || state.result === "nok" || countdown === "no-time" ? "Siguiente Pokémon" : ""
                    }
                </button>
            </div>
            :
            ""
        }  
        </>
    );
}
export default Results;