# fccTimestamp
freecodecamp microservice project 

## 1. User Stories

1. The API endpoint is GET [project_url]/api/timestamp/:date_string?
2. A date string is valid if can be successfully parsed by new Date(date_string).
   
   Note that the unix timestamp needs to be an integer (not a string) specifying milliseconds.
   
   In our test we will use date strings compliant with ISO-8601 (e.g. "2016-11-20") because this will ensure an UTC timestamp.
3. If the date string is empty it should be equivalent to trigger new Date(), i.e. the service uses the current timestamp.
4. If the date string is valid the api returns a JSON having the structure
   
   {"unix": <date.getTime()>, "utc" : <date.toUTCString()> }
   
   e.g. {"unix": 1479663089000 ,"utc": "Sun, 20 Nov 2016 17:31:29 GMT"}
5. If the date string is invalid the api returns a JSON having the structure
   
   {"error" : "Invalid Date" }.

## 2. user stories 요약
- end point, date parameter
- validation
- response

## 3. restriction (myself)
- only use node.js api
- start small and expand
- define each step precisely
- test -> develop

## 4. checklist
- [ ] hello world
- [ ] handle invalid requests
- [ ] handle valid requests

## 5. environment
- javascript ES6
- node v14.3.0