import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { TextField } from '../../../components/TextField'
import styles from './SigninStyle.module.scss'
import { IUser } from '../../../types/user.interface'

export const Signin = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            taiKhoan: '',
            matKhau: '',
        },
        mode: 'onTouched',
    })

    const handleSubmitForm = (values: Pick<IUser, 'taiKhoan' | 'matKhau'>) => {
        console.log(values)
    }

    return (
        <div className={styles.signin}>
            <div className={styles.signinLeft}>
                <div className={styles.title}>
                    <h4>Sign in</h4>
                </div>
                <form onSubmit={handleSubmit(handleSubmitForm)}>
                    <TextField
                        placeholder="Username"
                        {...register('taiKhoan', {
                            required: {
                                value: true,
                                message: 'This field is required',
                            },
                        })}
                        error={errors.taiKhoan && errors.taiKhoan.message}
                    />
                    <TextField
                        placeholder="Password"
                        {...register('matKhau', {
                            required: {
                                value: true,
                                message: 'This field is required',
                            },
                        })}
                        error={errors.matKhau && errors.matKhau.message}
                    />
                    <div className={styles.lookingFor}>
                        <p>
                            Forgot your password?
                            <Link to="/signup">
                                <span> Or Resigter</span>
                            </Link>
                        </p>
                    </div>
                    <button type="submit">sign in</button>
                </form>
            </div>
            <div className={styles.signinRight}>
                <div>
                    <div className={styles.title}>
                        <h4>Hello, Friend!</h4>
                    </div>
                    <p className={styles.text}>
                        Enter your personal details and start journey with us
                    </p>
                    <Link to="/signup">
                        <button className={styles.btnNavigate}>sign Up</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
