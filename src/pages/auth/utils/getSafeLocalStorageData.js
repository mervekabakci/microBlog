export default function getSafeLocalStorageData() {
  try {
    return localStorage.data ? JSON.parse(localStorage.data) : null;
  } catch (e) {
    localStorage.removeItem('data');
    return null;
  }
}
