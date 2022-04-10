export const selectIsModalLogoutOpen = state => state.global.isModalLogoutOpen;

export const selectIsModalAddTransactionOpen = state => state.global.isModalAddTransactionOpen;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.auth.user;

export const selectUserName = state => state.auth.user.name;

export const selectBalance = state => state.auth.user.balance;

export const selectToken = state => state.auth.token;

export const selectCategories = state => state.categories;

export const selectTransactions = state => state.finance.transactions.data;
