import React from 'react';
import PropTypes from 'prop-types';

const renderSvg = (size) => {
  if (size === 'large') {
    return (
      <g>
        <path d="M15.9996,11.594a2.00366,2.00366,0,1,1-2.00366,2.00366A2.00388,2.00388,0,0,1,15.9996,11.594m0-1.68708a3.69114,3.69114,0,1,0,3.69074,3.69074A3.69513,3.69513,0,0,0,15.9996,9.90695" />
        <path d="M27.23733,10.69471a11.53736,11.53736,0,0,0-2.931-5.21513c-0.03126-.03206-0.0577-0.06732-0.089-0.09938-0.03286-.03286-0.06973-0.06011-0.10259-0.093a11.5287,11.5287,0,0,0-5.22074-2.935,11.3323,11.3323,0,0,0-5.789,0,11.52609,11.52609,0,0,0-5.21994,2.935c-0.03366.03286-.06973,0.06011-0.10259,0.093-0.03206.03206-.05851,0.06732-0.08976,0.09938a11.52831,11.52831,0,0,0-2.93015,5.21513,11.69294,11.69294,0,0,0,0,5.80581,11.52676,11.52676,0,0,0,2.93015,5.21593c0.03126,0.03206.05771,0.06732,0.08976,0.09858,0.03286,0.03366.06893,0.06091,0.10259,0.09377L16,30.02362l8.11482-8.11482c0.03286-.03286.06973-0.06011,0.10259-0.09377,0.03126-.03126.05771-0.06652,0.089-0.09858a11.5358,11.5358,0,0,0,2.931-5.21593,11.693,11.693,0,0,0,0-5.80581M22.79321,20.94463l-3.89912,3.89912L16,27.73784l-2.89489-2.89409L9.206,20.94383l-0.55221-.55221A10.00247,10.00247,0,0,1,8.653,6.8044l0.55381-.553a9.97128,9.97128,0,0,1,13.58562-.0008L23.347,6.8052a10.00228,10.00228,0,0,1-.0008,13.58642Z" />
      </g>
    );
  }
  return (
    <g>
      <path d="M25.70866,11.094a9.9406,9.9406,0,0,0-2.53-4.49511c-0.027-.02763-0.04981-0.058-0.07679-0.08566-0.02837-.02832-0.06019-0.05181-0.08855-0.08013A9.95556,9.95556,0,0,0,18.50669,3.9033a9.79611,9.79611,0,0,0-4.9971,0,9.95331,9.95331,0,0,0-4.5059,2.52975c-0.02906.02832-.06019,0.05181-0.08855,0.08013-0.02767.02763-.0505,0.058-0.07748,0.08566A9.9328,9.9328,0,0,0,6.30831,11.094a10.06419,10.06419,0,0,0,0,5.00424A9.93146,9.93146,0,0,0,8.83765,20.594c0.027,0.02763.04981,0.058,0.07748,0.085,0.02837,0.029.0595,0.0525,0.08855,0.08082l7.0048,6.99447,7.0048-6.99447c0.02837-.02832.06019-0.05181,0.08855-0.08082,0.027-.02694.04981-0.05734,0.07679-0.085a9.93926,9.93926,0,0,0,2.53-4.4958,10.06422,10.06422,0,0,0,0-5.00424m-4.20385,8.54915-3.15475,3.1501-2.34158,2.33813-2.34223-2.33813L10.5115,19.64246l-0.44679-.44613a8.07225,8.07225,0,0,1-.00065-10.97711l0.44808-.44678a8.0764,8.0764,0,0,1,10.992-.00065L21.9529,8.21987a8.0721,8.0721,0,0,1-.00065,10.97646Z" />
      <circle cx="15.9996" cy="13.59769" r="2.00366" />
    </g>
  );
};

const LocatorIcon = ({ viewBox, height, width, title, className, size, style, fill, ariaHidden, focusable }) => (
  <svg
    width={width}
    height={height}
    viewBox={viewBox}
    className={`${className} svgIcon`}
    style={style}
    fill={fill}
    aria-hidden={ariaHidden}
    focusable={focusable}
  >
    <title>{title}</title>
    {renderSvg(size)}
  </svg>
);

LocatorIcon.propTypes = {
  size: PropTypes.string,
  className: PropTypes.string,
  title: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  viewBox: PropTypes.string,
  style: PropTypes.object,
  fill: PropTypes.string,
  ariaHidden: PropTypes.bool,
  focusable: PropTypes.bool,
};

LocatorIcon.defaultProps = {
  className: 'locatorIcon',
  title: 'NYPL Locator SVG Icon',
  width: '32',
  height: '32',
  viewBox: '0 0 32 32',
};

export default LocatorIcon;
