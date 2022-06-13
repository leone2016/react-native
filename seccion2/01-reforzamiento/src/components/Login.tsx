import React, { useEffect, useReducer } from 'react'

interface AuthState {
  validando: boolean,
  token: string | null,
  userName: string,
  nombre: string
}
const initialState: AuthState = {
  validando: true,
  token: null,
  userName: '',
  nombre: ''
}

type AuthAction = {
  type: 'logout',
  payload: any
}
const authReducer = (state: AuthState, action:AuthAction):AuthState =>{
   switch (action.type) {
     case 'logout':
       return{
         validando: false,
         token: null,
         nombre: '',
         userName: ''
       }
     default:
       return state;
   }
}

export default function Login() {

  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    
    setTimeout(() => {
      dispatch({type: "logout", payload: ""})
    }, 5500);
  
  }, []);

  if(state.validando){
    return (
    <>
    <h3>Login</h3>
          <div className="alert alert-info">
            Validando . . .
          </div>
      </>
    )
  }
  
  return (
    <div>
      <h3>Login</h3>
      <div className="alert alert-danger">
        No autenticado . . .
      </div>

      <div className="alert alert-success">
        autenticado 
      </div>

      <button className="btn btn-primary">
        Login
      </button> &nbsp;

      <button className="btn btn-danger">
        Logout
      </button>
    </div>
  )
}
