import { React, useEffect, useState } from "react";
import abi from "../abi.json";
import { ethers } from "ethers";
// require('dotenv').config();

export default function Form(data) {
  const [addrPresent, setAddrPresent] = useState(false);
  const contractABI = abi.abi;

  useEffect(() => {
    console.log(data);
    checkAddressInWitelist(data.account);
    console.log("Loaded");
  }, []);

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  // console.log(signer);
  const contractInstance = new ethers.Contract(
    process.env.REACT_APP_CONTRACT_ADDRESS,
    contractABI,
    signer
  );

  const addToWhiteList = async () => {
    let res = await contractInstance.whiteListedMembers(data.account);
    if (!res) {
      await contractInstance.addSendertoWhitelist();
      setAddrPresent(true);
    }
  };

  const checkAddressInWitelist = async (address) => {
    let res = await contractInstance.whiteListedMembers(address);
    console.log(res);
    setAddrPresent(res);
  };

  const isWalletConnected = data.isWalletConnected;

  if (isWalletConnected && !addrPresent) {
    return (
      <div>
        {/* <input className="addr" name="addr" placeholder="Enter Address Here"></input> <br/><br/> */}
        <button
          className="button"
          disabled={addrPresent}
          onClick={addToWhiteList}
        >
          Add To WhiteList
        </button>
      </div>
    );
  } else {
    // add text for address already in whitelist
    return <h3>Address Is Added In The WhiteList.</h3>;
  }
}
