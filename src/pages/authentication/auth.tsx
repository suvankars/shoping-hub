import React from 'react'
import styled from 'styled-components'
import SignIn from '../../components/signin'
const Auth = ({currentUser}: any) => {
    return (
        <AuthWrapper>
            <SignIn currentUser={currentUser}/>
        </AuthWrapper>
    )
}

const AuthWrapper = styled.div`

`;

export default Auth
