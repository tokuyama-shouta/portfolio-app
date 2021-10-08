import React, {useReducer, useState} from 'react';
import styles from './Bank.module.scss';

const initialState = {
  savings: 100000,
};

const reducer = (state,action) => {
  switch(action.type){
    case 'DEPOSIT':
      return {...state, savings: state.savings + action.payload};
    case 'WITHDRAW':
      return {...state, savings: state.savings - action.payload};
    default:
      return state;
  }
};

function Bank() {
  const [amount,setAmount] = useState(0);
  const [state,dispatch] = useReducer(reducer, initialState);

  const onDeposit=(amount) => {dispatch({type: 'DEPOSIT', payload: amount})}
  const onWithdraw=(amount) => {dispatch({type: 'WITHDRAW', payload: amount})}
  return (
    <div>
      <h4>残高：{state.savings.toLocaleString()}円</h4>
      <div className={styles.operationArea}>
        <div>
          <input value={amount} onChange={(e)=>{setAmount(e.target.value);}}/>
          <span>円</span>
        </div>
        <div className={styles.buttons}>
          <button onClick={() => onDeposit(amount)}>預け入れ</button>
          <button onClick={() => onWithdraw(amount)}>引き</button>
        </div>
      </div>
    </div>
  )
}

export default Bank
