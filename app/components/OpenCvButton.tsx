"use client"

import React from 'react'

function OpenCvButton() {

    const openCv = () => {
        const CV = '/CV.pdf'
        window.open(CV, '_blank');
    
      }

    return (
        <button onClick={openCv} className="text-ivory text-lg">View CV</button>
    )
}

export default OpenCvButton
