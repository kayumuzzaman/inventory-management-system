import User from '../models/user.model'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const verifyToken = (req: any) => {
  const token = req.headers['x-access-token']

  if (!token) {
    return false
  }
  try {
    const decoded = jwt.verify(token, `${process.env.TOKENT_KEY}`)
    req.user = decoded
    return req
  } catch (err) {
    return false
  }
}

export const registerService = async (req: any) => {
  try {
    const { firstName, lastName, email, password, userType } = req.body

    // check if all field is here
    if (!(email && password && firstName && lastName)) {
      return {
        statusCode: 400,
        error: 'All input is required'
      }
    }

    // check if user is already exists
    const oldUser = await User.findOne({ email })
    if (oldUser) {
      return {
        statusCode: 409,
        error: 'User already exist, please login!'
      }
    }

    const encryptedPassword = await bcrypt.hash(password, 10)

    const user = await User.create({
      firstName,
      lastName,
      email: email.toLowerCase(),
      userType: userType.toLowerCase(),
      password: encryptedPassword
    })

    return {
      statusCode: 201,
      data: user
    }
  } catch (error) {
    return {
      error: true,
      statusCode: 500
    }
  }
}

export const loginService = async (req: any) => {
  try {
    const { email, password } = req.body

    // Validate user input
    if (!(email && password)) {
      return {
        statusCode: 400,
        message: 'All input is required'
      }
    }
    // Validate if user exist in our database
    const user = await User.findOne({ email })

    if (user && (await bcrypt.compare(password, user.password))) {
      // Create token
      const token = jwt.sign(
        { user_id: user._id, email, userType: user.userType },
        `${process.env.TOKENT_KEY}`,
        {
          expiresIn: '1h'
        }
      )

      return {
        statusCode: 200,
        token
      }
    }
    return {
      statusCode: 400,
      message: 'Invalid credentials'
    }
  } catch (error) {
    return {
      error: true,
      statusCode: 500
    }
  }
}

export const logoutService = async (req: any) => {
  return {
    statusCode: 200,
    data: 'logout'
  }
}
