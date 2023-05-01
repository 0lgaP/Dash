>1
```
npm create vite@latest my-vue-app
```
* npm run dev
* npm run build


>2
```
https://console.firebase.google.com
+ create project
+ add web app -> register app
+ Project Overview -> app -> settings wheel ->  scroll down for config

Enable services on the backend
> Firestore Database
> Authentication
> etc..

```
>3
```
npm install firebase
```
>4
firebaseConfig location (2)
__________________________
in Firebase **8**
```
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {...}

// init firebase
firebase.initializeApp(firebaseConfig);

// init service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp };
```
____________________________
in Firebase **9**
```
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAuth } from "firebase/auth";

const firebaseConfig = {...}

// init firebase
firebase.initializeApp(firebaseConfig);

// init service
const projectFirestore = firebase.firestore();
const projectAuth = getAuth();

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp };
```

>5
Initialise firebase frontend
```
npm install firebase-tools
```
firebase login -> follow propmts to authenticate

```
firebase init
```

>6 
Import the hooks created from last project as well as the context provider

>7 
wrap <App/> in main.jsx with the AuthContextProvider
the context is providing state: {user, authIsReady} as well as the dispatch function

>8
set up all needed pages in their own pages folder
/* pages

dashboard (homepage)
login
register
create
project(project details)

*/

>9 
```
npm i react-router-dom
```
Set up routes in App

## Router 5
```
<BrowserRouter>
  <Switch>
    <Route exact path="/">
      <Dashboard />
    </Route>
    <Route path="/login">
      <Login />
    </Route>
  </Switch>
</BrowserRouter>
```
## Router 6
```
<BrowserRouter>
  <Routes>
    <Route exact path="/" element={<Dashboard/>} />
    <Route path="/login" element={<Login />} >
  </Routes>
</BrowserRouter>
```

>10
Create the nav bad and use Link from router-dom to connect the available pages

>11
Create side bar using A <NavLink> is a special kind of <Link> that knows whether or not it is "active" or "pending". This is useful when building a navigation menu, such as a breadcrumb or a set of tabs where you'd like to show which of them is currently selected. It also provides useful context for assistive technology like screen readers.

>12
Set up input fields and create registration form
