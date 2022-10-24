import { useState } from "react";

function CalculatorEntry() {

   const [entry, setEntry] = useState('(2 + 2) * 5');

   return (
      <div className='entry-container'>
         <span className='entry'>{ entry }</span>
      </div>
   )

}

export default CalculatorEntry