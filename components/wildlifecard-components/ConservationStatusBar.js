import * as React from "react";
import Svg, {
  Defs,
  Circle,
  LinearGradient,
  Stop,
  Path,
  Text,
} from "react-native-svg";
import {
  CONSERVATION_STATUS,
  CONSERVATION_STATUS_LIST,
} from "../../utils/constants";

let circleX = 0;
const ratio = 0.125;

const getConservationStatus = (circlePosX) => {
  if (circlePosX <= 0 * ratio * 120) {
    circleX = 0.45 * ratio * 120;
    return "NE";
  } else if (circlePosX > 0 * ratio * 120 && circlePosX <= 1 * ratio * 120) {
    circleX = 1 * ratio * 120;
    return "DD";
  } else if (circlePosX > 1 * ratio * 120 && circlePosX <= 2 * ratio * 120) {
    circleX = 2 * ratio * 120;
    return "LC";
  } else if (circlePosX > 2 * ratio * 120 && circlePosX <= 3 * ratio * 120) {
    circleX = 3 * ratio * 120;
    return "NT";
  } else if (circlePosX > 3 * ratio * 120 && circlePosX <= 4 * ratio * 120) {
    circleX = 4 * ratio * 120;
    return "VU";
  } else if (circlePosX > 4 * ratio * 120 && circlePosX <= 5 * ratio * 120) {
    circleX = 5 * ratio * 120;
    return "EN";
  } else if (circlePosX > 5 * ratio * 120 && circlePosX <= 6 * ratio * 120) {
    circleX = 6 * ratio * 120;
    return "CR";
  } else if (circlePosX > 6 * ratio * 120 && circlePosX <= 7 * ratio * 120) {
    circleX = 7 * ratio * 120;
    return "EW";
  } else if (circlePosX > 7 * ratio * 120) {
    circleX = 8 * ratio * 120;
    return "EX";
  }
  return "NE";
};

export function ConservationStatusBar({ props, circlePosX }) {
  const statusText = getConservationStatus(circlePosX);
  const conservationStatus = CONSERVATION_STATUS_LIST.find(
    (stat) => stat.id === statusText
  );
  return (
    <Svg
      width={"160mm"}
      height="20mm"
      viewBox="-10 0 160 8"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Defs>
        <LinearGradient
          id="h"
          x1={20.927031}
          y1={356.59109}
          x2={36.562321}
          y2={356.59109}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(-5.292 -356.59)"
        >
          <Stop
            offset={0}
            stopColor={CONSERVATION_STATUS["EW"].color}
            stopOpacity={1}
          />
          <Stop
            offset={1}
            stopColor={CONSERVATION_STATUS["EX"].color}
            stopOpacity={1}
          />
        </LinearGradient>
        <LinearGradient
          id="k"
          x1={99.102142}
          y1={356.59116}
          x2={114.73745}
          y2={356.59116}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(-5.292 -352.682)"
        >
          <Stop
            offset={0}
            stopColor={CONSERVATION_STATUS["CR"].color}
            stopOpacity={1}
          />
          <Stop
            offset={1}
            stopColor={CONSERVATION_STATUS["EW"].color}
            stopOpacity={1}
          />
        </LinearGradient>
        <LinearGradient
          id="j"
          x1={83.467178}
          y1={356.59106}
          x2={99.102478}
          y2={356.59106}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(-5.292 -352.682)"
        >
          <Stop
            offset={0}
            stopColor={CONSERVATION_STATUS["EN"].color}
            stopOpacity={1}
          />
          <Stop
            offset={1}
            stopColor={CONSERVATION_STATUS["CR"].color}
            stopOpacity={1}
          />
        </LinearGradient>
        <LinearGradient
          id="m"
          x1={67.832176}
          y1={356.59106}
          x2={83.467468}
          y2={356.59106}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(-5.292 -352.682)"
        >
          <Stop
            offset={0}
            stopColor={CONSERVATION_STATUS["VU"].color}
            stopOpacity={1}
          />
          <Stop
            offset={1}
            stopColor={CONSERVATION_STATUS["EN"].color}
            stopOpacity={1}
          />
        </LinearGradient>
        <LinearGradient
          id="l"
          x1={52.197182}
          y1={356.59106}
          x2={67.832474}
          y2={356.59106}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(-5.292 -352.682)"
        >
          <Stop
            offset={0}
            stopColor={CONSERVATION_STATUS["NT"].color}
            stopOpacity={1}
          />
          <Stop
            offset={1}
            stopColor={CONSERVATION_STATUS["VU"].color}
            stopOpacity={1}
          />
        </LinearGradient>
        <LinearGradient
          id="n"
          x1={20.926889}
          y1={356.59109}
          x2={36.56218}
          y2={356.59109}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(-5.292 -352.682)"
        >
          <Stop
            offset={0}
            stopColor={CONSERVATION_STATUS["DD"].color}
            stopOpacity={1}
          />
          <Stop
            offset={1}
            stopColor={CONSERVATION_STATUS["LC"].color}
            stopOpacity={1}
          />
        </LinearGradient>
        <LinearGradient
          id="i"
          x1={5.2916598}
          y1={356.59109}
          x2={20.926889}
          y2={356.59109}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(1.00005 0 0 1.00005 -5.293 -352.7)"
        >
          <Stop
            offset={0}
            stopColor={CONSERVATION_STATUS["NE"].color}
            stopOpacity={1}
          />
          <Stop
            offset={1}
            stopColor={CONSERVATION_STATUS["DD"].color}
            stopOpacity={1}
          />
        </LinearGradient>
      </Defs>

      <Path
        d="M2.502 0A2.498 2.498 0 000 2.503v2.812a2.498 2.498 0 002.503 2.503h13.133V0z"
        fill="url(#i)"
        fillOpacity={1}
      />
      <Path
        d="M122.6 0a2.498 2.498 0 012.503 2.504v2.811a2.498 2.498 0 01-2.503 2.503h-13.132V0z"
        fill="url(#h)"
        fillOpacity={1}
      />
      <Path d="M93.81 0H78.176v7.818h15.636z" fill="url(#j)" fillOpacity={1} />
      <Path d="M109.446 0H93.81v7.818h15.636z" fill="url(#k)" fillOpacity={1} />
      <Path d="M62.54 0H46.906v7.818h15.636z" fill="url(#l)" fillOpacity={1} />
      <Path d="M78.176 0H62.54v7.818h15.636z" fill="url(#m)" fillOpacity={1} />
      <Path d="M46.906 0H31.27v7.818h15.636z" fill="#087465" fillOpacity={1} />
      <Path d="M31.27 0H15.635v7.818H31.27z" fill="url(#n)" fillOpacity={1} />

      <Circle
        r={9}
        cy={4}
        cx={circleX}
        fill={conservationStatus.color}
        fillOpacity={1}
        stroke={conservationStatus.borderColor}
        strokeWidth={2}
        strokeLinecap="round"
        strokeDasharray="none"
        strokeOpacity={1}
        paintOrder="markers stroke fill"
      />

      <Text
        stroke={conservationStatus.borderColor}
        fontSize="6"
        x={circleX}
        y={6}
        textAnchor="middle"
      >
        {statusText}
      </Text>
    </Svg>
  );
}
