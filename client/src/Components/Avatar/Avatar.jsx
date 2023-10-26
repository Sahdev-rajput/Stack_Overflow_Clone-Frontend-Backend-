import React from 'react'

const Avatar = ({children,backgroundColor,px,py,color,borderRadius,fontSize,cursor}) => {
  const style={
    backgroundColor,
    padding: py,
    paddingLeft: px,
    paddingRight: px,
    color,
    borderRadius,
    fontSize,
    textAlign:"center",
    cursor:cursor||"none"
  };
  return (
    <div style={style}>{children}</div>
  )
}

export default Avatar