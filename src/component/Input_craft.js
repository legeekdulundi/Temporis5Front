



// import TextField from '@material-ui/core/TextField';
// import Autocomplete from '@material-ui/lab/Autocomplete';
// import InputBase from "@material-ui/core/InputBase";
// import { InputAdornment } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& .MuiInputLabel-outlined:not(.MuiInputLabel-shrink)": {
//       // Default transform is "translate(14px, 20px) scale(1)""
//       // This lines up the label with the initial cursor position in the input
//       // after changing its padding-left.
//       transform: "translate(34px, 20px) scale(1);"
//     }
//   },
//   inputRoot: {
//     color: "purple",
//     // This matches the specificity of the default styles at https://github.com/mui-org/material-ui/blob/v4.11.3/packages/material-ui-lab/src/Autocomplete/Autocomplete.js#L90
//     '&[class*="MuiOutlinedInput-root"] .MuiAutocomplete-input:first-child': {
//       // Default left padding is 6px
//       paddingLeft: 26
//     },
//     "& .MuiOutlinedInput-notchedOutline": {
//       borderColor: "green"
//     },
//     "&:hover .MuiOutlinedInput-notchedOutline": {
//       borderColor: "red"
//     },
//     "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
//       borderColor: "purple"
//     }
//   }
// }));
// const top100Films = [
//     { title: 'The Shawshank Redemption', year: 1994 },
//     { title: 'The Godfather', year: 1972 },
//     { title: 'The Godfather: Part II', year: 1974 },
//     { title: 'The Dark Knight', year: 2008 }
//   ];
// //   function App() {
    
// //     // return <TextField defaultValue="default text" InputProps={{ classes }} />;
// //   }
// const InputCraft = () => {
//     const classes = useStyles();
    
//     const Show = ()=>{
//         let Liste_items =[]
//         for (let i=0;i<5;i++){
//             i !== 4 ? Liste_items.push(<><input className="input"/><div className="operator-style">+</div></>) : Liste_items.push(<input className="input"/>)
//         }
//         return Liste_items
//     }

//     return (
//         <div className="menu-craft">
//             <div className="container-input-craft" >
//                 {
                
//                 <Autocomplete
//                     id="combo-box-demo"
                    
//                     className="input"
//                     options={top100Films}
//                     getOptionLabel={(option) => option.title}
//                     // style={{ width: 300 }}
//                     style={{ border: "none" }}
//                     // 
//                     renderInput={(params) => <TextField {...params} label="Carte" variant="outlined" />}
//                 />
//                     //Show()
//                 }
//             </div>
//             <div className="operator-style" style={{"marginLeft": "5%", "fontSize":"2vw"}}>=</div>
//             <input className="input" id="input-items" ></input>
//         </div>
//     )
// }

// export default InputCraft


import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {"& .MuiInputLabel-outlined:not(.MuiInputLabel-shrink)": {transform: "translate(34px, 20px) scale(1);"}},
  inputRoot: {
    color: "purple",
    '&[class*="MuiOutlinedInput-root input"] .MuiAutocomplete-input:first-child': {paddingLeft: 26},
    "& .MuiOutlinedInput-notchedOutline": {borderStyle: "none"},
    "&:hover .MuiOutlinedInput-notchedOutline": {borderStyle: "none"},
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {borderStyle: "none"}}

}));

export default function InputCraft() {
  const classes = useStyles();
  return (
    <Autocomplete
      id="combo-box-demo"
      classes={classes}
      className=" autocomplete"
      options={top100Films}
      getOptionLabel={(option) => option.title}
      renderInput={(params) => {
        return (
          <TextField {...params} className="inputAuto" placeholder="test" variant="outlined" />
        );
      }}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 }
];

// const InputCraft = () => {
// }

// export default InputCraft

