export const fiatIncomeDataLoader = async () => {
    const response = await fetch("http://localhost:5000/incomeFiatDate");
    return response.json();
};

export const cryptoIncomeDataLoader = async () => {
    const response = await fetch("http://localhost:5001/incomeCryptoDate");
    return response.json();
};

export const totalIncomeDataLoader = async () => {
    const response = await fetch("http://localhost:5002/incomeDate");
    return response.json();
};

export const fiatExpensesDataLoader = async () => {
    const response = await fetch("http://localhost:5003/expensesFiatDate");
    return response.json();
};

export const cryptoExpensesDataLoader = async () => {
    const response = await fetch("http://localhost:5004/expensesCryptoDate");
    return response.json();
};

export const totalExpensesDataLoader = async () => {
    const response = await fetch("http://localhost:5005/expensesDate");
    return response.json();
};

export const fiatInvestmentsDataLoader = async () => {
    const response = await fetch("http://localhost:5006/investmentsFiatDate");
    return response.json();
};

export const cryptoInvestmentsDataLoader = async () => {
    const response = await fetch("http://localhost:5007/investmentsCryptoDate");
    return response.json();
};

export const totalInvestmentsDataLoader = async () => {
    const response = await fetch("http://localhost:5008/investmentsDate");
    return response.json();
};

export const smsDataLoader = async () => {
    const response = await fetch("http://localhost:5009/smsNotifications");
    return response.json();
};
