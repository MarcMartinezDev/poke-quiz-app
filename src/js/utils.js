import pokeApi from "./pokeApi";

//return points.
export const setScore = ( userClick, state, setState ) =>
{
    //correct option.
    if(state.pokemon[1] === userClick)
    {
        setState
        ({
            ...state,
            points:state.points + 1,
            result:state.result = "ok",
            
        }); 
    }else
    {
        //game over.
        if(state.lifes < 1)
        {
            setState
            ({
                ...state,
                result:state.result = "restart",
                
            });
            //record.
            if(localStorage.getItem("pokeQuizRecord") < state.points || localStorage.getItem("pokeQuizRecord") === undefined)
            {
                localStorage.setItem("pokeQuizRecord", state.points);
            }
        //incorrect option.
        }else
        {
            setState
            ({
                ...state,
                result:state.result = "nok",
                lifes:state.lifes - 1,
                
            });
        }
    }
    localStorage.setItem("actualPoints", state.points);
};

//timeout.
export const noTime = (countdown, setState, state) =>
{
    if(countdown === "no-time")
    {
        setState({...state, lifes:state.lifes - 1});
    }
}

//next Pokemon info and names.
export const returnPokemonInfo = (setState, state) =>
{
    pokeApi().
    then(data =>
    {
        setState
        ({
            ...state, 
            pokemon:state.pokemon = data,
            pokemonNames:state.pokemon.slice(1,5).sort(() => Math.random() - 0.5)
        });
    });
};

//restart values.
export const restartConfig = (state, setState, listOptions, returnPokemonInfo, setCountdown, countdown) =>
{
    if(state.result === "ok" || state.result === "nok" || countdown === "no-time" )
    {
        setState
        ({
            ...state,
            result:state.result = null,
        });
    }else{
        setState
        ({
            ...state,
            result:state.result = null,
            lifes:state.lifes = 3,
            points:state.points = 0,
        });
    }
    listOptions.current.style.display = "block";
    returnPokemonInfo(setState, state);
    setCountdown("restart");
}