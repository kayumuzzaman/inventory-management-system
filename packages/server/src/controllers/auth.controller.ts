import {
  loginService,
  logoutService,
  registerService,
  verifyToken
} from '../services/auth.service'

export const userRegister = async (req: any, res: any) => {
  if (verifyToken(req)) {
    const response = await registerService(req)
    return res.status(response.statusCode).send(response)
  }
  return res.status(401).send('Invalid token')
}

export const userLogin = async (req: any, res: any) => {
  const response = await loginService(req)
  return res.status(response.statusCode).send(response)
}

export const userLogout = async (req: any, res: any) => {
  const response = await logoutService(req)
  return res.status(response.statusCode).send(response)
}
