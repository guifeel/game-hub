import { HStack, Icon } from '@chakra-ui/react';
import { Platform } from '../hooks/useGames';
import { BsGlobe } from 'react-icons/bs';
import {
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { IconType } from 'react-icons';

interface Platforms {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Platforms) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
    android: FaAndroid,
  };
  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon as={iconMap[platform.slug]} key={platform.id} color='grey.500'>
          {platform.name}
        </Icon>
      ))}
    </HStack>
  );
};

export default PlatformIconList;
