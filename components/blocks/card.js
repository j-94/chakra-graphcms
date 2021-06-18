import Image from "next/image";
import { Box, Heading, Stack, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";


export default function Hero({ image, navigation, name }) {
  return (
    <Link href={navigation}>
      <Box pt={5}>
        <Box
          as="button"
          transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
          _hover={{ bg: "#ebedf0" }}
          _active={{
            bg: "#dddfe2",
            transform: "scale(0.98)",
            borderColor: "#bec3c9",
          }}
          _focus={{
            boxShadow:
              "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
          }}
          maxW={"445px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.900")}
          boxShadow={"2xl"}
          rounded={"md"}
          p={6}
          overflow={"hidden"}
        >
          <Box
            mt={-6}
            mx={-6}
            mb={6}
            position="relative"
            height={{ base: "175px", md: "300px" }}
          >
            <Image
              className="card-image"
              src={image.url}
              alt={image.title}
              title={image.title}
              layout="fill"
              objectFit="cover"
              quality="30" />
          </Box>
          <Stack>
            <Heading
              color={useColorModeValue("gray.700", "white")}
              fontSize={"2xl"}
              fontFamily={"body"}
            >
              {name}
            </Heading>
          </Stack>
        </Box>
      </Box>
    </Link>
  )
}


