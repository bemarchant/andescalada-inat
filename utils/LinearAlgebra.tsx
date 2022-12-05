import {
  SkPoint,
  sub,
  vec,
} from "@shopify/react-native-skia";

const TOLERANCE = 0.0001;
enum RELATIVE_POSITION 
{
    LEFT, RIGHT, BEHIND, BEYOND, BETWEEN, ORIGIN, DESTINATION
};

export const Orientation2D = (a: SkPoint, b: SkPoint, c: SkPoint) => {

  let ab = sub(b,c);
  let ac = sub(c,a);

  let area = CrossProduct2D(ab,ac);

  if (area > 0 && area < TOLERANCE){
    area = 0;
  }

  if (area < 0 && area > TOLERANCE){
    area = 0;
  }

  if(area > 0){
    return RELATIVE_POSITION.LEFT;
  }

  if(area < 0){
    return RELATIVE_POSITION.RIGHT;
  }

  if ((ab.x * ac.x < 0 || ab.y * ac.y < 0)){
    return RELATIVE_POSITION.BEHIND;
  }

  if (Magnitude2D(ac) > Magnitude2D(ab)){  
    return RELATIVE_POSITION.BEYOND;}

  if (a == c){
    return RELATIVE_POSITION.ORIGIN;
  }

  if (b == c){
    return RELATIVE_POSITION.DESTINATION;
  }

  return RELATIVE_POSITION.BETWEEN;
}

export const Magnitude2D = (v1: SkPoint) => {
  return Math.sqrt(Math.pow(v1.x,2) + Math.pow(v1.y,2))
}
export const CrossProduct2D = (v1: SkPoint, v2: SkPoint) => {
  return (v1.x * v2.y - v1.y * v2.x)
}
export const Normalize = (v1: SkPoint) => {
  let M = Math.sqrt(v1.x*v1.x + v1.y*v1.y);
  return vec(v1.x/M, v1.y/M);
}

export const DotProduct2D = (v1: SkPoint,v2: SkPoint) => {
  return (v1.x*v2.x + v1.y*v2.y);
}

export const OrtogonalDistancePointToLine = (a: SkPoint, n: SkPoint, p: SkPoint) => {
  a = a;
  n = Normalize(n);
  p = p;
  const vecDummy = vec(
    DotProduct2D(sub(a, p), n) * n.x,
    DotProduct2D(sub(a, p), n) * n.y
  );
  const B = sub(sub(a, p), vecDummy);
  const M = Math.sqrt(B.x * B.x + B.y * B.y);
  return M;
};

