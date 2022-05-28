import React from 'react'

function Offer() {
  return (
    <div className='Offer'>
        <h1>Hurry up! Subscribe our newsletter and get 25% Off</h1>
        <p>Limited time offer for this month. No credit card required.</p>
        <form>
            <input type="text" placeholder='inter your email' />
            <button className='btn btn-outline-primary'>Subscribe</button>
        </form>
    </div>
  )
}

export default Offer