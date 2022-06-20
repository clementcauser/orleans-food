import {
  Box,
  Heading,
  HStack,
  Image,
  LinkBox,
  LinkOverlay,
  Skeleton,
  Tag,
} from "@chakra-ui/react";
import { Restaurant } from "@prisma/client";
import Link from "next/link";
import { Routes } from "../constants";

type Props = {
  restaurant: Restaurant;
};

const RestaurantCard = ({ restaurant }: Props) => {
  return (
    <LinkBox>
      <Box
        as="article"
        borderWidth="1px"
        borderRadius="2xl"
        maxWidth={{ base: "100%", lg: "xs" }}
        position="relative"
      >
        {restaurant.status === "CLOSED" && (
          <Box
            backgroundColor="black"
            opacity={0.6}
            borderRadius="2xl"
            position="absolute"
            height="100%"
            width="100%"
            top={0}
            left={0}
          />
        )}
        <Box
          backgroundImage={restaurant.imageUrl}
          backgroundRepeat="no-repeat"
          backgroundPosition="center"
          backgroundSize="cover"
          borderRadius="2xl"
          maxHeight="md"
          height={160}
          width="100%"
        />
        <Box p="5">
          <Box>
            <Heading
              as="h4"
              fontWeight="semibold"
              lineHeight="tight"
              fontSize="md"
              noOfLines={1}
            >
              {restaurant.name}
            </Heading>
          </Box>
          {restaurant.tags.length && (
            <HStack mt={1} mb={2}>
              {restaurant.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </HStack>
          )}
          <Link
            href={Routes.RESTAURANT_DETAILS.replace("[id]", restaurant.slug)}
            passHref
          >
            <LinkOverlay />
          </Link>
        </Box>
      </Box>
    </LinkBox>
  );
};

export const RestaurantCardLoading = () => (
  <Box
    as="article"
    borderWidth="1px"
    borderRadius="2xl"
    maxWidth={{ base: "100%", lg: "xs" }}
  >
    <Skeleton height="160px" borderRadius="2xl" />
    <Box p="5">
      <Skeleton height="24px" width="70%" />
      <HStack mt={1} mb={2}>
        <Skeleton height="20px" width="50px" />
        <Skeleton height="20px" width="50px" />
      </HStack>
    </Box>
  </Box>
);

export default RestaurantCard;
