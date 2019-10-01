module.exports = {
  up: queryInterface => queryInterface.bulkInsert('banks', [
    {
      bank_code: '110',
      bank_name: 'BANK JABAR',
    },
    {
      bank_code: '111',
      bank_name: 'BANK DKI',
    },
    {
      bank_code: '112',
      bank_name: 'BPD DIY',
    },
    {
      bank_code: '113',
      bank_name: 'BANK JATENG',
    },
  ], {}),
  down: queryInterface => queryInterface.bulkDelete('banks', null, {}),
};
