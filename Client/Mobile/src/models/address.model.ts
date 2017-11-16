export class AddressModel {

	constructor(
		public street_number: 	string = '',
		public route: 			string = '',
		public locality: 		string = '',
		public state: 			string = '',
		public country: 		string = '',
		public postal_code:		string = '',
		public country_code?: 	string,
		public latitude?: 		number,
		public longtitude?: 	number,
		public placeId?: 		string
	) {
		//
	}
}
