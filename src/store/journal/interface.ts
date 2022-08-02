export interface InitialState {
  isSaving: boolean;
  messageSaved: string;
  notes: any[];
  active: Active | null;
}

export interface Active {
  id: string;
  title: string;
  body: string;
  date: number;
  imageUrls: string[];
}
