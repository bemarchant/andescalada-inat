import * as React from "react";
import Svg, { G, Path, Circle } from "react-native-svg";

const DistributionIcon = (props) => (
  <Svg
    width={60}
    height={60}
    viewBox="0 0 3.175 3.175"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G
      transform="matrix(.12695 0 0 .12752 -8.554 -150.36)"
      style={{
        display: "inline",
      }}
    >
      <Path
        style={{
          display: "inline",
          fill: "gray",
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 1.88068,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          paintOrder: "markers stroke fill",
        }}
        d="M79.888 1180.016c-1.321.01-2.631.241-3.873.691l2.935.061v2.2l-.922.92h-2.203v2.015l-.77.445h-1.54v1.754h5.091l.493.492v2.98h1.578l.748.75c2.397.951 3.376 1.338 5.113 1.86l-.521 2.72-2.967 3.01-1.61 3.112a11.56 11.56 0 0 0 10.006-11.451c0-6.384-5.175-11.558-11.558-11.559zm-9.94 5.67a11.56 11.56 0 0 0-1.62 5.888 11.56 11.56 0 0 0 8.935 11.239l-.908-2.487.002-2.34-.295-2.158v-2.894l-1.125-.301-.416-.723v-1.24z"
      />
      <Circle
        style={{
          display: "inline",
          fill: "none",
          fillOpacity: 1,
          stroke: "#fff",
          strokeWidth: 1.88068,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeOpacity: 1,
          paintOrder: "markers stroke fill",
        }}
        r={11.56}
        cy={1191.575}
        cx={79.887}
      />
    </G>
  </Svg>
);

export default DistributionIcon;
