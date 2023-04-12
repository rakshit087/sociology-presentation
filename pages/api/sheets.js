import { google } from 'googleapis'

export async function getDataFromSheets() {
  try {
    const target = ['https://www.googleapis.com/auth/spreadsheets.readonly']
    const jwt = new google.auth.JWT(
      process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      null,
      (process.env.GOOGLE_SHEETS_PRIVATE_KEY || '').replace(/\\n/g, '\n'),
      target
    )

    const sheets = google.sheets({ version: 'v4', auth: jwt })
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: 'responses',
    })

    const rows = response.data.values
    let sendThis = [
      { title: 'timestamp', responses: [] },
      {
        title: 'What is the age group of working mom you interviewed',
        responses: [],
      },
      {
        title: 'What is the age group of the children she had?',
        responses: [],
      },
      {
        title: 'Did you ever face the Working Mom Dilemma?',
        responses: [],
      },
      {
        title: 'Did you ever face any biases at the workplace due to your maternal role?',
        responses: [],
      },
      {
        title: 'What changes did you experience in your role during and after COVID-19 Pandemic?',
        responses: [],
      },
      {
        title: 'Did you make any compromises with your health?',
        responses: [],
      },
      {
        title:
          'Do you have to make compromises with your dignity in order to ask for help in order to ensure that your role as a mother and as a worker is performed effectively?',
        responses: [],
      },
      {
        title: 'Do you come across people in your day today who constantly undermine your efforts and expect more from you?',
        responses: [],
      },
      {
        title: 'How do you deal with such people?',
        responses: [],
      },
      {
        title: 'How do you deal with a situation where you think you made a mistake as a mother?',
        responses: [],
      },
      {
        title: 'How do you think role of Indian working mothers are different from that mothers in western countries?',
        responses: [],
      },
      {
        title: 'Do you think women staying at home have better sense and time of living life?',
        responses: [],
      },
      {
        title: 'Do you think stay-at-home mothers are way more effective mothers?',
        responses: [],
      },
      {
        title: 'If at all you have to choose between a working professional and a stay at home mother, which role would you select? ',
        responses: [],
      },
    ]
    if (rows.length) {
      for (let i = 1; i < rows.length; i++) {
        const row = rows[i]
        for (let j = 0; j < row.length; j++) {
          sendThis[j].responses.push(row[j])
        }
      }
      return sendThis
    }
  } catch (err) {
    console.log(err)
  }

  return []
}

export default function handler(req, res) {
  getDataFromSheets()
    .then((data) => {
      res.status(200).json({ data })
    })
    .catch((err) => {
      res.status(500).json({ error: err })
    })
}
