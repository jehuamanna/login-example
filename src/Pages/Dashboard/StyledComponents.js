import styled from "styled-components";

export const TableContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
  background: cadetblue;
`;

export const ContentTable = styled.table`
  border-collapse: collapse;
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.2);
  margin-top: 100px;

  thead tr {
    background-color: #009879;
    color: #ffffff;
    text-align: left;
    font-weight: bold;
  }
  th,
  td {
    padding: 12px 15px;
  }
  tbody tr {
    border-bottom: 1px solid #dddddd;
  }
  tbody tr:nth-of-type(even) {
    background-color: lavender;
  }
  tbody tr:nth-of-type(odd) {
    background-color: #fff;
  }

  tbody tr:last-of-type {
    border-bottom: 2px solid #009879;
  }

  /* tbody tr:hover {
    color: #ffffff;
    background: #55716b;
  } */
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  height: 45px;
  top: 0px;
  justify-content: flex-end;
  position: absolute;
`;

export const LogoutButton = styled.div`
  width: 100px;
  height: 100%;
  background: darkcyan;
  color: #fff;
  display: flex;
  border-radius: 3px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const TableWrapper = styled.div`
  overflow: auto;
`;
