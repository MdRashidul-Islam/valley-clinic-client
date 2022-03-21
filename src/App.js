import { Route, Routes } from "react-router-dom";
import AuthProvider from "./contexts/AuthProvider";
import PrivateRoute from "./routes/PrivateRoute";
import HomePage from "./Views/pages/HomePage";
import Login from "./Views/pages/Login";
import Register from "./Views/pages/Register";
import Dashboard from "./Views/pages/Dashboard";
import WelcomePage from "./Views/components/Dashboard/WelcomePage";
import AdminRoute from "./routes/AdminRoute";
import MakeAdmin from "./Views/components/Dashboard/MakeAdmin";
import AddDoctor from "./Views/components/Dashboard/AddDoctor";
import AddService from "./Views/components/Dashboard/AddService";
import Review from "./Views/components/Dashboard/Review";
import ManageAppointment from "./Views/components/Dashboard/ManageAppointment";
import ManageAllService from "./Views/components/Dashboard/ManageAllService";
import Payment from "./Views/components/Dashboard/Payment";

function App() {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />

          <Route
            path="dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          >
            <Route index element={<WelcomePage />} />

            {/* <Route
              path="makeAdmin"
              element={
                <AdminRoute>
                  <MakeAdmin />
                </AdminRoute>
              }
            />

            <Route
              path="addDoctor"
              element={
                <AdminRoute>
                  <AddDoctor />
                </AdminRoute>
              }
            />

            <Route
              path="addService"
              element={
                <AdminRoute>
                  <AddService />
                </AdminRoute>
              }
            />

            <Route
              path="review"
              element={
                <PrivateRoute>
                  <Review />
                </PrivateRoute>
              }
            />

            <Route
              path="manageAppointment"
              element={
                <AdminRoute>
                  <ManageAppointment />
                </AdminRoute>
              }
            />

            <Route
              path="manageAllService"
              element={
                <AdminRoute>
                  <ManageAllService />
                </AdminRoute>
              }
            />

            <Route path="payment/:id" element={<Payment />} /> */}
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
