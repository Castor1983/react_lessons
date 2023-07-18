import styles from '../Component.module.css'
import {useForm} from "react-hook-form";
import {CarServices} from "../../services/ApiServices/ApiServices";

const CreateCarForm = ({setOnCreate, onUpdate, onCarValues}) => {
    const {id, brand, price, year} = onCarValues;
    const {
        register,
        handleSubmit,
        setValue,
        reset
    } = useForm();
    const setFormValues = () => {
        setValue('brand', brand)
        setValue('price', price)
        setValue('year', year)
    }

    const create = (data) => {
        CarServices.addCar(data, setOnCreate)
        reset()
    }
    const patch = (data) => {
        CarServices.updateCar(id, data, setOnCreate)
        reset()
    }

    return (
        <div className={styles.wrapper}>

            {onUpdate ?
                <form className={styles.form} onSubmit={handleSubmit(create)}>
                    <h1>Create new car</h1>
                    <label>
                        Car model:
                        <br/>
                        <input type="text" placeholder={'brand'} {...register('brand')} />
                    </label>
                    <label>
                        Price:
                        <br/>
                        <input type="text" placeholder={'0-1000000'} {...register('price')} />
                    </label>
                    <label>
                        Year:
                        <br/>
                        <input type="text" placeholder={'1990-2023'} {...register('year')} />
                    </label>

                    <button className={styles.button} type='submit'>Create New Car</button>

                </form>
                :
                <form className={styles.form} onSubmit={handleSubmit(patch)}>
                    <h1>Update car</h1>
                    <label>
                        Car model:
                        <br/>
                        <input type="text"  {...register('brand')} />
                    </label>
                    <label>
                        Price:
                        <br/>
                        <input type="text"  {...register('price')} />
                    </label>
                    <label>
                        Year:
                        <br/>
                        <input type="text"  {...register('year')} />
                    </label>

                    <button className={styles.button} type='submit'>Update Car</button>
                </form>

            }
            <button className={styles.set} onClick={() => setFormValues()}>Set Car</button>
        </div>


    )
};

export {CreateCarForm};