import React, { useEffect, useState } from 'react'

const Programs: React.FC<{ onSelect: (suggestion: { id: number; ask: string; response: string; }) => void }> = ({ onSelect }) => {

    const [carreras, setCarreras] = useState<{id:number, ask: string, response:string}[]>([]);
    // const carreras = [
    //     {
    //         "id": 1,
    //         "ask": "Ingeniería de Sistemas",
    //         "response": "La ingeniería de sistemas es una disciplina que se encarga de diseñar, desarrollar, implementar y mantener sistemas informáticos. Los ingenieros de sistemas"
    //     },
    //     {
    //         "id": 2,
    //         "ask": "Ingeniería Informática",
    //         "response": "La ingeniería informática es una disciplina que se encarga de diseñar, desarrollar, implementar y mantener sistemas informáticos. Los ingenieros informáticos"
    //     },
    //     {
    //         "id": 3,
    //         "ask": "Medicina",
    //         "response": "La medicina es una disciplina que se encarga de estudiar, diagnosticar y tratar enfermedades. Los médicos"
    //     },
    //     {
    //         "id": 4,
    //         "ask": "Derecho",
    //         "response": "El derecho es una disciplina que se encarga de estudiar, interpretar y aplicar las leyes. Los abogados"
    //     },
    //     {
    //         "id": 5,
    //         "ask": "Administración de Empresas",
    //         "response": "La administración de empresas es una disciplina que se encarga de gestionar y dirigir organizaciones. Los administradores"
    //     },
    //     {
    //         "id": 6,
    //         "ask": "Psicología",
    //         "response": "La psicología es una disciplina que se encarga de estudiar el comportamiento humano. Los psicólogos"
    //     }
    // ];

    const getData = async () => {
        console.log('Fetching data...')
        const response = await fetch('http://127.0.0.1:8000/programs')
        const data: {id:number, ask: string, response:string}[] = await response.json();
        setCarreras(data);
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className="w-[35%] bg-gray-100 p-20 max-h-[calc(100vh-5.1rem)] overflow-y-auto ">
            <h2 className="text-xl text-center font-bold mb-4">Carreras</h2>
            <ul className="space-y-2">
                {carreras.map((carrera, index) => (
                    <li key={index} className="bg-[#E3287A] text-white p-2 rounded shadow hover:bg-white hover:text-[#E3287A] transition-colors">
                        <button
                            className="w-full text-center"
                            onClick={() => onSelect(carrera)}
                        >{carrera.ask}</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Programs
