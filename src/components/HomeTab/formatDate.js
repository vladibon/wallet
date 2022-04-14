export const formatDate = date =>
  new Date(date).toLocaleString('en-GB').split('/').join('.').replace(',', '').slice(0, 16);
