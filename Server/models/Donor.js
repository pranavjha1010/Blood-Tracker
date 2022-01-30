const { Double } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const donarSchema = mongoose.Schema({
  
  Name: {
    type: String,
    maxlength: 50,
  },
  Address: {
    type: String,
  },
  Age: {
    type: Number,
    default: 0,
    },
  Height_cms: {
    type: Number,
    },
  Weight_kgs: {
    type: Number,
  },
  MedicalExam: {
    type: String,
  },
  BloodGroup: {
    type: String,
    },
  RhFactor: {
      type: Boolean,
      default: false,
    },
  BloodPressure: {
    type: String,
    },
  BloodUnitNumber: {
    type: Number,
    },
  BagSegmentNumber: {
    type: Number,
    },
  AadhaarNumber: {
    type: Number,
    length: 12,
    },
  DonarCreditCardNumber: {
      type:Number,
  },
  DateOfDonation: {
    type: Date,
  },
}, {timestamps: true});




const Donar = mongoose.model('Donar', donarSchema);

module.exports = {Donar};