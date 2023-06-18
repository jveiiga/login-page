import {
    Avatar,
    Flex,
    Image,
    Wrap,
    WrapItem,
} from "@chakra-ui/react"

import { AuthContext } from "../../providers/AuthProvider"
import { useContext } from "react"


export const Header = () => {

    const { user } = useContext(AuthContext)
    console.log(user)
    return (
        <>
            <Flex
                w={"100%"}
                h={"110px"}
                pl={"3%"}
                pr={"3%"}
                justifyContent={"space-between"}
                borderBottom="1px solid rgba(0, 0, 0, 0.1)"
                boxShadow="0px 2px 8px rgba(0, 0, 0, 0.1)"
            >
                <Flex
                    justifyContent={"center"}
                    alignItems={"center"}
                >
                    <Image
                        boxSize='70px'
                        src="https://cdn-icons-png.flaticon.com/512/1973/1973858.png"
                    />
                </Flex>
                <Wrap
                    display={"flex"}
                    alignItems={"center"}
                >
                    <WrapItem
                        display={"flex"}
                        alignItems={"center"}
                    >
                        <p>{user?.name}</p>
                        <Avatar 
                            ml={"1rem"}
                            name={user?.name}
                        />
                    </WrapItem>
                </Wrap>
            </Flex>
        </>
    )
}