import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'

import { signInAction } from '../../redux/auth/action'
import BeckendErrors from '../../shared/BackenErrors/BackendErrors'
import { IRootState } from '../../shared/types/rootState.interface'

const SignInComponent = () => {
  const errorState = useSelector((state: IRootState) => state.user.errors)
  const isSubmitting = useSelector((state: IRootState) => state.user.isSubmitting)
  const isLoggedIn = useSelector((state: IRootState) => state.user.isLoggedIn)
  const dispatch = useDispatch()
  const history = useHistory()
  const [submiting, setIsSubmitting] = useState(isSubmitting)
  const [form, setForm] = React.useState({
    email: '',
    password: '',
  })

  React.useEffect(() => {
    if (isLoggedIn === true) {
      history.push('/')
    }
  }, [history, isLoggedIn])

  const submitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault()
  }

  const changeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    const {name, value} = event.currentTarget
    setForm({ ...form, [name]: value })
    
    setIsSubmitting(false)
  }

  const signinHandler = (): void => {
    dispatch(signInAction({
      user: form
    }))
  }

  const {email, password} = form
  return (
      <div className="auth-page">
        <div className="container page">
          <div className="row">

            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Sign Up</h1>
              <p className="text-xs-center">
                <Link to="/register">
                  Need an account?
                </Link>
              </p>

              <BeckendErrors errors={errorState} />

              <form onSubmit={submitHandler}>
                <fieldset>
                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="email"
                      placeholder="Email"
                      name="email"
                      value={email}
                      onChange={changeHandler}
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
                    />
                  </fieldset>

                  <button
                    onClick={signinHandler}
                    className="btn btn-lg btn-primary pull-xs-right"
                    type="submit"
                    disabled={submiting}
                  >
                    Sign in
                  </button>

                </fieldset>
              </form>
            </div>

          </div>
        </div>
      </div>

  )
}

export default SignInComponent

