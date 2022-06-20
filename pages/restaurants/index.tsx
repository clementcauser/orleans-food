import { GridItem, SimpleGrid } from "@chakra-ui/react";
import Head from "next/head";
import AppLayout from "../../components/layouts/AppLayout";
import RestaurantCard, {
  RestaurantCardLoading,
} from "../../components/RestaurantCard";
import { APP_NAME } from "../../constants";
import { useGetRestaurantsListQuery } from "../../features/restaurants/restaurantApi";

const RestaurantsPage = () => {
  const { data, isLoading } = useGetRestaurantsListQuery();

  return (
    <>
      <Head>
        <title>Sélection d&apos;un restaurant - {APP_NAME}</title>
      </Head>
      <AppLayout>
        <div>Choisir un restaurant</div>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={3}>
          {isLoading
            ? [1, 2, 3, 4, 5, 6].map((i) => (
                <GridItem key={i}>
                  <RestaurantCardLoading />
                </GridItem>
              ))
            : data?.map((restaurant) => (
                <GridItem key={restaurant.id}>
                  <RestaurantCard restaurant={restaurant} />
                </GridItem>
              ))}
        </SimpleGrid>
      </AppLayout>
    </>
  );
};

export default RestaurantsPage;
