# Seattle Brewery
#### A React app for a brewery to store and track Keg/kegs. 

#### By **Sharon Lee**
## 🎉 Contents

- [Description](#-description)
- [Specifications](#-specifications)
- [Instructions](#-instructions)
- [Contact](#-contact)
- [License](#-license)

### Description
This is a program for a brewery that uses React and client-side routing via the React Router library. It displays the list of Kegs/ciders available and will allow user authentication for employees to edit/track kegs.

### Specifications
| Spec | Input | Output |
| :-------------     | :------------ | :------------- |
| Homepage | User accesses:http://localhost:8000/| Homepage w/age verification |
| **User clicks 'under21' and doesn't access Kegs| http://localhost:8080/#/UnderAge | User is unable to see Kegs |
| **User clicks 'over21' and accesses Kegs | http://localhost:8080/#/KegList |  User is redirected to list of Kegs |

### Component Structure
```
App
└── Header     
│       
└── Switch
    └── Home
    └── Under21
    └── About Us
    └── Visit
    └── Careers
    └── Keg List
    |     └── Keg
    |    
    └── Employee        
    |    └── Add New Keg
    |    └── Edit Keg
    └── Error 404
```

### Instructions

1. Clone this repository: https://github.com/arynsh/react-seattle-brewery
```
$ git clone https://github.com/arynsh/react-seattle-brewery
```
2. Navigate into the repository
```
$ cd react-seattle-brewery
```
3. In the command line, type in "npm install" or "npm i" then "npm run start".
```
$ npm i
```
```
$ npm run start
```
4. On your browser, open http://localhost:8000/#


### Known Bugs
* No known bugs at this time.

## 📋 Technologies Requirements
 You may use Windows, macOS, or Linux as your development operating system, though building and running apps may be limited.
 Tools used:  
* [C#](https://docs.microsoft.com/en-us/dotnet/csharp/)
* [React](https://reactjs.org/)
* [Node.js](https://nodejs.org/en/)
* [Visual Studio](https://www.visualstudiocommunity.com)
* [GitHub](https://www.github.com)
* HTML
* CSS
 
### Support and Contact details
| Author | GitHub | Email |
|--------|:------:|:-----:|
Sharon Lee| [arynsh](https://github.com/arynsh) |  [sharonlee714@gmail.com](mailto:sharonlee714@gmail.com) 

_Please contact with questions and/or comments._

### License

*This software is licensed under the MIT license*

Copyright (c) 2020 **Sharon Lee**