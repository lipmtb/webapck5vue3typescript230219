(() => {
  const createRandomId = () => "jjcc" + Math.floor(Math.random() * 10 ** 6);

  const cmmandCallbackSet = new Set();

  window.postWithCallback = (commandName, params, callback) => {
    if (!window.utilWeb || !window.utilWeb.postNative) {
      return;
    }
    if (callback) {
      if (cmmandCallbackSet.size) {
        cmmandCallbackSet.forEach(function (id) {
          window[id] = null;
        });
        cmmandCallbackSet.clear();
      }
      const callbackId = createRandomId();
      window[callbackId] = callback;
      cmmandCallbackSet.add(callbackId);
      if (params) {
        params.callbackId = callbackId;
      }
    }

    try {
      if (!window.utilWeb || !window.utilWeb.postNative) {
        throw new Error("请检查是否真机环境，相关jsinterface未成功加载");
      }
      window.utilWeb.postNative(commandName, JSON.stringify(params || {}));
    } catch (error) {
      console.log(error?.message || "");
    }
  };
})();
