// Libraries
import React, {Component, CSSProperties} from 'react'

// Types
import {StandardProps} from '../../Types'

// Constants
import {DEFAULT_OFFSET} from '../../Constants/pageLayout'

interface Props extends StandardProps {
  /** If a PageHeaderCenter is present PageHeaderLeft will automatically get assigned this value */
  offsetPixels: number
}

export class PageHeaderLeft extends Component<Props> {
  public static readonly displayName = 'PageHeaderLeft'

  public static defaultProps = {
    offsetPixels: DEFAULT_OFFSET,
    testID: 'page-header--left',
  }

  public render() {
    const {children, testID, id} = this.props

    return (
      <div
        className={this.className}
        style={this.style}
        data-testid={testID}
        id={id}
      >
        {children}
      </div>
    )
  }

  private get className(): string {
    const {className} = this.props

    return className ? `page-header--left ${className}` : 'page-header--left'
  }

  private get style(): CSSProperties | undefined {
    const {offsetPixels} = this.props

    if (offsetPixels === DEFAULT_OFFSET) {
      return
    }

    return {
      flex: `1 0 calc(50% - ${offsetPixels}px)`,
    }
  }
}
