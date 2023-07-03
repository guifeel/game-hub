import { HStack, Image, List, Spinner, Text } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import getCroppedImageUrl from '../services/img-url';

const GenreList = () => {
  const { data, error, isLoading } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <List>
      {data.map((genre) => (
        <HStack paddingY='5px'>
          <Image
            boxSize='32px'
            borderRadius={8}
            src={getCroppedImageUrl(genre.image_background)}
          />
          <Text fontSize={'lg'} key={genre.id}>
            {genre.name}
          </Text>
        </HStack>
      ))}
    </List>
  );
};

export default GenreList;
