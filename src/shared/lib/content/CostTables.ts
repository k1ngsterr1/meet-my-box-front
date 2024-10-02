export const standard = [
  { price: 36, quantity: 1 },
  { price: 38, quantity: 2 },
  { price: 42, quantity: 3 },
  { price: 44, quantity: 4 },
  { price: 47, quantity: 5 },
  { price: 48, quantity: 6 },
  { price: 51, quantity: 7 },
  { price: 54, quantity: 8 },
  { price: 56, quantity: 9 },
  { price: 58, quantity: 10 },
  { price: 63, quantity: 11 },
  { price: 66, quantity: 12 },
  { price: 68, quantity: 13 },
  { price: 71, quantity: 14 },
  { price: 73, quantity: 15 },
];
export const express = [
  { price: 39, quantity: 1 },
  { price: 43, quantity: 2 },
  { price: 50, quantity: 3 },
  { price: 57, quantity: 4 },
  { price: 60, quantity: 5 },
  { price: 65, quantity: 6 },
  { price: 70, quantity: 7 },
  { price: 75, quantity: 8 },
  { price: 79, quantity: 9 },
  { price: 82, quantity: 10 },
  { price: 90, quantity: 11 },
  { price: 94, quantity: 12 },
  { price: 99, quantity: 13 },
  { price: 104, quantity: 14 },
  { price: 108, quantity: 15 },
];

export function getPriceForWeight(
  weight: number,
  isExpress: boolean = false
): number | undefined {
  if (isExpress) {
    const expressItem = express.find((item) => item.quantity === weight);
    return expressItem ? expressItem.price : undefined;
  } else {
    const standardItem = standard.find((item) => item.quantity === weight);
    return standardItem ? standardItem.price : undefined;
  }
}

// Function to handle pricing with 23% increase for countries other than Russia
export function getFinalPrice(weight: number, toCountry: string): string[] {
  const standardPrice = getPriceForWeight(weight, false);
  const expressPrice = getPriceForWeight(weight, true);

  // Apply 23% tax if the destination is not Russia
  if (toCountry !== "Russia") {
    return [
      expressPrice ? "€" + expressPrice.toFixed(2) : "Weight not available",
      standardPrice
        ? "€" + (standardPrice * 1.23).toFixed(2)
        : "Weight not available",
    ];
  } else {
    return [
      expressPrice ? "€" + expressPrice.toFixed(2) : "Weight not available",
      standardPrice ? "€" + standardPrice.toFixed(2) : "Weight not available",
    ];
  }
}
export function getDateInfo(daysFromNow: number) {
  const currentDate = new Date();
  const futureDate = new Date(currentDate);
  futureDate.setDate(currentDate.getDate() + daysFromNow);

  // Corrected options for 'text' formatting
  const options: Intl.DateTimeFormatOptions = {
    weekday: "short", // allowed: "short", "long", "narrow"
    month: "long", // allowed: "numeric", "2-digit", "long", "short", "narrow"
    day: "numeric", // allowed: "numeric", "2-digit"
  };
  const text = futureDate.toLocaleDateString("en-US", options);

  // Formatting for 'datetime' as "YYYY-MM-DDTHH:MM"
  const datetime = futureDate.toISOString().slice(0, 16);

  return { text, datetime };
}
export function addMargin(prices: string[], weight: number): string[] {
  // Define weight-price mappings for СТАНДАРТ
  // Define weight-price mappings for СТАНДАРТ
  const standartMargins: Record<number, number> = {
    1: 27.23,
    2: 30.04,
    3: 32.86,
    4: 35.68,
    5: 38.5,
    6: 41.32,
    7: 44.14,
    8: 46.95,
    9: 49.77,
    10: 52.59,
    11: 55.41,
    12: 58.23,
    13: 61.04,
    14: 63.86,
    15: 66.68,
  };

  // Define weight-price mappings for ЭКСПРЕСС
  const expressMargins: Record<number, number> = {
    1: 24.84,
    2: 31.89,
    3: 38.93,
    4: 45.98,
    5: 53.02,
    6: 60.07,
    7: 67.12,
    8: 74.16,
    9: 81.21,
    10: 87.62,
    11: 95.76,
    12: 103.9,
    13: 112.05,
    14: 120.19,
    15: 128.33,
  };

  // Retrieve the appropriate margins based on the weight
  const marginStandard = standartMargins[weight] || 0;
  const marginExpress = expressMargins[weight] || 0;

  const last = prices.map((price) => {
    // Extract the numeric part from the price string
    const priceFloat = parseFloat(price.replace(/[^\d.]/g, ""));

    // Calculate the prices with the added margins
    const standardPrice = `€${(priceFloat + marginStandard).toFixed(2)}`;
    const expressPrice = `€${(priceFloat + marginExpress).toFixed(2)}`;

    // Return an array containing the new prices for СТАНДАРТ and ЭКСПРЕСС
    return [expressPrice, standardPrice];
  });

  // Iterate through each price string in the array
  return last[0];
}
