//

import Input from './Input';
import Button from './Button';
import Typography from './Typography';
import CssBaseline from './CssBaseline';
import Autocomplete from './Autocomplete';
import InputLabel from './InputLabel';
import Table from './Table';
import Select from './Select';

// ----------------------------------------------------------------------

export default function ComponentsOverrides(theme) {
  return Object.assign(
    Input(theme),
    Button(theme),
    Typography(theme), 
    CssBaseline(theme),
    Autocomplete(theme),
    InputLabel(theme),
    Table(theme),
    Select(theme)
  );
}
