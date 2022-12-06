import TeamsService from '../../../services/TeamsService';
import { TeamOpenableProps } from '../../../types/props/TeamOpenableProps';
import NumberDialog from './NumberDialog';

function RemovePointsDialog(props : TeamOpenableProps) {

  const removePoints = async (points: number) => await TeamsService.RemovePoints(props.teamNumber, points);

  return (
    <NumberDialog 
      action={removePoints}
      defaultValue={0}
      title={'Remove points'}
      description={'How many points do You want to remove?'}
      label={'Points'}
      actionButtonName={'Remove'}
      open={props.open}
      onClose={props.onClose} />
  );
}

export default RemovePointsDialog;