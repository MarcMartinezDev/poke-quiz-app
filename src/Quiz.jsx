import { useState, useRef } from 'react';
import { returnPokemonInfo } from './js/utils';
import Score from './components/Score';
import Results from './components/Results';
import Options from './components/Options';
import Screen from './components/Screen';
import Countdown from './components/Countdown';
import music from './assets/media/pokemon-opening.mp3?url';
import './quiz.css';

const Quiz = () => {

    //Hooks principales.
    const [state, setState] = useState
    ({
        start:false,
        pokemon:[],
        pokemonNames:[],
        points:0,
        lifes:3,
        result:null
    });
    const [countdown, setCountdown] = useState();
    const [sound, setSound] = useState(false);
    const listOptions = useRef();

    return (
        <>
            {
                state.start === false ? 
                //Botón inicio del juego.
                <div className='h-full flex flex-col'>
                    <img className='w-[200px] m-auto h-fit mb-0' src="https://fontmeme.com/permalink/230815/e9a9f1206658a7e7f33f452b014b1e7f.png" alt="poke quiz game" border="0"/>
                    <small className='text-center'>version 0.1.0</small>
                    <button className=' m-auto text-3xl mt-10' onClick={()=> {
                        setState({...state, start:state.start = true});
                        setCountdown("start");
                        returnPokemonInfo(setState, state);
                    }}>
                        Jugar
                    </button>
                    <div className='bg-yellow-200 p-3 text-center font-sans'>
                        <p className='mb-2'>Desarrollado por MarcMartinezDev</p>
                        <div className='flex justify-center'>
                            <a href='https://github.com/MarcMartinezDev'><i className="fa-brands fa-square-github scale-[1.8] mr-10"/></a>
                            <a href='https://www.linkedin.com/in/marc-martinez-her/'><i className="fa-brands fa-linkedin scale-[1.8]"/></a>
                        </div>
                    </div>
                </div>
                :
                //Carga de componentes.
                <main>
                    <div className='quiz relative flex flex-col m-auto h-screen lg:w-[30%] md:w-[50%] sm:w-[60%] xs:w-[90%] xs:text-lg justify-evenly'>
                        <div className='score&countdown'>
                            <div className="flex flex-col justify-between items-center">
                                <Score
                                    state={state}
                                />
                            </div>
                            <div className='justify-center flex'>
                                <Countdown
                                    countdown={countdown}
                                    setCountdown={setCountdown}
                                    state={state}
                                    setState={setState}
                                />
                            </div>
                        </div>
                        <div className='flex flex-col min-h-[500px] justify-between'>
                            <div className='screen'>
                                    <Screen
                                        state={state}
                                    />
                            </div>
                        {
                            state.result === null ?
                            ""
                            :
                            <div className='results'>
                                <Results
                                    listOptions={listOptions}
                                    state={state}
                                    setState={setState}
                                    countdown={countdown}
                                    setCountdown={setCountdown}
                                />
                            </div>
                        }
                            <div className='options'>
                                <Options
                                    state={state}
                                    setState={setState}
                                    listOptions={listOptions}
                                    countdown={countdown}
                                    setCountdown={setCountdown}
                                />
                            </div>
                        </div>
                        <div className=' bottom-1 absolute'>
                            <i className={sound ? "fa-solid fa-volume-high" : "fa-solid fa-volume-off"} onClick={() => sound ? setSound(false) : setSound(true) }/>
                            {
                                sound ?
                                <audio src={music} autoPlay loop></audio>
                                :
                                <audio src={music} autoPlay loop muted></audio>
                            }
                        </div>
                    </div>
                </main>
            }
        </>
    );
}
export default Quiz;