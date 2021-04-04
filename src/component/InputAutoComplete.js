
import { useState ,useEffect} from 'react';
import useAutocomplete from "@material-ui/lab/useAutocomplete";
import { makeStyles } from "@material-ui/core/styles";
export default function UseAutocomplete(props) {
  
  const classes = props.useStyles;
  const {getRootProps,getInputProps,getListboxProps,getOptionProps,groupedOptions
  } = useAutocomplete({
    id: props.id,
    options: props.Data,
    getOptionLabel: (option) => option.name,
    clearOnBlur:false,
  });
  const [Value, setValue] = useState("")
  // console.log(props)
  // if(props.valueCarte)
  //   setValue(props.valueCarte);
  // disabled:"disabled" 
  function FocusFct(e){e.target.style.borderRadius="10px 10px 0 0";}   
  function BlurFct(e){e.target.style.borderRadius="15px";}
  return (
    <div  style={{width:parseInt(props.width)+"%", marginLeft:props.marginLeft , marginRight:props.marginRight}} onBlur={BlurFct}>
      <div {...getRootProps()}>
        {
            props.disabled?
            // <label className={classes.input} value={props.valueCarte}></label>
             <input className={classes.input} {...getInputProps()} onFocus={FocusFct} placeholder={props.placeholder} disabled={props.disabled} value={props.valueCarte}/>
            :
            <input className={classes.input} {...getInputProps()} onFocus={FocusFct} placeholder={props.placeholder} disabled={props.disabled}/>
        }
       
        
      </div>
      {groupedOptions.length > 0 ? (
        // style={{width:(parseInt(props.width)-3.8)+"%"}}
        <ul className={classes.listbox} {...getListboxProps()} style={{width:props.widthList+"%"}}>
          {groupedOptions.map((option, index) => (
            <li {...getOptionProps({ option, index })}>{option.name}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

