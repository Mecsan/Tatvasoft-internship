import React from 'react'
import useStyles from '../styles/signup'

function ErrorField({ touch, err }) {
  const { err: errCLass } = useStyles();
  return (
    <>
      {
        touch && err && <span className={errCLass}>{err}</span>
      }
    </>
  )
}

export default ErrorField