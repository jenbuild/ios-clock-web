export function getCityKey(city: {
    city: string;
    country: string;
}) {
    return `${city.city}-${city.country}`;
}