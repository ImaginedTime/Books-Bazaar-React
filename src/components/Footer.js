import React from 'react'
import '../styles/footer.css'

export default function Footer() {
  return (
    <footer>
        <div className="container">
            <div className="social-links">
                <a href="#home">
                    <i className="fab fa-facebook"></i>
                </a>
                <a href="#home">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="#home">
                    <i className="fab fa-twitter"></i>
                </a>
            </div>
            <div className="demo-links">
                <p>Copyright &copy; 2023 | All Rights Reserved</p>
                <p>
                    <a href="#home">Privacy Policy</a> |
                    <a href="#home">Terms of Service</a>
                </p>
            </div>
        </div>
        <a href="#home" className="back-to-top">
            <i className="fas fa-angle-up"></i>
        </a>
    </footer>
  )
}
