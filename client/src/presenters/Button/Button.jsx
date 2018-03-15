import React from 'react';
import './button.less';

export default (props) => {
    const {
        onClick,
        materialName : iName,
        size,
        fSize,
        bColor,
        tooltipPos,
        tooltipText
    } = props;
    
    const contSize = size ? { width : size, height : size } : {};
    const fontSize = fSize ? { fontSize : fSize } : {};
    const toolPos = tooltipPos ? tooltipPos : 'none';
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
            <div className = {`tooltip ${toolPos}`}>{tooltipText}</div>
        </div>
    )
}
