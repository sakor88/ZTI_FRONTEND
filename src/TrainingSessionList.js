import React, { useContext, useEffect } from 'react';
import { WorkoutContext } from './WorkoutContext';
import axios from 'axios';

const TrainingSessionList = () => {
    const { trainingSessions, fetchTrainingSessions } = useContext(WorkoutContext);

    useEffect(() => {
        fetchTrainingSessions();
    }, [fetchTrainingSessions]);

    const handleTrainingCompletion = async (trainingId) => {
        try {
            await axios.post(`https://zti-backend-cl96.onrender.com/api/trainingsessions/${trainingId}/complete`);
            fetchTrainingSessions();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <h2>Training Sessions</h2>
            {trainingSessions.map((trainingSession) => (
                <div key={trainingSession.training_id}>
                    <h3>{trainingSession.name}</h3>
                    <p>Date: {new Date(trainingSession.date).toLocaleDateString()}</p>
                    <p>Status: {trainingSession.completed ? 'Completed' : 'Incomplete'}</p>
                    <h4>Exercises</h4>
                    <table>
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Sets</th>
                            <th>Rep Range</th>
                        </tr>
                        </thead>
                        <tbody>
                        {trainingSession.exercises.map((exercise) => (
                            <tr key={exercise.exercise_id}>
                                <td>{exercise.name}</td>
                                <td>{exercise.sets}</td>
                                <td>{exercise.rep_range}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    {!trainingSession.completed && (
                        <button onClick={() => handleTrainingCompletion(trainingSession.training_id)}>
                            Confirm Completion
                        </button>
                    )}
                </div>
            ))}


        </div>
    );
};

export default TrainingSessionList;
