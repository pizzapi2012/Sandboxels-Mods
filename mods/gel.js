behaviors.GEL = function(pixel) {
    pixel.sticky = true
    let sticking = false

    // y
    if ( !isEmpty(pixel.x, pixel.y-1) & getPixel(pixel.x, pixel.y-1) != null ) {
        if ( !getPixel(pixel.x, pixel.y-1).sticky ) {
            if (Math.random() < 0.2) {
                if (Math.random() > 0.5) {
                    if (!isEmpty(pixel.x+1, pixel.y-1)) {
                        if (!getPixel(pixel.x+1, pixel.y-1).sticky) {
                            tryMove(pixel, pixel.x+1, pixel.y)
                        }
                    }
                } else {
                    if (!isEmpty(pixel.x-1, pixel.y-1)) {
                        if (!getPixel(pixel.x-1, pixel.y-1).sticky) {
                            tryMove(pixel, pixel.x-1, pixel.y)
                        }
                    }
                }
            }
            return
        }
    }

    // x
    if ( !isEmpty(pixel.x-1, pixel.y) & getPixel(pixel.x-1, pixel.y) != null ) {
        if ( !getPixel(pixel.x-1, pixel.y).sticky ) {
            tryMove(pixel, pixel.x-1, pixel.y+1)
            return
        } else if (getPixel(pixel.x-2, pixel.y) != null) {
            if (!getPixel(pixel.x-2, pixel.y).sticky) {
                sticking = true
                tryMove(pixel, pixel.x-1, pixel.y+1)
            }
        }
    }

    if ( !isEmpty(pixel.x+1, pixel.y) & getPixel(pixel.x+1, pixel.y) != null ) {
        if ( !getPixel(pixel.x+1, pixel.y).sticky ) {
            tryMove(pixel, pixel.x+1, pixel.y+1)
            return
        } else if (getPixel(pixel.x+2, pixel.y) != null) {
            if (!getPixel(pixel.x+2, pixel.y).sticky) {
                sticking = true
                tryMove(pixel, pixel.x+1, pixel.y+1)
            }
        }
    }




    if ( !isEmpty(pixel.x, pixel.y+1) ) {
        if (getPixel(pixel.x, pixel.y+1) != null) {
            if ( !getPixel(pixel.x, pixel.y+1).sticky) {
                sticking = true
            }
        } else {
            sticking = true
        }
    }

    if (!tryMove(pixel, pixel.x, pixel.y+1) & Math.random() > 0.2) {
        if (!tryMove(pixel, pixel.x+1, pixel.y+1)) {
            tryMove(pixel, pixel.x-1, pixel.y+1)
        }
    } else {
        return
    }

    if (Math.random() < 0.2) {
        if (sticking) {return}

        if (Math.random() > 0.5) {
            tryMove(pixel, pixel.x+1, pixel.y)
        } else {
            tryMove(pixel, pixel.x-1, pixel.y)
        }
    }
}

elements.gel = {
    color: "#f7c472",
    behavior: behaviors.GEL,
    category: "liquids",
    state: "liquid",
}