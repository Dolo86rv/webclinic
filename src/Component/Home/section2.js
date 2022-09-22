import React from 'react'
import { Box } from '@chakra-ui/react'


export const Galeria = () => {
  return (
    <div className="max-w-7xl mx-auto my-20">
      <p className="text-center text-c-malva text-xl pb-12 sm:pb-16 font-medium sm:text-4xl">Nuestros Servicios</p>
      <p className="texto2 text-c-rose font-semibold text-xl text-center">Regalarse una sesión de masaje es cuidarse y amarse.</p>  
      <div className="mx-auto grid grid-cols-3">
        <Box bg='tomato' w='100%' p={4} color='white'>
          Ejemplo de caja
        </Box>
        <div>

        </div>
        <div>

        </div>
      </div>

    </div>
  )
}
