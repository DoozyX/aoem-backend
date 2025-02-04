export function formatDate(date: Date | undefined | null): string {
  if (!date) {
    return '';
  }
  const patched = new Date();
  patched.setFullYear(date.getFullYear());
  patched.setMonth(date.getMonth());
  patched.setDate(date.getDate() + 1);
  return patched.toLocaleDateString('en-GB', { timeZone: 'UTC' });
}
