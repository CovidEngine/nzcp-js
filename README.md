# NZCP.js

A verification library for COVID-19 Vaccine Passes in New Zealand built on top of the [NZ Covid Pass Spec](https://github.com/minhealthnz/nzcovidpass-spec) provided by the Ministry of Health. All contributions welcome 🥳

> This library can be used for both Client and Server-side implementations.

## Install

```bash
# NPM
npm i __package-name__

# Yarn
yarn add __package-name__
```

Peer dependencies on: cbor, did-resolver, elliptic, rfc4648, web-did-resolver

## Usage

```javascript
import { verifyPass } from "__package-name__";

// Verify a New Zealand COVID-19 Pass
const result = await verifyPass("NZCP:/1/2KCEVIQEIVVWK6...");
```

### Successful Verification

On **successful** verification of the given pass, the `verifyPass` method returns the following result:

```javascript
{
  "success": true,            // Verification Outcome
  "violates": null,           // Error object if code is invalid
  "credentialSubject": {      // Pass holder's details
    "givenName": "Emily",     // Pass holder's given name
    "familyName": "Example",  // Pass holder's family name
    "dob": "01/01/1970"       // Pass holder's date of birth
  }
}
```

### Unsuccessful Verification

On **unsuccessful** verification of the given pass, the `verifyPass` method returns the following result:

```javascript
{
  "success": false,           // Verification Outcome
  "violates": {               // Error information
    "message": "Error..",     // Friendly Error Message
    "section": "0.0",         // Section of official specs under violation
    "link": "https://..",     // Link to specifications breached
  },
  "credentialSubject": null   // No pass holder data due to error
}
```

## Support

See something that can be improved? [Report an Issue](https://github.com/vaxxnz/nzcp-js/issues) or contact us to [report a security concern](mailto:info@vaxx.nz).

Want to help us build a better library? We welcome contributions via [pull requests](https://github.com/vaxxnz/nzcp-js/pulls) and welcome you to our wider [Vaxx.nz](https://vaxx.nz) community on Discord: [Join our Discord community](https://discord.gg/sJWmNy7wnM).

---

### Yarn Commands

```bash
# Install dependencies
yarn install
# Now you can run various yarn commands:
yarn cli
yarn lint
yarn test
yarn build-all
yarn ts-node <filename>
yarn esbuild-browser
...
```
