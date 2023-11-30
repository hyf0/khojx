export async function fetch(input: RequestInfo | URL, init?: RequestInit): Promise<Response> {
  const { fetch } = await import('@tauri-apps/api/http');
  const res = await fetch(input.toString(), {
    ...init,
    method: init.method as HttpVerb,
    body: {
      type: 'Text',
      payload: init.body
    }
  });

  return new Response(JSON.stringify(res.data) as BodyInit, res);
}
