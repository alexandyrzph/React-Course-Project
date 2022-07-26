import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Posts from "./pages/Posts/Posts";

import {
    Navbar,
    Profile,
    PostCreate,
    PostDetails,
    PostEdit,
    SignIn,
    SignUp,
    ProtectedRoute,
} from "./components/index";
import { useUserAuth } from "./context/UserAuthContext";

function App() {
    const { user, isLoading } = useUserAuth();
    console.log(isLoading);
    if (!isLoading) {
        return (
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="posts" element={<Posts />} />
                    <Route path="register" element={<SignUp />} />
                    <Route path="login" element={<SignIn />} />
                    <Route
                        path="profile"
                        element={
                            <ProtectedRoute>
                                <Profile />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="post-create"
                        element={
                            <ProtectedRoute>
                                <PostCreate />
                            </ProtectedRoute>
                        }
                    />
                    <Route path="post/:postId" element={<PostDetails />} />
                    <Route
                        path="post-edit/:postId"
                        element={
                            <ProtectedRoute>
                                <PostEdit />
                            </ProtectedRoute>
                        }
                    />
                </Routes>
            </div>
        );
    }
}

export default App;
