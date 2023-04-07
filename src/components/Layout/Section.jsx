import React from 'react';

const Section = ({ children, wrapperClassName = "", wrapperId = "" }) => {
  return (
    <section className={`py-10 ${wrapperClassName}`} id={wrapperId}>{children}</section>
  )
}

export default Section;
