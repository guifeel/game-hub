import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  Spinner,
} from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';
import getCroppedImageUrl from '../services/img-url';

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, error, isLoading } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <>
      <Heading fontSize='3xl' marginY={5}>
        游戏分类
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <HStack paddingY='5px' key={genre.id}>
            <Image
              boxSize='32px'
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
              objectFit='cover'
            />
            <Button
              fontWeight={selectedGenre?.id === genre.id ? 'bold' : 'normal'}
              onClick={() => onSelectGenre(genre)}
              variant='link'
              fontSize={'lg'}
              whiteSpace='normal'
              textAlign='left'
            >
              {genre.name}
            </Button>
          </HStack>
        ))}
      </List>
    </>
  );
};

export default GenreList;
