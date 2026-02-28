const BASE_URL = "http://localhost:3000/code";

export const decodeCodeFromHash = async (
  hash: string,
): Promise<string | null> => {
  try {
    const response = await fetch(`${BASE_URL}/decode/${hash}`);
    if (!response.ok) return null;
    const data = await response.json();
    return data.code;
  } catch (error) {
    console.error("Decode Error:", error);
    return null;
  }
};

export const encodeCodeToHash = async (
  code: string,
): Promise<string | null> => {
  try {
    const response = await fetch(`${BASE_URL}/encode`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code }),
    });
    const data = await response.json();
    return data.hash;
  } catch (error) {
    console.error("Encode Error:", error);
    return null;
  }
};
