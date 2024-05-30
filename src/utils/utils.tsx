/**
 * Extracts the username from an email address.
 * @param email - The email address to extract the username from.
 * @returns The username part of the email address.
 */
export const extractUsername = (email: string): string => {
  const atIndex = email.indexOf("@");
  if (atIndex === -1) {
    throw new Error("Invalid email address");
  }
  return email.substring(0, atIndex);
};
