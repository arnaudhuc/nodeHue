Turn Hue Phillips on with Javascript

# Get started

- Follow the steps to get your hub IP Address and a username here : [https://developers.meethue.com/develop/get-started-2/](https://developers.meethue.com/develop/get-started-2/)

- Create a .env file
- Fill it with this two keys

```
HUE_USER=<username>
HUE_ADRESS=<ip address>
```

- Then you can run `npm install` and `npm run start` to let the magic do the trick

# More

- You can change the ligth id you want to play with in the `app.ts` :

```
const ids = [3, 4];
```
