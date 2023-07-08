import { Button, Text } from '@chakra-ui/react';
import { useState } from 'react';

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [exppanded, setExpanded] = useState(false);
  const limit = 100;
  if (!children) return null;
  if (children.length < limit) return children;

  const summary = exppanded ? children : children.substring(0, limit) + '...';
  return (
    <Text>
      {summary}
      <Button
        onClick={() => setExpanded(!exppanded)}
        fontSize='xs'
        colorScheme='yellow'
        paddingY='0.1px'
        mx={5}
      >
        {exppanded ? '隐藏' : '显示更多'}
      </Button>
    </Text>
  );
};

export default ExpandableText;
