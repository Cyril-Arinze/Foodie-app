import React from 'react';
import Button from '../../UI/Button';
import Inputs from '../../UI/Inputs';

const SearchForm = () => {

    return (<form>
        <Inputs input={{
            id: "Search food",
            type: "text",
            minLength: 3,
            placeholder: "Search by food name"
        }} />
        <Button input={{
            type: "submit",
        }}>Search</Button>
        <i className='bi bi-search'></i>
    </form>);
};

export default SearchForm;