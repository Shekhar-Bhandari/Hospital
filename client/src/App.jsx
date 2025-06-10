
// import { Routes, Route } from 'react-router-dom'
// import Navbar from './components/Navbar'
// import Header from './components/Header'
// import Home from './Pages/Home'
// import Footer from './components/Footer'





// import AboutUs from './pages/AboutUs'
// import Appointment from './components/Appointment'
// import OurDoctors from './Pages/OurDoctors'
// import ContactPage from './Pages/ContactPage'
// import BlogPage from './Pages/BlogPage'
// import ServicesPage from './Pages/ServicesPage'
// import SingleNews from './Pages/SingleNews'
// import DoctorProfile from './Pages/DoctorProfile'
// import DoctorDetails from './Pages/DoctorDetails'
// import Login from './Pages/Login'
// import ProtectedRoute from './components/ProtectedRoute'
// import Dashboard from './Pages/Dashboard'






// const App = () => {
//   return (
//     <div>
//       <Header/>
//       <Navbar />
//       <Routes>
//       <Route path='/' element={<Home />} />
//       <Route path='/AboutUs' element={<AboutUs />} />
//       <Route path='/services-page' element={<ServicesPage />} />
     
//       <Route path='/news' element={<BlogPage/>} />
//       <Route path='/contact' element={<ContactPage />} />
//       <Route path='/appointment' element={<Appointment />} />
//       <Route path='/our-doctors' element={<OurDoctors />} />
//       <Route path='/doctors/:id' element={<DoctorProfile />} />
//       <Route path='./news/:id' element={<SingleNews />} />
//      <Route path="/doctors/:id" element={<DoctorDetails />} />
//      <Route path='/login' element={<Login />} />

  
//   // Protected routes
//   <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>  } />

      

      
//         </Routes>
//       <Footer />
//     </div>
//   )
// }

// export default App


// import { Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Header from './components/Header';
// import Home from './Pages/Home';
// import Footer from './components/Footer';

// import AboutUs from './pages/AboutUs';
// import Appointment from './components/Appointment';
// import OurDoctors from './Pages/OurDoctors';
// import ContactPage from './Pages/ContactPage';
// import BlogPage from './Pages/BlogPage';
// import ServicesPage from './Pages/ServicesPage';
// import SingleNews from './Pages/SingleNews';
// import DoctorProfile from './Pages/DoctorProfile';
// import DoctorDetails from './Pages/DoctorDetails';
// import Login from './Pages/Login';
// import ProtectedRoute from './components/ProtectedRoute';
// import Dashboard from './Pages/Dashboard'; // updated to match the filename

// const App = () => {
//   return (
//     <div>
//       <Header />
//       <Navbar />
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/AboutUs' element={<AboutUs />} />
//         <Route path='/services-page' element={<ServicesPage />} />
//         <Route path='/news' element={<BlogPage />} />
//         <Route path='/news/:id' element={<SingleNews />} />
//         <Route path='/contact' element={<ContactPage />} />
//         <Route path='/appointment' element={<Appointment />} />
//         <Route path='/our-doctors' element={<OurDoctors />} />
//         <Route path='/doctors/:id' element={<DoctorProfile />} />
//         <Route path='/doctor-details/:id' element={<DoctorDetails />} />
//         <Route path='/login' element={<Login />} />
//         {/* Protected routes */}
//         <Route
//           path="/dashboard"
//           element={
//             <ProtectedRoute>
//               <Dashboard />
//             </ProtectedRoute>
            
//           }
          
//         />
//       </Routes>
//       <Footer />
//     </div>
//   );
// };

// export default App;


import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Home from './Pages/Home';
import Footer from './components/Footer';

import AboutUs from './Pages/AboutUs';
import Appointment from './components/Appointment';
import OurDoctors from './Pages/OurDoctors';
import ContactPage from './Pages/ContactPage';
import BlogPage from './Pages/BlogPage';
import ServicesPage from './Pages/ServicesPage';
import SingleNews from './Pages/SingleNews';
import DoctorProfile from './Pages/DoctorProfile';
import DoctorDetails from './Pages/DoctorDetails';
import Login from './Pages/Login';
import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from './Pages/Dashboard';
import SingleService from './Pages/SingleService'; // updated to match the filename
import PostsList from './Pages/PostsList';
import {Toaster} from 'react-hot-toast'
import Register from './Pages/Register';
import AppointView from './Pages/AppointView'
import ContactView from './Pages/ContactView'

const App = () => {
  return (
    <div>
      <Toaster/>
      <Header />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/AboutUs' element={<AboutUs />} />
        <Route path='/services-page' element={<ServicesPage />} />
        <Route path='/news' element={<BlogPage />} />
        <Route path='/news/:id' element={<SingleNews />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/appointment' element={<Appointment />} />
        <Route path='/our-doctors' element={<OurDoctors />} />
        <Route path='/doctors/:id' element={<DoctorProfile />} />
        <Route path='/doctor-details/:id' element={<DoctorDetails />} />
        <Route path='/login' element={<Login />} />
        <Route path='/services/:id' element={<SingleService />} />
        <Route path='/posts' element={<PostsList />} />
        <Route path='/register' element={<Register />} />
         <Route path='/appointview' element={<AppointView />} />
          <Route path='/contactview' element={<ContactView />} />
{/** dashboard path  */}
          
      
        {/* Protected routes */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/doctor/dashboard"
          element={
            // <ProtectedRoute>
              <Dashboard />
            // </ProtectedRoute>
          }
        />
        <Route
          path="/patient/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
            
          }
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;