import { useState, useRef } from 'react';
import '../styles/CalculatorHistory.css'

function OperationHistory(props: { operations: string[], setEntry: Function }) {
   
   const operationsContainerRef = useRef(null)

   const handleDisplayButtonClick = () => {

      const { current: opContainer } = operationsContainerRef;

      if (opContainer.dataset.displayed === 'false')
         opContainer.dataset.displayed = 'true'
      else
         opContainer.dataset.displayed = 'false'

   }

   const handleOperationButtonClick = (event: any) => {

      const operation = props.operations[event.target.dataset.index]
      
      props.setEntry(operation);

   }

   return (
      <div className='history'>
         <div ref={ operationsContainerRef } data-displayed='false' className='operations-container'>
            { !props.operations.length ? <span className='empty'>History is empty.</span> : props.operations.map((op) => <button onClick={ handleOperationButtonClick } data-index={ props.operations.indexOf(op) }>{ op }</button>) }
         </div>
         <button onClick={ handleDisplayButtonClick } className='display-button'>
            <i className='fa-solid fa-clock-rotate-left'></i>
         </button>
      </div>
   )

}

export default OperationHistory