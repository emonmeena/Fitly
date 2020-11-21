import React from "react";
import { View } from "react-native";
import { Text, StyleSheet } from "react-native";
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";

const FitnessTracker = () => {
  return (
    <View style={styles.FitnessTrackerMainScreen}>
      <View style={styles.bmiSection}>
        <Text style={styles.title}>Current BMI</Text>
        <View style={styles.bmiContainer}>
          <Text style={styles.numberData}>20</Text>
        </View>
      </View>
      <View>
        <Text style={styles.normalHeading}>Your Fitness Progress</Text>
        <Text>Bezier Line Chart</Text>
        <LineChart
          data={data}
          width={screenWidth}
          height={260}
          verticalLabelRotation={0}
          chartConfig={chartConfig}
          bezier
        />
      </View>
      <View>
        <Text style={styles.normalHeading}>Health Stats</Text>
        <View>

        </View>
      </View>
    </View>
  );
};

const data = {
  // labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      // data: [20, 45, 28, 80, 99, 43, 23, 65, 34, 56, 78, 100],
      data: [20, 45, 28, 33, 43, 49],
      color: (opacity = 1) => `rgba(14, 65, 244, ${opacity})`, // optional
      strokeWidth: 3, // optional
    },
  ],
  // legend: ["BMI Progress"] // optional
};


const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0,
  color: (opacity = 1) => `rgba(12, 56, 100, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 120,
  useShadowColorFromDataset: true, // optional
};

const styles = StyleSheet.create({
  FitnessTrackerMainScreen: {
    padding: 10,
    backgroundColor: "white",
    flex: 3,
  },
  bmiSection: {
    textAlign: "center",
    alignContent: "center",
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    color: "#1e90ff",
  },
  numberData: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
  bmiContainer: {
    // borderColor: '',
    // borderWidth: 1,
    backgroundColor: "#1e90ff",
    padding: 5,
    borderRadius: 10,
    marginVertical: 20,
    width: 70,
    alignSelf: "center",
  },
  normalHeading: {
    fontSize: 20,
    color: "#ff008a",
    // fontWeight: 'bold',
  },
});

export default FitnessTracker;
