import React from 'react'
import Insurance from './Insurance'
import Calculators from './Calculator'
import Resources from './Resources'
import Company from './Company'
import PaymentMethods from './PaymentMethods'
import CopyRights from './CopyRights'
import FooterContent from './FooterContent'

function Footer() {



  return (
    <div className='font-roboto bg-footer-bg pt-8 pb-5'>
        <div className='w-10/12 container mx-auto'>
         <div className=' grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 '>
            <Insurance />
            <Calculators />
            <Resources />
            <Company />
         </div>
        
        <PaymentMethods />
       
         <FooterContent />
         <CopyRights />
         </div>
    </div>
  )
}

export default Footer