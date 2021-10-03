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
  return (
    <div>
      <h4>残高：{state.savings.toLocaleString()}円</h4>
      <div className={styles.operationArea}>
        <div>
          <input value={amount} onChange={(e)=>{setAmount(e.target.value)}}/>
          <span>円</span>
        </div>
        <div className={styles.buttons}>
          <button>預け入れ</button>
          <button>引き出し</button>
        </div>
      </div>
    </div>
  )
}

export default Bank
