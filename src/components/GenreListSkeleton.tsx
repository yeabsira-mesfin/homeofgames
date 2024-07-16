import { HStack, ListItem, Skeleton,SkeletonText } from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
        <ListItem paddingY="5px">
            <HStack>
            <Skeleton height="32px" width="32px" borderRadius={8}  />
            <SkeletonText noOfLines={1} width="100px" />
            </HStack>
        </ListItem>
  )
}

export default GenreListSkeleton