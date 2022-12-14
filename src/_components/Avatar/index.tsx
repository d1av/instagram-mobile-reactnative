import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { RootStackParamList } from "../../_routes/RouteStackParams";
import { IUser, IUserData } from "../../_services/UserService/types";
import styles from "./styles";
import { colors } from "../../../app.json";
import { IAvatar } from "./types";

const Avatar = (props: IAvatar) => {
  type navigationTypes = NativeStackNavigationProp<RootStackParamList, "Home">;
  const navigation = useNavigation<navigationTypes>();

  return props.withBorder ? (
    <Image
      style={styles.imageUserWithBorder}
      source={
        props.image
          ? { uri: props.image.uri }
          : props.user.avatar
          ? { uri: props.user.avatar }
          : require("../../_assets/images/user.png")
      }
    />
  ) : (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Profile", props.user);
      }}>
      <Image
        style={styles.imageUser}
        source={
          props.user.avatar
            ? { uri: props.user.avatar }
            : require("../../_assets/images/user.png")
        }
      />
    </TouchableOpacity>
  );
};

export default Avatar;
