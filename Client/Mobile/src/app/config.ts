export let cfg = {
  // apiUrl: 'https://acrolink.org/api/v1',
  apiUrl: 'http://192.168.1.108:8000/api/v1',
  tokenName: 'token',
  user: {
    register: '/rest-auth/registration/',
    login: '/rest-auth/login/',
    me: '/rest-auth/user/'
  },
  profiles: '/profiles/',
  reference: {
  	level: '/reference/level/',
  	position: '/reference/position/',
  	role: '/reference/role/',
  	country: '/reference/country/',
  	social_network: '/reference/social_network/'
  }
};


// curl commands
// curl --verbose -X POST -d "email=<email>&password=<password>" http://192.168.1.108:8000/api/v1/rest-auth/login/
// curl --verbose -X GET -H "Authorization: JWT <your_token>" http://192.168.1.108:8000/api/v1/rest-auth/user/
// curl --verbose -H "Authorization: JWT <your_token>" -H "Content-Type: application/json" -X PUT -d '{"username":"","phone":"", "bio":""}' http://192.168.1.108:8000/api/v1/rest-auth/user/

// curl --verbose -H "Authorization: JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJvcmlnX2lhdCI6MTUxNTI1MzY5NCwidXNlcl9pZCI6MiwiZXhwIjoxNTE2NDYzMjk0LCJ1c2VybmFtZSI6ImFydGVtLm9ybG92IiwiZW1haWwiOiJhcnRlbS5vcmxvdkBnbWFpbC5jb20ifQ.XxgLJOeIjYqhG0cWKQbFcF1E8-fJCiKnoyWjp9gJ_fI" -H "Content-Type: application/json" -X PUT -d '{"username":"artem.orlov","first_name":"Artem2","last_name":"Orlov","profile":{"phone":"+7916","birth_date":"1978-12-28","practice_start_date":"2016-08-01","bio":"test","gender":{"pk":1,"name":"Male"}}}' http://192.168.1.108:8000/api/v1/rest-auth/user/


// curl -X POST -d "email=<email>&password=<password>" https://acrolink.org/api/v1/rest-auth/login/
// curl -X GET -H "Authorization: JWT <your_token>" https://acrolink.org/api/v1/rest-auth/user/
