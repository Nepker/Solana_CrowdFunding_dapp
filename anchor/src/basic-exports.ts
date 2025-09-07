// Here we export some useful types and functions for interacting with the Anchor program.
import { AnchorProvider, Program } from '@coral-xyz/anchor'
import { PublicKey } from '@solana/web3.js'
import IDL from '../target/idl/crowdfunding.json'
import type { Crowdfunding } from '../target/types/crowdfunding'

// Re-export the generated IDL and type
export { Crowdfunding, IDL }

// The programId is imported from the program IDL.
export const BASIC_PROGRAM_ID = new PublicKey(IDL.address)

// This is a helper function to get the Basic Anchor program.
export function getBasicProgram(provider: AnchorProvider) {
  return new Program(IDL as Crowdfunding, provider)
}