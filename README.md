# Este proyecto fue desarrollado con Reactjs y desplegado en Heroku

Esta microapp se creo con `Typescript` y contiene la librerias de `Axios`, `Material-UI`, `react-router-dom`

## Disposicion de Componentes es la siguiente:

Desde [App] se llama a [Home] y luego [Step1], [Step2], [Step3]

Tambien contiene las Funciones de Apoyo dentro de la carpeta [/utils] que contiene 
la funcion post(Axios) y validateInput para permitir solo numeros en los input

### `Componente Home`

    En el componente Home se iba a utilizar react-router-dom para la navegacion entre los componentes Step#
    pero se descarto ya que la navegacion solo es lineal y se utilizo la funcion `currentStep` que usando la 
    posicion o pasos se renderiza el componente correcto.

    En este componente tambien se inicializa el state formValues, activeStep y error que se heredará a los demas componentes, tambien se definio la funcion `handleInputChange`, `submitForm`, `handleNext` y `handleBack`

    `handleInputChange` toma values de los diferentes textfield y aplica la fn validateInput regexp a los input numericos
    
    `submitForm` valida que los valores de formValues no esten vacios para llamar a la funcion personalizada post hacia a la API proveida para informacion y se agregaron nuevos valores para completar el flujo y luego handleNext para combiar de Step caso contrario se marca errores.

### `Componente Step1`

    En este componente se hizo la maquetación inicial de los recursos de Material-UI para desktop y se reciben los props enviados de Home y se realizan las validaciones para los inputs

### `Componente Step2`

    En este componente se hizo la maquetación del segundo Step utilizando tambien los recursos de Material-UI como por ejemplo Stepper ademas de pintar los valores del state formValues 

### `Componente Step3`


    Este componente no se realizó

## Pendientes

    - Vista responsive para moviles
    - Terminar Step2
    - Realizar maquetacion de Step3
    - Implementacion de Sass
