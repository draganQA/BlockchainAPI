import { test, expect } from '@playwright/test';
import { dummy } from '../dummy-data';
import { generateAddress, generateUserId } from '../utils';
import { ErrorMessage, Wallet, WalletResponse } from '../models';


let apiContext;

test.beforeAll(async ({ playwright }) => {
  apiContext = await playwright.request.newContext({
    baseURL: 'http://localhost:3000',
  });
});

test.afterAll(async ({ }) => {
  await apiContext.dispose();
});

test.describe('API tests for verifyng the creation of new wallet', () => {


test('Create a new wallet and verify the response', async () => {
  const requestBody = {
    userId: generateUserId(),
    token: "xrp"
  }

  const response = await apiContext.post("/wallet/create", {
    data: requestBody
  });

  const {body} = await response.json() as WalletResponse;

  expect(body).toBeTruthy()
  expect(body[0]).toHaveProperty('address')
  expect(body[0]).toHaveProperty('balance')
  expect(body[0]).toHaveProperty('type')
  expect(body[0].balance).toBe(0)
  expect(body[0].type).toEqual(expect.stringContaining("xrp"))
})


test('Create a wallet that already exist and verify that error is genareted', async () => {
    const requestBody = {
      userId: "user66",
      token: "kas"
    }
  
    const response = await apiContext.post("/wallet/create", {
      data: requestBody
    });
  
    const {error} = await response.json() as ErrorMessage;

    expect(error).toBe("User already has a kas address")
    expect(response.status()).toBe(400);
  })

  test('Create a wallet with invalid user id and verify that error is genareted', async () => {
    const requestBody = {
      userId: 454654,
      token: "kas"
    }
  
    const response = await apiContext.post("/wallet/create", {
      data: requestBody
    });
  
    const {error} = await response.json() as ErrorMessage;

    expect(error).toBe("Invalid User ID")
    expect(response.status()).toBe(400);
  })

  test('Create a wallet with empty user id and verify that error is genareted', async () => {
    const requestBody = {
      userId: "",
      token: "kas"
    }
  
    const response = await apiContext.post("/wallet/create", {
      data: requestBody
    });
  
    const {error} = await response.json() as ErrorMessage;

    expect(error).toBe("User ID is required")
    expect(response.status()).toBe(400);
  })

  test('Create a wallet with empty token and verify that error is genareted', async () => {
    const requestBody = {
      userId: generateUserId(),
      token: ""
    }
  
    const response = await apiContext.post("/wallet/create", {
      data: requestBody
    });
  
    const {error} = await response.json() as ErrorMessage;

    expect(error).toBe("Token is required")
    expect(response.status()).toBe(400);
  })


})