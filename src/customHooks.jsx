export function getMonthName(monthNumber) {
  const date = new Date();
  date.setMonth(monthNumber - 1);

  return date.toLocaleString([], { month: 'short' });
}

export function getMonthNumber(monthName) {
  return new Date(`${monthName} 1, 2023`).getMonth() + 1;
}
