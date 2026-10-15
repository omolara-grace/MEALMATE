// Utility formatting helpers

export function formatNaira(amount) {
  if (amount === null || amount === undefined || isNaN(amount)) return '₦0';
  return `₦${Number(amount).toLocaleString('en-NG')}`;
}

export function formatTime(minutes) {
  if (!minutes && minutes !== 0) return '0 min';
  if (minutes < 60) return `${minutes} min`;
  const hrs = Math.floor(minutes / 60);
  const remainingMins = minutes % 60;
  return remainingMins > 0 ? `${hrs}h ${remainingMins}m` : `${hrs}h`;
}

export function capitalizeFirst(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}
