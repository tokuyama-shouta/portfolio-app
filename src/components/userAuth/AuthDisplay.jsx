import React, {useContext} from 'react'
import { AuthContext } from '../../context/AuthContext'

function AuthDisplay() {
  const auth = useContext(AuthContext)
  return (
    <div>
      {auth.userAuth ? <p>ログアウト中</p> : <p>ログイン中</p>}
    </div>
  )
}

//職務経歴書作成

export default AuthDisplay
