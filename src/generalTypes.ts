import { CredentialSubject } from "./cwtTypes";

export interface Violates {
  message: string;
  section: string;
  link: string;
  friendlyMessage?: string;
}

export type VerificationResult =
  | { success: true; violates: null; credentialSubject: CredentialSubject }
  | { success: false; violates: Violates; credentialSubject: null };
