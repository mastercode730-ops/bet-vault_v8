const DEFAULT_PHONE = "918764465110"; // Dedicated Bet Vault WhatsApp Concierge Number: https://wa.me/918764465110

export function getWhatsAppLink(message?: string, phone: string = DEFAULT_PHONE): string {
  const encodedMsg = encodeURIComponent(
    message || "Hello Bet Vault v8, I want to create my new online betting ID."
  );
  return `https://wa.me/${phone}?text=${encodedMsg}`;
}
