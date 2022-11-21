import { React, useEffect, useState } from "react";
import "../App.css";
import "../styles/login.css";
import Form from "./Form";

function Login() {
  const [isWalletConnected, setWalletConnected] = useState(false);

  const checkForAccount = () => {
    let accounts = window.ethereum.request({
      method: "eth_accounts",
    });
    console.log(accounts.length);
    {
      accounts.length == 0 || accounts.length == undefined
        ? setWalletConnected(false)
        : setWalletConnected(true);
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
    // checkForAccount();
    // console.log(isWalletConnected);
    // return accounts;
  };

  // useEffect(async () => {
  //   await checkForAccount();
  // }, []);

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
    return <Form isWalletConnected />;
  }
}

export default Login;
