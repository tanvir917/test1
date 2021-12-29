import {
  FaChessBoard,
  FaShoppingBag,
  FaRegCalendarAlt,
  FaBars
} from "react-icons/fa";
import ListItemsWithChilds from "./ListItemsWithChilds";
import Header from "./Header";

const DashboardLayout = ({ children }) => {


  return (
    <div className="flex h-screen bg-gray-100 font-sans overflow-hidden">
      <div
        
        style={{ background: "#062237" }}
      >
        <h1 className="text-white">GraphQL</h1>
        <div className="h-screen menu text-white openNav absolute md:relative flex pt-16 font-open-sans static overflow-hidden  shadow">
          <ul className="list-reset w-full">
            <ListItemsWithChilds
              label={{
                text: "Users",
                Icon: FaChessBoard,
                path: "/dashboard/calender",
              }}
            />

            <ListItemsWithChilds
              label={{
                text: "Posts",
                Icon: FaShoppingBag,
                path: "/dashboard/calender",
              }}
            />

            <ListItemsWithChilds
              label={{
                text: "Calender",
                Icon: FaRegCalendarAlt,
                path: "/dashboard/calender",
              }}
            />
          </ul>
        </div>
      </div>
      <div
        
        style={{ background: "#062237" }}
      >
        <div className="h-screen menu text-white openNav absolute md:relative flex pt-16 font-open-sans static overflow-hidden  shadow">
          <ul className="list-reset w-full">
            <ListItemsWithChilds
              label={{
                text: "Users",
                Icon: FaChessBoard,
                path: "/dashboard/calender",
              }}
            />

            <ListItemsWithChilds
              label={{
                text: "Posts",
                Icon: FaShoppingBag,
                path: "/dashboard/calender",
              }}
            />

            <ListItemsWithChilds
              label={{
                text: "Calender",
                Icon: FaRegCalendarAlt,
                path: "/dashboard/calender",
              }}
            />
          </ul>
        </div>
      </div>
      <div className="flex flex-row flex-wrap flex-1 flex-grow content-start pl-0 ">
      <div className="w-full flex flex-wrap">
          <nav
            id="header1"
            className="w-auto flex-1 border-b-1 border-gray-300 order-1 lg:order-2"
            style={{ background: "#062237" }}
          >
            <div className="flex h-full items-center text-white">
              <h1>CRUD</h1>
              <h1>Blank</h1>
            </div>
          </nav>
        </div>

        {/* <Header /> */}
        <div id="main-content" className="w-full flex-1 p-2 contain h-screen">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
