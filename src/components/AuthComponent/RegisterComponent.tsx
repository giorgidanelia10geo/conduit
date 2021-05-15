import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import BeckendErrors from '../../shared/BackenErrors/BackendErrors'
import { registerAction } from '../../redux/auth/action'
import { IRootState } from '../../shared/types/rootState.interface'

const RegisterComponent = () => {
  const errorState = useSelector((state: IRootState) => state.user.errors)
  const isSubmitting = useSelector((state: IRootState) => state.user.isSubmitting)
  const isLoggedIn = useSelector((state: IRootState) => state.user.isLoggedIn)
  const dispatch = useDispatch()
  const history = useHistory()
  const [submiting, setIsSubmitting] = useState(isSubmitting)
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
  })

  React.useEffect(() => {
    if (isLoggedIn === true) {
      history.push('/')
    }
  }, [history, isLoggedIn])

  const submitHandler = (ev: React.SyntheticEvent): void => {
    ev.preventDefault()
  }

  const changeHandler = (ev: React.FormEvent<HTMLInputElement>): void => {
    const {name, value} = ev.currentTarget
    setForm({ ...form, [name]: value })

    setIsSubmitting(false)
  }

  const registerHandler = (): void => {
    dispatch(registerAction({
      user: form
    }))
  }

  const {username, email, password} = form
  return (
      <div className="auth-page">
        <div className="container page">
          <div className="row">

            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Sign Up</h1>
              <p className="text-xs-center">
                <Link to="/login">
                  Have an account?
                </Link>
            </p>
      
            <BeckendErrors errors={errorState} />
             
              <form onSubmit={submitHandler}>
                <fieldset>

                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="text"
                      placeholder="Username"
                      name="username"
                      value={username}
                      onChange={changeHandler}
                      required
                    />
                  </fieldset>

                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="email"
                      placeholder="Email"
                      name="email"
                      value={email}
                      onChange={changeHandler}
                      required
                    />
                  </fieldset>

                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={password}
                      onChange={changeHandler}
                      required
                    />
                  </fieldset>

                  <button
                    className="btn btn-lg btn-primary pull-xs-right"
                    type="submit"
                    onClick={registerHandler}
                    disabled={submiting}
                  >
                    Sign up
                  </button>

                </fieldset>
              </form>
            </div>

          </div>
        </div>
      </div>

  )
}

export default RegisterComponent

