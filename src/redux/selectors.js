export const selectIsModalLogoutOpen = state => state.global.isModalLogoutOpen;

export const selectIsModalAddTransactionOpen = state => state.global.isModalAddTransactionOpen;

export const selectIsModalDeleteUserOpen = state => state.global.isModalDeleteUserOpen;

export const selectError = state => state.global.errorStatus;

export const selectSuccessResponse = state => state.global.successResponse;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.user;

export const selectUserName = state => state.user.name;

export const selectUserEmail = state => state.user.email;

export const selectBalance = state => state.user.balance;

export const selectCategories = state => state.user.categories;

export const selectSubscription = state => state.user.subscription;

export const selectAvatarURL = state => state.user.avatarURL;

export const selectTransactions = state => state.finance.transactions;

export const selectStatistics = state => state.finance.stats;
