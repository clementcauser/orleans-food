import {
  Box,
  Button,
  HStack,
  Icon,
  IconButton,
  Image,
  Tooltip,
  useColorModeValue,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import Link from "next/link";
import { ComponentProps } from "react";
import { BsCartFill, BsFillPersonFill } from "react-icons/bs";
import { APP_NAME, Routes } from "../../constants";
import { ComponentWithChildren } from "../../types";
import CartModal from "../CartModal";

type ContainerProps = ComponentProps<typeof Box> & ComponentWithChildren;
type Props = ComponentWithChildren;

const Container = ({ children, ...boxProps }: ContainerProps) => (
  <Box
    maxWidth={{ lg: "1080px" }}
    ml="auto"
    mr="auto"
    pl={3}
    pr={3}
    {...boxProps}
  >
    {children}
  </Box>
);

const AppLayout = ({ children }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const backgroundColor = useColorModeValue("white", "gray800");
  const [isTabletOrBigger] = useMediaQuery("(min-width: 48em)");

  return (
    <>
      <Box
        as="nav"
        p={4}
        position="fixed"
        top={0}
        left={0}
        w="100%"
        zIndex={1000}
        borderBottomWidth={1}
        borderBottomColor="blackAlpha100"
        backgroundColor={backgroundColor}
      >
        <Container>
          <HStack alignItems="center" justifyContent="space-between">
            <Image src="/logo.png" alt={`logo ${APP_NAME}`} h="44px" />
            <HStack>
              <Tooltip label="Accéder à mon panier">
                {isTabletOrBigger ? (
                  <Button
                    aria-label="Accéder à mon panier"
                    onClick={() => onOpen()}
                    leftIcon={<Icon as={BsCartFill} />}
                  >
                    Mon panier
                  </Button>
                ) : (
                  <IconButton
                    aria-label="Accéder à mon panier"
                    icon={<Icon as={BsCartFill} />}
                    onClick={() => onOpen()}
                  />
                )}
              </Tooltip>
              <Tooltip label="Accéder à mon compte">
                <Link href={Routes.ACCOUNT} passHref>
                  {isTabletOrBigger ? (
                    <Button
                      aria-label="Accéder à mon compte"
                      leftIcon={<Icon as={BsFillPersonFill} />}
                      as="a"
                    >
                      Mon compte
                    </Button>
                  ) : (
                    <IconButton
                      aria-label="Accéder à mon compte"
                      icon={<Icon as={BsFillPersonFill} />}
                      as="a"
                    />
                  )}
                </Link>
              </Tooltip>
            </HStack>
          </HStack>
        </Container>
      </Box>
      <Container mt="100px">
        <Box as="main">{children}</Box>
      </Container>
      <CartModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default AppLayout;
