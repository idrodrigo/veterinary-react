import Paciente from './Paciente'

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {
  return (
    <div className='md:w-1/2 lg:w-3/5'>
      {pacientes && pacientes.length
        ? (
          <>
            <h2 className='text-black font-black text-3xl text-center mb-5 dark:text-sky-400'>List of patients</h2>
            <p className='text-lg mb-5 text-center text-black dark:text-gray-200'>
              Manage your {' '}
              <span
                className='text-indigo-600 font-bold dark:text-gray-200'
              >
                patients and appointments
              </span>
            </p>
            <div className='md:h-screen md:overflow-y-scroll'>
              {/* llenamos los datos al componente Paciente */}
              {pacientes.map(paciente => (
                <Paciente
                  key={paciente.id}
                  paciente={paciente}
                  setPaciente={setPaciente}
                  eliminarPaciente={eliminarPaciente}
                />
              ))}
            </div>
          </>
          )

        : (
          <>
            <h2
              className='text-black font-black text-3xl text-center mb-5 dark:text-sky-400'
            >
              There are no patients
            </h2>
            <p
              className='text-black text-lg mb-5 text-center dark:text-gray-200'
            >
              Add patients to this {' '}
              <span className='text-indigo-600 font-bold dark:text-gray-200'>
                list
              </span>
            </p>
          </>
          )}

    </div>
  )
}

export default ListadoPacientes
