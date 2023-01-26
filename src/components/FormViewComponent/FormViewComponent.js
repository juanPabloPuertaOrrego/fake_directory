import React from "react";


export const FormViewComponent = (props) =>{
    const {value, handleOnChange, handleOnSave, handleOnCancel }=props
    return(

        <form>
            <div className="mb-2">
                <input type="text" className="form-control" value={value} onChange={handleOnChange}/>
                <div className="form-text"></div>
            </div>
            <button type="submit" className="btn btn-success" onClick={handleOnSave}>Save</button>
            <button type="submit" className="btn btn-danger" onClick={handleOnCancel}>Cancel</button>
        </form>
    )
}