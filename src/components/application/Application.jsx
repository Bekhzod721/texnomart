import React from 'react'
import "./Application.css"
import { Link } from 'react-router-dom'

const Application = () => {
  return (
    <div>
      <div className="container">
        <div className="application">
          <div className="application__bg"> </div>
          <div className="application__content">
            <h2 className='application__content--title'>Ilovani Yuklang</h2>
            <p className='application__content--text'>Haridlarni uydan chiqmagan holda mobil ilova orqali amalga oshiring!</p>
            <div className='qr__code'>
              <img className='qr__code--img' src="https://texnomart.uz/_nuxt/img/quar-code.e14205a.png" alt="QR" />
              <p className='qr__code--text'>Kamerani yo'naltiring va Texnomart ilovasini bepul yuklang</p>
            </div>
            <Link to={"https://play.google.com/store/apps/details?id=com.texnomart.app"} ><img src="https://texnomart.uz/_nuxt/img/play-market-uz.20f41ac.png" alt="" className="playMarke" /></Link>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Application