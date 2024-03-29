import React from 'react';
import PropTypes from 'prop-types';

function TextArea({blogContent, setBlogContent, worningClasses=''}) {

  const blogContentHandler = (ele) => {
    localStorage.setItem('blogContent', ele.target.value);
    setBlogContent(ele.target.value);
  }

  return (
    <textarea value={blogContent} onChange={blogContentHandler} className={`transition-all w-[90%] max-w-[1400px] border border-[#02c2ab] rounded-md min-h-80 max-[400px]:text-lg focus:outline-none box-border p-5 text-2xl placeholder:text-[#02c2ab]/60 ${worningClasses}`} placeholder='Blog Content...' />
  )
}

TextArea.propTypes = {
  blogContent: PropTypes.string.isRequired,
  setBlogContent: PropTypes.func.isRequired,
  worningClasses: PropTypes.string
}

export default TextArea;
