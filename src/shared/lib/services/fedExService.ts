import axios from "axios";

const fedExCredentials = {
  key: "l71b1cbbfdabe94a7cba195b9a7199180a",
  password: "Levaitaly2024!",
  accountNumber: "203959980",
  meterNumber: "YOUR_FEDEX_METER_NUMBER",
};

const BASE_URL = "https://gateway.fedex.com/web-services";

export async function calculateFedExRate(
  from: any,
  to: any,
  packageDetails: any
) {
  const requestData = {
    WebAuthenticationDetail: {
      UserCredential: {
        Key: fedExCredentials.key,
        Password: fedExCredentials.password,
      },
    },
    ClientDetail: {
      AccountNumber: fedExCredentials.accountNumber,
      MeterNumber: fedExCredentials.meterNumber,
    },
    TransactionDetail: {
      CustomerTransactionId: "Rate Request",
    },
    Version: {
      ServiceId: "crs",
      Major: 24,
      Intermediate: 0,
      Minor: 0,
    },
    RequestedShipment: {
      DropoffType: "REGULAR_PICKUP",
      ServiceType: "FEDEX_GROUND", // Adjust service type as needed
      PackagingType: "YOUR_PACKAGING",
      Shipper: {
        Address: {
          PostalCode: from.postcode,
          CountryCode: from.country,
        },
      },
      Recipient: {
        Address: {
          PostalCode: to.postcode,
          CountryCode: to.country,
          Residential: false,
        },
      },
      PackageCount: "1",
      RequestedPackageLineItems: [
        {
          GroupPackageCount: 1,
          Weight: {
            Units: "KG",
            Value: packageDetails.weight,
          },
          Dimensions: {
            Length: packageDetails.length,
            Width: packageDetails.width,
            Height: packageDetails.height,
            Units: "CM",
          },
        },
      ],
    },
  };

  try {
    const response = await axios.post(BASE_URL, requestData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Extract and return the rate information
    return response.data.RateReplyDetails[0].RatedShipmentDetails[0]
      .ShipmentRateDetail.TotalNetCharge.Amount;
  } catch (error: any) {
    console.error(
      "Error fetching FedEx rates:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
}
