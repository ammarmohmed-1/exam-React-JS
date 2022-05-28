import React from 'react'

function Footer() {
  return (
    <footer>
        <ul className="Item">
            <li><a href="#">regester</a></li>
            <li><a href="#">forum</a></li>
            <li><a href="#">affiliate</a></li>
            <li><a href="#">FAQ</a></li>
        </ul>
        <ul className='Icons'>
            <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
            <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
            <li><a href="#"><i className="fa-brands fa-instagram"></i></a> </li>
            <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
            <li><a href="#"><i className="fa-brands fa-youtube"></i></a>    </li>
        </ul>
    </footer>
  )
}

export default Footer ;