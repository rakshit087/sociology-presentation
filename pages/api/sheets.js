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
    if (rows.length) {
      return rows
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
