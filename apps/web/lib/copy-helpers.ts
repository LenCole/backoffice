import { payment_info } from "@/data/payment-info"; // typing assumed

export function copyEmail(): void {
  if (payment_info.e_transfer_email) {
    navigator.clipboard.writeText(payment_info.e_transfer_email);
  }
}

export function copyBTC(): void {
  if (payment_info.btc_address) {
    navigator.clipboard.writeText(payment_info.btc_address);
  }
}

export function copyETH(): void {
  if (payment_info.eth_address) {
    navigator.clipboard.writeText(payment_info.eth_address);
  }
}
