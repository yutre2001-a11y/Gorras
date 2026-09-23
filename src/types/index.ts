export type Vehicle = {
  id: string;
  name: string;
  year: number;
  make: string;
  model: string;
  type: 'SUV' | 'Sedan' | 'Truck' | 'EV' | 'Coupe' | 'Hybrid';
  price: number;
  mileage: number;
  drivetrain: 'AWD' | 'FWD' | 'RWD' | '4WD';
  condition: 'New' | 'Certified Pre-Owned' | 'Pre-Owned';
  image: string;
  monthlyPayment: number;
  inStock: boolean;
};

export type FilterOptions = {
  type: string;
  make: string;
  maxPrice: number;
};

export type CalculatorState = {
  price: number;
  downPayment: number;
  term: number;
};

export type Review = {
  id: string;
  quote: string;
  name: string;
  vehiclePurchased: string;
  rating: number;
};

export type ServiceCard = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export type ProcessStep = {
  id: string;
  number: number;
  title: string;
  description: string;
  duration: string;
};
