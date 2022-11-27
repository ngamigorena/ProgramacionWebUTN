import React from "react";
import {useForm} from "react-hook-form";
import './contacto.css';


const Contacto = () => {
const {register, handleSubmit, formState:{errors}, watch} = useForm("");
const onSubmit = (data) => {
    console.log(data);
}

    return(

        <>
        
        <form className="formForm" onSubmit={handleSubmit(onSubmit)}>
            <h2 className="tittleForm"> Newsletter </h2>
            <div className="welcomeForm"> Bienvenido {watch('nombre')}</div>
            <div className="eachLineForm">
                <label> Nombre </label>
                <input type="text" {...register('nombre', {required:true, minLength:3})} />
                {errors.nombre?.type === 'required' && <p>Debe indicar un nombre</p>}
            </div>
            <div className="eachLineForm">
                <label> Apellido </label>
                <input type="text" {...register('apellido',{required:true})}/>
                {errors.nombre?.type === 'required' && <p>Debe indicar un apellido</p>}
            </div>
            <div className="eachLineForm">
                <label> Sobrenombre </label>
                <input type="text" {...register('sobrenombre', {minLength:3})} />
                {errors.sobrenombre?.type === 'required' && <p>Debe tener como mínimo 3 caractéres</p>}
            </div>
            <div className="eachLineForm">
                <label> E-mail </label>
                <input type="text" {...register('email',{required:true, pattern: /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i} )} />
                {errors.email?.type === 'pattern' && <p>El formato es incorrecto</p>}
            </div>
            <div className="eachLineForm">
                <label> Género </label>
                <select {...register('sabor')}>
                    <option value="ch"> Hombre</option>
                    <option value="dl"> Mujer</option>
                    <option value="ft"> Otro</option>
                </select>
            </div>
            <div className="eachLineFormBtn">
                <input type="submit" value="Suscribirse" className="btnForm"/>
            </div>
        </form>
        </>

    )
}

export default Contacto;