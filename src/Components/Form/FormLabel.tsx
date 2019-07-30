// Libraries
import React, {Component} from 'react'

// Types
import {StandardProps} from '../../Types'

interface Props extends StandardProps {
  /** Label Text */
  label: string
  /** Whether this field is required to submit form, adds red required asterisk */
  required?: boolean
}

export class FormLabel extends Component<Props> {
  public static readonly displayName = 'FormLabel'

  public static defaultProps = {
    testID: 'form--label',
  }

  public render() {
    const {label, children, testID, id} = this.props

    return (
      <label className={this.className} data-testid={testID} id={id}>
        <span>
          {label}
          {this.requiredIndicator}
        </span>
        {children}
      </label>
    )
  }

  private get requiredIndicator(): JSX.Element | undefined {
    const {required} = this.props

    if (!required) {
      return
    }

    return <span className="cf-form--label-required">*</span>
  }

  private get className(): string {
    const {className} = this.props

    return className ? `cf-form--label ${className}` : 'cf-form--label'
  }
}