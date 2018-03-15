import React from 'react';
import './button.less';

export default (props) => {
    const { children, onClick, materialName : iName, size, fSize, bColor } = props;
    
    const contSize = size ? { width : size, height : size } : {};
    const fontSize = fSize ? { fontSize : fSize } : {};
    return (
        <div
            className = 'custom-button'
            role = 'button'
            onClick = {onClick}
            style = {contSize}
        >
            <div className={`custom-button__item ${bColor}`} style = {contSize}>
                <i className = "material-icons" style = {fontSize}>{iName}</i>
            </div>
        </div>
    )
}
