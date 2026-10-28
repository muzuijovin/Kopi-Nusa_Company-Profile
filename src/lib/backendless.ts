import axios from "axios";

// Semua konfigurasi Backendless dikumpulkan di satu tempat (sebelumnya di-copy di 6 file)
const API_URL = "https://api.backendless.com";

// app untuk akun komunitas (login & register user)
export const userApi = axios.create({
  baseURL: `${API_URL}/49BC5A71-3AE3-4B65-B99F-A4F5AAD7738D/5650E33C-6FB3-4D44-B9E4-9CFF3E576AD1`,
});

// app khusus akun admin
export const adminApi = axios.create({
  baseURL: `${API_URL}/BEAC0379-56C5-435B-8BB6-97BADF58B189/DB1E20A1-06AF-4FE9-96EA-EEC9E9BB76A7`,
});

// app konten: tabel `blog` dan `Team`
export const dataApi = axios.create({
  baseURL: `${API_URL}/A73033C9-9473-4F00-8873-C91B67EEA0F4/5B9272C5-AA16-45BD-B422-F21BB7E83DFF`,
});
