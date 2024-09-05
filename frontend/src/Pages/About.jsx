import React from 'react'
import Title from '../Components/Title';
import NewsletterBox from '../Components/NewsletterBox';
import { assets } from '../assets/frontend_assets/assets';

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
      <Title text1={'ABOUT'} text2={'US'}/>

        </div>
      <div className='my-10 flex flex-col  md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>we believe that clothing is more than just fabric—it’s a form of self-expression, a reflection of individuality, and a way to make a statement. Founded in [Year of Establishment], our mission is to bring you high-quality, stylish, and comfortable apparel that fits your unique lifestyle.</p>
          <p>What began as a small idea in [Founder’s Name]’s [location or circumstance] has evolved into a thriving brand dedicated to redefining fashion. Inspired by [briefly describe inspiration, e.g., “the vibrant street style of [City]” or “the need for versatile, everyday wear”], we set out to create a line of clothing that not only looks great but also feels great to wear.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>We are committed to [briefly describe core values, e.g., “sustainability, quality craftsmanship, and inclusivity”]. Each piece in our collection is designed with meticulous attention to detail, using [mention any special materials, techniques, or processes]. We strive to ensure that every item is not only fashionable but also ethically produced.</p>

      </div>
      </div>
      <div className='text-xl py-4'>
       <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance</b>
          <p>we understand that the quality of our clothing is paramount to your satisfaction. Our commitment to delivering exceptional products is reflected in every stage of our process, from design to delivery. Here’s how we ensure that every piece meets our high standards:</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience</b>
          <p>
            we’re dedicated to making your shopping experience as seamless and enjoyable as possible. We understand that time is precious, so we’ve designed our website and services with your convenience in mind. Here’s how we make shopping with us easy and effortless:</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service</b>
          <p>we’re committed to providing exceptional customer service. Whether you have a question about our products, need assistance with an order, or simply want to provide feedback, our team is here to support you every step of the way. Here’s how you can reach us and get the help you need:</p>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default About