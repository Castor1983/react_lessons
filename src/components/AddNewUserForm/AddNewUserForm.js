import styles from './AddNewUserForm.module.css'
import {useForm} from "react-hook-form";

const AddNewUserForm = () => {
    const {register, handleSubmit, reset} = useForm()

    const addNewUser = (newUser) => {
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            body: JSON.stringify(newUser),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
        reset()

    }

    return (
        <form className={styles.Userform} onSubmit={handleSubmit(addNewUser)}>
            <h1>Registration form</h1>
            <label>
                Name:
                <br/>
                <input type="text" {...register('name')}/>
            </label>
            <label>
                UserName:
                <br/>
                <input type="text" {...register('username')}/>
            </label>
            <label>
                Email:
                <br/>
                <input type="text" {...register('enail')}/>
            </label>
            <label>
                Address:
                <br/>
                street:
                <br/>
                <input type="text" {...register('address.street')}/>
                <br/>
                suite:<br/>
                <input type="text" {...register('address.suite')}/>
                <br/>
                city:<br/>
                <input type="text" {...register('address.city')}/>
                <br/>
                zipcode:<br/>
                <input type="text" {...register('address.zipcode')}/>

            </label>
            <label>
                Geo:
                <br/>
                lat:
                <input type="text" {...register('geo.lat')}/>
                lng:
                <input type="text" {...register('geo.lng')}/>
            </label>
            <label>
                Phone:
                <br/>
                <input type="text" {...register('phone')}/>
            </label><label>
            Website:
            <br/>
            <input type="text" {...register('website')}/>
        </label>
            <label>
                Company:
                <br/>
                name:
                <br/>
                <input type="text" {...register('company.name')}/>
                <br/>
                CatchPharse:
                <br/>
                <input type="text" {...register('company.catchPharse')}/>
                <br/>
                bs:
                <br/>
                <input type="text" {...register('company.bs')}/>
            </label>

            <button type='submit'>Add New User</button>
        </form>
    )
}

export {AddNewUserForm};