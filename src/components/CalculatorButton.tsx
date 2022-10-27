import '../styles/CalculatorButton.css'

function CalculatorButton(props: { label: string, className: string, onClick: any }) {

   return <button className={ props.className } onClick={ props.onClick }>{ props.label }</button>

}

export default CalculatorButton