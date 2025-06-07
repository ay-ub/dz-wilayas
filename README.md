# dz-wilayas

A lightweight utility package for accessing and filtering Algerian province (wilaya) data.

## Installation

```bash
npm install dz-wilayas
```

## Usage

```javascript
const {
  getAllWilayas,
  getWilayaByCode,
  getWilayaByName,
  getWilayaByArName,
  getWilayaByRegion,
} = require("dz-wilayas");

// Get all wilayas
const wilayas = getAllWilayas();

// Get a specific wilaya by code
const wilaya = getWilayaByCode(16); // Returns Alger

// Get a specific wilaya by name
const wilayaByName = getWilayaByName("Oran");

// Get a specific wilaya by Arabic name
const wilayaByArName = getWilayaByArName("وهران");

// Get wilayas by region
const northWilayas = getWilayaByRegion("North");
```

## API

### `getAllWilayas()`

Returns all available wilayas as an array of objects.

### `getWilayaByCode(code)`

Finds a wilaya by its code.

- **Parameters**: `code` (number|string) - The code of the wilaya
- **Returns**: The wilaya object
- **Throws**: Error if wilaya with specified code is not found

### `getWilayaByName(name)`

Finds a wilaya by its name (case-insensitive).

- **Parameters**: `name` (string) - The name of the wilaya
- **Returns**: The wilaya object
- **Throws**: Error if wilaya with specified name is not found

### `getWilayaByArName(ar_name)`

Finds a wilaya by its Arabic name (case-insensitive).

- **Parameters**: `ar_name` (string) - The Arabic name of the wilaya
- **Returns**: The wilaya object
- **Throws**: Error if wilaya with specified Arabic name is not found

### `getWilayaByRegion(region)`

Finds all wilayas in a specific region (case-insensitive).

- **Parameters**: `region` (string) - The region name to filter by
- **Returns**: Array of wilaya objects in the specified region
- **Throws**: Error if no wilayas are found in the specified region

## License

MIT
