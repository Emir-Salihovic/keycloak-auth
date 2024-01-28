import ProtectedPage from "./components/protected";
import PublicPage from "./components/public";
import useAuth from "./hooks/useAuth";

function App() {
  const isLogin = useAuth();
  return isLogin ? <PublicPage /> : <ProtectedPage />;
}

export default App;
