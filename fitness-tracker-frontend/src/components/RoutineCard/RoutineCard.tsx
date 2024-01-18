import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

import { Routine } from '../../utils/types'

type Props = {
    routine: Routine
}

const RoutineCard = ({ routine }: Props) => {
    const displayedExercises = routine.exercises?.map((exercise) => exercise.exerciseName).join(', ');

    return (
        <Card sx={{ minWidth: 275, minHeight: 140, padding: 2, position: 'relative' }}>
          <IconButton sx={{ position: 'absolute', top: 0, right: 0 }}>
            <MoreVertIcon />
          </IconButton>
          <CardContent>
            <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
              {routine.name}
            </Typography>
            <Typography variant="body2" sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {routine.exercises?.length === 0 ? 'No exercises added yet' : displayedExercises}
            </Typography>
          </CardContent>
          <CardActions>
            <Button 
              size="medium" 
              variant="contained" 
              sx={{ 
                margin: 'auto', 
                backgroundColor: '#72A1BF',
                '&:hover': {
                  color: 'white'
                }
              }}
              component={Link}
              to={`/routines/${routine.id}`}
              >
              Open Details
            </Button>
          </CardActions>
        </Card>
      );
};

export default RoutineCard