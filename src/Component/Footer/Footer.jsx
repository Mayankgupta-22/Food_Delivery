import React from 'react'
import './Footer.css'

const currYear = new Date().getFullYear();
const Footer = () => {
    return (
        <footer className="footer">
            <p>
                Copyright &copy; {currYear}, Made with 💗 by <strong>Mayank Gupta</strong>
            </p>
        </footer>
    )
}

export default Footer
