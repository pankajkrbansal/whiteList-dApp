import { React, useEffect, useState } from "react";
import "../App.css";
import "../styles/login.css";
import Form from "./Form";

function Login() {
  const [isWalletConnected, setWalletConnected] = useState(false);
  const [account, setAccount] = useState(null);

  const checkForAccount = async () => {
    let accounts = await window.ethereum.request({
      method: "eth_accounts",
    });
    // console.log(accounts);
    if(accounts.length > 0){
      setAccount(accounts[0]);
    }
  };

  const getWalletConnected = async() => {
    // console.log("Click");
    const { ethereum } = window;
    if (!ethereum) {
      alert("Install Metamask");
    }
    let account = await ethereum.request({
      method: "eth_requestAccounts",
    });
    {
      account.length == 0 || account.length == undefined
        ? setWalletConnected(false)
        : setWalletConnected(true);
    }
    checkForAccount();
    // console.log(isWalletConnected);
    // return accounts;
  };

  if (!isWalletConnected) {
    return (
      <div>
        <h3>Connect Your Wallet</h3>
        <button className="button" onClick={getWalletConnected}>
          Connect
        </button>
      </div>
    );
  } else {
    return <Form isWalletConnected={isWalletConnected} account = {account} />;
  }
}

export default Login;
