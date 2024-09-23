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
];
export const express = [
  { price: 39, minQuantity: 0.5, maxQuantity: 1.0 },
  { price: 43, minQuantity: 1.5, maxQuantity: 2.0 },
  { price: 50, minQuantity: 2.5, maxQuantity: 3.0 },
  { price: 57, minQuantity: 3.5, maxQuantity: 4.0 },
  { price: 60, minQuantity: 4.5, maxQuantity: 5.0 },
  { price: 65, minQuantity: 5.5, maxQuantity: 6.0 },
  { price: 70, minQuantity: 6.5, maxQuantity: 7.0 },
  { price: 75, minQuantity: 7.5, maxQuantity: 8.0 },
  { price: 79, minQuantity: 8.5, maxQuantity: 9.0 },
  { price: 82, minQuantity: 9.5, maxQuantity: 10.0 },
];

export function getPriceForWeight(
  weight: number,
  isExpress: boolean = false
): number | undefined {
  if (isExpress) {
    const expressItem = express.find(
      (item) => weight >= item.minQuantity && weight <= item.maxQuantity
    );
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
      standardPrice
        ? "€" + (standardPrice * 1.23).toFixed(2)
        : "Weight not available",
      expressPrice ? "€" + expressPrice.toFixed(2) : "Weight not available",
    ];
  } else {
    return [
      standardPrice ? "€" + standardPrice.toFixed(2) : "Weight not available",
      expressPrice ? "€" + expressPrice.toFixed(2) : "Weight not available",
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
