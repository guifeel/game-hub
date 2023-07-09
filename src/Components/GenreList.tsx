import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  Spinner,
} from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import getCroppedImageUrl from '../services/img-url';
import useGameQueryStore from '../store';

const GenreList = () => {
  const { data, error, isLoading } = useGenres();
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <>
      <Heading fontSize='3xl' marginY={5}>
        游戏分类
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <HStack paddingY='5px' key={genre.id} as='li'>
            <Image
              boxSize='32px'
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
              objectFit='cover'
            />
            <Button
              fontWeight={genre.id === selectedGenreId ? 'bold' : 'normal'}
              onClick={() => setSelectedGenreId(genre.id)}
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
