import React from 'react'
import QuestionLists from './QuestionLists'

const Card = () => {
  return (
    <div className='bg-white rounded-lg shadow-md p-20'>
      <div className='text-center'>
        <h1 className='sm: text-xl md:text-2xl font-semibold'>Frequently Asked Question</h1>
        <h3>Answer to common questions about our frontend challenges website</h3>
      </div>

      <div className=''>
        <QuestionLists question='Can I use FrontendPro to prepare for a Frontend Developer interview?' answer='Sure' color='yellow-300' />
        <QuestionLists question='Do I need to have experience in frontend dev to use FrontendPro?' answer='Absolutely no' color='blue-300' />
        <QuestionLists question='How often are new challenges added to FrontendPro?' answer='Every month' color='purple-300' />
        <QuestionLists question='What kind of frontend challenges can I expect to find on FrontendPro?' answer='Beginner, Intermediate and Advanced' color='red-300' />
        <QuestionLists question='Can I use libraries or frameworks on this projects?' answer='You can explore with framework to speed your work' color='green-300' />
      </div>
    </div>
  )
}

export default Card