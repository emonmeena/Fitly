import React, { useContext } from "react";
import { View } from "react-native";
import { ScrollView } from "react-native";
import { Text, StyleSheet } from "react-native";
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;
import DataContext from "../../context/DataContext";

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";

const FitnessTracker = (props) => {
  const value = useContext(DataContext);
  return (
    <View style={styles.FitnessTrackerMainScreen}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* <View style={styles.bmiSection}>
          <Text style={styles.title}>Current BMI</Text>
          <View style={styles.bmiContainer}>
            <Text style={styles.numberData}>20</Text>
          </View>
        </View> */}
        <Text style={styles.normalHeading2}>Hii Mayank, your Fitness Progress report is ready</Text>
        <Text style={styles.normalHeading}>BMI Progress {value} </Text>
        <View style={styles.progressContainer}>
          <LineChart
            data={data}
            width={screenWidth}
            height={260}
            verticalLabelRotation={0}
            chartConfig={chartConfig}
            // bezier
          />
        </View>
        <Text style={styles.normalHeading}>Health Stats</Text>
        <View style={styles.healthStatsContainer}>
          <View style={styles.healthStatGreen}>
            <Text style={styles.numberData}>1.7 m</Text>
            <Text style={styles.healthStatTitle}>Height</Text>
          </View>
          <View style={styles.healthStatBlue}>
            <Text style={styles.numberData}>65 Kgs</Text>
            <Text style={styles.healthStatTitle}>Weight</Text>
          </View>
          <View style={styles.healthStatRed}>
            <Text style={styles.numberData}>22.4</Text>
            <Text style={styles.healthStatTitle}>BMI</Text>
          </View>
        </View>
        <View style={styles.bmiInfoContainer}>
          <Text style={styles.normalHeadingWhite}>
            What Your BMI got to say?
          </Text>
          <Text style={styles.normalText}>
            {" "}
            Age-related muscle loss is a natural part of getting older. But
            muscle loss can occur faster after an injury, illness, or any
            prolonged period of inactivity, leading to muscle atrophy. The
            consequences can mean overall weakness, poor balance, and even
            frailty.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const data = {
  // labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      // data: [20, 45, 28, 80, 99, 43, 23, 65, 34, 56, 78, 100],
      data: [20,18,19,22.4,23,22.4],
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // optional
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
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 120,
  useShadowColorFromDataset: true, // optional
};

const styles = StyleSheet.create({
  FitnessTrackerMainScreen: {
    padding: 10,
    backgroundColor: "white",
    flex: 3,
    paddingTop: 50,
  },
  bmiSection: {
    textAlign: "center",
    alignContent: "center",
    // backgroundColor: "#ff005a",
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    color: "white",
  },
  numberData: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
  bmiContainer: {
    // borderColor: '',
    // borderWidth: 1,
    // backgroundColor: "",
    padding: 5,
    borderRadius: 10,
    marginVertical: 20,
    width: 70,
    alignSelf: "center",
  },
  progressContainer: {
    backgroundColor: "#1e90ff",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "white",
    // marginHorizontal: 10,
    paddingVertical: 10,
  },
  normalHeading: {
    fontSize: 24,
    paddingVertical: 10,
    paddingHorizontal: 5,
    color: "#585858",
    // fontWeight: 'bold',
  }, normalHeading2: {
    fontSize: 24,
    paddingVertical: 10,
    paddingHorizontal: 5,
    color: "#1e90ff",
    // fontWeight: 'bold',
  },
  normalHeadingWhite: {
    fontSize: 24,
    color: "white",
  },
  healthStatsContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    // display: 'flex',
    justifyContent: "space-between",
  },
  healthStatGreen: {
    paddingVertical: 20,
    backgroundColor: "#00c9bd",
    height: 100,
    borderRadius: 10,
    width: 120,
    marginBottom: 10,
  },
  healthStatBlue: {
    paddingVertical: 20,
    backgroundColor: "#179be6",
    height: 100,
    borderRadius: 10,
    width: 120,
    marginBottom: 10,
  },
  healthStatRed: {
    paddingVertical: 20,
    backgroundColor: "#e05252",
    height: 100,
    borderRadius: 10,
    width: 120,
    marginBottom: 10,
  },
  healthStatTitle: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
    alignSelf: "center",
  },
  bmiInfoContainer: {
    backgroundColor: "#ec9a3a",
    borderRadius: 10,
    padding: 10,
  },
  normalText: {
    fontSize: 16,
    color: "#DCDCDC",
  },
});

export default FitnessTracker;
