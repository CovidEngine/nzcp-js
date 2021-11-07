
// TODO: rename to cwtTypes.ts
export interface CredentialSubject {
  givenName: string;
  familyName: string;
  dob: string;
}

export interface VC {
  '@context': string[];
  version: string;
  type: string[];
  credentialSubject: CredentialSubject;
}

export interface CWTClaims {
  iss: string;
  nbf: number;
  exp: number;
  vc: VC;
  jti: string;
}



export type RawCWTHeaders = Map<number, Buffer | number>;

interface CWTHeaders {
  kid: string
  alg: string
}

export type UnvalidatedCWTHeaders = Partial<CWTHeaders>
