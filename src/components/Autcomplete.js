/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function ComboBox() {
const [value, setValue] = React.useState();
  return (
    <Autocomplete
      id="combo-box-demo"
      options={top100Films}
      getOptionLabel={(option) => option.keywords}
      style={{ width: 300 }}
      onSubmit={(e)=>{
        e.preventDefault()
      }}
      onChange={(event, newValue) => {
        console.log('on ch called',event)
        event.preventDefault();
        setValue(newValue);
        console.log('newValue==',newValue)
      }}
      renderInput={(params) => <TextField {...params} label="Search Tenders" variant="outlined" />}
    />
  );
}

const top100Films = [
    {tenderCode:'DH046241',  keywords:'buyer1'},
    {tenderCode:'DH046241',  keywords:'buyer2'},
    {tenderCode:'DH046241',  keywords:'buyer3'},
    {tenderCode:'DH046241',  keywords:'buyer4'},
];
