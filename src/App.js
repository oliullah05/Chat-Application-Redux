import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Conversation from "./pages/Conversation";
import Inbox from "./pages/Inbox";
import Login from "./pages/Login";
import Register from "./pages/Register";
import useAuthCheck from "./hooks/useAuthCheck";
import PrivateRoute from "./routes/PrivateRoute";
import PublickRoute from "./routes/PublickRoute";

function App() {
  const authChecked = useAuthCheck()
  console.log(authChecked);
    return !authChecked?<div>Checking Authunthication </div> :
    (<Router>
            <Routes>
                <Route path="/" element={<PublickRoute><Login /></PublickRoute>} />
                <Route path="/register" element={<PublickRoute><Register /></PublickRoute>} />
                <Route path="/inbox" element={<PrivateRoute><Conversation /></PrivateRoute>} />
                <Route path="/inbox/:id" element={<PrivateRoute><Inbox /></PrivateRoute>} />
            </Routes>
        </Router>)
}

export default App;
