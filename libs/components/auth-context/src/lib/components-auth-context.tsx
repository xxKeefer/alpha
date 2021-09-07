import React, { ReactNode, useContext, useState } from 'react'

interface AuthData {
  token?: string
  user?: { email: string }
}

interface AuthActions extends AuthData {
  setToken: React.Dispatch<React.SetStateAction<string | undefined>>
  setUser: React.Dispatch<React.SetStateAction<{ email: string } | undefined>>
}

interface AuthProviderProps {
  children: React.FC | ReactNode
}

const AuthContext = React.createContext<AuthActions>({
  setToken: () => undefined,
  setUser: () => undefined
})

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<{ email: string } | undefined>()
  const [token, setToken] = useState<string | undefined>()

  const auth: AuthActions = { token, user, setToken, setUser }
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}
