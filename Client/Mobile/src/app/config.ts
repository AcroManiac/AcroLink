export let cfg = {
  apiUrl: 'https://acrolink.org/api/v1',
  // apiUrl: 'http://192.168.1.80:8000/api/v1',
  // apiUrl: 'http://52.57.67.183:8000/api/v1',
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
