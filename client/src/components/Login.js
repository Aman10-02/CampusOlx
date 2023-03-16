import React from 'react'
import styled from 'styled-components'

function Login() {


    const google = () => {
        window.open("http://localhost:5000/auth/google", "_self");
    };
    const outlook = () => {
        window.open("http://localhost:5000/auth/outlook", "_self");
    };

  return (
    <div className='bodyContainer'>
            <LoginContainer>
                login using
                <Google onClick={google}>
                    Google
                </Google>
                <Microsoft onClick={outlook}>
                    Microsoft
                </Microsoft>
            </LoginContainer>
    </div>
  )
}

export default Login

const LoginContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
`
const Google = styled.div``
const Microsoft = styled.div``