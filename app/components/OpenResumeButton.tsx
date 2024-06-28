"use client"

import React from 'react'

function OpenResumeButton() {

    const openCv = () => {
        const CV = '/CV.pdf'
        window.open(CV, '_blank');
    
      }

    return (
        <button onClick={openCv} className="text-ivory text-lg">View Resume</button>
    )
}

export default OpenResumeButton;
