import { useRouter } from "next/router";
import { useEffect } from "react";
import FullPageLoader from '../components/pageLoader/loader'
import {useAuth} from '../contexts/auth'

export default  function Protection({ children }) {
    const router = useRouter();
    const { checkAuth, loading } = useAuth();
  
   
    useEffect(() => {
      checkAuth();
    }, [checkAuth]);
    
    return children;
  }