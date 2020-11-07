const { GoogleSpreadsheet } = require('google-spreadsheet');
    
exports.handler = async (event, context, callback) => {
  try {
    const doc = new GoogleSpreadsheet('1pbOCk3zU1qNHS1U9_l8Wn1cd3GsO-OMWc2kqc1J5f6U');
    await doc.useServiceAccountAuth(require('./sheets-db-271603-355f4e4ff03a.json'));
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];

    const data =JSON.parse(event.body);
    const addedRow = await sheet.addRow(data);
    
    console.log('added');

    return {
      statusCode: 200,
      body: 'add success'
    }
  } catch (e) {
  	console.log(e.message);
  	console.log(e.response.body);
    return {
      statusCode: e.code,
      body: e.message
    }
  }
}
