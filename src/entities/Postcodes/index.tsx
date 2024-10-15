import React, { useEffect, useState } from "react";

// Define the structure for postal code suggestions
interface PostcodeSuggestion {
  postalCode: string;
  placeName: string;
  countryCode: string;
}

// Component props
interface PostcodeDropdownProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  country: string | undefined;
}

const PostcodeDropdown: React.FC<PostcodeDropdownProps> = ({
  value,
  onChange,
  placeholder = "Enter postal code",
  country,
}) => {
  const [suggestions, setSuggestions] = useState<PostcodeSuggestion[]>([]);
  const [loading, setLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    if (value.length >= 3 && country) {
      fetchPostcodes(value, country);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [value, country]);

  // Fetch postcodes based on the selected country and input value
  const fetchPostcodes = async (postcode: string, countryCode: string) => {
    setLoading(true);
    try {
      let suggestions: PostcodeSuggestion[] = [];

      // Use GeoNames API for supported countries
      if (
        [
          "US", // United States
          "CA", // Canada
          "FR", // France
          "DE", // Germany
          "GB", // United Kingdom
          "AU", // Australia
          "JP", // Japan
          "IT", // Italy
          "ES", // Spain
          "NL", // Netherlands
          "AT", // Austria
          "PL", // Poland
          "CH", // Switzerland
          "CY",
        ].includes(countryCode)
      ) {
        suggestions = await fetchFromGeoNames(postcode, countryCode);
      }
      // Use Geoapify for unsupported countries like KZ, AZ, GE, etc.
      else {
        suggestions = await fetchFromGeoapify(postcode, countryCode);
      }

      const filteredSuggestions = suggestions.filter(
        (suggestion) => suggestion.postalCode !== undefined
      );

      setSuggestions(filteredSuggestions);
    } catch (error) {
      console.error("Error fetching postcodes:", error);
      setSuggestions([]);
    } finally {
      setLoading(false);
    }
  };

  // Fetch postcodes from GeoNames
  const fetchFromGeoNames = async (
    postcode: string,
    countryCode: string
  ): Promise<PostcodeSuggestion[]> => {
    const username = "k1ngsterr"; // Replace this with your GeoNames username
    const response = await fetch(
      `https://secure.geonames.org/postalCodeSearchJSON?postalcode_startsWith=${postcode}&country=${countryCode}&username=${username}&maxRows=5`
    );
    const data = await response.json();

    if (!data.postalCodes) return [];
    return data.postalCodes.map((item: any) => ({
      postalCode: item.postalCode,
      placeName: item.placeName,
      countryCode: item.countryCode,
    }));
  };

  // Fetch postcodes from Geoapify API
  const fetchFromGeoapify = async (
    postcode: string,
    countryCode: string
  ): Promise<PostcodeSuggestion[]> => {
    const apiKey = "ee59ac312b2d487fa605f4ec2dec71b8"; // Replace with your Geoapify API key
    const response = await fetch(
      `https://api.geoapify.com/v1/geocode/search?postcode=${postcode}&country=${countryCode}&apiKey=${apiKey}`
    );
    const data = await response.json();

    if (!data.features) return [];
    return data.features.map((item: any) => ({
      postalCode: item.properties.postcode,
      placeName: item.properties.city || item.properties.name,
      countryCode: item.properties.country_code.toUpperCase(),
    }));
  };

  // Handle selecting a suggestion
  const handleSelect = (selectedValue: string) => {
    onChange(selectedValue);
    setShowSuggestions(false); // Hide the dropdown
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="p-2 border border-gray-300 rounded-md mt-1 shadow-sm w-full"
        onFocus={() => value.length >= 3 && setShowSuggestions(true)} // Show suggestions on focus if length is >= 3
      />
      {value && showSuggestions && suggestions.length > 1 && (
        <ul className="absolute z-10 w-full bg-white border border-gray-300 mt-1 rounded-md shadow-md">
          {loading ? (
            <li className="p-2 text-gray-500">Loading...</li>
          ) : (
            suggestions.map((suggestion, index) => (
              <li
                key={index}
                className="p-2 hover:bg-gray-200 cursor-pointer flex justify-between items-center"
                onClick={() => handleSelect(suggestion.postalCode)} // Select the suggestion on click
              >
                <span>{suggestion.postalCode}</span>
                <span className="text-gray-500 text-xs">
                  {suggestion.placeName}
                </span>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
};

export default PostcodeDropdown;
