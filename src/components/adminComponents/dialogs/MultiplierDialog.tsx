import SettingsService from '../../../services/SettingsService';
import { OpenableProps } from '../../../types/props/OpenableProps';
import NumberDialog from './NumberDialog';

function MultiplierDialog(props : OpenableProps) {
  return (
    <NumberDialog 
      action={SettingsService.SetMultiplier}
      defaultValue={1} title={'Set multiplier.'}
      description={'Set multiplier.'}
      label={'Multiplier'}
      actionButtonName={'Set'}
      open={props.open}
      onClose={props.onClose} />
  );
}

export default MultiplierDialog;