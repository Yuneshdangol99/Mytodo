import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home.jsx";
import Mytask from "./pages/Mytask.jsx";
import Overview from "./pages/ChildPages/Overview.jsx";
import Calendar from "./pages/ChildPages/Calendar.jsx";
import StatusPayment from "./pages/ChildPages/StatusPayment.jsx";
import TaskList from "./pages/ChildPages/TaskList.jsx";
import Timeline from "./pages/ChildPages/Timeline.jsx";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        {/* Home Page */}
        <Route index element={<Home />} />

        {/* Mytask Page with Nested Routes */}
        <Route path="mytask" element={<Mytask />}>
          <Route path="overview" element={<Overview />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="status-payment" element={<StatusPayment />} />
          <Route path="task-list" element={<TaskList />} />
          <Route path="timeline" element={<Timeline />} />
        </Route>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
