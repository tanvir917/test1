import { Switch, Route } from "react-router-dom";
import DashboardLayout from './dashboard';
import Homepage from "./pages/HomePage";

const Router = () => {
  return (
    <DashboardLayout>
      <Switch>

        <Route exact path={"/"}>
          <Homepage />
        </Route>

        {/* <Route path={"*"}>
          <div className="h-screen w-screen flex justify-center items-center text-xl font-bold text-gray-400">
            404 Page Not Found!
          </div>
        </Route> */}
      </Switch>
    </DashboardLayout>
  );
};

export default Router;
