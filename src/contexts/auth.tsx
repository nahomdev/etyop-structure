import {createContext, useContext, useEffect, useState} from 'react'
import { NextResponse, NextRequest } from 'next/server'
import { useLoginMutation, useRegisterMutation } from '../generated/graphql'
import { useRouter } from 'next/router';

const ProtectContext = createContext(null);
export function AuthProvider ({children}){
    
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState<any>({});
    const [success, setSuccess] = useState<any>(false);
    

    const [login] = useLoginMutation()
    const [register] = useRegisterMutation()
    const router = useRouter()
    useEffect(() => {
        async function loadUserFromLocalStorage() {
            const token = localStorage.getItem('token')
            if (token) {
                  
              
            }
            setLoading(false)
        }
        loadUserFromLocalStorage()
    }, [])

    const loginAction =  async (identifier, password) =>{
        const result = await login({ variables: {identifier, password} }).then(res => {
            console.log("response ", res); 
            router.push("/dashboard");
            const token = res.data.login.jwt;
            const response = NextResponse.next()
            if(token){
                localStorage.setItem('token', token)
                response.cookies.set({
                    name: 'token',
                    value: token,
                    httpOnly: true,
                })
                setUser(res.data.login.user)
            }
        }).catch(err => {
            setErrors(
                err.graphQLErrors[0]
            );

            console.log(err)
        });
    }

    const signupAction = async (username,email, password) =>{
        const result = await register({ variables: {username, email,password} }).then(res => {
            console.log("response ", res);
            setSuccess(true);
        }).catch(err => {
            setErrors(
                err.graphQLErrors[0]
            );
            
            console.log(errors)
        });
    }

    const checkAuth = async() =>{

        //this function needs update. the logic below is for temporary use since it
        //is not implemented well. 
        const token = localStorage.getItem('token');
        setLoading(true);
       
        if(!token){
            router.push('/user/signin');
        }
        return;
    }
   
    return <ProtectContext.Provider value={{checkAuth,signupAction,loginAction,success,errors,user,login}}>{children}</ProtectContext.Provider>
}
 


export const useAuth = () => useContext(ProtectContext)
 