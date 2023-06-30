import React, { useState, useContext, useEffect } from 'react';
import { WorkoutContext } from './WorkoutContext';

const AddTrainingSession = () => {
    const { exercises, fetchExercises, addTrainingSession } = useContext(WorkoutContext);
    const [trainingSession, setTrainingSession] = useState({ name: '', date: '', exerciseIds: [] });

    useEffect(() => {
        fetchExercises();
    }, [fetchExercises]);

    const handleInputChange = (event) => {
        setTrainingSession({ ...trainingSession, [event.target.name]: event.target.value });
    };

    const handleSelectChange = (event) => {
        let value = Array.from(event.target.selectedOptions, option => option.value);
        setTrainingSession({ ...trainingSession, exercises: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // map exercise IDs to correct format
        const trainingSessionToSend = {
            ...trainingSession,
            exercises: trainingSession.exercises.map(id => ({ exercise_id: parseInt(id) })),
        };

        addTrainingSession(trainingSessionToSend);
    };



    return (
        <div>
            <h2>Add Training Session</h2>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" name="name" onChange={handleInputChange} />

                <label>Date</label>
                <input type="date" name="date" onChange={handleInputChange} />

                <label>Exercises</label>
                <select multiple={true} value={trainingSession.exercises} onChange={handleSelectChange}>
                    {exercises.map((exercise) => (
                        <option key={exercise.exercise_id} value={exercise.exercise_id}>{exercise.name}</option>
                    ))}
                </select>

                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default AddTrainingSession;
