import React from 'react'

const Button = ({title, ...rest}) => <button {...rest}>{title}</button>

export default Button