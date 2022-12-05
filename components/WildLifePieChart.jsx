import { PieChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import { Kingdom, ClimbingZone } from "../utils/Constants";
const screenWidth = Dimensions.get("window").width;

const WildLifePieChart = () => {
  const data = [
    {
      name: Kingdom.animal,
      population: 10,
      color: "#b1717bff",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
  ];

  return (
    <PieChart
      data={data}
      chartConfig={{
        backgroundColor: "#e26a00",
        backgroundGradientFrom: "#fb8c00",
        backgroundGradientTo: "#ffa726",
        decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
          borderRadius: 16,
        },
        propsForDots: {
          r: "6",
          strokeWidth: "6",
          stroke: "#ffa726",
        },
      }}
      width={screenWidth}
      height={screenWidth * 0.6}
      accessor={"population"}
      backgroundColor={"transparent"}
      paddingLeft={"0"}
      center={[10, 10]}
      absolute
    />
  );
};

export default WildLifePieChart;
