import React from 'react'

import AuthPageLayout from '../layouts/authPagesLayout/authPagesLayout'
import AuthUser from '../components/authUser/authUser'

import { User } from './Signup'
import useAuthRequest from '../apiHooks/useAuthRequest'

const Login = () => {
  const { handleLogin } = useAuthRequest()
  const handleFormSubmit = (authUser: User) => {
    handleLogin(authUser)
  }

  return (
    <AuthPageLayout>
      <AuthUser
        onFormSubmit={handleFormSubmit}
        title={'Welcome To CryptoFolio'}
        subTitle={'Manage your digital assets with ease and confidence'}
        btnText={'Sign in'}
        pageType={'login'}
      />
    </AuthPageLayout>
  )
}

export default Login
