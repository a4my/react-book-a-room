import React from 'react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <h2>Book A Room</h2>
      <p>
        &copy; <span>{year}</span> bookaroom.com - All Rights Copyright Reserved
      </p>
    </footer>
  )
}
