import { setScore } from "../js/utils";

const Options = ({ state, setState, listOptions, countdown, setCountdown }) => {
    return (
        <>
            {/* display list of options */}
            <ul ref={listOptions}>
                {
                    countdown === "no-time" || countdown === "stop" ? 
                    ""
                    :
                    <>
                        <img className=' max-w-[250px] m-auto' src="https://fontmeme.com/permalink/230814/5368929e1e71aff1749b3e57d5dc67b8.png" alt="fuente-pokemon" border="0" />
                        {
                        state.pokemonNames.map(option =>
                            <li key={Math.random()*1000} onClick={(e)=> 
                            {
                                setScore(e.target.textContent,state,setState);
                                listOptions.current.style.display = "none";
                                setCountdown("stop");
                            }}>
                                {option}
                            </li>
                        )
                        }
                    </> 
                }
            </ul>
        </>
    );
};
export default Options;