declare global {
  interface Window {
    turnstile?: any;
    onTurnstileLoad?: () => void;
  }
}
export {}
