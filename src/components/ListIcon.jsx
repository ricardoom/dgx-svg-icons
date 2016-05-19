import React from 'react';

const ListIcon = ({ viewBox, height, width, title, className, ref }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={viewBox}
      className={className}
    >
      <title>{title}</title>
      <path d="M23.4829,9.5H7.83a1.0143,1.0143,0,1,1,0-2.0285H23.4829A1.0143,1.0143,0,1,1,23.4829,9.5Z" />
      <path d="M23.4829,19.5285H7.83a1.0143,1.0143,0,1,1,0-2.0285H23.4829A1.0143,1.0143,0,1,1,23.4829,19.5285Z" />
      <path d="M16.8125,14.5h-9a0.977,0.977,0,0,1-1-.9857A1.0155,1.0155,0,0,1,7.83,12.5h8.7651a1.1951,1.1951,0,0,1,1.2178,1A0.9889,0.9889,0,0,1,16.8125,14.5Z" />
      <path d="M16.5947,25.4H7.83a1.0143,1.0143,0,1,1,0-2.0285h8.7651A1.0143,1.0143,0,1,1,16.5947,25.4Z" />
    </svg>
  );
};

ListIcon.propTypes = {
  className: React.PropTypes.string,
  title: React.PropTypes.string,
  ref: React.PropTypes.string,
  height: React.PropTypes.string,
  width: React.PropTypes.string,
  viewBox: React.PropTypes.string,
};

ListIcon.defaultProps = {
  className: 'list-icon',
  title: 'NYPL List SVG Icon',
  ref: 'ListIcon',
  width: '32',
  height: '32',
  viewBox: '0 0 32 32',
};

export default ListIcon;
