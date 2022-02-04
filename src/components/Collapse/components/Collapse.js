import React, { useRef, useLayoutEffect, useState } from 'react'
import PropTypes from 'prop-types'

function Collapse({
  children,
  instant,
  lazy,
  onComplete,
  open,
  transitionDuration = '200ms',
  transitionTimingFunction = 'ease-out',
  ...restProps
}) {
  const transition = `height ${transitionDuration} ${transitionTimingFunction}`
  const [renderChildren, setRenderChildren] = useState(lazy ? open : true)
  const ref = useRef()
  const firstRender = useRef(true)

  function openCollapse() {
    const node = ref.current
    requestAnimationFrame(() => {
      node.style.height = node.scrollHeight + 'px'
    })
  }

  function closeCollapse() {
    const node = ref.current
    requestAnimationFrame(() => {
      node.style.height = node.offsetHeight + 'px'
      node.style.overflow = 'hidden'
      requestAnimationFrame(() => {
        node.style.height = 0
      })
    })
  }

  useLayoutEffect(() => {
    if (lazy) {
      if (open) {
        if (renderChildren) {
          openCollapse()
        } else {
          setRenderChildren(true)
        }
      } else {
        closeCollapse()
      }
    } else {
      if (open) {
        openCollapse()
      } else {
        closeCollapse()
      }
    }
  }, [open, lazy, renderChildren])

  useLayoutEffect(() => {
    const node = ref.current
    function handleComplete() {
      node.style.overflow = open ? 'initial' : 'hidden'
      if (open) {
        node.style.height = 'auto'
      }
      if (!open && lazy) {
        setRenderChildren(false)
      }
      if (onComplete) {
        onComplete(open)
      }
    }
    function handleTransitionEnd(event) {
      if (event.target === node && event.propertyName === 'height') {
        handleComplete()
      }
    }
    if (instant || firstRender.current) {
      handleComplete()
      firstRender.current = false
    }
    node.addEventListener('transitionend', handleTransitionEnd)
    return () => {
      node.removeEventListener('transitionend', handleTransitionEnd)
    }
  }, [open, instant, lazy, onComplete])

  useLayoutEffect(() => {
    if (open) {
      openCollapse()
    }
  }, [renderChildren, open])

  return (
    <div
      ref={ref}
      style={{
        transition: instant || firstRender.current ? undefined : transition,
      }}
      {...restProps}
    >
      {renderChildren ? children : null}
    </div>
  )
}

Collapse.propTypes = {
  /**
   * Controls whether or not children are visible.
   */
  open: PropTypes.bool,

  /**
   * Determines if children should render `null` or not while closed.
   */
  lazy: PropTypes.bool,

  /**
   * Instantly expand and collapse children.
   */
  instant: PropTypes.bool,

  /**
   * Called when opening or closing.
   */
  onComplete: PropTypes.func,
}

export default Collapse
