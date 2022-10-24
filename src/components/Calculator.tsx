import CalculatorButton from './CalculatorButton'
import CalculatorEntry from './CalculatorEntry'
import '../styles/Calculator.css'

function Calculator() {

   return (
      <div className='calculator'>
         <CalculatorEntry/>
         <div className='buttons-container'>
            <CalculatorButton className='symbol' label='('/>
            <CalculatorButton className='symbol' label=')'/>
            <CalculatorButton className='symbol' label='%'/>
            <CalculatorButton className='function' label='CE'/>
            <CalculatorButton className='numeral' label='7'/>
            <CalculatorButton className='numeral' label='8'/>
            <CalculatorButton className='numeral' label='9'/>
            <CalculatorButton className='symbol' label='/'/>
            <CalculatorButton className='numeral' label='4'/>
            <CalculatorButton className='numeral' label='5'/>
            <CalculatorButton className='numeral' label='6'/>
            <CalculatorButton className='symbol' label='*'/>
            <CalculatorButton className='numeral' label='1'/>
            <CalculatorButton className='numeral' label='2'/>
            <CalculatorButton className='numeral' label='3'/>
            <CalculatorButton className='symbol' label='-'/>
            <CalculatorButton className='numeral' label='0'/>
            <CalculatorButton className='numeral' label='.'/>
            <CalculatorButton className='function' label='='/>
            <CalculatorButton className='symbol' label='+'/>
         </div>
      </div>
   )

}

export default Calculator