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
        <QuestionLists/>
      </div>
    </div>
  )
}

export default Card