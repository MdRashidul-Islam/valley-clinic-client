import { Route, Routes } from "react-router-dom";
import AuthProvider from "./contexts/AuthProvider";
import AdminRoute from "./routes/AdminRoute";
import PrivateRoute from "./routes/PrivateRoute";
import Navigation from "./Views/components/common/Navigation";
import AddDoctor from "./Views/components/Dashboard/AddDoctor";
import AddService from "./Views/components/Dashboard/AddService";
import Appointments from "./Views/components/Dashboard/Appointments";
import MakeAdmin from "./Views/components/Dashboard/MakeAdmin";
import ManageAllService from "./Views/components/Dashboard/ManageAllService";
import ManageAppointment from "./Views/components/Dashboard/ManageAppointment";
import Payment from "./Views/components/Dashboard/Payment";
import PendingReviews from "./Views/components/Dashboard/PendingReviews";
import Review from "./Views/components/Dashboard/Review";
import WelcomePage from "./Views/components/Dashboard/WelcomePage";
import ServiceDetails from "./Views/components/Home/ServiceDetails";
import Dashboard from "./Views/pages/Dashboard";
import HomePage from "./Views/pages/HomePage";
import Login from "./Views/pages/Login";
import Register from "./Views/pages/Register";

function App() {
  return (
    <div>
      <AuthProvider>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route
            path="/service/:serviceId"
            element={
              <PrivateRoute>
                <ServiceDetails />
              </PrivateRoute>
            }
          />

          <Route
            path="dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          >
            <Route index element={<WelcomePage />} />

            <Route path="appointments" element={<Appointments />} />

            <Route
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
            <Route
              path="pendingReviews"
              element={
                <AdminRoute>
                  <PendingReviews />
                </AdminRoute>
              }
            />

            <Route path="payment/:id" element={<Payment />} />
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
