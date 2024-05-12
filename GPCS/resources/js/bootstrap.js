import axios from 'axios';

/**
 * @deprecated bootstrap is trash and should be deleted
 * @returns
 */
window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
