const throttle = (callback: Function, wait: number) => {
  let waiting = true;
  return function (e: any) {
    if (waiting) {
      callback(e);
      waiting = false;
      setTimeout(() => {
        waiting = true;
      }, wait);
    }
  };
};

export default throttle;
