import { Button, Container } from 'components'
import React, { useReducer } from 'react'
import styles from "./.module.css"
import SearchBar from 'components/SearchBar'
import { LoginSetState } from 'pages/Login/types'
import request from '../../api/interceptor/request/index';

const Home: React.FC = () => {

  // const [counter, setCounter] = React.useState(0)

// const increment = (x) => {
//     if (x === "+") setCounter(counter++)
//     setCounter(counter--)
// }

// <Button onClick={() => increment("+")}>+</Button>
// <Button onClick={() => increment("-")}>-</Button>
// <Label>counter</Label>

// const words = ['Apple', 'Banana', 'Orange', 'Grapes', 'Kiwi']


// const SearchBox = (keyWord) => {
//     const [key, setKey] = useState("")
//     <input onChange={(e) => setKey(e.target.value)}/>
//      let result = ""
//     if (words.filter((w) => w.includes(key) ? result=key: result="no match"))
// }



const [value, setValue] = React.useState(0)
const [keyWord, setKeyword] = React.useState("")

const fruits = ['banana', 'apple', 'berry', 'orange', 'lemon', 'watermelon']

const count = (type: string) => {
  const result = type === "+" ? setValue(value + 1) : setValue(value - 1)
  return result
}


const search = () => {
  if (keyWord.length === 0 ) return ""
  const result = fruits.filter(fruit => fruit.includes(keyWord))

  return result
}

const validChecker = () => {
  let _value = value
  if (_value < 0) setValue(0)
  return _value
}

const [countQ, setCountQ] = React.useState(0);

const numbers = [10,43,67,78,95]
const countQuadruples = (e :string) => {
  let quadruples: number[] = [];
  const numbers = e.split(',')
  numbers.map(n => {
    if (+n % 4 === 0) {
      if (+n !== 0) quadruples.push(+n)
    }
  })
console.log(quadruples, "<<<<<")
  setCountQ(quadruples.length)
}

  return (
    <Container className={styles["home-pane"]}>
      {
        fruits.map(f => <li>{f}</li>)
      }
      <SearchBar className={styles["display"]} onChange ={(value) => setKeyword(value)}/>
      <textarea value={search() ? search() : "No Match"}/>
      <Container className={styles["btns"]}>
        <Button onClick={() => count("-")} className={styles["decre-btn"]}>-</Button>
        <Button onClick={() => count("+")} className={styles["incre-btn"]}>+</Button>
      </Container>
      <input className={styles["display"]}value={validChecker()} />
      <input className={styles["display"]} onChange={(e) => countQuadruples(e.target.value)} />
      <textarea value={countQ ? countQ : "no available quadruple"}/>
    </Container>
  )
}

export default Home


// #include <iostream>

// using namespace std;

// void add(string &str, int N)
// { 
//     // Traverse the string
//     int sum = 0;
//     int index =0;
//     do {
//          sum+=int(str[index] - '0');
//          index++;
//     } while (index < N);
    
//     cout << sum;
// }

// void divisibilityCheck(int n)
// {
    // if (n % 2 == 0 ) {
    //     cout << "\n" << n << " is divisible by 2";
    // } else {
    //     cout << "\n" << n  << " is not divisible by 2";
    // }
    
    //  if (n % 3 == 0 ) {
    //     cout << "\n" << n << " is divisible by 3";
    // } else {
    //     cout << "\n" << n  << " is not divisible by 3";
    // }
    
    //  if (n % 4 == 0 ) {
    //     cout << "\n" << n << " is divisible by 4";
    // } else {
    //     cout << "\n" << n  << " is not divisible by 4";
    // }
    
    //  if (n % 5 == 0 ) {
    //     cout << "\n" << n << " is divisible by 5";
    // } else {
    //     cout << "\n" << n  << " is not divisible by 5";
    // }
    
    //   if (n % 6 == 0 ) {
    //     cout << "\n" << n << " is divisible by 6";
    // } else {
    //     cout << "\n" << n  << " is not divisible by 6";
    // }
    
    //   if (n % 7 == 0 ) {
    //     cout << "\n" << n << " is divisible by 7";
    // } else {
    //     cout << "\n" << n  << " is not divisible by 7";
    // }
    
    //   if (n % 8 == 0 ) {
    //     cout << "\n" << n << " is divisible by 8";
    // } else {
    //     cout << "\n" << n  << " is not divisible by 8";
    // }
    
    //   if (n % 9 == 0 ) {
    //     cout << "\n" << n << " is divisible by 9";
    // } else {
    //     cout << "\n" << n  << " is not divisible by 9";
    // }
    
// }

// int main() {
//     int number;
//     cout << "Enter positive number: ";
//     cin >> number;

//     string str = to_string(number);
//     int N = str.size();
//     add(str, N);
//     divisibilityCheck(number);
//     return 0;
// }



// -------------------------------------------------------------------------
/*#include <iostream>

using namespace std;

void add(string &str, int N)
{ 
    int sum = 0;
    int index =0;
    do {
        //sums all array of numbers
         sum+=int(str[index] - '0');
         index++;
    } while (index < N);
    
    cout << "The some of the digits is: " <<sum;
}

void divisibilityCheck(int n)
{
    int index = 2;
    do {
        if (n % index == 0) {
             cout << "\n" << n << " is divisible by " <<index;
        } else {
            cout << "\n" << n  << " is not divisible by " <<index;
        }
        index++;
    } while (index <= 9);
}

int main() {
    int number;
    cout << "Enter positive number: ";
    cin >> number;
    
    // convert number into string
    string str = to_string(number);
    int N = str.size();
    //function that iterate each number
    add(str, N);
    //function that checks divisibility
    divisibilityCheck(number);
    return 0;
} */