
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { Exercise } from "../../utils/types";
import AddToRoutineDialog from '../AddToRoutineDialog';

type Props = {
  exercise: Exercise;
};

const ExerciseCard = ({ exercise }: Props) => {
    const [openDialog, setOpenDialog] = useState(false);

    const handleOpenDialog = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    }

  return (
      <Card sx={{ maxWidth: 250, minWidth: 250, display: 'block', margin: 'auto', mt: 3 }}>
          <CardMedia
              sx={{ margin: 'auto', height: 160, width: 180, p: 2, mt: 1 }}
              image={exercise.imageUrl}
              title={exercise.name}
          />
          <CardContent>
              <Typography gutterBottom variant='subtitle1' component="div" color="text.secondary" sx={{ fontWeight: 'bold', fontSize: '18px' }}>
                  {exercise.name}
              </Typography>
              <Typography variant="body2" color="text.primary">
                  {exercise.muscleGroup}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
                  {exercise.description}
              </Typography>
          </CardContent>
          <CardActions sx={{ display: 'flex', justifyContent: 'space-between'}}>
              <Button size="small" onClick={handleOpenDialog}>Add to Routine</Button>
              <Button size="small">See More</Button>
          </CardActions>
          <AddToRoutineDialog
              open={openDialog}
              onClose={handleCloseDialog}
              exerciseName={exercise.name}
          />
      </Card>
  );

}

export default ExerciseCard