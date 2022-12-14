import { useCallback, useEffect, useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { IUserData } from "../../../../_services/UserService/types";
import * as UserService from "../../../../_services/UserService";
import { colors } from "../../../../../app.json";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import Loading from "../../Loading";

const Search = (props: { filter: string }) => {
  const navigation = useNavigation<any>();

  const [users, setUsers] = useState<IUserData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setUsers([]);
    if (props.filter.length > 2) {
      findUsers();
    }
  }, [props.filter]);

  const findUsers = useCallback(async () => {
    try {
      setIsLoading(true);
      const { data } = await UserService.search(props.filter);
      const usersFormated: IUserData[] = data?.map(
        (user: any, index: number) => {
          const userFormated: IUserData = {
            index: index,
            id: user._id,
            avatar: user.avatar,
            email: user.email,
            followers: user.seguidores,
            following: user.seguindo,
            posts: user.publicacoes,
            name: user.nome
          };
          return userFormated;
        }
      );

      setUsers(usersFormated);
      setIsLoading(false);
    } catch (err: any) {
      setIsLoading(false);
    }
  }, [users]);

  const renderItem = (user: IUserData) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("Profile", user)}
      style={
        user.index && user.index % 2 != 0
          ? styles.backgroundOdd
          : styles.backgroundPair
      }>
      <View style={styles.row}>
        <View>
          <Image
            style={styles.imageUser}
            source={
              user.avatar
                ? { uri: user.avatar }
                : require("../../../../_assets/images/user.png")
            }
          />
        </View>
        <View>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.email}>{user.email}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {users.length > 0 && (
        <FlatList
          data={users}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => renderItem(item)}
          onEndReachedThreshold={0.1}
          ListFooterComponent={() => <Loading isLoading={isLoading} />}
        />
      )}
    </View>
  );
};

export default Search;
