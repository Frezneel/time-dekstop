import MotionNumber from "motion-number"
import { ComponentProps, useEffect, useState } from "react";

const timeFormat: ComponentProps<typeof MotionNumber>["format"] = {
    minimumIntegerDigits: 2,
};

interface TimerProps{
    utc_time: number;
}

const Timer: React.FC<TimerProps> = ({utc_time}) => {

    const [hour, setHours] = useState(0);
    const [minute, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const date = new Date();
            const hour = (date.getUTCHours() + utc_time) % 24;
            const minute = date.getUTCMinutes();
            const second = date.getUTCSeconds();
            setSeconds(second);
            setMinutes(minute);
            setHours(hour);
            // setSeconds((prev) => prev + 1);    
            // if (seconds >= 59) {
            //     setSeconds(0);
            //     setMinutes((prev) => prev + 1);
            //     if (minute >= 59) {
            //         setMinutes(0);
            //         setHours((prev) => prev + 1);
            //         if (hour >= 23) {
            //             setHours(0);
            //         }
            //     }
            // }
        }, 1000);

        return () => clearInterval(interval);
    }, [seconds]);

    return(
    <div className="bg-blue-300 text-3xl font-mono p-2 flex bg-transparent">
        <MotionNumber value={hour}
        format={ timeFormat }/>
        <div>:</div> 
        <MotionNumber value={minute}
        format={ timeFormat }/>
        <div>:</div>
        <MotionNumber value={seconds}
        format={timeFormat}/>
    </div>
    )
}

export default Timer;