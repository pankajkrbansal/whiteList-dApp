import { React, useEffect, useState } from "react";
import abi from "../abi.json";
import {ethers} from "ethers";
// require('dotenv').config();

export default function Form(data) {
  const [addrPresent, setAddrPresent] = useState(false);
  const contractABI = abi.abi;
  console.log(data);
  console.log(data.account);

  useEffect(()=>{
    checkAddressInWitelist(data.account)
    console.log("Loaded");
  },[]);

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contractInstance = new ethers.Contract(process.env.REACT_APP_CONTRACT_ADDRESS, contractABI, signer);

  const addToWhiteList = async () => {};

  const checkAddressInWitelist = async(address) => {
    const signer = provider.getSigner();
    console.log(signer);
    // await contractInstance.
  };

  const isWalletConnected = data.isWalletConnected;

  if (isWalletConnected) {
    return (
      <div>
          {/* <input className="addr" name="addr" placeholder="Enter Address Here"></input> <br/><br/> */}
          <button className="button" disabled={addrPresent} onClick={addToWhiteList}>Add To WhiteList</button>
      </div>
    );
  } else {
    // add text for address already in whitelist
    return(
      <h3>
        Address Is Already Added In The WhiteList.
      </h3>
    )
  }
}
