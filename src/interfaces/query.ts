export interface WithPage {
  page?: string;
}

export interface WithMinMax {
  min?: string;
  max?: string;
}

export interface WithType {
  type?: string | string[];
}

export interface WithBedrooms {
  bedrooms?: string | string[];
}

export interface WithBathrooms {
  bathrooms?: string | string[];
}

export interface WithBasement {
  basement?: string | string[];
}

export interface WithView {
  view?: 'list' | 'map';
}

export interface WithSearchParams
  extends WithPage,
    WithMinMax,
    WithType,
    WithBedrooms,
    WithBathrooms,
    WithBasement,
    WithView {}
