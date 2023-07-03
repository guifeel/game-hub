import { Button, HStack, Image, List, Spinner } from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';
import getCroppedImageUrl from '../services/img-url';

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data, error, isLoading } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <List>
      {data.map((genre) => (
        <HStack paddingY='5px' key={genre.id}>
          <Image
            boxSize='32px'
            borderRadius={8}
            src={getCroppedImageUrl(genre.image_background)}
          />
          <Button
            onClick={() => onSelectGenre(genre)}
            variant='link'
            fontSize={'lg'}
          >
            {genre.name}
          </Button>
        </HStack>
      ))}
    </List>
  );
};

export default GenreList;
