import { useParams } from 'react-router-dom';
import useGame from '../hooks/useGame';
import { Box, Heading, Spinner, Text } from '@chakra-ui/react';

const GameDetail = () => {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGame(slug!);
  if (isLoading) return <Spinner />;
  if (error) throw error;
  return (
    <Box padding={5}>
      <Heading py={5}>{game?.name}</Heading>
      <Text>{game?.description_raw}</Text>
    </Box>
  );
};

export default GameDetail;
