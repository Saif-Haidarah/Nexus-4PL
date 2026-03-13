const mongoose = require('mongoose');

const ShipmentSchema = new mongoose.Schema({
    shipmentID: { type: String, required: true, unique: true },
    origin: String,      // مصدر الشحنة (مثلاً: شنغهاي)
    destination: String, // الوجهة (مثلاً: ميناء الدمام)
    status: { 
        type: String, 
        enum: ['Pending', 'In-Transit', 'Customs', 'Delivered'],
        default: 'Pending'
    },
    clientSource: { type: String, default: 'Manual' }, // هل المصدر SAP أو Excel؟
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Shipment', ShipmentSchema);
