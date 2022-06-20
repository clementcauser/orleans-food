import { Button, Flex } from "@chakra-ui/react";
import type { GetServerSideProps, NextPage } from "next";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { Routes } from "../constants";
import { protectedPageRoute } from "../utils";

const Home: NextPage = () => {
  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Link href={Routes.RESTAURANTS_SELECTION}>
        <Button as="a">Choisir un restaurant</Button>
      </Link>
      <Button onClick={() => signOut()}>Déconnexion</Button>
    </Flex>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) =>
  protectedPageRoute(context);

export default Home;
