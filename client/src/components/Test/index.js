import React from 'react'

function test() {
    return (
        <div style={{
            height: '1000px',
            width: '100%',
            backgroundColor: 'black'
        }}>
            <div style={{ 
                height: '250px', 
                width: '100%', 
                backgroundColor: 'black',
                color: 'white',
                zIndex: 1
                }}>
                test 1
            </div>
            <div style={{ 
                height: '250px', 
                width: '100%', 
                backgroundColor: 'grey',
                position: 'relative',
                zIndex: -1
                }}>
                test 2
            </div>
        </div>
    )
}

export default test