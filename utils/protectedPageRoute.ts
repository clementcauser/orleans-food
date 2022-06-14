import { GetServerSidePropsContext } from "next";
import { getSession } from "next-auth/react";
import { Routes } from "../constants";

/**
 *  Use this helper only on serverside
 *
 * @param context
 * @returns context if user is authenticated or redirects to the signin page
 */
export const protectedPageRoute = async (
  context: GetServerSidePropsContext,
  redirectTo?: Routes,
  getInitialProps?: () => any
) => {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: { destination: redirectTo ?? Routes.SIGN_IN, permanent: false },
    };
  } else {
    if (getInitialProps) {
      return {
        props: getInitialProps(),
      };
    } else {
      return {
        props: {},
      };
    }
  }
};

export default protectedPageRoute;
