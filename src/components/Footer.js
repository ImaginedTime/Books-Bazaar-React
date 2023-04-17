import React from 'react'
import '../styles/footer.css'
import angleUp from '../images/angleUp.svg'
import up from '../images/up.png'
import facebook from '../images/facebook.svg'
import instagram from  '../images/instagram.svg';
import twitter from '../images/twitter.svg'

export default function Footer() {
    // $(document).scroll(function () {
    //     let y = $(this).scrollTop();
    //     if (y > 300)
    //         $(".back-to-top").fadeIn();
    //     else
    //         $(".back-to-top").fadeOut();
    // });

    document.addEventListener('scroll', () => {
        let y = window.scrollY;
        if (y > 300)
            document.querySelector(".back-to-top").style.display = "block"; 
        else
            document.querySelector(".back-to-top").style.display = "none";
    })


  return (
    <footer>
        <div className="container">
            <div className="social-links">
                <a href="#home">
                    <img src={facebook} alt="facebook" />
                </a>
                <a href="#home">
                    <img src={instagram} alt="instagram" />
                </a>
                <a href="#home">
                    <img src={twitter} alt="twitter" />
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
            <img src={up} alt="angle up" />
        </a>
    </footer>
  )
}
