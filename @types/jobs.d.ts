export interface job {
  Posting_Title: string;
  Job_Description: string;
  Required_Skills: string;
  id: string;
  
}

export interface JobsResponse {
  data: job[];
  info: {
    more_records: boolean;
    page: number;
    count: number;
    per_page: number;
  };
}
