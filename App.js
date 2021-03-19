// File: app.js

const COMMA_ENTRIES = [ // First name, City, Birth date
    'Mckayla, Atlanta, 5/29/1986',
    'Elliot, New York City, 4/3/1947',
  ]
  const DOLLAR_ENTRIES = [ // City, Birth date, Last name, First name
    'LA $ 10-4-1974 $ Nolan $ Rhiannon',
    'NYC $ 12-1-1962 $ Bruen $ Rigoberto',
  ]
  
  // WRITE YOUR FUNCTIONS / CLASSES HERE
  const commaParse = (arr) => {

    for(let i = 0; i < arr.length; i++) {

      arr[i] = arr[i].replace(/,/g, '');

      console.log(arr[i]);
    }
  }

  const dollarParse = (arr) => {

    for(let i = 0; i < arr.length; i++) {

      arr[i] = arr[i].split(' $ ');

      const name = `${arr[i][3]}`
      let city = `${arr[i][0]}`;
      let dob = `${arr[i][1]}`;

      city = city.replace(/LA/, 'Los Angeles');
      city = city.replace(/NYC/, 'New York City');

      dob = dob.replace(/\-/g, '/');

      arr[i] = `${name} ${city} ${dob}`;

      console.log(arr[i]);
    }
  }

  
  class App {
    static run({ comma = [], dollar = [] }) {

      commaParse(comma);
      dollarParse(dollar)

    }
  }
  
  App.run({ comma: COMMA_ENTRIES, dollar: DOLLAR_ENTRIES })
  
  // Expected standard output:
  //   Mckayla Atlanta 5/29/1986
  //   Rhiannon Los Angeles 10/4/1974
  //   Elliot New York City 4/3/1947
  //   Rigoberto New York City 12/1/1962
  
  // WRITE YOUR SPECS HERE
  /*
  commaParse function just removes all ocurrences using replace method

  dollarParse first uses split to remove all ' $ ' ocurrences
  then giving that the format should be fixed extracts name, city and date of birth.
  after that city accronyms get replaces (just those cases considered) and last
  all '-' ocurrences gets replaces from dob
  */