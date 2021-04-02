/* eslint-disable no-use-before-define */
import React from 'react';
import useAutocomplete from '@material-ui/lab/useAutocomplete';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  input: {"outline":"none","width":"95%","height":"2vw","borderRadius":"15px","border":"none","fontSize":"0.90vw","background":"rgba(255, 255, 255, 0.75)","backdropFilter":"blur(100px)","fontFamily":"'Quicksand'"}
  ,
  listbox: {
    width: "16%",
    borderRadius:"0 0 15px 15px",
    margin: 0,
    padding: 0,
    zIndex: 1,
    position: 'absolute',
    listStyle: 'none',
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
    overflow: 'auto',
    maxHeight: 200,
    border: '1px solid rgba(0,0,0,.25)',
    '& li[data-focus="true"]': {
      backgroundColor: '#4a8df6',
      color: 'white',
      cursor: 'pointer',
    },
    '& li:active': {
      backgroundColor: '#2977f5',
      color: 'white',
    },
  },
}));

export default function UseAutocomplete(props) {
  const classes = useStyles();
  const {
    getRootProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
  } 
  = useAutocomplete({
    id: props.id,
    options: top100Films,
    getOptionLabel: (option) => option.title
  });
  function FocusFct(e){e.target.style.borderRadius="10px 10px 0 0";}
  function BlurFct(e){e.target.style.borderRadius="15px";}
  return (
    <div >
      <div onBlur={BlurFct} onFocus={FocusFct}   >
        <div {...getRootProps()}>
          <input className={classes.input} {...getInputProps()} />
        </div>
      </div>
      {groupedOptions.length > 0 ? (
        <ul className={classes.listbox} {...getListboxProps()}>
          {groupedOptions.map((option, index) => (
            <li {...getOptionProps({ option, index })}>{option.title}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 }
];
