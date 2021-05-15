import React from 'react'
import { IBackendError } from './types'

export default function BackendErrors({ errors }: { errors: IBackendError | null }) {
  return (
    <ul className="error-messages">
      {
       errors ? Object.keys(errors).map((name: string) => {
          return <li key={name}>{name} {errors[name].join(', ')}</li>
        }) : null
      }
    </ul>
  )
}
