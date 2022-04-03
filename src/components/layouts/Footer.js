import React from 'react'

export const Footer = () => {

  const year = new Date().getFullYear()  
  
  return (
    <>
        <footer className="footer"> © { year } Admin Pro by wrappixel.com </footer>
    </>
  )
}
