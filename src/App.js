import React from 'react';
import ExercisesList from './ExercisesList';
import AddExercise from './AddExercise';
import TrainingSessionList from './TrainingSessionList';
import AddTrainingSession from './AddTrainingSession';
import { WorkoutProvider } from './WorkoutContext';
import CompletionPercentage from "./CompletionPercentage";

function App() {
    return (
        <WorkoutProvider>
            <div className="App">
                <ExercisesList />
                <AddExercise />
                <TrainingSessionList />
                <CompletionPercentage/>
                <AddTrainingSession />
            </div>
        </WorkoutProvider>
    );
}

export default App;
