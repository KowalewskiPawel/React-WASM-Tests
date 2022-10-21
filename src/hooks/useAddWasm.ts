import { useEffect, useState } from 'react';
import init, { add } from "wasm-lib";

export const useAddWasm = (numberOne: number, numberTwo: number) => {
    const [result, setResult] = useState(0);

    useEffect(() => {
        init().then(() => {
          setResult(add(numberOne, numberTwo));
        })
      }, [numberOne, numberTwo]);

      return result;
}