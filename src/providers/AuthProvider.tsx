import { createContext, useState, useEffect } from "react";
import { IContext, IProvider } from "../interfaces/context";
import { IUser } from "../interfaces/user";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export const AuthContext = createContext<IContext>({} as IContext)

export const AuthProvider = ({ children }: IProvider) => {

    const [user, setUser] = useState<IUser | null>()
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        const loadUser = async () => {
            try {
                const token = localStorage.getItem("@token")
                if (!token) {
                    return
                }

                const decodedToken = jwtDecode(token) as { sub?: string }
                //sub é o id do usuário vindo pelo token gerado pelo jwt
                const sub = decodedToken.sub

                api.defaults.headers.common.authorization = `Bearer ${token}`

                if (sub) {
                    const response = await api.get(`/users/${sub}`)
                    setUser(response.data)
                }
            } catch (error) {
                console.error(error)
                toast.error("Problemas ao carregar dados!", {
                    position: "bottom-right",
                    autoClose: 2000,
                })
            } finally {
                setLoading(false)
            }
        }
        loadUser()
    }, [])

    const signIn = async (data: IUser) => {
        try {
            const response = await api.post("/login", data)

            const { user: userResponse, accessToken } = response.data

            api.defaults.headers.common.authorization = `Bearer ${accessToken}`

            localStorage.setItem("@token", accessToken)

            setUser(userResponse)
            toast.success(`Bem-vindo de volta ${response.data.user.name}!`, {
                position: "bottom-right",
                autoClose: 2000,
            })
            navigate("/home")

        } catch (error) {
            console.error(error)
            toast.error("Problemas ao logar!", {
                position: "bottom-right",
                autoClose: 2000,
            })
        }
    }

    return (
        <AuthContext.Provider value={{
            signIn,
            user,
            loading,
        }}>
            {children}
        </AuthContext.Provider>
    )
}