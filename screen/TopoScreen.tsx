import { OrtogonalDistancePointToLine} from "../utils/LinearAlgebra";
import {
  Canvas,
  Group,
  SkPoint,
  Points,
  useValue,
  useTouchHandler,
  sub,
  vec,
  Circle,
} from "@shopify/react-native-skia";
import { useState } from "react";

const MIN_DIST = 60;

const climbingRoutePaths: { id: number, path: SkPoint[], color: string, d: number}[] = [
  { "id": 0, "path": [vec(100,50),vec(200,200),vec(80,250),vec(80,400),vec(80,500),vec(200,500),vec(150,560)], "color": "grey", "d" : 0},
  { "id": 1, "path": [vec(50,50),vec(50,500),vec(50,700)], "color": "grey", "d" : 0},
  { "id": 2, "path": [vec(300,50),vec(250,80),vec(300,650),vec(300,700)], "color": "grey", "d" : 0}
];

const TopoScreen = () => {
  
  const [selectedRoute, setSelectedRoute] = useState(climbingRoutePaths[0]);
  const pUserX = useValue(0);
  const pUserY = useValue(0);
  const onTouchHandler = useTouchHandler({
    onActive: ({ x, y}) => {
    pUserX.current = x;
    pUserY.current = y;

    let pUser = vec(pUserX.current, pUserY.current);

    climbingRoutePaths.forEach(p => {
      let dummy = [];
      for (let i = 0; i < p.path.length; i++){
        if(i === p.path.length - 1){
          break;
        }
        else{
          let a = p.path[i];
          let n = sub(p.path[i+1],p.path[i])
          dummy.push(OrtogonalDistancePointToLine(a, n, pUser));
        }
      }
      p.d = dummy.sort()[0];
    });

    let route = climbingRoutePaths.find(r => r.d < MIN_DIST);

    if(route){
      setSelectedRoute(route);
      climbingRoutePaths.forEach(r => r.color='grey');
      route.color = 'red';
    }
  }
  });
  
  const pathPointsComponents = climbingRoutePaths.map((r) => 
  {return(
      <Points
        points={r.path}
        mode="polygon"
        color={r == selectedRoute ? 'red' : 'grey'}
        style="stroke"
        strokeJoin="round"
        strokeCap="round"
        strokeMiter={2}
        strokeWidth={6}
      />)
  }
  );

  return (
    <Canvas onTouch={onTouchHandler} style={{width: 500, height: 1000, backgroundColor: 'red'}}>
    <Group>
      {pathPointsComponents}
       <Circle cx={pUserX} cy={pUserY} r={5} color="blue" />
    </Group>
    </Canvas>
  );
};

export default TopoScreen;
