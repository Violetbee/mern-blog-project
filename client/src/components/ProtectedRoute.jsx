import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/authContext';

function ProtectedRoute({ children }) {
  const { user } = useAuthContext();
  const navigate = useNavigate();
  if (!user) {
    return children;
  } else navigate('/');
}
export default ProtectedRoute;
