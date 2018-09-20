import React, { Component } from 'react';
import classnames from 'classnames';

import Column from './Column';
import styles from './Grid.module.scss';

class Grid extends Component {
  static displayName = 'Grid';

  static Column = Column;

  render() {
    const {
      children,
      start, center, end,
      top, middle, bottom,
      around, between,
      className
    } = this.props;

    const gridClasses = classnames(
      styles.Grid,
      start && styles[`start-${start}`],
      center && styles[`center-${center}`],
      end && styles[`end-${end}`],
      top && styles[`top-${top}`],
      middle && styles[`middle-${middle}`],
      bottom && styles[`bottom-${bottom}`],
      around && styles[`around-${around}`],
      between && styles[`between-${between}`],
      className
    );

    return <div className={gridClasses}>{children}</div>;
  }
}

export default Grid;