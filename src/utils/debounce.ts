export function debounce (callback: Function, delay = 1000) {
  let timeoutRef: (number|null) = null;

  return (...args: any[]) => {
    if (timeoutRef) {
      clearTimeout(timeoutRef);
    }

    timeoutRef = Number(setTimeout(() => {
      callback(...args)
    }, delay));
  };
}