import { useContext } from "react"
import { AuthContext } from "../../providers/AuthProvider"
import { useNavigate } from "react-router-dom"
import { Box, Flex } from "@chakra-ui/react"
import { Header } from "../../components/Header"
import { Link as RouterLink } from "react-router-dom"
import { Link as ChakraLink } from "@chakra-ui/react"
import { ColorModeSwitcher } from "../../pages/styles/ColorModeSwitcher"

export const Home = () => {

    const { user } = useContext(AuthContext)
    const navigate = useNavigate();

    if (!user) {
        navigate("/")
    }

    const handleClick = () => {
        localStorage.removeItem("@token")
    }

    return (
        <>
            <Header />
            <Flex>
                <Flex
                    ml={"3%"}
                    mt={"1%"}
                    flexDir={"column"}
                    justifyContent={"end"}
                    alignItems={"start"}
                >
                    <ColorModeSwitcher />
                    <ChakraLink
                        ml={"1rem"}
                        mt={"0.7rem"}
                        as={RouterLink}
                        to="/caminho-do-link"
                        color="orange.500"
                        fontWeight="bold"
                        _hover={{
                            textDecoration: 'underline',
                        }}
                    >
                        <RouterLink
                            to="/"
                            onClick={handleClick}
                        >
                            Sair
                        </RouterLink>
                    </ChakraLink>
                </Flex>
            </Flex>
            <Box
                h={"500px"}
                w={"100%"}
            >
                <Flex
                    h={"100%"}
                    justifyContent={"center"}
                    alignItems={"center"}
                >
                    <h1>Dashboard</h1>
                </Flex>
            </Box>
        </>
    )
}