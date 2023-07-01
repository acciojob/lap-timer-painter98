import React, { useState,useEffect } from 'react'

function Time({initialTime}) {
    let [isStart,setIsStart] = useState(false);
    let [lap,setLap] = useState([]);
    let [currTime,setCurrTime] = useState('00:00:00');

    useEffect(()=>{
        if(isStart){
            let timer = setInterval(()=>{
                let {second,minute,hour} = HandleTime();
                setCurrTime(`${Math.abs(hour-initialTime.getHours())}:${Math.abs(minute-initialTime.getMinutes())}:${Math.abs(second-initialTime.getSeconds())}`)
             }
            ,1000)

            return () => clearInterval(timer);
        }
    },[isStart,currTime])

    function HandleTime(){
        let settime = new Date();
        let second = settime.getSeconds();
        let minute = settime.getMinutes();
        let hour = settime.getHours();

        return {second,minute,hour};
    }


    let handleStart = ()=>{
        setIsStart(true);
    }

    let handleStop = ()=>{
        setIsStart(false);
    }

    let handleLap = ()=>{
        lap.push(currTime);
        setLap(lap);
    }

    let handleReset = ()=>{
        setCurrTime('00:00:00');
        setLap([])
    }
  return (
    <div>
      <p>{currTime}</p>
      <div>
        <button onClick={handleStart}>start</button>
        <button onClick={handleStop}>stop</button>
        <button onClick={handleLap}>lap</button>
        <button onClick={handleReset}>reset</button>
        <ul>
        {lap.map((list,idx)=>{
            return (
                <li key={idx}>{list}</li>
            )
        })}
        </ul>
      </div>
    </div>
  )
}

export default Time
