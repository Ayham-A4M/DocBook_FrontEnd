import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { Controller } from 'react-hook-form';
import FormErrorMessage from'../../../components/FormErrorMessage'
import { memo } from "react";

const InfoCard = ({ name, icon, errors,infoName, isEditing, value,isNumber = false,register,control }) => {

    return (
        <div className="bg-card border border-blue-100 p-4 rounded-md shadow-sm">
            <div className="flex items-center gap-2 mb-2">
                {
                    icon
                }
                <p className="text-sm text-gray-700 dark:text-popover-foreground font-medium">{infoName}</p>
                {
                    errors[name]&&
                    <FormErrorMessage message={errors[name].message}/>
                }
            </div>
            {isEditing ?

                name == "phoneNumber" ?
                    (
                        <Controller
                            name="phoneNumber"
                            control={control}
                            render={({ field }) => (

                                <PhoneInput
                                    inputStyle={{ color: 'black' }}
                                    country="sy"
                                    {...field}

                                />

                            )}

                        />
                    )
                    :
                    !isNumber ?
                        (
                            <input
                                type="text"
                                name={name}

                                className="w-full bg-transparent  border-b border-white  text-gray-700 dark:text-popover-foreground text-sm focus:outline-none"
                                {...register(name)}
                            />
                        )
                        :

                        (
                            <input
                                type="number"
                                name={name}

                                className="w-full bg-transparent  border-b border-white  text-gray-700 dark:text-popover-foreground text-sm focus:outline-none"
                                {...register(name)}
                            />
                        )

                : (
                    <p className="text-sm text-gray-600 dark:text-popover-foreground">{value}</p>
                )}
        </div>
    )
}

export default memo(InfoCard)