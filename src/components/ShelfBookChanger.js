import React from "react"

const ShelfBookChanger = ({shelf,options})=>{
    return (
        <div className="book-shelf-changer">
            <select value={shelf} onChange={() => {}}>
                <option value="move" disabled>Move to...</option>
                {
                    options.map(option => {
                        return <option key={option.id} value={option.id}>{option.name}</option>
                    })
                }
                <option value="none">None</option>
            </select>
        </div>
    )
}

export default ShelfBookChanger