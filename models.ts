
export interface Wallet {
    address: string;
    balance: number;
    type: string;
}

export interface UserWallets {
    [userId: string]: Wallet[];
}

export interface WalletResponse{
    status: string;
    statusCode: number
    body: Wallet
}

export interface DepositRequest{
    sourceAddress: string;
    destinationAddress: string;
    amount: number;
    coin: string;
}

export interface DepositResponse {
    message: string;
    status: OperationStatus
}

export interface ErrorMessage {
    error: string
    
}

export interface BalanceResponse {
    type: string
    balance: number
    
}

export type OperationStatus = "success" | "failed"