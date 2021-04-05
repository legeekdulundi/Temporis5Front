
import useAutocomplete from "@material-ui/lab/useAutocomplete";
// import { makeStyles } from "@material-ui/core/styles";
export default function UseAutocomplete(props) {
  const classes = props.useStyles;
  const {getRootProps,getInputProps,getListboxProps,getOptionProps,groupedOptions
  } = useAutocomplete({
    id: props.id,
    options: props.Data,
    getOptionLabel: (option) => option.name,
    clearOnBlur:false,
    
  });
  function FocusFct(e){if(e)
    {
      e.target.style.borderRadius="10px 10px 0 0";
      e.target.value=''
  }}   
  function BlurFct(e){if(e)e.target.style.borderRadius="15px";}
  return (
    <div style={{width:parseInt(props.width)+"%", marginLeft:props.marginLeft , marginRight:props.marginRight}} onBlur={BlurFct}>
      {
        props.disabled?
        <textarea className={classes.input} placeholder={props.placeholder} disabled={props.disabled} 
        style={{resize:"none",textAlignLast:"center",paddingTop:props.paddingTop,overflowY:"hidden",height:props.height,maxHeight:props.height}} ></textarea>
        :
        <div {...getRootProps()}>
          {<input key={props.id}  className={classes.input} {...getInputProps()} onFocus={FocusFct} placeholder={props.placeholder} disabled={props.disabled}/>}
        </div>
      }
      {groupedOptions.length > 0 ? (
        <ul data-class={props.subclass}  id="testList"className={classes.listbox} {...getListboxProps()} style={{width:props.widthList+"%"}}>
          {groupedOptions.map((option, index) => (
            <li {...getOptionProps({ option, index })}>{option.name}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

