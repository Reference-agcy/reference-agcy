export interface ZohoJobOpening {
  id: string;
  Posting_Title: string;
  Number_of_Positions: number;
  Date_Opened: string;
  Job_Description: string;
  Country: string;
  City: string;
}

export interface ZohoResponse {
  data: ZohoJobOpening[];
}
