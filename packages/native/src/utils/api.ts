import { fetch } from "@tauri-apps/api/http";

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


export const getHistory = async () => {
    const hostUrl = 'app.khoj.dev'
    const khojToken = import.meta.env.VITE_KHOJ_TOKEN;
    console.log({ khojToken })
    const headers = { 'Authorization': `Bearer ${khojToken}` };
    const url = `https://${hostUrl}/api/chat/history?client=web`
    const data = await (await fetch(url, { headers, method: 'GET' })).data
    console.log(data)
    return data as GetHistoryRoot
}