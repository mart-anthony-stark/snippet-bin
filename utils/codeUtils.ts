export interface SnippetState {
  code: string;
  language: string;
  theme: string;
  fileName: string;
}

export const decodeCodeFromHash = async (
  hash: string,
): Promise<SnippetState | null> => {
  try {
    const response = await fetch(`/api/code/decode/${hash}`);
    if (!response.ok) return null;
    return await response.json();
  } catch (error) {
    return null;
  }
};

export const encodeCodeToHash = async (
  state: SnippetState,
): Promise<string | null> => {
  try {
    const response = await fetch(`/api/code/encode`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(state),
    });
    const data = await response.json();
    return data.hash;
  } catch (error) {
    return null;
  }
};
