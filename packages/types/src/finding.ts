import { Severity } from './severity';

export enum FindingStatus {
  DISCOVERED = 'DISCOVERED',
  SUSPECTED = 'SUSPECTED',
  VALIDATING = 'VALIDATING',
  CONFIRMED = 'CONFIRMED',
  FALSE_POSITIVE = 'FALSE_POSITIVE',
}

export interface Finding {
  id: string;
  title: string;
  vulnerabilityType: string;
  severity: Severity;
  confidence: number;
  status: FindingStatus;
}