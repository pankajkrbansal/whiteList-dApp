import { React } from "react";

export default function Form(data) {
  console.log(data.isWalletConnected);

  const addToWhiteList = async () => {};
  const isWalletConnected = data.isWalletConnected;
  if (isWalletConnected) {
    return (
      <div>
        <form onSubmit={addToWhiteList}>
          <input name="addr" placeholder="Enter Address Here"></input>
          <button>Add To WhiteList</button>
        </form>
      </div>
    );
  } else {
  }
}
