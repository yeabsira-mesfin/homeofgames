import useGenres from "../hooks/useGenres";
import { HStack, List, Image } from "@chakra-ui/react";
const GenreList = () => {
  const { data } = useGenres();
  return (
    <List>
      {data.map((genre) => (
        <List key={genre.id}>
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={genre.image_background}
            ></Image>
          </HStack>
        </List>
      ))}
    </List>
  );
};

export default GenreList;
