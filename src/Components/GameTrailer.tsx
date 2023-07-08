import useTrailer from '../hooks/useTrailler';

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailer(gameId);
  if (isLoading) return null;
  if (error) throw error;
  const first = data?.results[0];
  return first ? (
    <video src={first.data[480]} poster={first.preview}></video>
  ) : null;
};

export default GameTrailer;
