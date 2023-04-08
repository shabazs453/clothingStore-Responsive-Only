import React from 'react'

const QuarterCircle = ({ top, right, bottom, left, rotate }) => {
  return (
    <div className='h-[106px] w-[106px]  bg-[var(--color-red)] rounded-tl-[100%] absolute max990:h-[70px] max990:w-[70px]' style={{
      top: top,
      right: right,
      bottom: bottom,
      left: left,
      rotate: rotate,
    }} />
  )
}

export default QuarterCircle