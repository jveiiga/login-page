import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Image,
    Input,
    InputGroup,
    InputRightElement,
    Spinner,
} from "@chakra-ui/react"
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons"
import { useContext, useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "./validator"
import { AuthContext } from "../../providers/AuthProvider";
import { IUser } from "../../interfaces/user";

import "./login.css"
import { motion } from "framer-motion";


export const Login = () => {

    const { signIn } = useContext(AuthContext)
    const [showPassword, setShowPassword] = useState(false)
    const [isFocused, setIsFocused] = useState(false)

    const AnimatedLabel = motion(FormLabel)

    const handleFocus = () => {
        setIsFocused(true);
    }

    const {
        register,
        handleSubmit,
        formState: { isSubmitting },
    } = useForm<IUser>({
        resolver: zodResolver(schema)
    })

    return (
        <main className="login-container">
            <Flex
                justifyContent={"center"}
                alignItems={"center"}
                h={"100%"}
            >
                <Flex
                    ml={"1rem"}
                    mr={"1rem"}
                    border={"1px solid black"}
                    bgColor={"#FFFFFF"}
                    borderRadius={"0.4rem"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    h={"25rem"}
                    w={"25rem"}
                    p={"1rem"}
                >
                    <form
                        onSubmit={handleSubmit(signIn)}
                    >
                        <Image
                            boxSize='50px'
                            src="https://cdn-icons-png.flaticon.com/512/1973/1973858.png"
                            mb={"1rem"}
                        />
                        <FormControl>
                            <AnimatedLabel
                                htmlFor="my-input"
                                initial={{ y: '100%', opacity: 0 }}
                                animate={{ y: isFocused ? 0 : '100%', opacity: isFocused ? 1 : 0 }}
                                transition={{ duration: 0.2 }}
                                position="absolute"
                                ml={2}
                                mt={-0.5}
                                fontSize={isFocused ? 'xs' : 'md'}
                                color={isFocused ? 'gray.400' : 'gray.600'}
                            >
                                Email
                            </AnimatedLabel>
                            <Input
                                required
                                mb={"1.5rem"}
                                mt={"1rem"}
                                color={"gray"}
                                focusBorderColor='primary'
                                type="email"
                                id="email"
                                onFocus={handleFocus}
                                py={8}
                                px={4}
                                borderWidth={1}
                                borderColor={isFocused ? 'blue.400' : 'gray.200'}
                                borderRadius="md"
                                placeholder="kenzinho@mail.com"
                                _placeholder={{ color: "gray" }}
                                {...register("email")}
                            />
                            <InputGroup
                                size="lg"
                            >
                                <AnimatedLabel
                                    htmlFor="my-input"
                                    initial={{ y: '100%', opacity: 0 }}
                                    animate={{ y: isFocused ? 0 : '100%', opacity: isFocused ? 1 : 0 }}
                                    transition={{ duration: 0.2 }}
                                    position="absolute"
                                    ml={2}
                                    mt={-4}
                                    fontSize={isFocused ? 'xs' : 'md'}
                                    color={isFocused ? 'gray.400' : 'gray.600'}
                                >
                                    Senha
                                </AnimatedLabel>
                                <Input
                                    required
                                    color={"gray"}
                                    focusBorderColor='primary'
                                    type={showPassword ? "text" : "password"}
                                    {...register("password")}
                                    id="password"
                                    onFocus={handleFocus}
                                    py={8}
                                    px={4}
                                    borderWidth={1}
                                    borderColor={isFocused ? 'blue.400' : 'gray.200'}
                                    borderRadius="md"
                                    placeholder="123456"
                                    _placeholder={{ color: "gray" }}
                                    {...register("password")}
                                />
                                <InputRightElement width="4.5rem" mt={"0.5rem"}>
                                    <Button
                                        variant={"ghost"}
                                        onClick={() =>
                                            setShowPassword((showPassword) => !showPassword)
                                        }>
                                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>
                        <Button
                            mt={4}
                            colorScheme="yellow"
                            type="submit"
                        >
                            {isSubmitting ? <Spinner size="sm" /> : 'Entrar'}
                        </Button>
                    </form>
                </Flex>
            </Flex>
        </main>
    )
}

