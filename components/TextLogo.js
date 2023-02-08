import React from 'react';
import {
  Box,
  Text,
  useColorMode,
  useColorModeValue,
  Image,
  Img,
} from '@chakra-ui/react';
// import Image from 'next/image';
import Link from 'next/link';

export default function TextLogo(props) {
  return (
    <Box cursor="pointer">
      <Link href="/" passHref>
        <Img
          src={'/Thereislife_Text.svg'}
          height={props.height ?? 150}
          width={props.width ?? 150}
          // layout="intrinsic"
          alt="tripper-logo"
        />
      </Link>
    </Box>
  );
}
