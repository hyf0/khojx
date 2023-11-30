export interface GetHistoryRoot {
  status: string
  response: GetHistoryResponse[]
}

export interface GetHistoryResponse {
  by: 'you' | 'khoj'
  created: string
  message: string
  intent?: GetHistoryIntent
  context?: string[]
  "trigger-emotion"?: string
}

export interface GetHistoryIntent {
  type: string
  query: string
  "memory-type": string
  "inferred-queries": string[]
}

interface SendChatResponse {
  response: string;
  context: string[];
}



export const getHistory = async () => {
  const khojToken = import.meta.env.VITE_KHOJ_TOKEN;
  const headers = { 'Authorization': `Bearer ${khojToken}` };
  const data = await (await fetch('/api/chat/history?client=web', { headers, method: 'GET' })).json()

  return data as GetHistoryRoot
}

export async function sendChat(query: string, { stream = false } = {}) {
  const khojToken = import.meta.env.VITE_KHOJ_TOKEN;
  const resultsCount = 5;
  const headers = { 'Authorization': `Bearer ${khojToken}` };
  const data = await (await fetch(`/api/chat?q=${encodeURIComponent(query)}&n=${resultsCount}&client=web&stream=${stream}`, { headers, method: 'GET' })).json()
  console.log(data)
  return data as SendChatResponse
}
