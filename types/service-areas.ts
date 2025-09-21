export interface ServiceCity {
  slug: string;
  name: string;
  heroTitle?: string;
  heroText?: string;
}

export interface ServiceCounty {
  slug: string;
  name: string;   
heroTitle?: string;
  heroText?: string;
  cities: ServiceCity[];
}

export interface ServiceAreas {
  counties: ServiceCounty[];
}