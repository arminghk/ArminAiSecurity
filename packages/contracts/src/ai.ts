export interface AnalyzeRequest {
  requestId: string;
  projectId: string;
  analysisType: string;
  input: string;
}

export interface AnalyzeResponse {
  requestId: string;
  status: 'completed' | 'failed';
  result: unknown;
}