import React,{useContext} from 'react'
import { AuthContext } from '../../context/AuthContext'

function AuthButton() {
  const auth = useContext(AuthContext);
  const handleSignOut=()=>{
    auth?.setUserAuth(false);
  };
  const handleSignIn=()=>{
    auth?.setUserAuth(true);
  };
  
  return (
    <>
      {auth?.userAuth ? (
        <button onClick={handleSignOut}>ログイン</button>
      ) : (
        <button onClick={handleSignIn}>ログアウト</button>
      )}
    </>
  )
}

export default AuthButton
