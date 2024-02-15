export const base64ToBlob = async (base64Raw: string, type: string) => {
  if (!base64Raw) {
    return new Blob([], { type: type || "text/plain" });
  }

  const blob = await fetch(`data:${type};base64,${base64Raw}`).then((res) =>
    res.blob()
  );
  return blob;
};
