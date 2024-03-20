import React, { ImgHTMLAttributes } from "react";
import styles from './Avatar.module.css'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    hasBorder?: boolean; //com interrogação a propriedade fica opcional 
}

export function Avatar({ hasBorder = true, ...props }: AvatarProps) {


    return (
        <img
            className={hasBorder ? styles.avatarWithBorder : styles.avatar}
            {...props}
        />
    )
}