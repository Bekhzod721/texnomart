import React from 'react'
import "./CreditPayment.css"

const CreditPayment = () => {
  return (
    <div className='container'>
      <div className="CreditPayment">
        < h3 className="CreditPayment__title">Telefonlar va maishiy texnika muddatli to'lovga</h3>
        <ul className="CreditPayment__list">
          <li className="CreditPayment__item">
            <img className='payment__img' src="https://texnomart.uz/_nuxt/img/installment-1.da8d77c.svg" alt="" />
            <h4 className="payment__title">Muddatli to'lovga sotib olish</h4>
            <p className="payment__text">Texnomartda maishiy texnika mahsulotlari uchun qulay onlayn to'lov</p>
          </li>
          <li className="CreditPayment__item">
            <img className='payment__img' src="https://texnomart.uz/_nuxt/img/installment-2.de0c0ae.svg" alt="" />
            <h4 className="payment__title">Bepul yetkazib berish</h4>
            <p className="payment__text">Texnomartda tovarlarni yetkazib berish shartlari</p>
          </li>
          <li className="CreditPayment__item">
            <img className='payment__img' src="https://texnomart.uz/_nuxt/img/installment-3.575d98a.svg" alt="" />
            <h4 className="payment__title">Mahsulotlar uchun kafolat</h4>
            <p className="payment__text">Texnomartda mahsulotning kafolati va qaytarilishi haqida hamma narsani bilib oling</p>
          </li>
          <li className="CreditPayment__item">
            <img className='payment__img' src="https://texnomart.uz/_nuxt/img/installment-4.4086694.svg" alt="" />
            <h4 className="payment__title">Bonus tizimi</h4>
            <p className="payment__text">Bonus tizimi</p>
          </li>
          <li className="CreditPayment__item">
            <img className='payment__img' src="https://texnomart.uz/_nuxt/img/installment-5.513f513.svg" alt="" />
            <h4 className="payment__title">Yordam</h4>
            <p className="payment__text">Ko'p beriladigan savollar</p>
          </li>
        </ul>
      </div>        
    </div>
  )
}

export default CreditPayment