export interface ReactSelectOption {
  value: number | string;
  label: string;
}

export interface ReactSelectGroupedOption {
  readonly label: string;
  readonly options: readonly ReactSelectOption[];
}
