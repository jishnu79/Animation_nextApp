import React from 'react'

function TextRotet() {
    return (
        <div className="grid items-center justify-center">
            <svg id="rotatingText" viewBox="0 0 200 200" width="200" height="200">
                <defs>
                    <path id="circle" d="M 100, 100
            m -75, 0
            a 75, 75 0 1, 0 150, 0
            a 75, 75 0 1, 0 -150, 0
            ">
                    </path>
                </defs>
                <text width="400">
                    <textPath alignment-baseline="top" href="#circle" className="text">
                        ibero bibendum, in eleifend mi interdum. Aenean id rhoncus nibh. Cras blandit mi lorem, id efficitur elit sodales nec. Interdum et malesuada fam
                    </textPath>
                </text>
            </svg>
        </div>
    )
}

export default TextRotet