import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import ReadAllProduct from "../Products/ReadAllProduct";
import ReadSpecificProduct from "../Products/ReadSpecificProduct";
import CreateProduct from "../Products/CreateProduct";
import UpdateSpecificProduct from "../Products/UpdateSpecificProduct";
import CreateStudent from "../Student/CreateStudent";
import UpdateSpecificStudent from "../Student/UpdateSpecificStudent";
import ReadAllStudent from "../Student/ReadAllStudent";
import ReadSpecificStudent from "../Student/ReadSpecificStudent";
import MyLinks from "../MyLinks";

const ReactRouter = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <MyLinks></MyLinks>
              <Outlet></Outlet>
              {/* <div>This is Footer</div> */}
            </div>
          }
        >
          <Route index element={<div>Home Page</div>}></Route>

          <Route
            path="products"
            element={
              <div>
                <Outlet></Outlet>
              </div>
            }
          >
            <Route index element={<ReadAllProduct></ReadAllProduct>}></Route>
            <Route
              path=":id"
              element={<ReadSpecificProduct></ReadSpecificProduct>}
            ></Route>
            <Route
              path="create"
              element={<CreateProduct></CreateProduct>}
            ></Route>

            <Route
              path="update"
              element={
                <div>
                  <Outlet></Outlet>
                </div>
              }
            >
              <Route
                path=":id"
                element={<UpdateSpecificProduct></UpdateSpecificProduct>}
              ></Route>
            </Route>
          </Route>

          <Route
            path="students"
            element={
              <div>
                <Outlet></Outlet>
              </div>
            }
          >
            <Route index element={<ReadAllStudent></ReadAllStudent>}></Route>
            <Route
              path=":id"
              element={<ReadSpecificStudent></ReadSpecificStudent>}
            ></Route>
            <Route
              path="create"
              element={<CreateStudent></CreateStudent>}
            ></Route>

            <Route
              path="update"
              element={
                <div>
                  <Outlet></Outlet>
                </div>
              }
            >
              <Route
                path=":id"
                element={<UpdateSpecificStudent></UpdateSpecificStudent>}
              ></Route>
            </Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default ReactRouter;
