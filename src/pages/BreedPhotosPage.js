//1. Pegar o nome da raça pelo parametro da url
//2. Fazer requisição para API para buscar as imagens da raça
//3. Armazenar o retorno da API no estado
//4. Fazer um map no estado para exibir as imagens

import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const apiUrl = 'https://dog.ceo/api/breed'

const BreedPhotosPage = () => {
    let { breedName } = useParams()
    const [photos, setPhotos] = useState([])

    useEffect(() => {
        axios.get(`${apiUrl}/${breedName}/images`)
            .then(response => {
                setPhotos(response.data.message)
            })
            .catch(err => console.log(err))
    }, [breedName])

    return (
        <div className="BreedPhotosPage">
            <h1>Breed Photos</h1>
            {
                photos.map((photo, index) => {
                    return (
                        <div key={index} className="photo">
                            <img src={photo} alt="foto de cachorro" />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default BreedPhotosPage