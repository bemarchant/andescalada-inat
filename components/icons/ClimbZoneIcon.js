import * as React from "react";
import Svg, { G, Path, Circle } from "react-native-svg";

function ClimbZoneIcon(props) {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 3.1749999 3.175"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G transform="matrix(.127 0 0 .127 -12.713 -149.832)" display="inline">
        <Path
          d="M112.6 1180.724c-6.384-.001-11.56 5.175-11.56 11.56.004 3.008-.856 3.057 1.243 5.211l4.322-8.459c.182-.371.095-.263.182-.371a.931.931 0 01.324-.254.926.926 0 01.4-.092h5.075a.925.925 0 01.838.523l1.188 3.828 1.193-6.326a.93.93 0 01.549-.535c.123-.046 2.218-.064 2.35-.055a.928.928 0 01.838.719l1.563 13.607a11.56 11.56 0 003.054-7.797c.001-6.384-5.174-11.56-11.558-11.56z"
          fill="#fff"
          fillOpacity={1}
          stroke="none"
          strokeWidth={1.88068}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="none"
          strokeOpacity={1}
          paintOrder="markers stroke fill"
        />
        <Circle
          cy={1192.2831}
          cx={112.60086}
          r={11.55966}
          fill="none"
          fillOpacity={1}
          stroke="#fff"
          strokeWidth={1.88068}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="none"
          strokeOpacity={1}
          paintOrder="markers stroke fill"
        />
      </G>
    </Svg>
  );
}

export default ClimbZoneIcon;
