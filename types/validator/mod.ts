export interface ValidatorResult {
  isValid: boolean;
  values?: unknown[] | Record<string, unknown>;
  message?: string;
}
