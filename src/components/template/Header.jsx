import './Header.css'
import React from 'react'

export default props => {
  const { icon, title = '', subtitle = '' } = props;

  return (
    <header className="header d-none d-sm-flex flex-column">
      <i className={`fa fa-${icon}`}></i> {title}
      <p className="lead text-muted">
        {subtitle}
      </p>
    </header>
  );
};