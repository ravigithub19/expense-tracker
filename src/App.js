import React from "react";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";
import logo from "./logo.png";

import { GlobalProvider } from "./context/GlobalState";

import "./App.css";

function App() {
  return (
    <GlobalProvider>
      <img
        src={logo}
        style={{
          marginTop: "-15px",
          width: "160px",
          height: "120px",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: "100px",
          marginBottom: "-30px",
        }}
      />
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
