import '../styles/CalculatorButton.css'

function CalculatorButton(params: { label: string, className: string, onClick: any }) {

   return <button className={ params.className } onClick={ params.onClick }>{ params.label }</button>

}

export default CalculatorButton