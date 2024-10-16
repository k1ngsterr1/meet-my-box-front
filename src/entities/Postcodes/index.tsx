import _ from "lodash"; // Import lodash package
import React, { useCallback, useEffect, useState } from "react";
const { debounce } = _; // Extract debounce function

interface PostcodeSuggestion {
  postalCode: string;
  placeName: string;
  countryCode: string;
}

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

  const debouncedFetchPostcodes = useCallback(
    debounce((postcode: string, countryCode: string) => {
      fetchPostcodes(postcode, countryCode);
    }, 300), // 300ms debounce
    []
  );

  useEffect(() => {
    if (value.length >= 3 && country) {
      debouncedFetchPostcodes(value, country);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [value, country, debouncedFetchPostcodes]);

  const fetchPostcodes = async (postcode: string, countryCode: string) => {
    setLoading(true);
    try {
      let results: PostcodeSuggestion[] = [];

      if (
        [
          "US",
          "CA",
          "FR",
          "DE",
          "GB",
          "AU",
          "JP",
          "IT",
          "ES",
          "NL",
          "AT",
          "PL",
          "CH",
          "CY",
        ].includes(countryCode)
      ) {
        results = await fetchFromGeoNames(postcode, countryCode);
      } else {
        results = await fetchFromGeoapify(postcode, countryCode);
      }

      const filteredSuggestions = results.filter(
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

  const fetchFromGeoNames = async (
    postcode: string,
    countryCode: string
  ): Promise<PostcodeSuggestion[]> => {
    const username = "k1ngsterr";
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

  const fetchFromGeoapify = async (
    postcode: string,
    countryCode: string
  ): Promise<PostcodeSuggestion[]> => {
    const apiKey = "ee59ac312b2d487fa605f4ec2dec71b8";
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

  const handleSelect = (selectedValue: string) => {
    onChange(selectedValue);
    setShowSuggestions(false);
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="p-2 border border-gray-300 rounded-md mt-1 shadow-sm w-full"
        onFocus={() => value.length >= 3 && setShowSuggestions(true)}
      />
      {value && showSuggestions && (
        <ul className="absolute z-10 w-full bg-white border border-gray-300 mt-1 rounded-md shadow-md">
          {loading ? (
            <li className="p-2 text-gray-500">Loading...</li>
          ) : suggestions.length > 0 ? (
            suggestions.map((suggestion, index) => (
              <li
                key={index}
                className="p-2 hover:bg-gray-200 cursor-pointer flex justify-between items-center"
                onClick={() => handleSelect(suggestion.postalCode)}
              >
                <span>{suggestion.postalCode}</span>
                <span className="text-gray-500 text-xs">
                  {suggestion.placeName}
                </span>
              </li>
            ))
          ) : (
            <li className="p-2 text-gray-500">No results found</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default PostcodeDropdown;
