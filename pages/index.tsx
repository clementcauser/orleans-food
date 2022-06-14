import { Button, Flex } from "@chakra-ui/react";
import type { GetServerSideProps, NextPage } from "next";
import { signOut } from "next-auth/react";
import { protectedPageRoute } from "../utils";

const Home: NextPage = () => {
  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Button onClick={() => signOut()}>Déconnexion</Button>
    </Flex>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) =>
  protectedPageRoute(context);

export default Home;
