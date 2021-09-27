import React,{useState} from 'react'

function InputForm() {

  //const [name,setName] = useState({first:'', last: ''});
  const [firstName, setFirstName]=useState('');
  const [lastName, setLastName]=useState('');
  return (
    <div>
      <input 
        // value={name.first} onChange={(e)=>
        //   setName((prevName) => ({
        //     ...prevName,
        //     first:e.target.value,
        //   }))
        // }
        value={firstName}
        onChange={(e)=>setFirstName(e.target.value)}
      />
      <input
        // value={name.last} onChange={(e)=>
        //   setName((prevName) => ({
        //     ...prevName,
        //     last:e.target.value,
        //   }))
        // }
        value={lastName}
        onChange={(e)=>setLastName(e.target.value)}
      />
      <p>{firstName}{lastName}</p>
    </div>
  )
}

export default InputForm
