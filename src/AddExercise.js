import React, { useState, useContext } from 'react';
import axios from 'axios';
import { WorkoutContext } from './WorkoutContext';

const AddExercise = () => {
    const [exercise, setExercise] = useState({ name: '', sets: 0, rep_range: '' });
    const { fetchExercises } = useContext(WorkoutContext);

    const handleSubmit = async (event) => {
        event.preventDefault();
        await axios.post('http://localhost:8080/api/exercises/', exercise);
        fetchExercises();
    };

    const handleChange = (event) => {
        setExercise({ ...exercise, [event.target.name]: event.target.value });
    };

    return (
        <div>
            <h2>Add Exercise</h2>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" name="name" onChange={handleChange} />

                <label>Sets</label>
                <input type="number" name="sets" onChange={handleChange} />

                <label>Rep Range</label>
                <input type="text" name="rep_range" onChange={handleChange} />

                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default AddExercise;


