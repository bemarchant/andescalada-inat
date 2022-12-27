import * as React from "react";
import Svg, { G, Path, Circle } from "react-native-svg";

function UserIcon(props) {
  return (
    <Svg
      width={14}
      height={14}
      viewBox="0 0 3.175 3.175"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G transform="matrix(.127 0 0 .127 -13.097 -153.134)" display="inline">
        <Path
          d="M115.627 1205.778a12.5 12.5 0 00-12.5 12.5 12.5 12.5 0 0012.5 12.5 12.5 12.5 0 0012.5-12.5 12.5 12.5 0 00-12.5-12.5zm0 3.076a5.204 5.204 0 015.203 5.203 5.204 5.204 0 01-5.203 5.206 5.204 5.204 0 01-5.205-5.206 5.204 5.204 0 015.205-5.203zm-5.09 9.424c1.153 0 1.986 1.24 2.585 1.5.638.278 1.564.377 2.505.387.942-.01 1.866-.11 2.504-.387.639-.278 1.546-1.662 2.82-1.482.772.109 1.322.753 2.352 1.99.547.656 1.042 1.901.832 2.877-.176.817-.765 1.238-1.625 1.91-.86.672-2.867 1.682-3.994 2.068-1.127.387-2.889.51-2.889.446 0 .064-1.761-.06-2.888-.446s-3.135-1.396-3.994-2.068c-.86-.672-1.45-1.093-1.625-1.91-.21-.976.285-2.221.832-2.877 1.03-1.237 1.58-1.881 2.351-1.99.08-.01.158-.018.235-.018z"
          fill="#fff"
          fillOpacity={1}
          strokeWidth={2.52761}
          strokeLinecap="round"
          strokeLinejoin="round"
          paintOrder="markers stroke fill"
        />
        <Circle
          r={11.55966}
          cy={1218.2782}
          cx={115.62735}
          display="inline"
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

export default UserIcon;
