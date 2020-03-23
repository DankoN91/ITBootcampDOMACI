import axios from 'axios';

const getEmployeesData = async () => {
    let response = await axios.get('https://dummy.restapiexample.com/api/v1/employees');
    return response.data.data;
}

const postEmployeesData = async (ime, plata, godine) => {
    let response = await axios.post('http://dummy.restapiexample.com/api/v1/create', {
        name: ime,
        salary: plata,
        age: godine
    });
    alert('Uspesno ubacen korisnik');
    return response.data.data;
}

export { getEmployeesData, postEmployeesData };