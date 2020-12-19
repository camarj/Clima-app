/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Proptypes from 'prop-types';

export const Header = ({ titulo }) => {
  return (
    <nav>
      <div className="nav-wrapper light-blue darken-2">
        <a href="#!" className="brand-logo">
          {titulo}
        </a>
      </div>
    </nav>
  );
};

Header.propTypes = {
  titulo: Proptypes.string.isRequired,
};
