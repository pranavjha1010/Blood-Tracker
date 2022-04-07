/* eslint-disable new-cap */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const donarCampSchema = mongoose.Schema(
  {
    NameOfOrganzation: {
      type: String,
      maxlength: 50,
    },
    TypeOfCamp: {
      type: String,
    },
    ContactPerson: {
      type: String,
    },
    CampHeldAt: {
      type: String,
    },
    State: {
      type: String,
    },
    District: {
      type: String,
    },
    LetterMemoNumber: {
      type: Number,
      default: 0,
    },
    LetterIssuedByAuthority: {
      type: String,
    },
    ApproxDonar: {
      type: Number,
      default: 0,
    },
    ActualDonar: {
      type: Number,
      default: 0,
    },

    DateOfCamp: {
      type: Date,
    },
  },
  { timestamps: true }
);

const DonarCamp = mongoose.model("DonarCamp", donarCampSchema);

module.exports = { DonarCamp };
