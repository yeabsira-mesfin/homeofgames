
import useGenres from "../hooks/useGenres";
import { HStack, List, Image, Text, ListItem, Spinner } from "@chakra-ui/react";
import GenreListSkeleton from "./GenreListSkeleton";
const GenreList = () => {
  const { data, isLoading,error } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  if(error){
    return null;
  }
  return (
    <List>
      {isLoading &&
        skeletons.map((skeleton) => (
          <ListItem key={skeleton}>
            <GenreListSkeleton />
          </ListItem>
        ))}
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={genre.image_background}
            ></Image>
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
