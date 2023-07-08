import { Box, Heading, Text } from '@chakra-ui/react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import NavBar from '../Components/NavBar';

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Heading py={5}>不太妙</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? '这个页面好像并不存在'
            : '似乎出现了一点小意外，请稍后再试...'}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
