import { test, expect } from '@playwright/test';
import { dummy } from '../dummy-data';
import { generateAddress } from '../utils';
import { BalanceResponse, ErrorMessage, Wallet, WalletResponse } from '../models';

let apiContext;

test.beforeAll(async ({ playwright }) => {
  apiContext = await playwright.request.newContext({
    baseURL: 'http://localhost:3000',
  });
});

test.afterAll(async ({ }) => {
  await apiContext.dispose();
});

test.describe('API tests for verifyng the balance', () => {

test('Serach for a valid existing wallet and verify the balance', async () => {

  const validAddress = "kas:831f3f0324c0dd59b46ed6925c4f63a6d787cb862fd7b8f6b3965e83a02d53b3";

  const response = await apiContext.get(`/balance/${validAddress}`, {
   });
     
   const baalnceResponse = await response.json() as BalanceResponse;

   expect(response.ok()).toBeTruthy();
   expect(baalnceResponse.balance).toBe(419);
   expect(baalnceResponse.type).toBe("kas");
})

test('Serach for an invalid address format and verify the error ', async () => {

  const validAddress = "kas:831f3f0787cb8a02d53b3";

  const response = await apiContext.get(`/balance/${validAddress}`, {
   });
     
   const {error} = await response.json() as ErrorMessage;

   expect(error).toBe("Invalid address format")
   expect(response.status()).toBe(400);
})

test('Serach for a wallet that do not exist and verify the error', async () => {

  const validAddress = "kas:831f3f0324c0dd59b46ed6925c4f63a6d787cb862fd7b8f6b3965e83a02d53b4";

  const response = await apiContext.get(`/balance/${validAddress}`, {
   });

   const {error} = await response.json() as ErrorMessage;

   expect(error).toBe("Wallet not found")
   expect(response.status()).toBe(404);

})

})