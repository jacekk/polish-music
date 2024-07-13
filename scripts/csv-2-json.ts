const csvToJson = require('convert-csv-to-json')

csvToJson
	.fieldDelimiter(',')
	.supportQuotedField(true)
	.generateJsonFileFromCsv('./data/music-in-fb-stories.csv', './src/data/songs.json')
