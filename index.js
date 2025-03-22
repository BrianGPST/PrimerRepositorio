import React from 'react'

function Home(){
    const ListItems = [1,2,3,4]

    const addItem = () => {
        const variableA = 1;
        const variableB = 2;
        const variableC = 3;

        return variableA*3 + variableC*variableB
    }

    return(
        <><div>Home</div>
        <P>Hola mundo</P>
        <button onclick={addItem}/>        
        </>
    )

}