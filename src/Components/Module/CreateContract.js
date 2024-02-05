import { useState } from "react";

export default function CreateContract() {

    const [inputs, setInputs] = useState({
        rut: '',
        name: '',
        phone: '',
        address: '',
        email: '',
        kindship: '',
        rutDeceased:'',
        nameDeceased:'',
        dateDeceased: '',
        typeBenefit: '',
        amountBenefit: '',
        wakeAddress: '',
        cementery: '',
    });

    const validationRules = {
        rut: {
            required: true,
            regex: /^[0-9]{7,8}-[0-9Kk]$/, // Example regex for a Chilean RUT
        },
        name: {
            required: true,
            minLength: 2,
        },
        phone: {
            required: true,
            regex: /^[0-9]{9}$/, // Example regex for a 9-digit phone number
        },
        address: {
            required: true,
        },
        email: {
            required: false,
            email: true, // You can use a more complex email validation regex here
            // regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        },
        kindship: {
            required: true,
            minLength: 2,
        },
        rutDeceased: {
            required: true,
            regex: /^[0-9]{7,8}-[0-9Kk]$/, // Example regex for a Chilean RUT
        },
        nameDeceased: {
            required: true,
        },
        dateDeceased: {
            required: true,
            regex: /^\d{4}-\d{2}-\d{2}$/,
            date: true, // You can implement date validation logic here
        },
        typeBenefit: {
            required: true,
        },
        amountBenefit: {
            required: false,
            numeric: true, // You can implement numeric validation logic here
        },
        wakeAddress: {
            required: false,
        },
        cementery: {
            required: false,
        },
    };

    const mock = {
        rut: '19.412.216-0',
        name: 'Nombre de prueba',
        phone: '999999999',
        address: 'direccion falsa',
        email: 'correo@email.cl',
        kindship: 'parentezco',
        rutDeceased:'1111111-1',
        nameDeceased:'nombre',
        dateDeceased: '1990-12-12',
        typeBenefit: 'AFP',
        amountBenefit: '999999',
        wakeAddress: 'Direccion falsa',
        cementery: 'Direccion falsa',
    }

    const [errors, setErrors] = useState({
        rut: '',
        name: '',
        phone: '',
        address: '',
        email: '',
        kindship: '',
        rutDeceased:'',
        nameDeceased:'',
        dateDeceased: '',
        typeBenefit: '',
        amountBenefit: '',
        wakeAddress: '',
        cementery: '',
    });

    const formatRut = (rut) => {
        // Remove any existing dots and hyphen
        const cleanRut = rut.replace(/[\.-]/g, '');

        // Split into number and check digit
        const numberPart = cleanRut.slice(0, -1);
        const checkDigit = cleanRut.slice(-1);

        // Add dots to the number part
        const formattedNumberPart = numberPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

        // Combine the formatted number part and check digit
        const formattedRut = `${formattedNumberPart}-${checkDigit}`;

        return formattedRut;
    };

    const handleChange = (event) => {
        const name = event.target.name;
        let value = event.target.value;

        if (name === "rut" || name === "rutDeceased") {
            value = formatRut(event.target.value);
        }
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = validateForm(inputs);
        if (errors) {
            setErrors(errors);
            console.log({ errors });
            return;
        }
<<<<<<<< Updated upstream:src/Components/Module/Contract.js
        // const resp = await window.api.test(mock);
        // console.log({ resp });
========
        const resp = await window.api.contractOperation({ action: "create", payload: inputs });
        console.log({ resp });
>>>>>>>> Stashed changes:src/Components/Module/CreateContract.js
    }

    // Validation function
    const validateForm = (formData) => {
        const errors = {};

        // Iterate over each input field in formData
        for (const fieldName in formData) {
            if (formData.hasOwnProperty(fieldName)) {
                const value = formData[fieldName];
                const rules = validationRules[fieldName];

                // Check each validation rule for the current field
                if (rules) {
                    if (rules.required && !value.trim()) {
                        errors[fieldName] = 'Este campo es obligatorio';
                    }

                    if (rules.minLength && value.trim().length < rules.minLength) {
                        errors[fieldName] = `Debe ingresar al menos ${rules.minLength} caracteres`;
                    }

                    if (rules.regex && !rules.regex.test(value.trim())) {
                        errors[fieldName] = 'Formano no válido';
                    }

                    if (rules.numeric && !isNaN(formData[fieldName])) {
                        errors[fieldName] = 'Formato no válido, requiere numérico';
                    }
                }
            }
        }
        return errors;
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="p-3 m-3">
                    <h1 className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Cliente</h1>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="rut">
                                RUT
                            </label>
                            <input onChange={handleChange}
                                className={`${errors.rut ? 'border-red-500' : 'border-gray-500'} appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                                id="rut"
                                name="rut"
                                type="text"
                                value={inputs.rut}
                                placeholder="RUT" />
                            <p className="text-red-500 text-xs italic">{errors.rut ? errors.rut : ""}</p>
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                Nombre
                            </label>
                            <input onChange={handleChange} className={`${errors.name ? 'border-red-500' : 'border-gray-500'} appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                                id="name"
                                name="name"
                                type="text"
                                value={inputs.name}
                                placeholder="Nombre" />
                            <p className="text-red-500 text-xs italic">{errors.name ? errors.name : ""}</p>
                        </div>
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                Telefono
                            </label>
                            <input onChange={handleChange} className={`${errors.phone ? 'border-red-500' : 'border-gray-500'} appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                                id="phone"
                                name="phone"
                                type="text"
                                value={inputs.phone}
                                placeholder="Jane" />
                            <p className="text-red-500 text-xs italic">{errors.phone ? errors.phone : ""}</p>
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                Direccion
                            </label>
                            <input onChange={handleChange} className={`${errors.address ? 'border-red-500' : 'border-gray-500'} appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                                id="address"
                                name="address"
                                type="text"
                                value={inputs.address}
                                placeholder="Direccion" />
                            <p className="text-red-500 text-xs italic">{errors.address ? errors.address : ""}</p>
                        </div>
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                Email
                            </label>
                            <input onChange={handleChange} className={`${errors.email ? 'border-red-500' : 'border-gray-500'} appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                                id="email"
                                name="email"
                                type="text"
                                value={inputs.email}
                                placeholder="Correo electronico" />
                            <p className="text-red-500 text-xs italic">{errors.email ? errors.email : ""}</p>
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                Parentesco
                            </label>
                            <input onChange={handleChange} className={`${errors.kindship ? 'border-red-500' : 'border-gray-500'} appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                                id="kindship"
                                name="kindship"
                                type="text"
                                value={inputs.kindship}
                                placeholder="Parentesco" />
                            <p className="text-red-500 text-xs italic">{errors.kindship ? errors.kindship : ""}</p>
                        </div>
                    </div>
                </div>
                <div className="p-3 m-3">
                    <h1 className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Fallecido</h1>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                RUT
                            </label>
                            <input onChange={handleChange} className={`${errors.rutDeceased ? 'border-red-500' : 'border-gray-500'} appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                                id="rutDeceased"
                                name="rutDeceased"
                                type="text"
                                value={inputs.rutDeceased}
                                placeholder="Rut" />
                            <p className="text-red-500 text-xs italic">{errors.rutDeceased ? errors.rutDeceased : ""}</p>
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                Nombre
                            </label>
                            <input onChange={handleChange} className={`${errors.nameDeceased ? 'border-red-500' : 'border-gray-500'} appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                                id="nameDeceased"
                                name="nameDeceased"
                                type="text"
                                value={inputs.nameDeceased}
                                placeholder="Nombre" />
                            <p className="text-red-500 text-xs italic">{errors.nameDeceased ? errors.nameDeceased : ""}</p>

                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                Fecha fallecimiento
                            </label>
                            <input onChange={handleChange} className={`${errors.dateDeceased ? 'border-red-500' : 'border-gray-500'} appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                                id="dateDeceased"
                                name="dateDeceased"
                                value={inputs.dateDeceased}
                                type="date" />
                            <p className="text-red-500 text-xs italic">{errors.dateDeceased ? errors.dateDeceased : ""}</p>

                        </div>
                        <div className="w-full md:w-1/4 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                Tipo Beneficio
                            </label>
                            <input onChange={handleChange} className={`${errors.typeBenefit ? 'border-red-500' : 'border-gray-500'} appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                                id="typeBenefit"
                                name="typeBenefit"
                                value={inputs.typeBenefit}
                                type="text" />
                            <p className="text-red-500 text-xs italic">{errors.typeBenefit ? errors.typeBenefit : ""}</p>

                        </div>

                        <div className="w-full md:w-1/4 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                Monto Beneficio
                            </label>
                            <input onChange={handleChange} className={`${errors.amountBenefit ? 'border-red-500' : 'border-gray-500'} appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                                id="amountBenefit"
                                name="amountBenefit"
                                value={inputs.amountBenefit}
                                type="number" />
                            <p className="text-red-500 text-xs italic">{errors.amountBenefit ? errors.amountBenefit : ""}</p>

                        </div>

                    </div>
                </div>
                <div className="p-3 m-3">
                    <h1 className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Informacion Servicio</h1>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                Velatorio
                            </label>
                            <input onChange={handleChange} className={`${errors.wakeAddress ? 'border-red-500' : 'border-gray-500'} appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                                id="wakeAddress"
                                name="wakeAddress"
                                value={inputs.wakeAddress}
                                type="type" />
                            <p className="text-red-500 text-xs italic">{errors.wakeAddress ? errors.wakeAddress : ""}</p>
                        </div>

                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                Cementerio
                            </label>
                            <input onChange={handleChange} className={`${errors.cementery ? 'border-red-500' : 'border-gray-500'} appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                                id="cementery"
                                name="cementery"
                                value={inputs.cementery}
                                type="type" />
                            <p className="text-red-500 text-xs italic">{errors.cementery ? errors.cementery : ""}</p>
                        </div>

                    </div>
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Button
                </button>
            </form>
        </>
    )
}