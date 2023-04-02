import React from 'react';

const Section = ({ children, wrapperClassName = "" }) => {
  return (
    <section className={`py-10 ${wrapperClassName}`}>{children}</section>
  )
}

export default Section;
