export const googleFetch = async () => {
  const apiKey = "api key";
  const spreadSheedId = "1eLJge2zZ6payw__pl1FnP5Ig03GnCMD2-odw8LMJaz8";
  const range = "Sheet1!A1:Z100";

  const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadSheedId}/values/${range}?key=${apiKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("failed");
    }
    const data = await response.json();
    console.log(data.values);
    return data.values;
  } catch (error) {
    console.log("error fetching google data", error);
    return null;
  }
};
