export let cfg = {
  // apiUrl: 'http://books.prodio.bg/api',
  apiUrl: 'http://192.168.1.47:8000/api/v1',
  tokenName: 'token',
  user: {
    register: '/rest-auth/registration/',
    login: '/rest-auth/login/',
    me: '/rest-auth/user/'
  },
  profiles: '/profiles',
  reference: {
  	level: '/reference/level/',
  	position: '/reference/position/',
  	role: '/reference/role/',
  	country: '/reference/country/',
  	social_network: '/reference/social_network/'
  }
};
