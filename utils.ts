import { UserWallets, Wallet } from "./models";
import crypto from 'crypto';
import randomstring from 'randomstring';

export function generateAddress(token: string): string {
    const randomBuffer = crypto.randomBytes(16);
    return `${token}:${crypto.createHash('sha256').update(randomBuffer).digest('hex')}`;
  }

  export function generateUserId(): string {
    const userId = randomstring.generate({
        length: 10,
        charset: 'alphabetic' + 'numeric'
    });

    return userId;
}

  export function getWalletByAddress(address: string, userWallets: UserWallets): Wallet | null {
    for (const userId in userWallets) {
        if (userWallets.hasOwnProperty(userId)) {
            const wallet = userWallets[userId].find(wallet => wallet.address === address);
            if (wallet) {
                return wallet;
            }
        }
    }
    return null;
}

export function getWalletByAddressAndType(address: string, type: string, userWallets: UserWallets): Wallet | null {
    for (const userId in userWallets) {
        if (userWallets.hasOwnProperty(userId)) {
            const wallet = userWallets[userId].find(wallet => wallet.address === address && wallet.type === type);
            if (wallet) {
                return wallet;
            }
        }
    }
    return null;
}


