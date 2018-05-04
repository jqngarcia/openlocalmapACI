       // All the POIs shown in the map

var pois = {

    bar: {
	name: 'Bar',
	query: '[amenity=bar][member_of=ACI]',
	iconName: 'bar_coktail'
    },

    pub: {
	name: 'Pub',
	query: '[amenity=pub][member_of=ACI]',
	iconName: 'bar'
    },

    restaurant: {
	name: 'Restaurant',
	query: '[amenity=restaurant][member_of=ACI]',
	iconName: 'restaurant',
    },

    caterer: {
	name: 'Menjar preparat',
	query: '[delivery=only][member_of=ACI]',
	iconName: 'takeaway'
    },

    bank: {
	name: 'Banc',
	query: '[amenity=bank][member_of=ACI]',
	iconName: 'bank',
	tagParser: bank_parser
    },

    wheel_repair: {
	name: 'Recambis',
	query: '[shop=car_parts][member_of=ACI]',
	iconName: 'tires'
    },

    repair: {
	name: 'Mecànic',
	query: '[shop=car_repair][member_of=ACI]',
	iconName: 'repair'
    },

    training_dance: {
	name: 'Acadèmia de Dansa',
	query: '[leisure=dance][member_of=ACI]',
	iconName: 'dance_class'
    },

    Playground: {
	name: 'Espais de lleure',
	query: '[leisure=playground][member_of=ACI]',
	iconName: 'playground'
    },
	
    Gambling: {
	name: 'Jocs i Apostes',
	query: '[amenity=gambling][member_of=ACI]',
	iconName: 'casino-2'
    },

    pharmacy: {
	name: 'Farmàcia',
	query: '[amenity=pharmacy][member_of=ACI]',
	iconName: 'drugstore'
    },

    dentist: {
	name: 'Dentista',
	query: '[shop=dentist][member_of=ACI]',
	iconName: 'dentist'
    },

    veterinary: {
	name: 'Veterinari',
	query: '[amenity=veterinary][member_of=ACI]',
	iconName: 'veterinary'
    },

    hairdresser: {
	name: 'Perruqueria',
	query: '[shop=hairdresser][member_of=ACI]',
	iconName: 'barber'
    },

    beauty: {
	name: 'Estètica',
	query: '[shop=beauty][member_of=ACI]',
	iconName: 'beautysalon'
    },

    supermarket: {
	name: 'Supermercat',
	query: '[shop=supermarket][member_of=ACI]',
	iconName: 'supermarket'
    },

    greengrocer: {
	name: 'Fruiteria',
	query: '[shop=greengrocer][member_of=ACI]',
	iconName: 'fruits'
    },

    herbalist: {
	name: 'Herboristeria',
	query: '[shop=herbalist][member_of=ACI]',
	iconName: 'herbalist'
    },

    newsagent: {
	name: 'Diaris',
	query: '[office=newspaper][member_of=ACI]',
	iconName: 'newsagent'
    },

    pet: {
	name: 'Mascotes',
	query: '[shop=pet][member_of=ACI]',
	iconName: 'pets'
    },

    jewelry: {
	name: 'Joieria',
	query: '[shop=jewelry][member_of=ACI]',
	iconName: 'jewelry'
    },

    fabric: {
	name: 'Merceria',
	query: '[shop=fabric][member_of=ACI]',
	iconName: 'lingerie'
    },

    it: {
	name: 'Informàtica',
	query: '[office=it][member_of=ACI]',
	iconName: 'computers'
    },

    butcher: {
	name: 'Carniceria',
	query: '[shop=butcher][member_of=ACI]',
	iconName: 'butcher-2'
    },

    electrical_equipment: {
	name: 'Mat.elèctric',
	query: '[shop=electrical_equipment][member_of=ACI]',
	iconName: 'power'
    },

    reforms: {
	name: 'Construccions',
	query: '[craft=reforms][member_of=ACI]',
	iconName: 'plastering'
    },

    electrician: {
	name: 'Electricista',
	query: '[craft=electrician][member_of=ACI]',
	iconName: 'power'
    },

    window_construction: {
	name: 'Al·lumini',
	query: '[craft=window_construction][member_of=ACI]',
	iconName: 'glazer'
    },

    glaziery: {
	name: 'Cristalleria',
	query: '[shop=glaziery][member_of=ACI]',
	iconName: 'glazer'
    },

    paint: {
	name: 'Pintures',
	query: '[shop=paint][member_of=ACI]',
	iconName: 'paint'
    },


    furniture: {
	name: 'Mobles',
	query: '[shop=furniture][member_of=ACI]',
	iconName: 'homecenter'
    },

    estate_agent: {
	name: 'Immobiliària',
	query: '[office=estate_agent]',
	iconName: 'estateagent'
    },

    NGO: {
	name: 'ONG i Fundacions',
	query: '[amenity=ngo]',
	iconName: 'communitycentre'
    },

    hotel: {
	name: 'Hotel',
	query: '[amenitym=hotel][member_of=ACI]',
	iconName: 'hotel_0star',
	tagParser: bank_parser
	    
    },

    sports_centre: {
	name: 'Club',
	query: '[leisure=sports_centre][member_of=ACI]',
	iconName: 'stadium'
    },

}
© 2018 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
API
Training
Shop
Blog
About
