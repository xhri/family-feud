import TeamsService from '../../../services/TeamsService';
import { TeamOpenableProps } from '../../../types/props/TeamOpenableProps';
import NumberDialog from './NumberDialog';

function AddPointsDialog(props : TeamOpenableProps) {

  const addPoints = async (points: number) => await TeamsService.AddPoints(props.teamNumber, points);

  return (
    <NumberDialog 
      action={addPoints}
      defaultValue={0}
      title={'Add points'}
      description={'How many points do You want to add?'}
      label={'Points'}
      actionButtonName={'Add'}
      open={props.open}
      onClose={props.onClose} />
  );
}

export default AddPointsDialog;