import React from 'react'

function ErrorPage() {
  return (
       <div style={{textAlign:'center'}}>
            <h3 style={{textAlign:'center'}}>This page could not be found</h3>
            <img style={{height:550,width:550,flex:1,alignSelf:'center',borderWidth:1,borderRadius:750}} src="https://i.giphy.com/media/WuXNMwPgAAdZ3Oeclz/giphy.webp" alt='Error Page' />
            <div id="info">
            </div>
        </div >
  )
}

export default ErrorPage