export const base64ToBlob = (base64Raw: string, type: string) => {
  if (!base64Raw) {
    return new Blob([], { type: type || "text/plain" });
  }

  // const blob = await fetch(`data:${type};base64,${base64Raw}`).then((res) =>
  //   res.blob()
  // );

  const byteCharacters = atob(base64Raw);
  const byteArray = byteCharacters.split("").map((item) => item.charCodeAt(0));
  const unit8Array = new Uint8Array(byteArray.length);
  for (let i = 0; i < byteArray.length; i++) {
    unit8Array[i] = byteArray[i];
  }
  return new Blob([unit8Array], { type });
};
