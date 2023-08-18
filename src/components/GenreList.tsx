import React from "react";
import useGenres, { Genre } from "../hooks/useGenres";
import useData from "../hooks/useData";
import { Button, HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

interface Props{
  onSelectGenre: (genre: Genre) => void
}

const GenreList = ({onSelectGenre}: Props) => {

  const {data, isLoading, error} = useGenres();
  
  return (
    <List>
      {error && <Text>Error Loading</Text>}
      {isLoading && <Spinner/>}
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY='5px'> 
        <HStack>
            <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)}></Image>
            {/* <Text fontSize='lg'>{genre.name}</Text> */}
            <Button onClick={()=> onSelectGenre(genre)} fontSize='lg' variant='link'>{genre.name}</Button>
        </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
