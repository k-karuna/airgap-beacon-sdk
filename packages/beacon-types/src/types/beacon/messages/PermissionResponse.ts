import {
  AppMetadata,
  BeaconBaseMessage,
  BeaconMessageType,
  Network,
  PermissionScope,
  Threshold
} from '@airgap/beacon-types'

/**
 * @category Message
 */
export interface PermissionResponse extends BeaconBaseMessage {
  type: BeaconMessageType.PermissionResponse
  appMetadata: AppMetadata // Some additional information about the Wallet
  publicKey: string // Public Key, because it can be used to verify signatures
  network: Network // Network on which the permissions have been granted
  scopes: PermissionScope[] // Permissions that have been granted for this specific address / account
  threshold?: Threshold
}
