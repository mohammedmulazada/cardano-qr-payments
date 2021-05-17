import React, { useState } from "react";
import QRCode from "qrcode.react";

import ada from "./ada.png";
import "./App.css";

function App() {
  const [wallet, setWallet] = useState(undefined);
  const [amount, setAmount] = useState(undefined);
  console.log(wallet);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Cardano QR Payment</h1>
        <main>
          <form>
            <label>
              Wallet
              <input
                name="wallet"
                type="text"
                placeholder="Wallet"
                onChange={(e) => setWallet(e.target.value)}
              />
            </label>
            <label>
              Amount
              <input
                name="amount"
                type="number"
                min="1"
                defaultValue={1}
                onChange={(e) => setAmount(e.target.value)}
              />
            </label>
          </form>
          <QRCode
            value={`web+cardano:${wallet}?amount=${amount}?`}
            size={256}
            imageSettings={{
              src: ada,
              excavate: true,
            }}
          />
        </main>
      </header>
      <p>
        Feeling generous? Donate to my address :) <br />
        addr1q95y2hlqw42veh6cx2e55prdpva3f9ar75nxdjt2k3xdyaj95npe2lhgpe2rw3m7um40h25sv706p0lkzmc6tg4uxm7szqnfkc
      </p>
      <span className="border">
        <p>
          Made with ❤️ by{" "}
          <a className="twitter" href="https://twitter.com/thisismoniac">
            Moniac
          </a>
        </p>
      </span>
    </div>
  );
}

export default App;
