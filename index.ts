
import express, { Request, Response } from 'express';
import { getRandomCryptocurrencyTicker} from './dummy-data';
import { generateAddress, generateTransactionHash, getWalletByAddress, getWalletByAddressAndType } from './utils';
import { dummy } from './dummy-data';
import { DepositRequest, DepositResponse, Wallet } from './models';


const app = express();
const port = 3000;

app.use(express.json());

// Endpoint to get balance
app.get('/balance/:address', (req: Request, res: Response) => {
  const { address } = req.params;

  const addressRegex = /^[a-zA-Z]+:[a-fA-F0-9]{64}$/;
  if (!addressRegex.test(address)) {
      return res.status(400).json({ error: 'Invalid address format' });
  }

  const [prefix, hashedBuffer] = address.split(':');

  const wallet = getWalletByAddress(address, dummy);

  if (wallet) {
      res.json({ type: wallet.type, balance: wallet.balance });
  } else {
      res.status(404).json({ error: 'Wallet not found' });
  }
});

app.get('/get', (req: Request, res: Response) => {
  return res.json(dummy)
})

// Endpoint to create wallet
app.post('/wallet/create', (req: Request, res: Response) => {
  const { userId, token } = req.body;

  if (!userId) {
      return res.status(400).json({ error: 'User ID is required' });
  }

  if (typeof userId !== 'string' || userId.trim() === '') {
      return res.status(400).json({ error: 'Invalid User ID' });
  }

  if (!token) {
      return res.status(400).json({ error: 'Token is required' });
  }

  if (!dummy[userId]) {
      dummy[userId] = [];
  }

  if (dummy[userId].find(wallet => wallet.type === token)) {
      return res.status(400).json({ error: `User already has a ${token} address` });
  } else {
      const newWallet = {
          address: generateAddress(token),
          type: token,
          balance: 0,
          dateTimeCreated: new Date()
      };

      dummy[userId].push(newWallet);
      return res.json({
          statusCode: 200,
          status: "success",
          body: dummy[userId]
      });
  }
});

//Endpoint for creating deposit 
app.post('/wallet/deposit', (req: Request, res: Response) => {
  const { sourceAddress, destinationAddress, amount, coin } = req.body as DepositRequest;

  if (!sourceAddress || !destinationAddress || !amount || !coin) {
      return res.status(400).json({ error: "Missing parameters: sourceAddress, destinationAddress, amount, coin" });
  }

  if (typeof amount !== 'number' || amount <= 0) {
      return res.status(400).json({ error: "Invalid amount: Amount must be a positive number" });
  }

  let sourceWallet = getWalletByAddressAndType(sourceAddress, coin, dummy) as Wallet;
  let destinationWallet = getWalletByAddressAndType(destinationAddress, coin, dummy) as Wallet;

  if (sourceWallet == null || destinationWallet === null) {
      return res.status(400).json({ error: "Could not initiate deposit operation" });
  }

  if (sourceWallet.balance >= amount) {
      sourceWallet.balance = sourceWallet.balance - amount;
      destinationWallet.balance = destinationWallet.balance + amount;
  } else {
      return res.status(400).json({
          status: "failed",
          message: `${sourceWallet.address} has no enough ${coin.toUpperCase()} coins`
      });
  }

  return res.status(200).json({
      message: `Deposited ${amount} to ${destinationWallet.address}`,
      status: "success",
      transaction: {
        transactionHash : generateTransactionHash(),
        createdAt: new Date(),
        userId: "UserId"
      } 
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

