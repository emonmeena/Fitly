import React, { useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import ReadArticle from "./ReadArticle";
import Collection from "./Collection";
import YogaArticle from "./YogaArticle";

const LifeStyleStack = createStackNavigator();

const LifeStyle = () => {
  return (
    <LifeStyleStack.Navigator>
      <LifeStyleStack.Screen name="LifeStyle" component={LifeStyleScreen} />
      <LifeStyleStack.Screen name="ReadArticle" component={ReadArticle} />
    </LifeStyleStack.Navigator>
  );
};

const LifeStyleScreen = () => {
  useEffect(() => {
    articlesAPI();
  });

  const articlesAPI = async () => {};

  return (
    <View style={styles.screenStyle}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Text style={styles.headingStyle}>
            Article Collections
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {articleCollections.map((article, index) => (
              <Collection
                leftMargin={index == 0 ? 0 : 10}
                key={index}
                urlToImage={article.image}
                title={article.title}
              />
            ))}
          </ScrollView>
        </View>
        <View>
          <Text style={styles.headingStyle}>Yoga For You </Text>
          {articles.map((article) => (
            <YogaArticle
              key={article.pose_name}
              title={article.pose_name}
              benefits={article.benefits}
              description={article.description}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screenStyle: {
    backgroundColor: "white",
    paddingHorizontal: 10,
  },
  headingStyle: {
    fontSize: 24,
    paddingTop: 15,
    paddingBottom: 7,
    fontWeight: "bold",
    color: "gray",
  },
  title: {
    fontSize: 40,
  },
});

export default LifeStyle;

const articleCollections = [
  {
    image:
      "https://images.unsplash.com/photo-1566501206188-5dd0cf160a0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    title: "Yoga",
  },
  {
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1035&q=80",
    title: "Diet",
  },
  {
    image:
      "https://images.unsplash.com/photo-1589955791915-526198ae4ee9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    title: "Exercise",
  },
  {
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    title: "Meditation",
  },
  {
    image:
      "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    title: "Fitness 360",
  },
];

const articles = [
  {
    file_reference: "bird_of_paradise_revolved.html",
    pose_name: "Revolved Bird of Paradise Pose",
    sanskrit_name: "Parivṛtta Svarga Dvijāsana",
    translation: [
      "parivṛtta = revolved",
      "svarga = heaven",
      "dvija = twice born",
      "āsana = posture",
    ],
    category: "Standing / Balancing",
    difficulty: "Expert",
    description: [
      "From ",
      "chair_twist.html",
      " pose, the lower arm reaches back around the legs as the upper arm wraps around the back and the fingers of the respective hands eventually meet and interlace.  One foot stays rooted into the earth and straightens while the opposite leg comes up with a bent knee.  Once you are standing upright extend the leg towards the sky.  The ribcage is lifted and the heart is open in the full expression of the pose.  The gaze is forward.",
    ],
    benefits:
      "Increases the flexibility of the spine and back and stretches the shoulders.  Strengthens the legs.  Increases flexibility of the hip and knee joints.  Improves balance.  Opens the groin.  Stretches the hamstrings.",
  },
  {
    file_reference: "blissful_baby.html",
    pose_name: "Happy Baby Pose",
    sanskrit_name: "Ānanda Bālāsana",
    translation: ["ānanda = happy", "bāla = child", "āsana = posture"],
    alt_name: "Blissful Baby / Dead Bug",
    category: "Supine / Balancing",
    difficulty: "Beginner",
    description: [
      "From a supine position, on your back, the knees are bent slightly wider than the hips.  The ankles and shins track the knees in a 90 degree angle perpendicular to the earth.  The hands grip the inside sole of the flexed feet (if you have difficultly holding the feet loop a strap over each sole) and push the knees down, coaxing the thighs in toward the torso, lengthening the spine, releasing the tail bone towards the earth and extending the base of the skull away from the back of the neck.  The gaze is up towards the sky.",
    ],
    benefits:
      "Gently stretches the inner groins and the back spine.  Calms the brain and helps relieve stress and fatigue.",
  },
  {
    file_reference: "boat_full.html",
    pose_name: "Boat Pose",
    sanskrit_name: "Nāvāsana",
    translation: ["nāva = boat", "āsana = posture"],
    category: "Seated / Balancing",
    difficulty: "Intermediate",
    description: [
      "From a seated position the feet are lifted up so that the thighs are angled about 45-50 degrees relative to the earth.  The tailbone is lengthened into the earth and the pubis pulls toward the navel.  The shoulder blades are spread across the back and the hands reach around the back of the calves, with legs pulled towards the body.  The chin is tipped slightly toward the sternum so that the base of the skull lifts lightly away from the back of the neck.  Gaze is forward.",
    ],
    benefits:
      "Strengthens the abdomen, hip flexors, and spine.  Stimulates the kidneys, thyroid and prostate glands, and intestines.  Helps relieve stress.  Improves digestion.",
  },
  {
    file_reference: "boat_half.html",
    pose_name: "Half Boat Pose",
    sanskrit_name: "Ardha Nāvāsana",
    translation: ["ardha = half", "nāva = boat", "āsana = posture"],
    category: "Seated / Balancing",
    difficulty: "Beginner",
    description: [
      "From a seated position the hands are gripped around the back of the legs and the knees are bent in a 90 degree angle.  Both legs are pulled in towards the abdomen.  The core is engaged to maintain balance on the sits bones (be sure that the back does not round).  The front of the torso lengthens between the pubis and top of the sternum as the spine extends in both directions reaching up to the sky and rooting down to the earth.  The gaze is forward and Bandhas are engaged.",
    ],
    benefits:
      "Strengthens the abdomen, hip flexors and spine.  Stimulates the kidneys, thyroid, prostate glands and intestines.  Helps relieve stress.  Improves digestion.",
  },
];
