import { AppMetadata } from '..'
import { PermissionEntity } from './PermissionEntity'

export interface PermissionInfo extends PermissionEntity {
  accountIdentifier: string
  beaconId: string
  appMetadata: AppMetadata
  website: string
  publicKey: string
  connectedAt: Date
}
