easypost = Easypost('3R57pd18lC0hrVu7kL3nUg');
Fiber = Npm.require('fibers');
Meteor.methods({
	submit: function(toName, toCo, toAddress, toAddress2, toCity, toState, toZip, fromName, fromCo, fromAddress, fromAddress2, fromCity, fromState, fromZip, length, width, height, weight) {
		var toAddress = {
		    name: toName,
		    company: toCo,
		    street1: toAddress,
		    street2: toAddress2,
		    city: toCity,
		    state: toState,
		    zip: toZip,
		};
		var fromAddress = {
		    name: fromName,
		    company: fromCo,
		    street1: fromAddress,
		    street2: fromAddress2,
		    city: fromCity,
		    state: fromState,
		    zip: fromZip,
		};

		var parcel = {
		    length: length,
		    width: width,
		    height: height,
		    weight: weight
		};
		var labelID = Label.findOne()._id;
		// create shipment
		easypost.Shipment.create({
		    to_address: toAddress,
		    from_address: fromAddress,
		    parcel: parcel
		}, function(err, shipment) {
		    // buy postage label with one of the rate objects
		    shipment.buy({rate: shipment.lowestRate(['USPS'], services=['First'])}, function(err, shipment) {
		        console.log(shipment.tracking_code);
		        console.log(shipment.postage_label.label_url);
		        Fiber(function() {Label.update({_id: labelID}, {$set: {currentLabel: shipment.postage_label.label_url}});}).run();
		    });
		});
	}
});