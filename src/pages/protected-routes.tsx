import ProtectPage from '../middleware/auth'
import { useAuth } from '../contexts/auth'
export default function ProtectedPage({ children }) {
    const { loading } = useAuth();
    if (loading) {
        return <h1>Loading...</h1>
    }
    return <ProtectPage>
        {children}
    </ProtectPage>
}