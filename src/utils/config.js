// 
const pages = {}

pages.login = '/';
pages.dashboard = '/dashboard';

const config = {
    api: {
        login: '/auth/login',
        logout: '/auth/logout'
    },
    pages: {
        login: '/', 
        dashboard: '/dashboard',
        dispatch: '/dispatch',
        partner: '/partners',
        settings: '/settings',
        support: '/supports',
        order: '/orders',
        pricing: '/pricing',
        hmedix: '/hmedix',
        logout: '/logout',
    },
    key: {
        user: '___@urds_user',
        token: '___@urds_token'
    },
    userData: {
        username: '',
        user_type: '',
        auth_id: '',
        phone_number: '',
        email: '',
        password: ''
    },
    partnerData: {},
    orderData: {},
    pricelistData: {},
    states: [
        "Abia","Adamawa","Akwa Ibom","Anambra","Bauchi","Bayelsa","Benue","Borno","Cross River","Delta","Ebonyi","Edo","Ekiti","Enugu",
        "Gombe","Imo","Jigawa","Kaduna","Kano","Katsina","Kebbi","Kogi","Kwara","Lagos","Nasarawa","Niger","Ogun","Ondo","Osun",
        "Oyo","Plateau","Pivers","Sokoto","Taraba","Yobe","Zamfara","FCT"
    ],
    city: [
        'bamburu','mararaba','nyanya','gwarinpa','life camp','gudu','area i', 'wuse',
        'zone 2','zone 4','zone 5','zone 6','gwagwalada','garki','asokoro','kurunduma',
        'jikwoyi','masaka','dawaki','dustse alaji','kubwa','utako','jabi','katampe','katampe extension',
        'karshi','zuba','yoba',
    ],
    gender: [
        'male', 'female', 'other'
    ]
};


export default config;