import React from 'react'

interface ErrorProps {
    message: string;
    loggedIn?: boolean | null;
}
const Error: React.FC<ErrorProps> = ({message, loggedIn}) => {
  return (
    <div className="error-message" style={{display: (loggedIn) ? 'block' : 'none'}}>{message}</div>
  )
}

export default Error
