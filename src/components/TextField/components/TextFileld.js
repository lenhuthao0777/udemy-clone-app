import React, { useCallback } from 'react'
import '../assets/TextFIeld.scss'
function TextFileld({ fieldName, cb, label, vl, placehd }) {
  // const hdChange = useCallback(
  //   (e) => {
  //     const { name, value } = e.target;
  //     cb({ name, value });
  //   },
  //   [cb]
  // );
  const hdChange = (e) => {
    const { name, value } = e.target
    cb({ name, value })
  }

  return (
    <div className='text-field'>
      <label htmlFor=''>{label}</label>
      <input
        type='text'
        name={fieldName}
        placeholder={placehd}
        value={vl}
        onChange={hdChange}
      />
    </div>
  )
}

export default TextFileld
