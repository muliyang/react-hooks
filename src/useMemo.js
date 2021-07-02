import React, { useMemo } from "react";

const MemoTest = () => {
  const number = useMemo(() => {
    let num = 0;
    let i = 1;
    while (i < 100000) {
      num += 1;
      i++;
    }
    return num;
  }, []);

  const plusNumber = ()=>{
      let num = 0;
      let i=1;
      while(i<100000){
        num += 1;  
        i++
      }
      return num;
  }
  return (
    <>
      <h4>{number}</h4>
      <h4>{plusNumber()}</h4>
    </>
  );
};

export default MemoTest;
