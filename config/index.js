// export const isLocalServer = process.env.ENV_API == 'local' ? true : false;
export const isLocalServer = true;

export const API_URL = isLocalServer
  ? 'http://localhost:8000'
  : 'http://54.165.207.136';
