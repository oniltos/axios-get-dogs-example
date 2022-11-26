/**
 * 1. Fazer requisição para a api (com axios)
 * 2. Popular o estado com o resultado da requisição
 * 3. Mapear o estado e renderizar uma tabela
 */

import { useEffect, useState } from 'react'
import axios from 'axios'
import './AllBreedsPage.css'
import { Link } from 'react-router-dom'

const apiUrl = 'https://dog.ceo/api/breeds/list/all'

const AllBreedsPage = () => {
    const [breeds, setBreeds] = useState([])

    useEffect(() => {
        axios.get(apiUrl).then(response => { 
            setBreeds(Object.keys(response.data.message))
        }).catch(err => console.log(err))
    }, [])

    return (
        <div className="AllBreedsPage">
            <h1>All Breeds</h1>
            <table>
                <thead>
                    <tr>
                        <th>Breed</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    { 
                        breeds.map((breed, index) => {
                            return (
                                <tr key={index}>
                                    <td>{ breed }</td>
                                    <td><Link to={`/breeds/${breed}`}>Ver Fotos</Link></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default AllBreedsPage