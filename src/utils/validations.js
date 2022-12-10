const emailFormat = (email) => {
    const ruleEmail = /\S+@\S+\.\S+/;
    const emailOk = ruleEmail.test(email);
    return emailOk;
};

module.exports = {
    emailFormat,
};