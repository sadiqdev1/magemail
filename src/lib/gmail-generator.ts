/**
 * Gmail dot-trick alias generator — client-side only.
 */

/** Returns null if valid, or an error string if not. */
export function validateGmailAddress(email: string): string | null {
  const trimmed = email.trim().toLowerCase();
  if (!trimmed) return "Please enter an email address.";

  const valid = /^[a-zA-Z0-9][a-zA-Z0-9.]*[a-zA-Z0-9]@(gmail\.com|googlemail\.com)$/i.test(trimmed);
  if (!valid) return "Enter a valid Gmail or Googlemail address (e.g. yourname@gmail.com).";

  const username = trimmed.split("@")[0];
  if (username.length < 2) return "Username is too short.";
  if (username.length > 30) return "Username is too long (max 30 characters).";

  return null;
}

/**
 * Generates all 2^(n-1) dot-placement combinations for a username.
 * Input username should have no dots.
 */
export function generateDotAliases(email: string): string[] {
  const [rawUser, domain] = email.trim().toLowerCase().split("@");
  const username = rawUser.replace(/\./g, ""); // strip any existing dots
  const n = username.length;
  const gaps = n - 1;
  const total = Math.pow(2, gaps);
  const results: string[] = [];

  for (let mask = 0; mask < total; mask++) {
    let variant = username[0];
    for (let i = 0; i < gaps; i++) {
      if (mask & (1 << i)) variant += ".";
      variant += username[i + 1];
    }
    results.push(`${variant}@${domain}`);
  }

  return results;
}

/** Triggers a browser file download. */
export function downloadFile(content: string, filename: string, mime: string) {
  const blob = new Blob([content], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}
