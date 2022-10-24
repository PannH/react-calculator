import '../styles/CalculatorButton.css'

function CalculatorButton(params: { label: string, className: string }) {

   return <button className={ params.className }>{ params.label }</button>

}

export default CalculatorButton