import React from 'react'

export const Nombre = () => {
  return ( <h1>hola desde funciom</h1> );
}



const newMessage = {
  message: 'Hola mundo',
  title: 'Alberth'
};

export const HelloApp = () => {
  return (
    <>
        <code> {JSON.stringify(newMessage)}</code>
        <h1>{Nombre()}</h1>
    <p>holaaaa</p>
    </>
  )
}
