import React, { useState,useEffect } from 'react'

function Time({initialTime}) {
    let [isStart,setIsStart] = useState(false);
    let [lap,setLap] = useState([]);
    let [currTime,setCurrTime] = useState('00:00:00');

    useEffect(()=>{
        if(isStart){
            let timer = setInterval(()=>{
                let {second,minute,hour} = HandleTime();
                setCurrTime(
                    (hour > 9 ? hour : '0' + hour) + ':' +
                    (minute > 9 ? minute : '0' + minute) + ':'
                    + (second > 9 ? second : '0' + second)
                )
             }
            ,1000)

            return () => clearInterval(timer);
        }
    },[isStart,currTime])

    function HandleTime(){
        const total = Date.parse(new Date())-Date.parse(initialTime);
        const second = Math.floor((total / 1000) % 60);
        const minute = Math.floor((total / 1000 / 60) % 60);
        const hour = Math.floor((total / 1000 / 60 / 60) % 24);

        return {total,second,minute,hour};
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
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleLap}>Lap</button>
        <button onClick={handleReset}>Reset</button>
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
