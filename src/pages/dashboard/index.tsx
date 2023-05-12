import Link from 'next/link';
import ProtectedPage from '../protected-routes';
export default function DashboardPage() {
    return (<ProtectedPage>
        <div className="flex flex-col min-h-screen">
            <nav className="bg-blue-500">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <img className="h-8 w-8" src="/logo.svg" alt="Logo" />
                            </div>

                        </div>
                    </div>
                </div>
            </nav>
            <main className="flex-grow">
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div className="px-4 py-6 sm:px-0">
                        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                        <p className="mt-1 text-gray-700 text-lg">Protected Page</p>
                    </div>
                </div>
            </main>
            <footer className="bg-blue-500">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="py-4 flex items-center justify-center border-t border-gray-700">
                        <p className="text-white">
                            &copy; 2024 Nahom Balcha, TechEthio
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    </ProtectedPage>
    );
}
