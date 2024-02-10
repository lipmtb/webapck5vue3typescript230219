import serviceBaseAxios from "./serviceBase/serviceBase";

const downloadLinuxFile = (path: string) => {
  return serviceBaseAxios.post<{downloadPath:string},Blob>(
    "/test/downloadLinuxFile",
    {
      downloadPath: path,
    },
    {
      responseType: "blob",
    }
  );
};

export default downloadLinuxFile;
