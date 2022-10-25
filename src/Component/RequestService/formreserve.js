import React from 'react'
import { useForm } from 'react-hook-form'
import { 
    FormControl,
    FormLabel,
    Input,
    FormHelperText,
    VStack,
    Center,
    Button,
    Select,
    Text,
    InputGroup,
    InputLeftAddon,
    Box,
} from '@chakra-ui/react'

export const FormReserve = () => {
    const {register, handleSubmit, reset, formState:{errors}}= useForm()

    const onSubmit=(data)=>{
        console.log(data)
        reset()
    }

    return (
    <Center m={8}>
        <VStack>
            <Text backgroundColor='#3b1a5e' roundedTop={4} textColor='#ffff' paddingX={8} paddingTop={2}>Reservar cita</Text>
            <Box marginTop={0} w='100%' bg='#ffff' maxW='sm' borderWidth='1px' borderRadius='lg' borderColor='#3b1a5e' boxShadow='2xl'>
                <div className="max-w-[280px] mt-5 text-center mx-auto">
                    <p className="text-sm px-2">Reserve su cita, le llegará un sms de confirmación. Gracias.</p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="m-4">
                    <FormControl p={2}>
                        <Input type='text' placeholder='Nombre y Apellidos' size='md' {...register('name', { required:true })} />
                        {errors.name?.type==='required' && <Text paddingTop={2} fontSize={12}  color='red.700'>Introduzca el nombre por favor</Text> }
                        <FormHelperText fontSize={10}>Debe escribir su nombre completo</FormHelperText>
                    </FormControl>
                    <FormControl p={2}>
                        <InputGroup>
                            <InputLeftAddon children='+34' />
                            <Input type='tel' placeholder='Teléfono' name='telefono' size='md' {...register('telefono', 
                            {
                                required:{
                                    value:true,
                                    message:'El campo es requerido'
                                }, 
                                pattern:{
                                    value:[0-9],
                                    message:'Introduzca el numero de telefono correctamente'
                                    }
                            })} />
                            {errors.telefono?.type === 'required' && <span>{errors.telefono?.message}</span>}
                            {errors.telefono?.type === 'pattern' && <span>{errors.telefono?.message}</span>}
                        </InputGroup>
                    <FormHelperText fontSize={10}>Debe escribir su numero de telefono</FormHelperText>
                    </FormControl>
                    <FormControl p={2}>
                        <Input type='text' placeholder='Fecha' size='md' {...register('fecha', { required:true })} />
                        {errors.required && <span>Introduzca una fecha por favor</span> }
                        <FormHelperText fontSize={10}>Debe seleccionar la fecha</FormHelperText>
                    </FormControl>
                    <FormControl p={2}>
                        <Input type='text' placeholder='Hora' size='md' {...register('hora', { required:true })} />
                        <FormHelperText fontSize={10}>Debe seleccionar la hora</FormHelperText>
                        {errors.required && <span>Introduzca una hora</span> }
                    </FormControl>
                    <FormControl p={2}>
                        <FormLabel>Servicios</FormLabel>
                        <Select placeholder='Selecciona la opcion' {...register('servicio', { required:true })}>
                            <option value="relajante">Masaje Relajante</option>
                            <option value="tonificante">Masaje Tonificante</option>
                            <option value="deportivo">Quiromasaje Deportivo</option>
                        </Select>
                        {errors.required && <span>Seleccione un servicio por favor</span> }
                    </FormControl>
                    <Center>
                        <Button marginTop={4} bg='#3b1a5e' textColor='#ffff' opacity='75%' type="submit">Reservar</Button>
                    </Center>
                </form>
            </Box>
        </VStack> 
    </Center>   
)
}
