import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { BuiltInProviderType } from "next-auth/providers";
import {
  ClientSafeProvider,
  getProviders,
  getSession,
  LiteralUnion,
  signIn,
} from "next-auth/react";
import Head from "next/head";
import { Routes } from "../constants";
import LoginForm from "../features/auth/login/LoginForm";

type Props = {
  providers: Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null;
};

export default function SignIn({ providers }: Props) {
  const formBackground = useColorModeValue("gray.100", "gray.700");
  const googleProvider = providers?.google;

  return (
    <>
      <Head>
        <title>Se connecter - Orléans Food</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Flex height="100vh" alignItems="center" justifyContent="center">
        <Flex direction="column" background={formBackground} p={12} rounded={6}>
          <Heading mb={6}>Connexion</Heading>
          <LoginForm onSubmit={({ email }) => signIn("email", { email })} />

          <Divider />

          <Box mt={6}>
            <div>
              <Button width={"100%"} onClick={() => signIn(googleProvider?.id)}>
                Se connecter avec {googleProvider?.name}
              </Button>
            </div>
          </Box>
        </Flex>
      </Flex>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const providers = await getProviders();
  const session = await getSession();

  if (session) {
    // if user is already authenticated then he gets redirected to the homepage
    return { redirect: Routes.HOME, props: {} };
  } else {
    return {
      props: { providers },
    };
  }
};
