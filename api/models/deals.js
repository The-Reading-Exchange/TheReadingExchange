// Require mongoose
var mongoose = require("mongoose");
// Create the schema class using mongoose's schema method
var Schema = mongoose.Schema;

// Create the noteSchema with the schema object
var dealSchema = new mongoose.Schema({
    // The headline is the article associate with the note
  _Id: {
    type: Schema.Types.ObjectId,
  },
  // date is just a string
  date: {
    type: Date,
    default: Date.now
  },
  // as is the noteText
  borrower: String,
  lender: String,
  book: Object,
  status: String,
  isbn: String,
  lenderName: String,
  lenderAddress: String
});

// Create the Note model using the noteSchema
mongoose.model('Deal', dealSchema);