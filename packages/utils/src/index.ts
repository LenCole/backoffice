/**
 * Returns the current year as a four‑digit number (e.g., 2025).
 * Example: const year = CurrentYear(); // → 2025
 */
export function currentYear(): number {
  return new Date().getFullYear();
}
