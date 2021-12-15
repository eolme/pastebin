export const request = async <T = any>(input: RequestInfo, body: Record<string, any> = null): Promise<T> => {
  return fetch(input, {
    body: body === null ? null : JSON.stringify(body),
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }).then((response) => {
    if (!response.ok) {
      throw new Error('Network');
    }

    return response.json();
  });
};
