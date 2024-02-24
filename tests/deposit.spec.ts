import { test, expect } from '@playwright/test';
import { dummy } from '../dummy-data';
import { generateAddress, generateUserId } from '../utils';
import { BalanceResponse, DepositResponse, ErrorMessage, Wallet, WalletResponse } from '../models';

require('dotenv').config();

let apiContext;

test.beforeAll(async ({ playwright }) => {
  apiContext = await playwright.request.newContext({
    baseURL: process.env.BASE_URL,
  });
});

test.describe('API tests for verifyng initiation of deposit', () => {


test('Initiate a deposit transaction involving identical cryptocurrencies and verify the response', async () => {
  const requestBody = {
    sourceAddress: "dot:32d31eeae5f38c9c4a73b0226a759da7dc5fc5d145d127a8e03fd91d6c425ef6",
    destinationAddress: "dot:a3908a5b40292c0e8d6ed79332d9862e22f20d75df2aeb42f35eab61f7c90b92",
    amount: 50,
    coin: "dot"
  }

  const response = await apiContext.post("wallet/deposit", {
    data: requestBody
  });

  const depositResponse = await response.json() as DepositResponse;

  expect(depositResponse).toBeTruthy()
  expect(depositResponse.message).toBe(`Deposited ${requestBody.amount} to ${requestBody.destinationAddress}`)
  expect(depositResponse.status).toBe('success')
  expect(depositResponse.transaction).toHaveProperty('transactionHash')
  expect(depositResponse.transaction.transactionHash).not.toBeNull();
  expect(depositResponse.transaction.createdAt).not.toBeNull();
  expect(depositResponse.transaction).toHaveProperty('createdAt')
  expect(depositResponse.transaction.userId).toBe("UserId")
})


test('Initiate a deposit transaction involving Insufficient Balance for identical cryptocurrencies and verify the error', async () => {
    const requestBody = {
      sourceAddress: "dot:0ef1a256db90bb0cbf372996849fd5839a442429e1f5d85e2c5794cb0b13e0cd",
      destinationAddress: "dot:a3908a5b40292c0e8d6ed79332d9862e22f20d75df2aeb42f35eab61f7c90b92",
      amount: 500,
      coin: "dot"
    }
  
    const response = await apiContext.post("wallet/deposit", {
      data: requestBody
    });
  
    const depositResponse = await response.json() as DepositResponse;
  
    expect(response.status()).toBe(400);
    expect(depositResponse.message).toBe(`${requestBody.sourceAddress} has no enough ${requestBody.coin.toUpperCase()} coins`)
    expect(depositResponse.status).toBe('failed')
  })


test('Initiate a deposit transaction involving invalid address and verify the error', async () => {
    const requestBody = {
      sourceAddress: "dot:32d31eeae5f38c9c4a73b0226a759da7dc5fc5d145d127a8e03fd91d6c425ef6",
      destinationAddress: "dot:a3908a5b40292c0e8d6ed79332d9862e22f20d75df2aeb42f35eab61f7c90b94",
      amount: 300,
      coin: "dot"
    }
  
    const response = await apiContext.post("wallet/deposit", {
      data: requestBody
    });
  
    const {error} = await response.json() as ErrorMessage;

    expect(error).toBe("Could not initiate deposit operation")
    expect(response.status()).toBe(400);
  })

  test('Initiate a deposit transaction without providing ammount and verify the error', async () => {
    const requestBody = {
      sourceAddress: "dot:32d31eeae5f38c9c4a73b0226a759da7dc5fc5d145d127a8e03fd91d6c425ef6",
      destinationAddress: "dot:a3908a5b40292c0e8d6ed79332d9862e22f20d75df2aeb42f35eab61f7c90b94",
      coin: "dot"
    }
  
    const response = await apiContext.post("wallet/deposit", {
      data: requestBody
    });
  
    const {error} = await response.json() as ErrorMessage;

    expect(error).toBe("Missing parameters: sourceAddress, destinationAddress, amount, coin")
    expect(response.status()).toBe(400);
  })

  test('Initiate a deposit transaction with negative ammount and verify the error', async () => {
    const requestBody = {
      sourceAddress: "dot:32d31eeae5f38c9c4a73b0226a759da7dc5fc5d145d127a8e03fd91d6c425ef6",
      destinationAddress: "dot:a3908a5b40292c0e8d6ed79332d9862e22f20d75df2aeb42f35eab61f7c90b94",
      amount: -50,
      coin: "dot"
    }
  
    const response = await apiContext.post("wallet/deposit", {
      data: requestBody
    });
  
    const {error} = await response.json() as ErrorMessage;

    expect(error).toBe("Invalid amount: Amount must be a positive number")
    expect(response.status()).toBe(400);
  })



})