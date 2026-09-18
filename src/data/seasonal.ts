export type SeasonalTheme =
  | "normal"
  | "christmas"
  | "new-year"
  | "chinese-new-year"
  | "ramadhan"
  | "independence";

export function getSeasonalTheme(date: Date): SeasonalTheme {
  const month = date.getMonth() + 1;
  const day = date.getDate();

  // Christmas (1 - 30 Des)
  if (month === 12 && day >= 1 && day <= 30) {
    return "christmas";
  }

  // New Year (31 Des & 1 Jan)
  if ((month === 12 && day === 31) || (month === 1 && day === 1)) {
    return "new-year";
  }

  // Chinese New Year (Contoh: 20 Jan - 15 Feb)
  if ((month === 1 && day >= 20) || (month === 2 && day <= 15)) {
    return "chinese-new-year";
  }

  // Ramadhan (Contoh: 1 Maret - 30 Maret)
  if (month === 3 && day >= 1 && day <= 30) {
    return "ramadhan";
  }

  // Independence Day (10 - 25 Agustus)
  if (month === 8 && day >= 10 && day <= 25) {
    return "independence";
  }

  return "normal";
}