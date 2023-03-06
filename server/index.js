const express = require("express");
const app = express();
const cors = require("cors");
const { Crypto } = require("./library/Crypto");
const port = 3042;

app.use(cors());
app.use(express.json());

const balances = {
  "0x3106af1618b6d3255700bd769e6c51b88d5ebcf8": 100,
  "0x9d167e7dae24b4e1b2432966334d473dd74862f9": 50,
  "0xee986c801fb788d40c20aeaad42e4763ae46e7fe": 75,
};

const crypto = new Crypto();

function verifySignature(message, signature, recoveryBit) {
  const publicKey = crypto.recoverKey(message, signature, recoveryBit);
  const ethAddr = crypto.keyToAddress(publicKey);

  if (balances[ethAddr]) return ethAddr;

  return false;
}

app.get("/balance/:address", (req, res) => {
  const { address } = req.params;
  const balance = balances[address] || 0;
  res.send({ balance });
});

app.post("/send", (req, res) => {
  // get a signature from the client side application
  // recover the public address from the signature

  const { sender, recipient, amount, signature, recoveryBit } = req.body;

  const ethAddress = verifySignature(amount.toString(), signature, recoveryBit);

  if (ethAddress && ethAddress === sender) {
    setInitialBalance(sender);
    setInitialBalance(recipient);
    if (balances[sender] < amount) {
      res.status(400).send({ message: "Not enough funds!" });
    } else {
      balances[sender] -= amount;
      balances[recipient] += amount;
      return res.send({ balance: balances[sender] });
    }
  }

  res.status(401).send(new Error());
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});

function setInitialBalance(address) {
  if (!balances[address]) {
    balances[address] = 0;
  }
}

