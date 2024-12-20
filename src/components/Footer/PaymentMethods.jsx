import React from 'react'

function PaymentMethods() {
  return (
    <div className='rounded flex flex-col items-center lg:flex-row md:justify-between md:bg-white md:bg-opacity-10 pt-2 pr-5 pb-2.5 pl-5'>
           <div>
             <p className='text-white text-center font-bold text-sm mb-2.5'>Payment Methods</p>
             <div className='gap-3 flex justify-between flex-wrap mr-1.5 mb-1.5'>
                <img src="/footer-payment-1-1.avif" alt="" />
                <img src="/footer.avif" alt="" />
                <img src="/footer-payment-1-3.avif" alt="" />
                <img src="/footer-payment-1-4.avif" alt="" />
                <img src="/footer-payment-1-5.avif" alt="" />
                <img src="/footer-payment-1-6.avif" alt="" />
             </div>
           </div>
           <div className='h-[56px] w-[1px] bg-question-info-head hidden lg:block'></div>
           <div>
             <p className='text-white text-center font-bold text-sm m-2.5'>Secured With</p>
             <div className='flex justify-center'>
                <img src="/footer-secured.avif" alt="" />
             </div>

           </div>
           <div className='h-[56px] w-[1px] bg-question-info-head hidden lg:block'></div>
           <div className='flex flex-col'>
               <p className='text-white text-center font-bold text-sm m-2.5'>Follow us on</p>
               <div className='flex justify-between gap-3'>
                  <div className='rounded bg-white bg-opacity-10 h-8 w-8 object-cover'>
                     <img src="/facebook.png" alt="" />
                  </div >
                  <div className='rounded bg-white bg-opacity-10 h-8 w-8 object-cover'>
                     <img src="/twitter.png" alt="" />
                  </div>
                  <div className='rounded bg-white bg-opacity-10 h-8 w-8 object-cover'>
                     <img src="/linkedin.png" alt="" />
                  </div>
                  <div className='rounded bg-white bg-opacity-10 h-8 w-8 object-cover'>
                     <img src="/youtube.png" alt="" />
                  </div>
               </div>
           </div>
    </div>
  )
}

export default PaymentMethods