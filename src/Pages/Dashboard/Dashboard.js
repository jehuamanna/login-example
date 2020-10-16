import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { logout } from "../../actions/auth";
import {
  TableContainer,
  Header,
  LogoutButton,
  TableWrapper,
  ContentTable,
} from "./StyledComponents";
import routesContants from "../../common/constants/routesConstants";

const { LOGIN_ROUTE } = routesContants;

const tableColumnNames = ["S.No", "Name", "Age", "Gender", "Email", "Phone No"];

const Dashboard = (props) => {
  const { users } = useSelector((state) => {
    console.log(state);
    return state.usersData;
  });
  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  if (!isLoggedIn) {
    return <Redirect to={LOGIN_ROUTE} />;
  }

  return (
    <TableContainer>
      <Header>
        <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
      </Header>
      <TableWrapper>
        <ContentTable>
          <thead>
            <tr>
              {tableColumnNames.map((item, index) => (
                <th key={item + index}>{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {users[0] &&
              users.map((row, index) => (
                <tr key={row + index}>
                  {Object.keys(row).map((cell, index) => (
                    <td key={row[cell] + index}>{row[cell]}</td>
                  ))}
                </tr>
              ))}
          </tbody>
        </ContentTable>
      </TableWrapper>
    </TableContainer>
  );
};

export default Dashboard;
