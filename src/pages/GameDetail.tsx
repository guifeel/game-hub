import { useParams } from 'react-router-dom';
import useGame from '../hooks/useGame';
import { Heading, Spinner } from '@chakra-ui/react';
import ExpandableText from '../Components/ExpandableText';

const GameDetail = () => {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGame(slug!);
  if (isLoading) return <Spinner />;
  if (error || !game) throw error;
  return (
    <>
      <Heading py={5}>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
    </>
  );
};

export default GameDetail;
