import { useState, useEffect } from "react";

export const Countdown = ({ countdown, setCountdown, setState, state }) => {
  
    const [timer, setTimer] = useState(10);

    //countdown interval 1 sec.
    useEffect(() => {
        let interval = setInterval(() => {

            if(countdown === "restart")
            { 
                setTimer(10);
                setCountdown("start");
            }
            else if (countdown === "start") {
                setTimer(timer - 1);
                if(timer <= 0)
                {
                    setCountdown("no-time");
                    setTimer(0);
                    setState({...state, lifes:state.lifes - 1, result:state.result = "no-time"});
                    if(state.lifes < 1)
                    {
                        setState({...state, 
                        result:state.result = "restart"});
                        setCountdown("stop");
                    }
                };
            }
        }, 1000);

        return () => {
        clearInterval(interval);
        };

    }, [timer,countdown]);

    return (
        <>
            <p className="w-fit">Se acaba el tiempo!  <span className="ml-2 text-[40px] text-[#fcfc32]">{timer}</span></p>
        </>
    );
}
