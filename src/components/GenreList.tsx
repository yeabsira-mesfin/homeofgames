
import useGenres from "../hooks/useGenres";
import { HStack, List, Image, ListItem, Button } from "@chakra-ui/react";
import GenreListSkeleton from "./GenreListSkeleton";
import { Genre } from "../hooks/useGenres";
interface Props{
  onSelectGenre: (genre:Genre) => void;
}
const GenreList = ({onSelectGenre}:Props) => {
  const { data, isLoading,error } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  if(error){
    return null;
  }
  return (
    <List>
      {isLoading &&
        skeletons.map((skeleton) => (
          
            <GenreListSkeleton  key={skeleton}/>
         
        ))}
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={genre.image_background}
            ></Image>
            <Button onClick={()=>onSelectGenre(genre)} variant='link' fontSize="lg">{genre.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
