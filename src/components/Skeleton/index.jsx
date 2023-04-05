import React from 'react'
import { SkeletonStyle } from './style'
import classNames from 'classnames'

export const Skeleton = ({shape, width, height, children, ...props}) => {
  return (
    <SkeletonStyle {...props} className={classNames(shape, props.className)} style={{width, height}}>{children}</SkeletonStyle>
  )
}
