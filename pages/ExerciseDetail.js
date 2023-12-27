import { View, Text, Image } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import {
  Button,
  Card,
  Avatar,
  IconButton,
  SliderBox,
} from "react-native-paper";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;
export default function ExerciseDetail() {
  const route = useRoute();
  const { name, surname, image } = route.params;
  return (
    <View>
      <Card>
        <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
        <Card.Content>
          <Text variant="titleLarge">Card title</Text>
          <Text variant="bodyMedium">Card content</Text>
        </Card.Content>
        <Card.Actions>
          <Button>Tamamlandı</Button>
        </Card.Actions>
      </Card>
    </View>
  );
}
