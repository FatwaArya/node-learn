const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI_DEV || process.env.MONGODB_URI)