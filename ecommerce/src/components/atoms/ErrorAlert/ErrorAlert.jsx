import React from 'react'
import './ErrorAlert.css'
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const ErrorAlert = (props) => {
  return (
    <>
      <div className='error-alert'>
        <ErrorOutlineIcon />
        <p>{props.message}</p>
      </div>
    </>
  )
}

export default ErrorAlert