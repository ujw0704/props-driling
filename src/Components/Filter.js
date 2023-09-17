import React from 'react'

function Filter(props) {
    let filterData = props.filterData
  return (
    <div>
    {
        filterData.map((data)=>{
           return <button>
                {data.tittle}
            </button>

        })
    }
    </div>
  )
}

export default Filter
