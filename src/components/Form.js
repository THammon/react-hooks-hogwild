import React, {useState} from "react";

function Form(addNewHogObj){
    const [name, setName] = useState("")
    const [specialty, setSpecialty] = useState("")
    const [greased, setGreased] = useState("")
    const [weight, setWeight] = useState(0)
    const [medal, setMedal] = useState("")
    const [image, setImage] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        let newObj = {
            name: name,
            specialty: specialty,
            greased: greased === "true" ? true : false ,
            weight: parseInt(weight),
            "highest medal achieved": medal,
            image: image
        }
        addNewHogObj(newObj)
    }

    
    return(
        <div>
            <h1>My Form!</h1>
            <form onSubmit={handleSubmit}>
                <input placeholder="name..." type="text" name="name"  onChange={(e) => setName(e.target.value)} value={name}/>
                <input placeholder="specialty..." type="text" name="specialty" onChange={(e) => setSpecialty(e.target.value)} value={specialty}/>
                <select name="greased" onChange={(e) => setGreased(e.target.value)}>
                    <option value="false">not greased</option>
                    <option value="true">greased</option>
                </select>
                <input placeholder="weight..." type="number"name="weight" onChange={(e) => setWeight(e.target.value)} value={weight}/>
                <select name="medal" onChange={(e) => setMedal(e.target.value)}>
                    <option value="">select medal</option>
                    <option value="bronze">Bronze</option>
                    <option value="silver">Silver</option>
                    <option value="gold">Gold</option>
                </select>
                <input placeholder="image..."  type="text" name="image" onChange={(e) => setImage(e.target.value)} value={image}/>
                <input type="submit" value="new hog"/>
            </form>
        </div>
    )
}
export default Form;