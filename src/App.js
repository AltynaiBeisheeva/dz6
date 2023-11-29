import React, { useEffect, useRef, useState } from 'react';

const AutoIncrementCounter = () => {

  const [count, setCount] = useState(0);


  const countRef = useRef(count);


  useEffect(() => {
    const intervalId = setInterval(() => {

      setCount((prevCount) => prevCount + 1);
      countRef.current = countRef.current + 1;
    }, 1000);


    return () => clearInterval(intervalId);
  }, []);

  return (
      <div>
        <p>Текущее значение счетчика: {count}</p>
        <p>Счетчик внутри useRef: {countRef.current}</p>
      </div>
  );
};

export default AutoIncrementCounter;
