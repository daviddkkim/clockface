// Libraries
import React, {Component, CSSProperties} from 'react'
import _ from 'lodash'
import classnames from 'classnames'
import Scrollbar from 'react-scrollbars-custom'

// Styles
import './DapperScrollbars.scss'

interface Props {
  /** Class name for custom styles */
  className?: string
  /** Inline CSS styles */
  style?: CSSProperties
  /** Toggle display of tracks when no scrolling in necessary */
  removeTracksWhenNotUsed: boolean
  /** Toggle display of vertical track when no scrolling in necessary */
  removeTrackYWhenNotUsed: boolean
  /** Toggle display of horizontal track when no scrolling in necessary */
  removeTrackXWhenNotUsed: boolean
  /** Disable scrolling horizontally */
  noScrollX: boolean
  /** Disable scrolling vertically */
  noScrollY: boolean
  /** Disable scrolling */
  noScroll: boolean
  /** Gradient start color */
  thumbStartColor: string
  /** Gradient end color */
  thumbStopColor: string
  /** Hide scrollbar when not actively scrolling */
  autoHide: boolean
  /** Translate content sizes to holder */
  autoSize: boolean
}

export class DapperScrollbars extends Component<Props> {
  public static defaultProps = {
    removeTracksWhenNotUsed: true,
    removeTrackYWhenNotUsed: true,
    removeTrackXWhenNotUsed: true,
    noScrollX: false,
    noScrollY: false,
    noScroll: false,
    thumbStartColor: '#00C9FF',
    thumbStopColor: '#9394FF',
    autoHide: false,
    autoSize: true,
  }

  public render() {
    const {
      removeTracksWhenNotUsed,
      removeTrackYWhenNotUsed,
      removeTrackXWhenNotUsed,
      noScrollX,
      noScrollY,
      className,
      autoHide,
      autoSize,
      noScroll,
      children,
      style,
    } = this.props

    const classname = classnames('dapper-scrollbars', {
      'dapper-scrollbars--autohide': autoHide,
      [`${className}`]: className,
    })

    return (
      <Scrollbar
        translateContentSizesToHolder={autoSize}
        className={classname}
        style={style}
        noDefaultStyles={false}
        removeTracksWhenNotUsed={removeTracksWhenNotUsed}
        removeTrackYWhenNotUsed={removeTrackYWhenNotUsed}
        removeTrackXWhenNotUsed={removeTrackXWhenNotUsed}
        noScrollX={noScrollX}
        noScrollY={noScrollY}
        noScroll={noScroll}
        wrapperProps={{className: 'dapper-scrollbars--wrapper'}}
        contentProps={{className: 'dapper-scrollbars--content'}}
        trackXProps={{className: 'dapper-scrollbars--track-x'}}
        thumbXProps={{
          style: this.thumbXStyle,
          className: 'dapper-scrollbars--thumb-x',
        }}
        trackYProps={{className: 'dapper-scrollbars--track-y'}}
        thumbYProps={{
          style: this.thumbYStyle,
          className: 'dapper-scrollbars--thumb-y',
        }}
      >
        {children}
      </Scrollbar>
    )
  }

  private get thumbXStyle(): CSSProperties {
    const {thumbStartColor, thumbStopColor} = this.props

    return {
      background: `linear-gradient(to right,  ${thumbStartColor} 0%,${thumbStopColor} 100%)`,
    }
  }

  private get thumbYStyle(): CSSProperties {
    const {thumbStartColor, thumbStopColor} = this.props

    return {
      background: `linear-gradient(to bottom,  ${thumbStartColor} 0%,${thumbStopColor} 100%)`,
    }
  }
}
