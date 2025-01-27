import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat
    bg-center bg-[length:90%_auto]'>
        <h4 className='text-center mb-2 text-lg font-Ovo'>Let's Connect</h4>
        <h2 className='text-center text-5xl font-Ovo'>Send me a message</h2>

        <p className='text-center max-w-2x mx-auto mt-5 mb-12 font-Ovo'>
        Share your name, email, and a little about your project or question.
         I would love to hear from you! Once you are ready, click Submit, and I will be in touch soon to help however I can. Looking forward to connecting!
        </p>
    </div>
  )
}

export default Contact