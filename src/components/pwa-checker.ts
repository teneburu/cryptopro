export const checkPWA = (): boolean => {
  if (typeof window !== 'undefined') {
    return window.matchMedia('(display-mode: standalone)').matches || (window.navigator as any).standalone === true;
  }
  return false;
};
