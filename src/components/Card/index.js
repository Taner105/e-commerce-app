import {Box, Button, Image} from "@chakra-ui/react";

import { Link } from "react-router-dom";

const Card = ({item}) => {
  return(
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="3"> 
        <Link to="#/">
            <Image src="https://picsum.photos/200" alt="product" />
            <Box p="6">
                <Box d="flex" alignItems="baseline">
                    21/01/2022
                </Box>
                <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
                    {item.title}

                </Box>
                <Box>
                   {item.price} TL 
                </Box>
            </Box>
        </Link>
        <Button colorScheme="pink">
            Add to basket
        </Button>
    </Box>
  ) 
};

export default Card;
