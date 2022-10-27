import { useState } from 'react';
import CalculatorButton from './CalculatorButton'
import CalculatorHistory from './CalculatorHistory'
import '../styles/Calculator.css'

function Calculator() {

   const [ entry, setEntry ] = useState('');
   const [ lastOperation, setLastOperation ] = useState('');
   const [ operationHistory, setOperationHistory ] = useState([]);

   const updateEntry = (action: string) => {

      if (entry === 'ERROR')
         setEntry('');

      switch (action) {

         case 'CLEAR_ENTRY':
            setEntry('');
            break;

         case 'DELETE':
            setEntry((entry) => entry.substring(0, (entry.length - 1)));
            break;

         case 'CALCULATE': {

            setEntry((entry) => {

               if (!entry)
                  return '';

               setLastOperation(entry);
               setOperationHistory(() => {

                  if (operationHistory.includes(entry)) {

                     operationHistory.splice(
                        operationHistory.indexOf(entry),
                        1
                     )

                     return [...operationHistory, entry]

                  } else {

                     return [...operationHistory, entry]

                  };

               });

               try {
                  
                  return String(eval(entry))

               } catch (_) {

                  return 'ERROR'

               }

            })

            break

         }

         default:
            setEntry((entry) => entry += action);
            break;

      };

   };

   return (
      <div className='calculator'>
         <div className='entry-container'>
            <span className='last-operation'>{ lastOperation }</span>
            <span className='entry'>{ entry }</span>
         </div>
         <div className='buttons-container'>
            <CalculatorButton onClick={ () => updateEntry('(') } className='symbol' label='('/>
            <CalculatorButton onClick={ () => updateEntry(')') } className='symbol' label=')'/>
            <CalculatorButton onClick={ () => updateEntry('DELETE') } className='function' label='DEL'/>
            <CalculatorButton onClick={ () => updateEntry('CLEAR_ENTRY') } className='function' label='CE'/>
            <CalculatorButton onClick={ () => updateEntry('7') } className='numeral' label='7'/>
            <CalculatorButton onClick={ () => updateEntry('8') } className='numeral' label='8'/>
            <CalculatorButton onClick={ () => updateEntry('9') } className='numeral' label='9'/>
            <CalculatorButton onClick={ () => updateEntry('/') } className='symbol' label='/'/>
            <CalculatorButton onClick={ () => updateEntry('4') } className='numeral' label='4'/>
            <CalculatorButton onClick={ () => updateEntry('5') } className='numeral' label='5'/>
            <CalculatorButton onClick={ () => updateEntry('6') } className='numeral' label='6'/>
            <CalculatorButton onClick={ () => updateEntry('*') } className='symbol' label='*'/>
            <CalculatorButton onClick={ () => updateEntry('1') } className='numeral' label='1'/>
            <CalculatorButton onClick={ () => updateEntry('2') } className='numeral' label='2'/>
            <CalculatorButton onClick={ () => updateEntry('3') } className='numeral' label='3'/>
            <CalculatorButton onClick={ () => updateEntry('-') } className='symbol' label='-'/>
            <CalculatorButton onClick={ () => updateEntry('0') } className='numeral' label='0'/>
            <CalculatorButton onClick={ () => updateEntry('.') } className='numeral' label='.'/>
            <CalculatorButton onClick={ () => updateEntry('CALCULATE') } className='function' label='='/>
            <CalculatorButton onClick={ () => updateEntry('+') } className='symbol' label='+'/>
         </div>
         <CalculatorHistory operations={ operationHistory } setEntry={ setEntry }/>
      </div>
   )
   
}

export default Calculator